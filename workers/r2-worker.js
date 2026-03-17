/**
 * Cloudflare Workers script để serve content từ R2 bucket fresh-and-young
 * Supports Range requests for video seeking
 *
 * Deploy:
 * 1. cd workers
 * 2. npx wrangler deploy
 */

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Range",
  "Access-Control-Expose-Headers": "Content-Range, Content-Length, Accept-Ranges",
};

function parseRange(rangeHeader, totalSize) {
  const match = rangeHeader.match(/bytes=(\d+)-(\d*)/);
  if (!match) return null;

  const start = parseInt(match[1], 10);
  const end = match[2] ? parseInt(match[2], 10) : totalSize - 1;

  if (start >= totalSize || end >= totalSize || start > end) return null;

  return { start, end, offset: start, length: end - start + 1 };
}

function buildHeaders(key, size, range) {
  const headers = new Headers();
  headers.set("Content-Type", getContentType(key));
  headers.set("Cache-Control", "public, max-age=31536000, immutable");
  headers.set("Accept-Ranges", "bytes");
  headers.set("Content-Length", range ? String(range.length) : String(size));
  Object.entries(CORS_HEADERS).forEach(([k, v]) => headers.set(k, v));

  if (range) {
    headers.set("Content-Range", `bytes ${range.start}-${range.end}/${size}`);
  }

  return headers;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const method = request.method;

    // CORS preflight
    if (method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    if (method !== "GET" && method !== "HEAD") {
      return new Response("Method not allowed", { status: 405 });
    }

    const path = decodeURIComponent(url.pathname);
    const key = path.startsWith("/") ? path.slice(1) : path;

    if (key === "" || key === "/") {
      return new Response(
        JSON.stringify({
          service: "Fresh & Young CDN",
          bucket: env.R2_BUCKET_NAME || "fresh-and-young",
          usage: "Access content via: /project/{projectId}/{file}",
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    try {
      // Get object metadata first
      const head = await env.R2_BUCKET.head(key);
      if (head === null) {
        return new Response("Not found", { status: 404 });
      }

      const totalSize = head.size;

      // HEAD request — return metadata only
      if (method === "HEAD") {
        const headers = buildHeaders(key, totalSize, null);
        return new Response(null, { status: 200, headers });
      }

      // GET request — check for Range header
      const rangeHeader = request.headers.get("Range");

      if (rangeHeader) {
        const range = parseRange(rangeHeader, totalSize);
        if (!range) {
          return new Response("Range not satisfiable", {
            status: 416,
            headers: { "Content-Range": `bytes */${totalSize}` },
          });
        }

        const object = await env.R2_BUCKET.get(key, {
          range: { offset: range.offset, length: range.length },
        });

        const headers = buildHeaders(key, totalSize, range);
        return new Response(object.body, { status: 206, headers });
      }

      // Full GET — no Range
      const object = await env.R2_BUCKET.get(key);
      const headers = buildHeaders(key, totalSize, null);
      return new Response(object.body, { status: 200, headers });
    } catch (error) {
      console.error("Error fetching from R2:", error);
      return new Response("Internal server error", { status: 500 });
    }
  },
};

function getContentType(key) {
  const ext = key.split(".").pop().toLowerCase();
  const types = {
    svg: "image/svg+xml",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
    json: "application/json",
    ico: "image/x-icon",
    mp4: "video/mp4",
  };
  return types[ext] || "application/octet-stream";
}

/**
 * Cloudflare Workers script để serve content từ R2 bucket fresh-and-young
 *
 * Deploy:
 * 1. cd workers
 * 2. npx wrangler deploy
 */

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method !== "GET") {
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
      const object = await env.R2_BUCKET.get(key);

      if (object === null) {
        return new Response("Not found", { status: 404 });
      }

      const contentType = getContentType(key);

      const headers = new Headers();
      headers.set("Content-Type", contentType);
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
      headers.set("Access-Control-Allow-Origin", "*");

      return new Response(object.body, { headers });
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

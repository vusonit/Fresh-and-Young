import { NextResponse } from "next/server";

const CHANNEL_ID = "UCgt-haDeJDeVAusGIM8IGrA";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

interface YouTubeVideo {
  videoId: string;
  title: string;
  thumbnail: string;
  published: string;
}

export async function GET() {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 3600 } });
    const xml = await res.text();

    const videos: YouTubeVideo[] = [];
    const entries = xml.split("<entry>");

    for (let i = 1; i < entries.length; i++) {
      const entry = entries[i];

      const videoId = entry.match(/<yt:videoId>([^<]+)/)?.[1] ?? "";
      const title = entry.match(/<media:title>([^<]+)/)?.[1] ?? "";
      const thumbnail =
        entry.match(/<media:thumbnail url="([^"]+)"/)?.[1] ?? "";
      const published = entry.match(/<published>([^<]+)/)?.[1] ?? "";

      if (videoId) {
        videos.push({ videoId, title, thumbnail, published });
      }
    }

    return NextResponse.json({ success: true, data: videos });
  } catch (error) {
    console.error("Error fetching YouTube RSS:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch YouTube videos" },
      { status: 500 }
    );
  }
}

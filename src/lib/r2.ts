const WORKERS_URL =
  process.env.WORKERS_URL ||
  "https://fresh-and-young-cdn.vusonptit69.workers.dev";

export interface R2ProjectIndex {
  projects: { id: string; title: string }[];
  total: number;
  updatedAt: string;
}

export interface R2ProjectMetadata {
  id: string;
  title: string;
  description?: string;
  scope?: string;
  investor?: string;
  imageCount?: number;
  imageExtensions?: string[];
}

export interface R2Project {
  id: string;
  name: string;
  year: string;
  thumbnail: string;
  description?: string;
  scope?: string;
  investor?: string;
  media?: { type: "image"; url: string }[];
}

export function getWorkersUrl() {
  return WORKERS_URL;
}

/**
 * Fetch the project index from R2
 */
export async function fetchProjectIndex(): Promise<R2ProjectIndex> {
  const res = await fetch(`${WORKERS_URL}/project/index.json`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch project index from R2");
  }
  return res.json();
}

/**
 * Fetch metadata for a single project from R2
 */
export async function fetchProjectMetadata(
  projectId: string
): Promise<R2ProjectMetadata | null> {
  try {
    const res = await fetch(
      `${WORKERS_URL}/project/${projectId}/metadata.json`,
      { next: { revalidate: 300 } }
    );
    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.error(`Error fetching metadata for ${projectId}:`, error);
  }
  return null;
}

/**
 * Generate image URL for a project
 */
export function getProjectImageUrl(
  projectId: string,
  imageNumber: number,
  extension: string = "svg"
): string {
  return `${WORKERS_URL}/project/${projectId}/image-${imageNumber}.${extension}`;
}

/**
 * Fetch all projects with full details
 */
export async function fetchAllProjects(): Promise<R2Project[]> {
  const index = await fetchProjectIndex();

  const projects = await Promise.all(
    index.projects.map(async (entry) => {
      const metadata = await fetchProjectMetadata(entry.id);

      const imageCount = metadata?.imageCount || 0;

      const media = Array.from({ length: imageCount }, (_, i) => ({
        type: "image" as const,
        url: getProjectImageUrl(entry.id, i + 1),
      }));

      const thumbnail =
        media.length > 0
          ? media[0].url
          : getProjectImageUrl(entry.id, 1);

      return {
        id: entry.id,
        name: metadata?.title || entry.title,
        year: "",
        thumbnail,
        description: metadata?.description,
        scope: metadata?.scope,
        investor: metadata?.investor,
        media,
      };
    })
  );

  return projects;
}

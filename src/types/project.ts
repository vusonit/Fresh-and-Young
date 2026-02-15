export interface ProjectMedia {
  type: "image" | "video";
  url: string;
}

export interface ProjectDetail {
  id: string;
  slug: string;
  name: string;
  year: string;
  description: string;
  services: string[];
  thumbnail: string;
  metadata: {
    developer?: string;
    location?: string;
    artDirector?: string;
    renderer?: string;
  };
  media: ProjectMedia[];
}

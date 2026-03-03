import { notFound } from "next/navigation";
import {
  fetchProjectMetadata,
  fetchAllProjects,
  getProjectImageUrl,
} from "@/lib/r2";
import { ProjectDetail } from "@/types/project";
import ProjectDetailHero from "./ProjectDetailHero";
import ProjectDetailInfoSection from "./ProjectDetailInfoSection";
import ProjectMediaGallery from "./ProjectMediaGallery";
import RelatedProjects from "./RelatedProjects";

async function getProject(id: string): Promise<ProjectDetail | null> {
  const metadata = await fetchProjectMetadata(id);
  if (!metadata) return null;

  const imageCount = metadata.imageCount || 0;

  const media = Array.from({ length: imageCount }, (_, i) => ({
    type: "image" as const,
    url: getProjectImageUrl(id, i + 1),
  }));

  const thumbnail =
    media.length > 0 ? media[0].url : getProjectImageUrl(id, 1);

  return {
    id: metadata.id,
    slug: metadata.id,
    name: metadata.title,
    year: "",
    description: metadata.description || "",
    services: metadata.scope ? [metadata.scope] : [],
    thumbnail,
    metadata: {
      developer: metadata.investor,
    },
    media,
  };
}

async function getRelatedProjects(currentId: string): Promise<ProjectDetail[]> {
  const allProjects = await fetchAllProjects();
  return allProjects
    .filter((p) => p.id !== currentId)
    .slice(0, 4)
    .map((p) => ({
      id: p.id,
      slug: p.id,
      name: p.name,
      year: p.year,
      description: p.description || "",
      services: p.scope ? [p.scope] : [],
      thumbnail: p.thumbnail,
      metadata: {
        developer: p.investor,
      },
      media: p.media || [],
    }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    notFound();
  }

  const relatedProjects = await getRelatedProjects(project.id);

  return (
    <>
      {/* Hero */}
      <ProjectDetailHero project={project} />

      {/* Info Section */}
      <ProjectDetailInfoSection project={project} />

      {/* Media Gallery */}
      <ProjectMediaGallery media={project.media} />

      {/* Related Projects */}
      <RelatedProjects projects={relatedProjects} />
    </>
  );
}

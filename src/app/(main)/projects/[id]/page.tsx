import { notFound } from "next/navigation";
import {
  fetchProjectMetadata,
  fetchAllProjects,
  getProjectImageUrl,
} from "@/lib/r2";
import { ProjectDetail } from "@/types/project";
import ProjectDetailHero from "./ProjectDetailHero";
import ProjectMediaGallery from "./ProjectMediaGallery";
import RelatedProjects from "./RelatedProjects";

async function getProject(id: string): Promise<ProjectDetail | null> {
  const metadata = await fetchProjectMetadata(id);
  if (!metadata) return null;

  const imageCount = metadata.imageCount || 0;
  const extensions = metadata.imageExtensions || ["png"];
  const ext = extensions[0] || "png";

  const media = Array.from({ length: imageCount }, (_, i) => ({
    type: "image" as const,
    url: getProjectImageUrl(id, i + 1, ext),
  }));

  const thumbnail =
    media.length > 0 ? media[0].url : getProjectImageUrl(id, 1, ext);

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
      <section
        className="relative bg-black"
        style={{ width: "100%", height: 473 }}
      >
        <div className="relative w-[1440px] mx-auto h-full">
          {/* Project Name */}
          <h1
            className="absolute text-[32px] font-medium leading-[1.35] text-bg-light uppercase text-center"
            style={{ left: 472, top: 91, width: 496 }}
          >
            {project.name}
          </h1>

          {/* Description */}
          <p
            className="absolute text-base font-normal leading-[1.35] text-bg-light text-center"
            style={{ left: 244, top: 184, width: 952 }}
          >
            {project.description}
          </p>

          {/* Metadata Row */}
          <div
            className="absolute flex items-center justify-between"
            style={{ left: 122, top: 349, width: 1195 }}
          >
            {project.metadata.developer && (
              <span className="text-base font-normal leading-[1.35] text-white">
                Property Developer: {project.metadata.developer}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Media Gallery */}
      <ProjectMediaGallery media={project.media} />

      {/* Related Projects */}
      <RelatedProjects projects={relatedProjects} />
    </>
  );
}

import { notFound } from "next/navigation";
import Image from "next/image";
import { mockProjectDetails } from "@/data/mock-projects";
import { ProjectDetail } from "@/types/project";
import ProjectDetailHero from "./ProjectDetailHero";
import ProjectMediaGallery from "./ProjectMediaGallery";
import RelatedProjects from "./RelatedProjects";

// TODO: Replace with API call to Cloudflare R2
async function getProject(id: string): Promise<ProjectDetail | null> {
  return mockProjectDetails.find((p) => p.id === id || p.slug === id) || null;
}

function getRelatedProjects(currentId: string): ProjectDetail[] {
  return mockProjectDetails.filter((p) => p.id !== currentId).slice(0, 4);
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

  const relatedProjects = getRelatedProjects(project.id);

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
            {project.metadata.location && (
              <span className="text-base font-normal leading-[1.35] text-white">
                Location: {project.metadata.location}
              </span>
            )}
            {project.metadata.artDirector && (
              <span className="text-base font-normal leading-[1.35] text-white">
                Art Director: {project.metadata.artDirector}
              </span>
            )}
            {project.metadata.renderer && (
              <span className="text-base font-normal leading-[1.35] text-white">
                Rendered by {project.metadata.renderer}
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

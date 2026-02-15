import { PartnerLogos, ProjectHero, ProjectsGrid } from "@/components/shared";

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <ProjectHero />
      {/* Partner Logos - Auto-scrolling logo marquee */}
      <PartnerLogos />
      {/* Projects Grid */}
      <ProjectsGrid />
    </>
  );
}

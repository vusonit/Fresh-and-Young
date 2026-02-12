import {
  HeroSection,
  IntroSection,
  ExhibitionSection,
  PhilosophySection,
  AboutSection,
  ServicesListSection,
  FullWidthImage,
  ProjectsSection,
} from "@/components/shared";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero - Full-width background image */}
      <HeroSection />

      {/* 2. Intro - Two-tone text on dark background */}
      <IntroSection />

      {/* 3. Exhibition - Tabbed service showcase with image */}
      <ExhibitionSection />

      {/* 4. Philosophy - Vision & Mission with Venn diagram */}
      <PhilosophySection />

      {/* 5. About - Title, description, button + large image */}
      <AboutSection />

      {/* 6. Services List - Accordion service items */}
      <ServicesListSection />

      {/* 7. Full-width Image */}
      <FullWidthImage src="/images/img-fullwidth.jpg" alt="FY Architecture" height={810} />

      {/* 8. Projects - Featured projects carousel + partner logos */}
      <ProjectsSection />
    </>
  );
}

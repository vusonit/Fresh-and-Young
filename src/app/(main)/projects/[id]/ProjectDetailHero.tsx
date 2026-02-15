import Image from "next/image";
import { ProjectDetail } from "@/types/project";

interface ProjectDetailHeroProps {
  project: ProjectDetail;
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  // Split name into first word and rest for the two-line hero layout
  const words = project.name.split(" ");
  const firstLine = words[0];
  const secondLine = words.slice(1).join(" ");

  return (
    <section className="relative w-full bg-black overflow-hidden">
      <div className="relative w-[1440px] mx-auto" style={{ height: 800 }}>
        {/* First line of name — Z-1 */}
        <span
          className="absolute z-[1] text-[96px] font-semibold leading-[1.35] text-bg-light uppercase text-center"
          style={{ left: 199, top: 85, width: 337 }}
        >
          {firstLine}
        </span>

        {/* Second line of name — Z-1 */}
        <span
          className="absolute z-[1] text-[96px] font-semibold leading-[1.35] text-bg-light uppercase text-left"
          style={{ left: 309, top: 200, width: 774 }}
        >
          {secondLine}
        </span>

        {/* Year — Z-3 */}
        <span
          className="absolute z-[3] text-[14px] font-normal leading-[1.35] text-bg-light uppercase"
          style={{ left: 122, top: 245 }}
        >
          {project.year}
        </span>

        {/* Services — Z-3 */}
        <span
          className="absolute z-[3] text-[14px] font-normal leading-[1.35] text-bg-light uppercase text-right"
          style={{ left: 1133, top: 207, width: 185 }}
        >
          {project.services.join("\n")}
        </span>

        {/* Clipped image container — Z-2 */}
        <div
          className="absolute z-[2] overflow-hidden left-0"
          style={{ top: 316, width: 1440, height: 484 }}
        >
          <div
            className="absolute"
            style={{
              top: -184,
              left: 0,
              width: 1440,
              height: 810,
            }}
          >
            <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              className="object-cover"
              quality={90}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { ProjectDetail } from "@/types/project";

interface RelatedProjectsProps {
  projects: ProjectDetail[];
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getIsActive = (index: number) => {
    if (hoveredIndex !== null) return hoveredIndex === index;
    return index === 1;
  };

  return (
    <section className="relative bg-black overflow-hidden">
      <div className="relative w-[1440px] mx-auto" style={{ height: 884 }}>
        {/* Title */}
        <h2
          className="absolute text-[32px] font-medium leading-[1.35] text-bg-light uppercase"
          style={{ left: 121, top: 114, width: 342 }}
        >
          Các dự án Khác
        </h2>

        {/* Button */}
        <div className="absolute" style={{ left: 1128, top: 112 }}>
          <Button
            variant="primary"
            href="/projects"
            hoverText="Tìm hiểu ngay!"
          >
            Toàn bộ dự án
          </Button>
        </div>

        {/* Projects Carousel */}
        <div
          className="absolute left-0 overflow-x-auto scrollbar-hide"
          style={{ top: 239, width: "100vw" }}
        >
          <div className="flex items-end min-w-max">
            {projects.map((project, index) => {
              const isActive = getIsActive(index);

              return (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="flex-shrink-0 flex flex-col gap-5 cursor-pointer transition-all duration-500 ease-in-out"
                  style={{
                    width: isActive ? 830 : 468,
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Info */}
                  <div>
                    <p className="text-base font-normal leading-[1.35] text-bg-light">
                      {project.year}
                    </p>
                    <p className="text-base font-normal leading-[1.35] text-bg-light">
                      {project.name}
                    </p>
                  </div>

                  {/* Image */}
                  <div
                    className="relative w-full overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      height: isActive ? 460 : 260,
                    }}
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.name}
                      fill
                      className="object-cover"
                      quality={85}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

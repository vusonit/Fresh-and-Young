"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { mockProjectDetails } from "@/data/mock-projects";

export interface Project {
  id: string;
  name: string;
  year: string;
  thumbnail: string;
}

const mockProjects: Project[] = mockProjectDetails.map((p) => ({
  id: p.id,
  name: p.name,
  year: p.year,
  thumbnail: p.thumbnail,
}));

const INITIAL_COUNT = 6;

interface ProjectsGridProps {
  projects?: Project[];
}

export default function ProjectsGrid({
  projects = mockProjects,
}: ProjectsGridProps) {
  const [showAll, setShowAll] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section className="bg-black">
      <div className="mx-auto" style={{ maxWidth: 1440, padding: "0 16px" }}>
        {/* Grid */}
        <div className="grid grid-cols-2 gap-[8px]">
          {visibleProjects.map((project) => {
            const isHovered = hoveredId === project.id;

            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="relative block overflow-hidden cursor-pointer"
                style={{ height: 668 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image container */}
                <div
                  className="absolute left-0 w-full transition-all duration-500 ease-in-out overflow-hidden"
                  style={{
                    top: isHovered ? 0 : 63,
                    height: 605,
                  }}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out"
                    style={{
                      transform: isHovered ? "scale(1)" : "scale(1.08)",
                    }}
                    quality={85}
                  />
                </div>

                {/* Text overlay — appears on hover */}
                <div
                  className="absolute left-0 transition-all duration-500 ease-in-out"
                  style={{
                    bottom: 0,
                    padding: "0",
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(8px)",
                  }}
                >
                  <p className="text-base font-normal leading-[1.35] text-bg-light">
                    {project.year}
                  </p>
                  <p className="text-base font-normal leading-[1.35] text-bg-light uppercase">
                    {project.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Show more button */}
        {!showAll && projects.length > INITIAL_COUNT && (
          <div className="flex justify-center py-[60px]">
            <Button
              hoverText="Khám phá thêm"
              showArrow={true}
              onClick={() => setShowAll(true)}
            >
              {`Xem thêm`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

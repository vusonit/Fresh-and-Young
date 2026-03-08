"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export interface Project {
  id: string;
  name: string;
  year: string;
  thumbnail: string;
}

const INITIAL_COUNT = 6;

interface ProjectsGridProps {
  projects?: Project[];
}

export default function ProjectsGrid({
  projects: propProjects,
}: ProjectsGridProps) {
  const [projects, setProjects] = useState<Project[]>(propProjects || []);
  const [loading, setLoading] = useState(!propProjects);
  const [showAll, setShowAll] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    if (propProjects) return;

    async function loadProjects() {
      try {
        const res = await fetch("/api/projects");
        const json = await res.json();
        if (json.success && json.data) {
          setProjects(
            json.data.map((p: Record<string, string>) => ({
              id: p.id,
              name: p.name,
              year: p.year || "",
              thumbnail: p.thumbnail,
            })),
          );
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, [propProjects]);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  if (loading) {
    return (
      <section className="bg-black">
        <div className="mx-auto" style={{ maxWidth: 1440, padding: "0 16px" }}>
          <div className="grid grid-cols-2 gap-[8px]">
            {Array.from({ length: INITIAL_COUNT }).map((_, i) => (
              <div
                key={i}
                className="relative block overflow-hidden bg-neutral-900 animate-pulse"
                style={{ height: 668 }}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black pb-32">
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
          <div className="flex justify-center pt-[60px]">
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

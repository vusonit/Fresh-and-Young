"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export interface Project {
  id: string;
  name: string;
  year: string;
  thumbnail: string;
}

interface ProjectsSectionProps {
  projects?: Project[];
}

export default function ProjectsSection({
  projects: propProjects,
}: ProjectsSectionProps) {
  const [projects, setProjects] = useState<Project[]>(propProjects || []);
  const [loading, setLoading] = useState(!propProjects);

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

  return (
    <section className="bg-black py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[952px] mx-auto px-6 lg:px-12 text-center mb-16">
        <motion.h2
          className="text-[32px] font-medium leading-[1.22] text-bg-light mb-6"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          Dự án nổi bật
        </motion.h2>
        <motion.p
          className="text-base font-normal leading-[135%] text-bg-light mb-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          Chúng tôi xem mỗi dự án là cơ hội để làm tốt hơn, nhìn khác hơn số
          đông và tạo nên những hình ảnh sống động có sức lan tỏa tốt.
        </motion.p>
        <Button variant="primary" href="/projects" hoverText="Tìm hiểu ngay!">
          Toàn bộ dự án
        </Button>
      </div>

      <div className="overflow-x-auto scrollbar-hide px-6 lg:px-12">
        {loading ? (
          <div className="flex items-end gap-8 min-w-max py-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-[468px] h-[300px] bg-neutral-900 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <div className="flex items-end gap-8 min-w-max py-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flex-shrink-0 w-[468px] flex flex-col gap-5 origin-bottom"
                whileHover={{ scale: 1.14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.06,
                  }}
                  viewport={{
                    once: false,
                    margin: "-10% 0px -10% 0px",
                    amount: 0.25,
                  }}
                >
                  <p className="text-base font-normal leading-[1.35em] text-[#F4F4FA]">
                    {project.year}
                  </p>
                  <p className="text-base font-normal leading-[1.35em] text-[#F4F4FA]">
                    {project.name}
                  </p>
                </motion.div>

                <div className="relative w-full h-[300px] overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    alt={project.name}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

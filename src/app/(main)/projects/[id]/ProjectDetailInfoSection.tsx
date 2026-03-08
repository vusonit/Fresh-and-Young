"use client";

import { motion } from "framer-motion";
import { ProjectDetail } from "@/types/project";

interface ProjectDetailInfoSectionProps {
  project: ProjectDetail;
}

export default function ProjectDetailInfoSection({
  project,
}: ProjectDetailInfoSectionProps) {
  return (
    <section
      className="relative bg-black"
      style={{ width: "100%", height: 473 }}
    >
      <div className="relative w-[1440px] mx-auto h-full">
        {/* Project Name */}
        <motion.h1
          className="absolute text-[32px] font-medium leading-[1.35] text-bg-light uppercase text-center"
          style={{ left: 472, top: 91, width: 496 }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {project.name}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="absolute text-base font-normal leading-[1.35] text-bg-light text-center"
          style={{ left: 244, top: 234, width: 952 }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {project.description}
        </motion.p>

        {/* Metadata Row */}
        <motion.div
          className="absolute flex items-center justify-center w-full"
          style={{ left: 122, top: 349, width: 1195 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {project.metadata.developer && (
            <span className="text-base font-normal leading-[1.35] text-white">
              Property Developer: {project.metadata.developer}
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}

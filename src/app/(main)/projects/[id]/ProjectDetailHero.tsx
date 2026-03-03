"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectDetail } from "@/types/project";

interface ProjectDetailHeroProps {
  project: ProjectDetail;
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  // Split name into first word and rest for the two-line hero layout
  const words = project.name.split(" ");
  const firstLine = words[0];
  const secondLine = words.slice(1).join(" ");

  // Reduce font size for long titles so text fits above the image
  const isLong = secondLine.length > 24;
  const isMedium = secondLine.length > 12;
  const fontSize = isLong ? 56 : isMedium ? 72 : 96;
  const secondLineTop = isLong ? 170 : isMedium ? 185 : 200;
  const textOffsetY = -12;

  return (
    <section className="relative w-full bg-black">
      <div className="relative w-[1440px] mx-auto pt-[316px]">
        {/* First line of name */}
        <motion.span
          className="absolute z-[5] font-semibold leading-[1.35] text-bg-light uppercase text-center"
          style={{ left: 199, top: 85 + textOffsetY, width: 337, fontSize }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {firstLine}
        </motion.span>

        {/* Second line of name */}
        <motion.span
          className="absolute z-[5] font-semibold leading-[1.35] text-bg-light uppercase text-left"
          style={{ left: 309, top: secondLineTop + textOffsetY, width: 774, fontSize }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {secondLine}
        </motion.span>

        {/* Year */}
        <motion.span
          className="absolute z-[5] text-[14px] font-normal leading-[1.35] text-bg-light uppercase"
          style={{ left: 122, top: 245 + textOffsetY }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {project.year}
        </motion.span>

        {/* Services */}
        <motion.span
          className="absolute z-[5] text-[14px] font-normal leading-[1.35] text-bg-light uppercase text-right"
          style={{ left: 1133, top: 207 + textOffsetY, width: 185 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {project.services.join("\n")}
        </motion.span>

        {/* Image — full width, dynamic height by image ratio */}
        <div className="relative z-[1] w-full">
          <Image
            src={project.thumbnail}
            alt={project.name}
            width={1440}
            height={810}
            className="w-full h-auto object-cover"
            sizes="(max-width: 1440px) 100vw, 1440px"
            quality={90}
            priority
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/shared/Button";
import { ProjectDetail } from "@/types/project";

interface RelatedProjectsProps {
  projects: ProjectDetail[];
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 rounded-full border border-white/40 bg-black/50 backdrop-blur-sm shadow-[0_0_20px_rgba(0,0,0,0.6)] flex items-center justify-center text-white transition-all duration-300 cursor-pointer hover:border-[#FFED00] hover:text-[#FFED00] hover:shadow-[0_0_24px_rgba(255,237,0,0.3)] hover:scale-110"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d={direction === "left" ? "M15 18L9 12L15 6" : "M9 18L15 12L9 6"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function RelatedProjects({ projects }: RelatedProjectsProps) {
  const [centerIndex, setCenterIndex] = useState(0);

  if (projects.length === 0) return null;

  const getWrappedIndex = (i: number) =>
    ((i % projects.length) + projects.length) % projects.length;

  const leftProject = projects[getWrappedIndex(centerIndex - 1)];
  const centerProject = projects[getWrappedIndex(centerIndex)];
  const rightProject = projects[getWrappedIndex(centerIndex + 1)];

  const handlePrev = () =>
    setCenterIndex((prev) => getWrappedIndex(prev - 1));
  const handleNext = () =>
    setCenterIndex((prev) => getWrappedIndex(prev + 1));

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

        {/* Carousel */}
        <div
          className="absolute flex items-end gap-[10px]"
          style={{ left: 0, top: 239, width: 1440 }}
        >
          {/* Left — small */}
          <Link
            href={`/projects/${leftProject.id}`}
            className="shrink-0 flex flex-col gap-5 transition-all duration-500 ease-in-out"
            style={{ width: 305 }}
          >
            <p className="text-sm font-normal leading-[1.35] text-bg-light/60 truncate">
              {leftProject.name}
            </p>
            <div
              className="relative w-full overflow-hidden"
              style={{ height: 260 }}
            >
              <Image
                src={leftProject.thumbnail}
                alt={leftProject.name}
                fill
                className="object-cover"
                quality={85}
              />
            </div>
          </Link>

          {/* Center — expanded */}
          <Link
            href={`/projects/${centerProject.id}`}
            className="shrink-0 flex flex-col gap-5 transition-all duration-500 ease-in-out"
            style={{ width: 810 }}
          >
            <p className="text-base font-normal leading-[1.35] text-bg-light">
              {centerProject.name}
            </p>
            <div
              className="relative w-full overflow-hidden"
              style={{ height: 460 }}
            >
              <Image
                src={centerProject.thumbnail}
                alt={centerProject.name}
                fill
                className="object-cover"
                quality={85}
              />
            </div>
          </Link>

          {/* Right — small */}
          <Link
            href={`/projects/${rightProject.id}`}
            className="shrink-0 flex flex-col gap-5 transition-all duration-500 ease-in-out"
            style={{ width: 305 }}
          >
            <p className="text-sm font-normal leading-[1.35] text-bg-light/60 truncate">
              {rightProject.name}
            </p>
            <div
              className="relative w-full overflow-hidden"
              style={{ height: 260 }}
            >
              <Image
                src={rightProject.thumbnail}
                alt={rightProject.name}
                fill
                className="object-cover"
                quality={85}
              />
            </div>
          </Link>
        </div>

        {/* Left Arrow — overlaying */}
        <div className="absolute z-10" style={{ left: 20, top: 520 }}>
          <ArrowButton direction="left" onClick={handlePrev} />
        </div>

        {/* Right Arrow — overlaying */}
        <div className="absolute z-10" style={{ right: 20, top: 520 }}>
          <ArrowButton direction="right" onClick={handleNext} />
        </div>
      </div>
    </section>
  );
}

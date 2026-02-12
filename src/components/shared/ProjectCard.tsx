"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectCardProps {
  year: string;
  name: string;
  image: string;
  href?: string;
}

export default function ProjectCard({
  year,
  name,
  image,
  href = "#",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="block relative w-full overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative w-full aspect-[708/605] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className={`object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : ""
          }`}
          quality={85}
        />
      </div>

      {/* Info overlay on hover */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-base font-normal text-bg-light">{year}</p>
        <p className="text-base font-normal text-bg-light">{name}</p>
      </div>
    </a>
  );
}

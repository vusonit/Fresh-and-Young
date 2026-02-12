"use client";

import { useState } from "react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  title: string;
  description: string;
  image: string;
}

export default function TeamCard({
  name,
  title,
  description,
  image,
}: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[395px] h-[395px] cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="absolute inset-0 bg-white overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          quality={85}
        />
      </div>

      {/* Yellow line at bottom (default) */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-[2px] bg-primary transition-all duration-300 ${
          isHovered ? "h-full" : ""
        }`}
      />

      {/* Hover overlay with info */}
      <div
        className={`absolute inset-0 bg-primary flex flex-col justify-end p-8 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-base font-normal text-text-dark mb-2">{title}</p>
        <h3 className="text-[32px] font-medium leading-tight text-text-dark mb-4">
          {name}
        </h3>
        <p className="text-base font-normal leading-[135%] text-text-dark">
          {description}
        </p>
      </div>
    </div>
  );
}

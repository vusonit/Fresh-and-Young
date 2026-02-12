"use client";

import { useState } from "react";
import Image from "next/image";

interface CompanyCardProps {
  name: string;
  logo?: string;
  logoText?: string;
}

export default function CompanyCard({
  name,
  logo,
  logoText,
}: CompanyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[564px] h-[135px] cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default state - outlined shape with logo */}
      <div className="absolute inset-0 flex items-center">
        {/* Logo area */}
        <div className="w-[168px] h-full flex items-center justify-center">
          {logo ? (
            <Image src={logo} alt={name} width={74} height={49} />
          ) : (
            <span className="text-bg-light text-2xl font-semibold">
              {logoText || name}
            </span>
          )}
        </div>

        {/* Diagonal reveal shape */}
        <svg
          className="absolute right-0 top-0"
          width="396"
          height="135"
          viewBox="0 0 396 135"
          fill="none"
        >
          <path
            d="M48 0H396V135H0L48 0Z"
            className={`transition-all duration-300 ${
              isHovered ? "fill-primary" : "fill-transparent"
            }`}
            stroke={isHovered ? "none" : "#F4F4FA"}
            strokeWidth="1"
          />
        </svg>

        {/* Separator line */}
        <div
          className={`absolute left-[168px] top-1/2 -translate-y-1/2 w-[1px] h-0 transition-all duration-300 ${
            isHovered ? "h-0" : "h-full"
          }`}
          style={{ backgroundColor: isHovered ? "transparent" : "#F4F4FA" }}
        />
      </div>
    </div>
  );
}

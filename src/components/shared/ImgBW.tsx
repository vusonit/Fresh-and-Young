"use client";

import Image from "next/image";

interface ImgBWProps {
  src: string;
  alt?: string;
  size?: number;
}

export default function ImgBW({ src, alt = "", size = 288 }: ImgBWProps) {
  return (
    <div
      className="relative overflow-hidden group cursor-pointer"
      style={{ width: size, height: size }}
    >
      {/* Image with B&W filter, color on hover */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        quality={85}
      />

      {/* Yellow bottom line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

"use client";

import Image from "next/image";

interface HeroSectionProps {
  backgroundImage?: string;
}

export default function HeroSection({
  backgroundImage = "/images/hero-bg.jpg",
}: HeroSectionProps) {
  return (
    <section className="bg-black relative w-full h-[900px] overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        className="object-cover"
        priority
        quality={90}
      />
    </section>
  );
}

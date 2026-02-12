"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "3d-animation",
    label: "DIỄN Hoạ 3D & ANIMATION",
    image: "/images/exhibition-bg.jpg",
  },
  {
    id: "virtual-tour",
    label: "Virtual tour 360 & VR/AR",
    image: "/images/exhibition-bg.jpg",
  },
  {
    id: "tvc-film",
    label: "TVC & FILM",
    image: "/images/exhibition-bg.jpg",
  },
  {
    id: "sa-ban",
    label: "SA BÀN ẢO",
    image: "/images/exhibition-bg.jpg",
  },
];

export default function ExhibitionSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      {/* Tabs */}
      <div className="flex max-w-[var(--max-width-wide)] mx-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            className={`flex-1 py-4 text-[20px] font-medium text-center border-b-2 transition-all duration-300 cursor-pointer ${
              activeTab === index
                ? "text-bg-light border-primary"
                : "text-text-gray border-text-gray"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Image with Play Button */}
      <div className="relative w-full h-[800px]">
        <Image
          src={tabs[activeTab].image}
          alt={tabs[activeTab].label}
          fill
          className="object-cover transition-opacity duration-500"
          quality={90}
        />

        {/* Play Button */}
        <button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[102px] h-[102px] rounded-full bg-bg-dark/80 flex items-center justify-center hover:bg-bg-dark transition-colors cursor-pointer"
          aria-label="Play video"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              d="M15 10L32 20L15 30V10Z"
              fill="#FFED00"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface TabItem {
  id: string;
  label: string;
  media: { type: "video"; src: string } | { type: "image"; src: string };
}

const tabs: TabItem[] = [
  {
    id: "3d-animation",
    label: "DIỄN HOẠ 3D & ANIMATION",
    media: { type: "image", src: "/images/exhibition-bg.jpg" },
  },
  {
    id: "virtual-tour",
    label: "VIRTUAL TOUR 360 & VR/AR",
    media: { type: "image", src: "/images/hero-bg.jpg" },
  },
  {
    id: "tvc-film",
    label: "TVC & FILM",
    media: { type: "image", src: "/images/exhibition-bg.jpg" },
  },
  {
    id: "sa-ban",
    label: "SA BÀN ẢO",
    media: { type: "image", src: "/images/exhibition-bg.jpg" },
  },
];

export default function ExhibitionSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentMedia = tabs[activeTab].media;

  const handlePlay = () => {
    if (currentMedia.type === "video" && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <section className="bg-black w-[1440px] max-w-full mx-auto h-[1000px]">
      {/* Tabs */}
      <div className="flex pt-[72px]">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(index)}
            className="flex-1 flex flex-col items-end gap-[15px] cursor-pointer group"
          >
            <span
              className={`w-full font-medium text-[20px] leading-[1.219em] uppercase text-center transition-colors duration-300 ${
                activeTab === index ? "text-[#F4F4FA]" : "text-[#2E2E3A]"
              }`}
            >
              {tab.label}
            </span>
            <span
              className={`w-full h-[2px] rounded-[51px] transition-colors duration-300 ${
                activeTab === index ? "bg-primary" : "bg-[#2E2E3A]"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Media area */}
      <div className="relative w-[1440px] max-w-full h-[800px] mt-[56px] overflow-hidden bg-black">
        {currentMedia.type === "video" ? (
          <video
            ref={videoRef}
            key={currentMedia.src}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            onEnded={() => setIsPlaying(false)}
          >
            <source src={currentMedia.src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={currentMedia.src}
            alt={tabs[activeTab].label}
            fill
            className="object-cover"
            quality={90}
          />
        )}

        {/* Dark overlay when paused */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/20" />
        )}

        {/* Play Button - only for video */}
        {currentMedia.type === "video" && (
          <button
            onClick={handlePlay}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[117px] flex items-center justify-center transition-opacity duration-300 ${
              isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
            }`}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <div className="w-[102px] h-[102px] rounded-full bg-bg-dark/80 flex items-center justify-center hover:bg-bg-dark transition-colors">
              {isPlaying ? (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="12" y="10" width="6" height="20" fill="#FFED00" />
                  <rect x="22" y="10" width="6" height="20" fill="#FFED00" />
                </svg>
              ) : (
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M15 10L32 20L15 30V10Z" fill="#FFED00" />
                </svg>
              )}
            </div>
          </button>
        )}
      </div>
    </section>
  );
}

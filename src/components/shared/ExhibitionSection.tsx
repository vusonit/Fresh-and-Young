"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface YouTubeVideo {
  videoId: string;
  title: string;
  thumbnail: string;
}

interface TabItem {
  id: string;
  label: string;
  keywords: string[];
  fallbackImage: string;
  video?: YouTubeVideo;
}

const tabs: TabItem[] = [
  {
    id: "3d-animation",
    label: "DIỄN HOẠ 3D & ANIMATION",
    keywords: ["diễn hoạ 3d", "3d animation", "dien hoa 3d"],
    fallbackImage: "/videos/3d-animation-poster.jpg",
  },
  {
    id: "virtual-tour",
    label: "VIRTUAL TOUR 360 & VR/AR",
    keywords: ["virtual tour", "vr", "ar", "360"],
    fallbackImage: "/images/hero-bg.jpg",
  },
  {
    id: "tvc-film",
    label: "TVC & FILM",
    keywords: ["tvc", "film"],
    fallbackImage: "/videos/3d-animation-poster.jpg",
  },
  {
    id: "sa-ban",
    label: "SA BÀN ẢO",
    keywords: ["sa bàn", "sa ban"],
    fallbackImage: "/images/exhibition-bg.jpg",
  },
];

function matchVideoToTab(
  videoTitle: string,
  tabKeywords: string[]
): boolean {
  const lower = videoTitle.toLowerCase();
  return tabKeywords.some((kw) => lower.includes(kw));
}

export default function ExhibitionSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsData, setTabsData] = useState<TabItem[]>(tabs);

  useEffect(() => {
    fetch("/api/youtube")
      .then((res) => res.json())
      .then((json) => {
        if (!json.success) return;
        const videos: YouTubeVideo[] = json.data;

        const updated = tabs.map((tab) => {
          const matched = videos.find((v) =>
            matchVideoToTab(v.title, tab.keywords)
          );
          return matched ? { ...tab, video: matched } : tab;
        });

        setTabsData(updated);
      })
      .catch(console.error);
  }, []);

  const currentTab = tabsData[activeTab];

  return (
    <section className="bg-black w-[1440px] max-w-full mx-auto h-[1000px]">
      {/* Tabs */}
      <div className="flex pt-[72px]">
        {tabsData.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(index)}
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
        {currentTab.video ? (
          <iframe
            src={`https://www.youtube.com/embed/${currentTab.video.videoId}?rel=0`}
            title={currentTab.video.title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={currentTab.fallbackImage}
              alt={currentTab.label}
              fill
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/20" />
          </>
        )}
      </div>
    </section>
  );
}

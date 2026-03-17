"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { ProjectMedia } from "@/types/project";

interface ProjectMediaGalleryProps {
  media: ProjectMedia[];
}

type Tab = "photo" | "video";

const VIDEOS_PER_PAGE = 6;

export default function ProjectMediaGallery({
  media,
}: ProjectMediaGalleryProps) {
  const photos = media.filter((m) => m.type === "image");
  const videos = media.filter((m) => m.type === "video");
  const hasVideos = videos.length > 0;
  const hasPhotos = photos.length > 0;

  const [activeTab, setActiveTab] = useState<Tab>("photo");

  if (!hasPhotos && !hasVideos) return null;

  const showTabs = hasPhotos && hasVideos;

  return (
    <section className="bg-black">
      <div className="mx-auto" style={{ maxWidth: 1440, padding: "0 1px" }}>
        {/* Tabs */}
        {showTabs && (
          <div className="flex gap-4 py-6 px-4">
            <TabButton
              label="Photo"
              active={activeTab === "photo"}
              onClick={() => setActiveTab("photo")}
            />
            <TabButton
              label="Video"
              active={activeTab === "video"}
              onClick={() => setActiveTab("video")}
            />
          </div>
        )}

        {/* Photo tab content */}
        {(activeTab === "photo" || !showTabs) && hasPhotos && (
          <PhotoGrid photos={photos} />
        )}

        {/* Video tab content */}
        {activeTab === "video" && showTabs && hasVideos && (
          <VideoGrid videos={videos} />
        )}
      </div>
    </section>
  );
}

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer"
      style={{
        color: active ? "#FFED00" : "rgba(255,255,255,0.5)",
        borderBottom: active ? "2px solid #FFED00" : "2px solid transparent",
      }}
    >
      {label}
    </button>
  );
}

function PhotoGrid({ photos }: { photos: ProjectMedia[] }) {
  const firstItem = photos[0];
  const restItems = photos.slice(1);

  return (
    <>
      {/* First image — larger */}
      <div className="relative w-full" style={{ height: 800 }}>
        <Image
          src={firstItem.url}
          alt="Project media"
          fill
          className="object-cover"
          quality={90}
        />
      </div>

      {/* Rest of images — stacked */}
      <div className="flex flex-col gap-[25px] mt-[20px]">
        {restItems.map((item, index) => (
          <div
            key={index}
            className="relative w-full"
            style={{ height: 809 }}
          >
            <Image
              src={item.url}
              alt={`Project media ${index + 2}`}
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        ))}
      </div>
    </>
  );
}

function LazyVideo({
  src,
  height,
}: {
  src: string;
  height: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <div ref={containerRef} className="relative w-full" style={{ height }}>
      <video
        ref={videoRef}
        src={isVisible ? src : undefined}
        preload="none"
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}

function VideoGrid({ videos }: { videos: ProjectMedia[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  const pageVideos = videos.slice(
    currentPage * VIDEOS_PER_PAGE,
    (currentPage + 1) * VIDEOS_PER_PAGE
  );

  const goToPage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
    []
  );

  return (
    <div ref={sectionRef}>
      {/* First video on page — larger */}
      <LazyVideo
        key={`${currentPage}-0`}
        src={pageVideos[0].url}
        height={800}
      />

      {/* Rest of videos on page — stacked */}
      {pageVideos.length > 1 && (
        <div className="flex flex-col gap-[25px] mt-[20px]">
          {pageVideos.slice(1).map((item, index) => (
            <LazyVideo
              key={`${currentPage}-${index + 1}`}
              src={item.url}
              height={809}
            />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 py-8">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
            className="px-4 py-2 text-sm font-medium transition-colors cursor-pointer disabled:cursor-not-allowed"
            style={{
              color: currentPage === 0 ? "rgba(255,255,255,0.3)" : "#FFED00",
            }}
          >
            ← Prev
          </button>
          <span className="text-sm text-white/70">
            Trang {currentPage + 1}/{totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
            className="px-4 py-2 text-sm font-medium transition-colors cursor-pointer disabled:cursor-not-allowed"
            style={{
              color:
                currentPage === totalPages - 1
                  ? "rgba(255,255,255,0.3)"
                  : "#FFED00",
            }}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}

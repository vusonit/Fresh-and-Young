"use client";

import Image from "next/image";
import { ProjectMedia } from "@/types/project";

interface ProjectMediaGalleryProps {
  media: ProjectMedia[];
}

export default function ProjectMediaGallery({
  media,
}: ProjectMediaGalleryProps) {
  if (media.length === 0) return null;

  const firstItem = media[0];
  const restItems = media.slice(1);

  return (
    <section className="bg-black">
      <div
        className="mx-auto"
        style={{ maxWidth: 1440, padding: "0 1px" }}
      >
        {/* First media — larger with optional play button */}
        <div className="relative w-full" style={{ height: 800 }}>
          <Image
            src={firstItem.url}
            alt="Project media"
            fill
            className="object-cover"
            quality={90}
          />

          {/* Dark overlay for video */}
          {firstItem.type === "video" && (
            <div className="absolute inset-0 bg-black/20" />
          )}

          {/* Play button for video */}
          {firstItem.type === "video" && (
            <button
              className="absolute z-[2] cursor-pointer"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 120,
                height: 120,
              }}
            >
              <svg
                width="120"
                height="118"
                viewBox="0 0 120 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer circle */}
                <ellipse
                  cx="60"
                  cy="59"
                  rx="60"
                  ry="58.74"
                  fill="#FFED00"
                />
                {/* Play triangle */}
                <path
                  d="M50 40L80 59L50 78V40Z"
                  fill="#2E2E3A"
                />
              </svg>
            </button>
          )}
        </div>

        {/* Rest of media — stacked images */}
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

              {/* Play button for video items */}
              {item.type === "video" && (
                <button
                  className="absolute z-[2] cursor-pointer"
                  style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 120,
                    height: 120,
                  }}
                >
                  <svg
                    width="120"
                    height="118"
                    viewBox="0 0 120 118"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="60"
                      cy="59"
                      rx="60"
                      ry="58.74"
                      fill="#FFED00"
                    />
                    <path
                      d="M50 40L80 59L50 78V40Z"
                      fill="#2E2E3A"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

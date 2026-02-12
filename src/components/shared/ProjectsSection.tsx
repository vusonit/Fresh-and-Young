"use client";

import Image from "next/image";
import Button from "./Button";

const projects = [
  {
    year: "2025",
    name: "ROYAL CENTRAL PARK",
    image: "/images/project-1.jpg",
    width: 468,
    height: 260,
  },
  {
    year: "2024",
    name: "Sun Feliza Suites",
    image: "/images/project-2.jpg",
    width: 830,
    height: 460,
  },
  {
    year: "2025",
    name: "VINHOMES GOLDEN CITY",
    image: "/images/project-3.jpg",
    width: 468,
    height: 260,
  },
  {
    year: "2025",
    name: "CITYMARK RESIDENCE",
    image: "/images/project-2.jpg",
    width: 468,
    height: 260,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 lg:py-32 overflow-hidden">
      {/* Header */}
      <div className="max-w-[952px] mx-auto px-6 lg:px-12 text-center mb-16">
        <h2 className="text-[32px] font-medium leading-[1.22] text-bg-light mb-6">
          Dự án nổi bật
        </h2>
        <p className="text-base font-normal leading-[135%] text-bg-light mb-10">
          Chúng tôi xem mỗi dự án là cơ hội để làm tốt hơn, nhìn khác hơn số đông và tạo nên những hình ảnh sống động có sức lan tỏa tốt.
        </p>
        <Button variant="primary" href="/projects">
          Toàn bộ dự án
        </Button>
      </div>

      {/* Projects Carousel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-0 min-w-max px-6 lg:px-[calc((100vw-1440px)/2+122px)]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 group cursor-pointer"
              style={{ width: project.width }}
            >
              {/* Image */}
              <div
                className="relative overflow-hidden bg-white"
                style={{ height: project.height }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={85}
                />
              </div>

              {/* Info */}
              <div className="mt-4">
                <p className="text-base font-normal text-bg-light">
                  {project.year}
                </p>
                <p className="text-base font-normal text-bg-light">
                  {project.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partner Logos */}
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12 mt-20">
        <div className="flex items-center justify-center gap-16 opacity-50">
          <div className="h-[50px] w-[97px] bg-white/50 rounded" />
          <div className="h-[20px] w-[97px] bg-white/50 rounded" />
          <div className="h-[23px] w-[109px] bg-white/50 rounded" />
          <div className="h-[43px] w-[72px] bg-white/50 rounded" />
          <div className="h-[50px] w-[161px] bg-white/50 rounded" />
          <div className="h-[53px] w-[68px] bg-white/50 rounded" />
        </div>
      </div>
    </section>
  );
}

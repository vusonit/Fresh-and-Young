"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

const projects = [
  {
    year: "2025",
    name: "ROYAL CENTRAL PARK",
    image: "/images/project-1.jpg",
  },
  {
    year: "2024",
    name: "Sun Feliza Suites",
    image: "/images/project-2.jpg",
  },
  {
    year: "2025",
    name: "VINHOMES GOLDEN CITY",
    image: "/images/project-3.jpg",
  },
  {
    year: "2025",
    name: "CITYMARK RESIDENCE",
    image: "/images/project-1.jpg",
  },
  {
    year: "2024",
    name: "OCEAN PARK TOWER",
    image: "/images/project-2.jpg",
  },
  {
    year: "2025",
    name: "SUNRISE VALLEY",
    image: "/images/project-3.jpg",
  },
];

export default function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Default: middle card (index 1) of each visible group is active
  const getIsActive = (index: number) => {
    if (hoveredIndex !== null) return hoveredIndex === index;
    // Default active is index 1 (middle of first visible group)
    return index === 1;
  };

  return (
    <section className="bg-black py-20 lg:py-32 overflow-hidden">
      {/* Header */}
      <div className="max-w-[952px] mx-auto px-6 lg:px-12 text-center mb-16">
        <motion.h2
          className="text-[32px] font-medium leading-[1.22] text-bg-light mb-6"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          Dự án nổi bật
        </motion.h2>
        <motion.p
          className="text-base font-normal leading-[135%] text-bg-light mb-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          Chúng tôi xem mỗi dự án là cơ hội để làm tốt hơn, nhìn khác hơn số đông và tạo nên những hình ảnh sống động có sức lan tỏa tốt.
        </motion.p>
        <Button variant="primary" href="/projects" hoverText="Tìm hiểu ngay!">
          Toàn bộ dự án
        </Button>
      </div>

      {/* Projects Carousel */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex items-end min-w-max">
          {projects.map((project, index) => {
            const isActive = getIsActive(index);

            return (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col gap-[20px] cursor-pointer transition-all duration-500 ease-in-out"
                style={{
                  width: isActive ? 830 : 468,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Info - left aligned */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                    delay: (index % 3) * 0.08,
                  }}
                  viewport={{
                    once: false,
                    margin: "-10% 0px -10% 0px",
                    amount: 0.25,
                  }}
                >
                  <p className="text-base font-normal leading-[1.35em] text-[#F4F4FA]">
                    {project.year}
                  </p>
                  <p className="text-base font-normal leading-[1.35em] text-[#F4F4FA]">
                    {project.name}
                  </p>
                </motion.div>

                {/* Image */}
                <div
                  className="relative w-full overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    height: isActive ? 460 : 260,
                  }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

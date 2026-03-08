"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface LabelSectionProps {
  label: string;
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    height?: number;
  };
}

export default function LabelSection({
  label,
  title,
  description,
  image,
}: LabelSectionProps) {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
        {/* Label */}
        <motion.p
          className="text-base font-normal leading-[1.35em] text-center text-bg-light mb-[50px]"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {label}
        </motion.p>

        {/* Title */}
        <motion.h2
          className="text-[32px] font-medium leading-[1.219em] text-center text-bg-light max-w-[952px] mx-auto mb-20"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        {description && (
          <motion.p
            className="text-base font-normal leading-[135%] text-center text-bg-light max-w-[952px] mx-auto"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Full-width image */}
      {image && (
        <div
          className="relative w-full mt-16"
          style={{ height: image.height || 800 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            quality={90}
          />
        </div>
      )}
    </section>
  );
}

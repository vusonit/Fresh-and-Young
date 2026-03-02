"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[1080px] -mt-20 overflow-hidden bg-black">
      {/* 1440px container — all layers positioned inside */}
      <div className="relative w-[1440px] h-full mx-auto">
        {/* Z-1 ── Text (behind the overlay image, shows through transparent areas) */}
        <motion.h1
          className="absolute z-[1] text-[136px] font-semibold leading-none text-bg-light text-center"
          style={{ left: 316, top: 115, width: 509 }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          About
        </motion.h1>
        <motion.h1
          className="absolute z-[1] text-[136px] font-semibold leading-none text-bg-light text-left"
          style={{ left: 721, top: 235, width: 194 }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          US
        </motion.h1>

        {/* Z-2 ── Frame 40: base building image clipped to bottom portion */}
        <div
          className="absolute z-[2] overflow-hidden"
          style={{ left: 0, top: 465, width: 1440, height: 633 }}
        >
          <Image
            src="/images/about-hero-base.jpg"
            alt=""
            width={1440}
            height={1749}
            className="absolute left-0"
            style={{ top: -704, width: 1440, height: 1749 }}
            quality={90}
          />
        </div>

        {/* Z-3 ── Transparent PNG overlay (RGBA — text bleeds through) */}
        <Image
          src="/images/about-hero-overlay.png"
          alt="About FY"
          width={1440}
          height={1739}
          className="absolute z-[3] left-0 pointer-events-none"
          style={{ top: -237, width: 1440, height: 1739 }}
          priority
          quality={90}
        />

        {/* Z-4 ── Small text (topmost layer) */}
        <motion.p
          className="absolute z-[4] text-[14px] font-normal leading-[135%] text-bg-light text-justify uppercase"
          style={{ left: 103, top: 363, width: 146 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          những Con người tận tâm tạo nên giá trị bền vững.
        </motion.p>
      </div>
    </section>
  );
}

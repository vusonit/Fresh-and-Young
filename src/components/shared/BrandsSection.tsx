"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const BRAND_ROWS = [
  [
    "logo-vinhomes-global-gate",
    "partner-logo-1",
    "partner-logo-3",
    "partner-logo-5",
    "logo-sun-feliza-suites",
  ],
  [
    "logo-sol-fairway-residences",
    "logo-royal-central-park",
    "logo-elysium-bayside",
    "logo-him-lam",
    "logo-vinhomes-dan-phuong",
  ],
  [
    "logo-citymark-residence",
    "logo-the-london",
    "logo-the-paris",
    "logo-metro-politan",
  ],
];

interface BrandsSectionProps {
  label: string;
}

export default function BrandsSection({ label }: BrandsSectionProps) {
  let globalIndex = 0;

  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
        {/* Label */}
        <motion.p
          className="text-base font-normal text-center text-bg-light mb-20 uppercase tracking-wider"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {label}
        </motion.p>

        {/* Logo rows */}
        <div className="flex flex-col gap-12">
          {BRAND_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid gap-8 md:gap-10 ${
                row.length === 5
                  ? "grid-cols-5"
                  : "grid-cols-4 max-w-[88%] mx-auto"
              }`}
            >
              {row.map((logoName) => {
                const idx = globalIndex++;
                return (
                  <motion.div
                    key={logoName}
                    className="flex items-center justify-center h-24"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                      delay: (idx % 5) * 0.04,
                    }}
                    viewport={{
                      once: false,
                      margin: "-10% 0px -10% 0px",
                      amount: 0.2,
                    }}
                  >
                    <Image
                      src={`/icons/brands-logo/${logoName}.svg`}
                      alt={logoName
                        .replace("logo-", "")
                        .replace("partner-logo-", "partner ")
                        .replace(/-/g, " ")}
                      width={180}
                      height={90}
                      className="w-auto h-full max-h-20 object-contain brightness-0 invert opacity-90"
                    />
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

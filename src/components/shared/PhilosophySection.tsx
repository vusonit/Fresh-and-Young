"use client";

import { useState } from "react";
import Image from "next/image";

type CircleId = "fy" | "rj" | "ry" | null;

interface PhilosophySectionProps {
  label?: string;
  title: string;
  description?: string | string[];
}

export default function PhilosophySection({
  label,
  title,
  description,
}: PhilosophySectionProps) {
  const [active, setActive] = useState<CircleId>(null);

  const descriptions = description
    ? Array.isArray(description)
      ? description
      : [description]
    : [];

  return (
    <section className="bg-black pt-[106px]">
      {/* Header */}
      <div className="max-w-[952px] mx-auto px-6 text-center">
        {label && (
          <p className="text-base font-normal leading-[1.35em] text-bg-light mb-[50px]">
            {label}
          </p>
        )}

        <h2 className="text-[32px] font-medium leading-[1.219em] text-bg-light mb-[80px]">
          {title}
        </h2>

        {descriptions.length > 0 && (
          <div className="mb-[80px]">
            {descriptions.map((text, i) => (
              <p
                key={i}
                className={`text-base font-normal leading-[135%] text-bg-light ${
                  i > 0 ? "mt-4" : ""
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Venn Diagram - 965x609 */}
      <div className="max-w-[965px] mx-auto px-6 pb-[106px]">
        <div className="relative w-full" style={{ aspectRatio: "965/609" }}>

          {/* z-index order: FY(1) < RJ(2) < RY(3) < all badges(10) */}

          {/* ── FY Circle (609x609) - lowest z ── */}
          <div
            className="absolute cursor-pointer z-[1]"
            style={{ left: 326, top: 0, width: 609, height: 609 }}
            onMouseEnter={() => setActive("fy")}
            onMouseLeave={() => setActive(null)}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 609 609">
              <circle
                cx="304.5"
                cy="304.5"
                r="303.5"
                fill="none"
                className="transition-all duration-300"
                stroke="#F4F4FA"
                strokeWidth={active === "fy" ? 0.5 : 0.25}
                strokeDasharray={active === "fy" ? "none" : "3 3"}
              />
            </svg>
            <p
              className={`absolute text-base text-center leading-[135%] transition-colors duration-300 ${
                active === "fy" ? "text-[#F4F4FA]" : "text-[#2E2E3A]"
              }`}
              style={{ left: 375, top: 239, width: 146 }}
            >
              Đơn vị diễn hoạ được các doanh nghiệp, chủ đầu tư hàng đầu trong, ngoài nước lựa chọn hợp tác.
            </p>
          </div>

          {/* ── RJ Circle (300x300) - mid z ── */}
          <div
            className="absolute cursor-pointer z-[2]"
            style={{ left: 29, top: 160, width: 300, height: 300 }}
            onMouseEnter={() => setActive("rj")}
            onMouseLeave={() => setActive(null)}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
              <circle
                cx="150"
                cy="150"
                r="149"
                fill="none"
                className="transition-all duration-300"
                stroke="#F4F4FA"
                strokeWidth={active === "rj" ? 0.5 : 0.25}
                strokeDasharray={active === "rj" ? "none" : "3 3"}
              />
            </svg>
            <p
              className={`absolute text-base text-center leading-[135%] transition-colors duration-300 ${
                active === "rj" ? "text-[#F4F4FA]" : "text-[#2E2E3A]"
              }`}
              style={{ left: 76, top: 117, width: 150 }}
            >
              Đơn vị sản xuất mô hình kiến trúc top 1 thế giới.
            </p>
          </div>

          {/* ── RY Circle (320x320) - highest z among circles ── */}
          <div
            className="absolute cursor-pointer z-[3]"
            style={{ left: 325, top: 150, width: 320, height: 320 }}
            onMouseEnter={() => setActive("ry")}
            onMouseLeave={() => setActive(null)}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
              <circle
                cx="160"
                cy="160"
                r="159"
                fill="none"
                className="transition-all duration-300"
                stroke="#F4F4FA"
                strokeWidth={active === "ry" ? 0.5 : 0.25}
                strokeDasharray={active === "ry" ? "none" : "3 3"}
              />
            </svg>
            <p
              className={`absolute text-base text-center leading-[135%] transition-colors duration-300 ${
                active === "ry" ? "text-[#F4F4FA]" : "text-[#2E2E3A]"
              }`}
              style={{ left: 67, top: 128, width: 185 }}
            >
              Thương hiệu liên doanh giữa RJ Models và FY.
            </p>
          </div>

          {/* ── All Badges - highest z-index, always on top ── */}

          {/* RJ Badge */}
          <div
            className="absolute z-[10] pointer-events-none w-[60px] h-[60px]"
            style={{ left: 0, top: 282 }}
          >
            <div
              className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                active === "rj"
                  ? "bg-primary"
                  : "bg-black border-[0.25px] border-white"
              }`}
            >
              <Image
                src="/icons/rj-logo.png"
                alt="RJ"
                width={26}
                height={32}
                className={`transition-all duration-300 ${
                  active === "rj" ? "brightness-0" : ""
                }`}
              />
            </div>
          </div>

          {/* RY Badge */}
          <div
            className="absolute z-[10] pointer-events-none w-[60px] h-[60px]"
            style={{ left: 295, top: 280 }}
          >
            <div
              className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                active === "ry"
                  ? "bg-primary"
                  : "bg-black border-[0.25px] border-white"
              }`}
            >
              <Image
                src="/icons/fy-logo-diagram.svg"
                alt="RY"
                width={37}
                height={23}
                className={`transition-all duration-300 ${
                  active === "ry" ? "brightness-0" : ""
                }`}
              />
            </div>
          </div>

          {/* FY Badge */}
          <div
            className="absolute z-[10] pointer-events-none w-[60px] h-[60px]"
            style={{ left: 905, top: 275 }}
          >
            <div
              className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                active === "fy"
                  ? "bg-primary"
                  : "bg-black border-[0.25px] border-white"
              }`}
            >
              <Image
                src="/icons/fy-logo-diagram.svg"
                alt="FY"
                width={34}
                height={23}
                className={`transition-all duration-300 ${
                  active === "fy" ? "brightness-0" : ""
                }`}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

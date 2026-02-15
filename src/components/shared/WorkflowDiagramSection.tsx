"use client";

import { useState } from "react";

const steps = [
  {
    number: "(01.)",
    title: "INFORMATION",
    description:
      "Khách hàng cung cấp thông tin dự án, FY phân tích và tư vấn hướng triển khai phù hợp.",
    side: "left" as const,
    labelY: 388,
    titleY: 418,
    lineX: 103,
    lineY: 420,
    lineW: 400,
    descX: 102,
    descY: 435,
    descW: 243,
    // Yellow ellipse position (from Figma)
    ellipseX: 524,
    ellipseY: 367,
    ellipseW: 393,
    ellipseH: 110,
  },
  {
    number: "(02.)",
    title: "TIMELINE",
    description:
      "Hai bên thống nhất tiến độ thực hiện, mốc bàn giao và quy trình phối hợp trước khi thực hiện dự án.",
    side: "right" as const,
    labelY: 496,
    titleY: 526,
    lineX: 1014,
    lineY: 533,
    lineW: 324,
    descX: 1153,
    descY: 548,
    descW: 184,
    ellipseX: 440,
    ellipseY: 477,
    ellipseW: 561,
    ellipseH: 111,
  },
  {
    number: "(03.)",
    title: "CAMERA & MOOD",
    description:
      "FY đề xuất góc nhìn, ánh sáng và phong cách hình ảnh phù hợp với concept kiến trúc.",
    side: "left" as const,
    labelY: 608,
    titleY: 638,
    lineX: 103,
    lineY: 643,
    lineW: 301,
    descX: 102,
    descY: 658,
    descW: 243,
    ellipseX: 418,
    ellipseY: 588,
    ellipseW: 605,
    ellipseH: 109,
  },
  {
    number: "(04.)",
    title: "DRAFT & FEEDBACK",
    description:
      "Sản phẩm thử được gửi để khách hàng phản hồi và tinh chỉnh theo yêu cầu.",
    side: "right" as const,
    labelY: 716,
    titleY: 746,
    lineX: 1016,
    lineY: 753,
    lineW: 321,
    descX: 1140,
    descY: 768,
    descW: 197,
    ellipseX: 440,
    ellipseY: 697,
    ellipseW: 561,
    ellipseH: 111,
  },
  {
    number: "(05.)",
    title: "FINAL",
    description:
      "Hình ảnh hoàn thiện được xuất với chất lượng cao nhất và bàn giao theo tiêu chuẩn đã cam kết.",
    side: "left" as const,
    labelY: 826,
    titleY: 856,
    lineX: 103,
    lineY: 863,
    lineW: 394,
    descX: 102,
    descY: 878,
    descW: 243,
    ellipseX: 524,
    ellipseY: 808,
    ellipseW: 393,
    ellipseH: 110,
  },
];

export default function WorkflowDiagramSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="relative w-full bg-dark overflow-hidden">
      <div className="relative w-[1440px] mx-auto" style={{ height: 1100 }}>
        {/* Title */}
        <h2
          className="absolute text-[32px] font-medium leading-[1.35] text-bg-light text-center uppercase"
          style={{ left: 244, top: 102, width: 954 }}
        >
          Quy trình làm việc
        </h2>

        {/* Description */}
        <p
          className="absolute text-[16px] font-normal leading-[1.35] text-bg-light text-center"
          style={{ left: 244, top: 195, width: 952 }}
        >
          Quy trình làm việc của chúng tôi được xây dựng rõ ràng và khoa học,
          nhằm đảm bảo tiến độ, chất lượng và sự phối hợp hiệu quả trong suốt
          quá trình triển khai dự án.
        </p>

        {/* Circle */}
        <div
          className="absolute rounded-full border-[0.5px] border-bg-light"
          style={{ left: 418, top: 340, width: 605, height: 605 }}
        />

        {/* Steps */}
        {steps.map((step, index) => {
          const isActive = activeStep === index;

          return (
            <div key={step.number}>
              {/* Yellow ellipse highlight — behind text */}
              <div
                className="absolute rounded-[50%] transition-all duration-300 pointer-events-none"
                style={{
                  left: step.ellipseX,
                  top: step.ellipseY,
                  width: step.ellipseW,
                  height: step.ellipseH,
                  backgroundColor: "#FFED00",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "scale(1)" : "scale(0.85)",
                }}
              />

              {/* Hover area — invisible, covers the step label zone */}
              <div
                className="absolute z-[10] cursor-pointer"
                style={{
                  left: step.ellipseX,
                  top: step.ellipseY,
                  width: step.ellipseW,
                  height: step.ellipseH,
                }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              />

              {/* Step number — centered inside circle */}
              <span
                className="absolute text-[16px] font-normal leading-[1.35] text-center transition-colors duration-300 pointer-events-none"
                style={{
                  left: 532,
                  top: step.labelY,
                  width: 378,
                  color: isActive ? "#2E2E3A" : "#F4F4FA",
                }}
              >
                {step.number}
              </span>

              {/* Step title — centered inside circle */}
              <span
                className="absolute text-[24px] font-normal leading-[1.22] text-center uppercase transition-colors duration-300 pointer-events-none"
                style={{
                  left: 532,
                  top: step.titleY,
                  width: 378,
                  color: isActive ? "#2E2E3A" : "#F4F4FA",
                }}
              >
                {step.title}
              </span>

              {/* Horizontal line */}
              <div
                className="absolute transition-all duration-300 pointer-events-none"
                style={{
                  left: step.lineX,
                  top: step.lineY,
                  width: step.lineW,
                  height: 0,
                  borderTop: isActive
                    ? "0.5px solid #F4F4FA"
                    : "0.5px solid #4a4a55",
                }}
              />

              {/* Description text */}
              <p
                className="absolute text-[16px] font-normal leading-[1.35] transition-colors duration-300 pointer-events-none"
                style={{
                  left: step.descX,
                  top: step.descY,
                  width: step.descW,
                  color: isActive ? "#F4F4FA" : "#6b6b78",
                  textAlign: step.side === "right" ? "right" : "left",
                }}
              >
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

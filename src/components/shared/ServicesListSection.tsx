"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import ArrowIcon from "./ArrowIcon";

const serviceItems = [
  {
    number: "(01.)",
    title: "Diễn hoạ 3D & ANIMATION",
    description:
      "FY tạo ra những khung hình 3D chuẩn mực, thể hiện chính xác ánh sáng, vật liệu và không gian. Animation mô phỏng dòng chảy kiến trúc một cách chân thật, giúp nâng tầm trải nghiệm trình bày và truyền tải trọn vẹn câu chuyện của dự án.",
  },
  {
    number: "(02.)",
    title: "Virtual TOUR 360 & VR/AR",
    description:
      "Trải nghiệm không gian thực tế ảo 360°, khám phá dự án từ mọi góc nhìn với công nghệ VR/AR tiên tiến.",
  },
  {
    number: "(03.)",
    title: "TVC & FILM",
    description:
      "Sản xuất video quảng cáo và phim kiến trúc chuyên nghiệp, truyền tải câu chuyện dự án một cách ấn tượng.",
  },
  {
    number: "(04.)",
    title: "SA BÀN ẢO",
    description:
      "Mô hình sa bàn ảo tương tác, cho phép khám phá dự án một cách trực quan và sinh động.",
  },
];

export default function ServicesListSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="bg-black py-20 lg:py-32">
      <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-[952px] mx-auto text-center mb-16">
          <motion.h2
            className="text-[32px] font-medium leading-[1.22] text-bg-light mb-6"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
          >
            MANG ĐẾN NHỮNG GIẢI PHÁP TỐI ƯU
          </motion.h2>
          <motion.p
            className="text-base font-normal leading-[135%] text-bg-light mb-10"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
          >
            FY mang đến hệ giải pháp visualization toàn diện, giúp nâng tầm khả năng trình bày và truyền tải giá trị kiến trúc. Từ hình ảnh tĩnh, chuyển động đến trải nghiệm ảo, mỗi sản phẩm đều được tạo ra với độ chính xác cao, sự tinh tế trong thẩm mỹ và khả năng thuyết phục mạnh mẽ.
          </motion.p>
          <Button variant="primary" href="/about" hoverText="Tìm hiểu ngay!">
            Về chúng tôi
          </Button>
        </div>

        {/* Service List */}
        <div className="w-full">
          {serviceItems.map((item, index) => (
            <motion.div
              key={index}
              className="border-t border-white/10 last:border-b last:border-white/10"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.06,
              }}
              viewport={{
                once: false,
                margin: "-15% 0px -15% 0px",
                amount: 0.25,
              }}
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? -1 : index)
                }
                className="w-full flex items-center justify-between py-8 lg:py-9 cursor-pointer group"
              >
                <div className="flex items-center gap-8 lg:gap-16">
                  <span className="text-[24px] font-normal text-bg-light">
                    {item.number}
                  </span>
                  <span className="text-[24px] font-normal text-bg-light text-left">
                    {item.title}
                  </span>
                </div>
                <div
                  className={`w-[28px] h-[28px] flex items-center justify-center transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <ArrowIcon
                    direction={expandedIndex === index ? "down" : "right"}
                  />
                </div>
              </button>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedIndex === index
                    ? "max-h-[300px] opacity-100 pb-8"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-[72px] lg:pl-[112px] max-w-[341px]">
                  <p className="text-sm font-normal leading-[135%] text-bg-light">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

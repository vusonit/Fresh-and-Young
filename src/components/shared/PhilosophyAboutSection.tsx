"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "30+", label: "NHÂN SỰ" },
  { value: "4000+", label: "HÌNH ẢNH/NĂM" },
  { value: "500+", label: "PHÚT PHIM 3D/NĂM" },
  { value: "16.000+", label: "M² KHÔNG GIAN ẢO/NĂM" },
];

export default function PhilosophyAboutSection() {
  return (
    <section className="bg-black">
      <div className="w-[1440px] max-w-full mx-auto px-[122px] pt-[106px] pb-[131px]">
        {/* Label - centered */}
        <motion.p
          className="text-base font-normal leading-[1.35em] text-center text-bg-light mb-[50px]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          TRIẾT LÝ VẬN HÀNH
        </motion.p>

        {/* Title - centered */}
        <motion.h2
          className="max-w-[952px] mx-auto text-[32px] font-medium leading-[1.219em] text-center text-bg-light mb-[80px]"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          Fresh & Young: &ldquo;Fresh minds – Young Power.&rdquo; Tư duy mới –
          Năng lượng trẻ và nghiêm túc.
        </motion.h2>

        {/* Content row: body text left + image right */}
        <div className="flex justify-between items-start mb-[80px]">
          {/* Left side - body text, left-aligned */}
          <motion.div
            className="w-[460px] text-base font-normal leading-[1.35em] text-left text-bg-light"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.3 }}
          >
            <p className="font-normal  text-2xl">Fresh Minds</p>
            <p className="mt-2">
              Chúng tôi sở hữu những nhân sự đầy năng lượng, luôn tìm kiếm góc
              nhìn khác biệt và giải pháp sáng tạo cho mỗi dự án.
            </p>

            <p className="font-normal  text-2xl mt-8">Fearless Visuals</p>
            <p className="mt-2">
              Chúng tôi không ngại phá bỏ khuôn mẫu, dám thử nghiệm và tạo ra
              những hình ảnh giàu cảm xúc, táo bạo, có chiều sâu.
            </p>

            <p className="font-normal  text-2xl mt-8">Statement</p>
            <p className="mt-2">
              Fresh & Young nơi những người trẻ dám nghĩ lớn và dám tạo ra những
              giá trị vượt chuẩn.
            </p>
          </motion.div>

          {/* Right side - image */}
          <div className="relative w-[585px] h-[466px] flex-shrink-0">
            <Image
              src="/images/about-philosophy-img.jpg"
              alt="Fresh & Young Philosophy"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-between">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-[10px]"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              viewport={{
                once: false,
                margin: "-10% 0px -10% 0px",
                amount: 0.3,
              }}
            >
              <p className="text-[64px] font-normal leading-[1.35em] text-center text-bg-light">
                {stat.value}
              </p>
              <p className="text-base font-normal leading-[1.35em] text-center uppercase text-bg-light">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

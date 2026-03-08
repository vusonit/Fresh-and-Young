"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "(01.)",
    title: "Hình ảnh chất lượng cao tiếp cận nhiều góc nhìn độc đáo",
    description:
      "Giúp dự án được thể hiện sinh động, giàu chiều sâu và tăng sức thuyết phục trong trình bày và truyền thông.",
  },
  {
    number: "(02.)",
    title: "Giải pháp trực quan toàn diện",
    description:
      "Kết hợp 3D, video, tour 360 và sa bàn ảo để truyền tải dự án nhất quán trên nhiều nền tảng và mục đích sử dụng.",
  },
  {
    number: "(03.)",
    title: "Đội ngũ trẻ nhiệt huyết – linh hoạt – chuyên nghiệp",
    description:
      "Đảm bảo khả năng phối hợp hiệu quả, phản hồi nhanh và thích ứng tốt với yêu cầu thực tế của từng dự án.",
  },
  {
    number: "(04.)",
    title: "Tư duy sáng tạo liên tục đổi mới",
    description:
      "Luôn cập nhật xu hướng và công nghệ mới để mang đến những cách thể hiện khác biệt, hiện đại và có giá trị lâu dài.",
  },
];

export default function ServiceValuesSection() {
  return (
    <section className="relative w-full bg-dark overflow-hidden">
      <div className="relative w-[1440px] mx-auto" style={{ height: 818 }}>
        {/* Title */}
        <motion.h2
          className="absolute text-[32px] font-medium leading-[1.35] text-bg-light text-center uppercase"
          style={{ left: 244, top: 102, width: 954 }}
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          Giá trị bạn nhận được khi hợp tác cùng chúng tôi
        </motion.h2>

        {/* Description */}
        <motion.p
          className="absolute text-[16px] font-normal leading-[1.35] text-bg-light text-center"
          style={{ left: 244, top: 245, width: 952 }}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          Tại FY, chúng tôi tin rằng một đối tác chuyên nghiệp không chỉ mang
          đến sản phẩm đẹp, mà còn mang lại sự an tâm trong từng giai đoạn triển
          khai.
        </motion.p>

        {/* Value items */}
        {values.map((item, index) => {
          const topY = [340, 448, 542, 650][index];
          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ left: 0, top: topY, width: 1440 }}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.07,
              }}
              viewport={{
                once: false,
                margin: "-10% 0px -10% 0px",
                amount: 0.2,
              }}
            >
              {/* Number */}
              <motion.span
                className="absolute text-[24px] font-normal leading-[1.22] text-white uppercase"
                style={{ left: 122, width: 54 }}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.07,
                }}
                viewport={{
                  once: false,
                  margin: "-10% 0px -10% 0px",
                  amount: 0.2,
                }}
              >
                {item.number}
              </motion.span>

              {/* Title */}
              <motion.h3
                className="absolute text-[24px] font-normal leading-[1.22] text-white uppercase"
                style={{ left: 244, width: 464 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.06 + index * 0.07,
                }}
                viewport={{
                  once: false,
                  margin: "-10% 0px -10% 0px",
                  amount: 0.2,
                }}
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                className="absolute text-[16px] font-normal leading-[1.35] text-white"
                style={{ left: 855, width: 463 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.12 + index * 0.07,
                }}
                viewport={{
                  once: false,
                  margin: "-10% 0px -10% 0px",
                  amount: 0.2,
                }}
              >
                {item.description}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

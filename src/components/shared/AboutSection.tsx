"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className="bg-black">
      {/* Text Content */}
      <div className="max-w-[952px] mx-auto px-6 pt-[102px] pb-[80px] text-center">
        <motion.h2
          className="text-[32px] font-medium leading-[1.35em] uppercase text-bg-light mb-[50px]"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          Kiến tạo GIÁ TRỊ qua từng khung hình
        </motion.h2>
        <motion.p
          className="text-base font-normal leading-[135%] text-bg-light mb-[50px]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          Tại FY, chúng tôi khai thác sức mạnh của mô phỏng số và kỹ thuật đồ hoạ tiên tiến để đưa kiến trúc vào một ngôn ngữ hình ảnh mạch lạc, dễ tiếp cận và giàu tính thuyết phục. Mỗi sản phẩm được tạo nên nhằm tối ưu trải nghiệm xem và gia tăng giá trị cho dự án.
        </motion.p>
        <Button variant="primary" href="/about" hoverText="Tìm hiểu ngay!">
          Về chúng tôi
        </Button>
      </div>

      {/* Full-width Image */}
      <div className="relative w-full h-[800px]">
        <Image
          src="/images/about-bg.jpg"
          alt="About FY Studio"
          fill
          className="object-cover"
          quality={90}
        />
      </div>
    </section>
  );
}

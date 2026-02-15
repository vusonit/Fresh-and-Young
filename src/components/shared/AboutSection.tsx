"use client";

import Image from "next/image";
import Button from "./Button";

export default function AboutSection() {
  return (
    <section className="bg-black">
      {/* Text Content */}
      <div className="max-w-[952px] mx-auto px-6 pt-[102px] pb-[80px] text-center">
        <h2 className="text-[32px] font-medium leading-[1.35em] uppercase text-bg-light mb-[50px]">
          Kiến tạo GIÁ TRỊ qua từng khung hình
        </h2>
        <p className="text-base font-normal leading-[135%] text-bg-light mb-[50px]">
          Tại FY, chúng tôi khai thác sức mạnh của mô phỏng số và kỹ thuật đồ hoạ tiên tiến để đưa kiến trúc vào một ngôn ngữ hình ảnh mạch lạc, dễ tiếp cận và giàu tính thuyết phục. Mỗi sản phẩm được tạo nên nhằm tối ưu trải nghiệm xem và gia tăng giá trị cho dự án.
        </p>
        <Button variant="primary" href="/about">
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

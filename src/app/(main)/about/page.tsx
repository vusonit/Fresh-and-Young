"use client";

import Image from "next/image";
import { useState } from "react";
import { AboutHero, ExhibitionSection, TeamCard } from "@/components/shared";

/* ───────── Stats Data ───────── */
const stats = [
  { value: "30+", label: "Nhân sự" },
  { value: "16.000+", label: "m² không gian ảo/năm" },
  { value: "4000+", label: "hình ảnh/năm" },
  { value: "500+", label: "phút phim 3d/năm" },
];

/* ───────── Team Data ───────── */
const teamMembers = [
  {
    name: "NGUYỄN HỮU CƯỜNG",
    title: "FOUNDER",
    description:
      "Chuyên gia chiến lược thương hiệu và phát triển sáng tạo, sở hữu nhiều năm kinh nghiệm xây dựng hình ảnh cho các doanh nghiệp ở đa dạng lĩnh vực. Cường tập trung vào tư duy hệ thống, tối ưu hiệu quả truyền thông và tạo ra các giải pháp sáng tạo có tính ứng dụng cao.",
    image: "/images/about-hero.jpg",
  },
  {
    name: "PHAN LONG BÌNH",
    title: "GIÁM ĐỐC SẢN XUẤT",
    description:
      "Bình là giám đốc sản xuất với nền tảng kỹ thuật vững chắc và khả năng xử lý hình ảnh tinh xảo. Bình luôn duy trì tư duy cải tiến, chú trọng độ chính xác và thẩm mỹ trong từng khung hình, đảm bảo sản phẩm đạt chuẩn cao nhất trước khi bàn giao.",
    image: "/images/about-hero.jpg",
  },
  {
    name: "VŨ LAN ANH",
    title: "QUẢN LÝ DỰ ÁN",
    description:
      "Lan Anh là quản lý dự án với kinh nghiệm điều phối và giám sát quy trình sản xuất hình ảnh kiến trúc ở tiêu chuẩn cao. Lan Anh sở hữu tư duy tổ chức mạch lạc, khả năng giao tiếp rõ ràng và tinh thần trách nhiệm giúp dự án vận hành trơn tru từ ý tưởng đến sản phẩm cuối cùng.",
    image: "/images/about-hero.jpg",
  },
  {
    name: "",
    title: "",
    description: "",
    image: "/images/about-hero.jpg",
  },
];

/* ───────── Brand logos placeholder ───────── */
const brandRows = [
  [89, 104, 102, 88, 100, 104, 117, 73, 63],
  [89, 104, 102, 88, 100, 104, 117, 73, 63],
];

export default function AboutPage() {
  const [activeDiagramCircle, setActiveDiagramCircle] = useState<string | null>(null);

  return (
    <>
      {/* ═══════ 1. HERO ═══════ */}
      <AboutHero />

      {/* ═══════ 2. INTRO ═══════ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1016px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[32px] font-medium leading-[1.22] text-bg-light">
            Fresh & Young là đội ngũ kiến trúc trẻ mang tư duy mới, ứng dụng công nghệ 3D, animation và
            <span className="text-text-gray-dark">
              {" "}mô phỏng không gian để tạo nên trải nghiệm hình ảnh sống động cho các dự án bất động sản.
            </span>
          </h2>
        </div>
      </section>

      {/* ═══════ 3. PHILOSOPHY - TRIẾT LÝ VẬN HÀNH ═══════ */}
      <section className="relative py-20 lg:py-28">
        <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
          {/* Label */}
          <p className="text-base font-normal text-bg-light mb-16">
            TRIẾT LÝ VẬN HÀNH
          </p>

          {/* Content row */}
          <div className="flex gap-16 items-start">
            {/* Left side - text */}
            <div className="flex-1 max-w-[560px]">
              <h2 className="text-[32px] font-medium leading-[1.22] text-bg-light mb-12">
                Fresh & Young: &ldquo;Fresh minds – Fearless visuals.&rdquo; Tư duy mới – Hình ảnh sáng tạo không giới hạn.
              </h2>

              <div className="space-y-6 text-base font-normal leading-[135%] text-bg-light">
                <div>
                  <strong className="font-medium">Fresh Minds</strong>
                  <p className="mt-2">
                    Chúng tôi sở hữu những nhân sự đầy năng lượng, luôn tìm kiếm góc nhìn khác biệt và giải pháp sáng tạo cho mỗi dự án.
                  </p>
                </div>
                <div>
                  <strong className="font-medium">Fearless Visuals</strong>
                  <p className="mt-2">
                    Chúng tôi không ngại phá bỏ khuôn mẫu, dám thử nghiệm và tạo ra những hình ảnh giàu cảm xúc, táo bạo, có chiều sâu.
                  </p>
                </div>
                <div>
                  <strong className="font-medium">Statement</strong>
                  <p className="mt-2">
                    Fresh & Young nơi những người trẻ dám nghĩ lớn và dám tạo ra những giá trị vượt chuẩn.
                  </p>
                </div>
              </div>
            </div>

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
          <div className="flex items-start gap-20 mt-20">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-[64px] font-normal leading-[1.35] text-bg-light">
                  {stat.value}
                </p>
                <p className="text-base font-normal text-bg-light mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 4. EXHIBITION ═══════ */}
      <ExhibitionSection />

      {/* ═══════ 5. TẦM NHÌN VÀ SỨ MỆNH ═══════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
          {/* Label */}
          <p className="text-base font-normal text-bg-light mb-16">
            TẦM NHÌN VÀ SỨ MỆNH
          </p>

          {/* Quote */}
          <h2 className="text-[32px] font-medium leading-[1.22] text-bg-light max-w-[952px] mb-6">
            &ldquo;Xây dựng hệ sinh thái trực quan liền mạch, kết nối hình ảnh số và mô hình vật lý.&rdquo;
          </h2>

          {/* Description */}
          <p className="text-base font-normal leading-[135%] text-bg-light max-w-[952px] mb-16">
            Fresh & Young hướng đến việc phát triển hệ sinh thái trình bày dự án toàn diện, từ diễn họa 3D, mô phỏng không gian đến sản phẩm mô hình vật lý thông qua liên doanh RY Models. Chúng tôi đồng hành cùng chủ đầu tư và các đơn vị kiến trúc bằng những công cụ trực quan hiệu quả, giúp tối ưu truyền thông, ra quyết định và trải nghiệm dự án.
          </p>
        </div>

        {/* Venn Diagram */}
        <div className="max-w-[965px] mx-auto px-6">
          <div className="relative w-full" style={{ aspectRatio: "965/609" }}>
            {/* FY Circle - Large */}
            <div
              className="absolute left-0 top-0 w-[66%] h-full cursor-pointer"
              onMouseEnter={() => setActiveDiagramCircle("fy")}
              onMouseLeave={() => setActiveDiagramCircle(null)}
            >
              <div
                className={`relative w-full h-full rounded-full border transition-colors duration-300 flex flex-col items-center justify-center ${
                  activeDiagramCircle === "fy" ? "border-bg-light" : "border-white/20"
                }`}
              >
                <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center mb-4 border transition-colors duration-300 ${
                  activeDiagramCircle === "fy" ? "bg-primary border-primary" : "bg-black border-white"
                }`}>
                  <Image
                    src="/logo/logo-fy.svg"
                    alt="FY"
                    width={34}
                    height={22}
                    className="brightness-0 invert"
                  />
                </div>
                <p className={`text-base text-center max-w-[146px] leading-[135%] transition-colors duration-300 ${
                  activeDiagramCircle === "fy" ? "text-bg-light" : "text-text-gray-dark"
                }`}>
                  Đơn vị diễn hoạ được các doanh nghiệp, chủ đầu tư hàng đầu trong, ngoài nước lựa chọn hợp tác.
                </p>
              </div>
            </div>

            {/* RJ Circle */}
            <div
              className="absolute right-0 bottom-0 w-[34%] h-[49%] cursor-pointer"
              onMouseEnter={() => setActiveDiagramCircle("rj")}
              onMouseLeave={() => setActiveDiagramCircle(null)}
            >
              <div
                className={`relative w-full h-full rounded-full border transition-colors duration-300 flex flex-col items-center justify-center ${
                  activeDiagramCircle === "rj" ? "border-bg-light" : "border-white/20"
                }`}
              >
                <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center mb-4 border transition-colors duration-300 ${
                  activeDiagramCircle === "rj" ? "bg-primary border-primary" : "bg-black border-white"
                }`}>
                  <span className="text-white text-sm font-semibold">RJ</span>
                </div>
                <p className={`text-base text-center max-w-[150px] leading-[135%] transition-colors duration-300 ${
                  activeDiagramCircle === "rj" ? "text-bg-light" : "text-text-gray-dark"
                }`}>
                  Đơn vị sản xuất mô hình kiến trúc top 1 thế giới.
                </p>
              </div>
            </div>

            {/* RY Circle */}
            <div
              className="absolute right-[5%] top-0 w-[36%] h-[52%] cursor-pointer"
              onMouseEnter={() => setActiveDiagramCircle("ry")}
              onMouseLeave={() => setActiveDiagramCircle(null)}
            >
              <div
                className={`relative w-full h-full rounded-full border transition-colors duration-300 flex flex-col items-center justify-center ${
                  activeDiagramCircle === "ry" ? "border-bg-light" : "border-white/20"
                }`}
              >
                <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center mb-4 border transition-colors duration-300 ${
                  activeDiagramCircle === "ry" ? "bg-primary border-primary" : "bg-black border-white"
                }`}>
                  <span className="text-white text-sm font-semibold">RY</span>
                </div>
                <p className={`text-base text-center max-w-[185px] leading-[135%] transition-colors duration-300 ${
                  activeDiagramCircle === "ry" ? "text-bg-light" : "text-text-gray-dark"
                }`}>
                  Thương hiệu liên doanh giữa RJ Models và FY Studio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 6. PRINCIPLES - NGUYÊN TẮC LÀM VIỆC ═══════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
          {/* Label */}
          <p className="text-base font-normal text-bg-light mb-16">
            NGUYÊN TẮC LÀM VIỆC
          </p>

          {/* Quote */}
          <h2 className="text-[32px] font-medium leading-[1.22] text-bg-light max-w-[952px] mb-6">
            &ldquo;Mọi quy trình đều hướng đến mục tiêu: hiệu quả vượt trội, chính xác tuyệt đối, chất lượng không thoả hiệp.&rdquo;
          </h2>

          {/* Description */}
          <p className="text-base font-normal leading-[135%] text-bg-light max-w-[952px]">
            Chúng tôi vận hành với tinh thần chuyên nghiệp tuyệt đối: lắng nghe rõ ràng, phản hồi nhanh chóng, triển khai chính xác và tối ưu liên tục. Mỗi dự án được tiếp cận như một thử thách mới để FY thể hiện tư duy cải tiến và khả năng sáng tạo. Sự minh bạch, trách nhiệm và tiêu chuẩn cao trong từng giai đoạn sản xuất giúp chúng tôi đảm bảo tiến độ và chất lượng ở mức xuất sắc nhất.
          </p>
        </div>

        {/* Full-width image */}
        <div className="relative w-full h-[800px] mt-16">
          <Image
            src="/images/about-principles-img.jpg"
            alt="FY Principles"
            fill
            className="object-cover"
            quality={90}
          />
        </div>
      </section>

      {/* ═══════ 7. TEAM - ĐỘI NGŨ CHUYÊN GIA ═══════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
          {/* Label */}
          <p className="text-base font-normal text-bg-light mb-16">
            ĐỘI NGŨ CHUYÊN GIA
          </p>

          {/* Quote */}
          <h2 className="text-[32px] font-medium leading-[1.22] text-bg-light max-w-[952px] mb-16">
            &ldquo;Chúng tôi hội tụ những chuyên gia giàu trải nghiệm, chuẩn mực trong tư duy và xuất sắc trong từng chi tiết.&rdquo;
          </h2>
        </div>

        {/* Team cards - horizontal scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-[25px] px-[122px] min-w-max">
            {teamMembers.map((member, i) => (
              <TeamCard
                key={i}
                name={member.name}
                title={member.title}
                description={member.description}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ 8. BRANDS ═══════ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
          {/* Label */}
          <p className="text-base font-normal text-bg-light mb-20">
            ĐƯỢC LỰA CHỌN BỞI NHỮNG THƯƠNG HIỆU HÀNG ĐẦU
          </p>

          {/* Logo grid with grayscale */}
          <div className="relative">
            {/* Logo placeholders - 9 columns x multiple rows */}
            <div className="grid grid-cols-9 gap-x-16 gap-y-12 items-center justify-items-center opacity-40">
              {Array.from({ length: 54 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[40px] w-[80px] bg-white/30 rounded"
                  style={{
                    width: `${50 + Math.random() * 50}px`,
                    height: `${20 + Math.random() * 30}px`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

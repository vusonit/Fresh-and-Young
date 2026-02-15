import Image from "next/image";

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
        <p className="text-base font-normal leading-[1.35em] text-center text-bg-light mb-[50px]">
          TRIẾT LÝ VẬN HÀNH
        </p>

        {/* Title - centered */}
        <h2 className="max-w-[952px] mx-auto text-[32px] font-medium leading-[1.219em] text-center text-bg-light mb-[80px]">
          Fresh & Young: &ldquo;Fresh minds – Fearless visuals.&rdquo; Tư duy mới – Hình ảnh sáng tạo không giới hạn.
        </h2>

        {/* Content row: body text left + image right */}
        <div className="flex justify-between items-start mb-[80px]">
          {/* Left side - body text, left-aligned */}
          <div className="w-[460px] text-base font-normal leading-[1.35em] text-left text-bg-light">
            <p className="font-medium">Fresh Minds</p>
            <p className="mt-2">
              Chúng tôi sở hữu những nhân sự đầy năng lượng, luôn tìm kiếm góc nhìn khác biệt và giải pháp sáng tạo cho mỗi dự án.
            </p>

            <p className="font-medium mt-8">Fearless Visuals</p>
            <p className="mt-2">
              Chúng tôi không ngại phá bỏ khuôn mẫu, dám thử nghiệm và tạo ra những hình ảnh giàu cảm xúc, táo bạo, có chiều sâu.
            </p>

            <p className="font-medium mt-8">Statement</p>
            <p className="mt-2">
              Fresh & Young nơi những người trẻ dám nghĩ lớn và dám tạo ra những giá trị vượt chuẩn.
            </p>
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
        <div className="flex justify-between">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-[10px]">
              <p className="text-[64px] font-normal leading-[1.35em] text-center text-bg-light">
                {stat.value}
              </p>
              <p className="text-base font-normal leading-[1.35em] text-center uppercase text-bg-light">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

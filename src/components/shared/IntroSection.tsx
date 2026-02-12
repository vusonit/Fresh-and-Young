"use client";

interface IntroSectionProps {
  headline?: string;
  mutedText?: string;
  description?: string;
}

export default function IntroSection({
  headline = "Fresh & Young là studio visualization kiến trúc, kết hợp tư duy thiết kế,",
  mutedText = " và công nghệ hình ảnh tiên tiến để xây dựng những trải nghiệm không gian trực quan, chính xác và giàu giá trị cho các dự án.",
  description = "Thành lập từ năm 2024, Fresh & Young vươn lên trở thành đơn vị diễn hoạ được các doanh nghiệp, chủ đầu tư hàng đầu trong, ngoài nước lựa chọn hợp tác. Fresh & Young luôn đem đến cho khách hàng những hình ảnh kiến trúc táo bạo, mới mẻ bằng sự kết hợp giữa sức sáng tạo trẻ, tính chuyên nghiệp chuẩn mực và khát khao truyền cảm hứng không ngừng.",
}: IntroSectionProps) {
  return (
    <section className="bg-bg-dark py-20 lg:py-32">
      <div className="max-w-[952px] mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h2 className="text-[28px] md:text-[32px] font-medium leading-[1.22] text-bg-light">
            {headline}
            <span className="text-text-gray-dark">{mutedText}</span>
          </h2>

          <p className="mt-8 text-base font-normal leading-[135%] text-bg-light max-w-[952px] mx-auto">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

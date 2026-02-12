"use client";

import Image from "next/image";

export default function PhilosophySection() {
  return (
    <section className="bg-bg-black py-20 lg:py-32">
      <div className="max-w-[952px] mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-[32px] font-medium leading-[1.22] text-bg-light mb-6">
          TẦM NHÌN VÀ SỨ MỆNH CỦA CHÚNG TÔI
        </h2>
        <p className="text-base font-normal leading-[135%] text-bg-light">
          Với vai trò là đơn vị chủ của liên doanh RY Models, hợp tác cùng RJ Models – công ty sa bàn hàng đầu thế giới, Fresh & Young Studio hướng tới việc hoàn thiện bộ giải pháp hình ảnh toàn diện, kết nối liền mạch: Từ ảnh 3D tĩnh → Animation → Tour 360 tương tác → Sa bàn ảo → SA BÀN VẬT LÝ.
        </p>
        <p className="text-base font-normal leading-[135%] text-bg-light mt-4">
          Sứ mệnh của chúng tôi là trao cho các Chủ đầu tư và các công ty kiến trúc những công cụ hình ảnh mạnh mẽ, trực quan và thuyết phục, giúp nâng cao hiệu quả truyền thông của dự án và hỗ trợ tối đa cho hoạt động bán hàng.
        </p>
      </div>

      {/* Venn Diagram */}
      <div className="max-w-[965px] mx-auto mt-16 px-6">
        <div className="relative w-full aspect-[965/609]">
          {/* FY Circle - Large */}
          <div className="absolute left-0 top-0 w-[63%] h-full">
            <div className="relative w-full h-full rounded-full border border-white/20 flex flex-col items-center justify-center">
              {/* FY Logo */}
              <div className="w-[60px] h-[60px] rounded-full bg-bg-black flex items-center justify-center mb-4">
                <Image
                  src="/logo/logo-fy.svg"
                  alt="FY"
                  width={34}
                  height={22}
                  className="brightness-0 invert"
                />
              </div>
              <p className="text-text-gray-dark text-base text-center max-w-[146px] leading-[135%]">
                Đơn vị diễn hoạ được các doanh nghiệp, chủ đầu tư hàng đầu trong, ngoài nước lựa chọn hợp tác.
              </p>
            </div>
          </div>

          {/* RJ Circle - Medium */}
          <div className="absolute right-0 bottom-0 w-[34%] h-[49%]">
            <div className="relative w-full h-full rounded-full border border-white/20 flex flex-col items-center justify-center">
              <div className="w-[60px] h-[60px] rounded-full bg-bg-black flex items-center justify-center mb-4">
                <span className="text-white text-sm font-semibold">RJ</span>
              </div>
              <p className="text-text-gray-dark text-base text-center max-w-[150px] leading-[135%]">
                Đơn vị sản xuất mô hình kiến trúc top 1 thế giới.
              </p>
            </div>
          </div>

          {/* RY Circle - Medium */}
          <div className="absolute right-[5%] top-0 w-[36%] h-[52%]">
            <div className="relative w-full h-full rounded-full border border-white/20 flex flex-col items-center justify-center">
              <div className="w-[60px] h-[60px] rounded-full bg-bg-black flex items-center justify-center mb-4">
                <span className="text-white text-sm font-semibold">RY</span>
              </div>
              <p className="text-text-gray-dark text-base text-center max-w-[185px] leading-[135%]">
                Thương hiệu liên doanh giữa RJ Models và FY Studio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

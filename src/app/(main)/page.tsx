import {
  HeroSection,
  IntroSection,
  ExhibitionSection,
  PhilosophySection,
  AboutSection,
  ServicesListSection,
  FullWidthImage,
  ProjectsSection,
  PartnerLogos,
} from "@/components/shared";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero - Full-width background image */}
      <HeroSection />

      {/* 2. Intro - Two-tone text on dark background */}
      <IntroSection />

      {/* 3. Exhibition - Tabbed service showcase with image */}
      <ExhibitionSection />

      {/* 4. Philosophy - Vision & Mission with Venn diagram */}
      <PhilosophySection
        title="TẦM NHÌN VÀ SỨ MỆNH CỦA CHÚNG TÔI"
        description={[
          "Với vai trò là đơn vị chủ của liên doanh RY Models, hợp tác cùng RJ Models – công ty sa bàn hàng đầu thế giới, Fresh & Young Studio hướng tới việc hoàn thiện bộ giải pháp hình ảnh toàn diện, kết nối liền mạch: Từ ảnh 3D tĩnh → Animation → Tour 360 tương tác → Sa bàn ảo → SA BÀN VẬT LÝ.",
          "Sứ mệnh của chúng tôi là trao cho các Chủ đầu tư và các công ty kiến trúc những công cụ hình ảnh mạnh mẽ, trực quan và thuyết phục, giúp nâng cao hiệu quả truyền thông của dự án và hỗ trợ tối đa cho hoạt động bán hàng.",
        ]}
      />

      {/* 5. About - Title, description, button + large image */}
      <AboutSection />

      {/* 6. Services List - Accordion service items */}
      <ServicesListSection />

      {/* 7. Full-width Image */}
      <FullWidthImage
        src="/images/img-fullwidth.jpg"
        alt="FY Architecture"
        height={810}
      />

      {/* 8. Projects - Featured projects carousel */}
      <ProjectsSection />

      {/* 9. Partner Logos - Auto-scrolling logo marquee */}
      <PartnerLogos />
    </>
  );
}

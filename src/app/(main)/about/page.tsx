import { AboutHero, BrandsSection, ExhibitionSection, IntroSection, LabelSection, PhilosophyAboutSection, PhilosophySection, TeamSection } from "@/components/shared";

/* ───────── Team Data ───────── */
const teamMembers = [
  {
    name: "NGUYỄN HỮU CƯỜNG",
    title: "FOUNDER",
    description:
      "Chuyên gia chiến lược thương hiệu và phát triển sáng tạo, sở hữu nhiều năm kinh nghiệm xây dựng hình ảnh cho các doanh nghiệp ở đa dạng lĩnh vực. Cường tập trung vào tư duy hệ thống, tối ưu hiệu quả truyền thông và tạo ra các giải pháp sáng tạo có tính ứng dụng cao.",
    image: "/images/team-card-3.png",
  },
  {
    name: "PHAN LONG BÌNH",
    title: "GIÁM ĐỐC SẢN XUẤT",
    description:
      "Bình là giám đốc sản xuất với nền tảng kỹ thuật vững chắc và khả năng xử lý hình ảnh tinh xảo. Bình luôn duy trì tư duy cải tiến, chú trọng độ chính xác và thẩm mỹ trong từng khung hình, đảm bảo sản phẩm đạt chuẩn cao nhất trước khi bàn giao.",
    image: "/images/team-card-2.png",
  },
  {
    name: "VŨ LAN ANH",
    title: "QUẢN LÝ DỰ ÁN",
    description:
      "Lan Anh là quản lý dự án với kinh nghiệm điều phối và giám sát quy trình sản xuất hình ảnh kiến trúc ở tiêu chuẩn cao. Lan Anh sở hữu tư duy tổ chức mạch lạc, khả năng giao tiếp rõ ràng và tinh thần trách nhiệm giúp dự án vận hành trơn tru từ ý tưởng đến sản phẩm cuối cùng.",
    image: "/images/team-card-1.png",
  },
  {
    name: "",
    title: "",
    description: "",
    image: "/images/team-card-1.png",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* ═══════ 1. HERO ═══════ */}
      <AboutHero />

      {/* ═══════ 2. INTRO ═══════ */}
      <IntroSection
        headline="Fresh & Young là đội ngũ kiến trúc trẻ mang tư duy mới, ứng dụng công nghệ 3D, animation và mô phỏng không gian để tạo nên trải nghiệm hình ảnh sống động cho các dự án bất động sản."
        description=""
      />

      {/* ═══════ 3. PHILOSOPHY - TRIẾT LÝ VẬN HÀNH ═══════ */}
      <PhilosophyAboutSection />

      {/* ═══════ 4. EXHIBITION ═══════ */}
      <ExhibitionSection />

      {/* ═══════ 5. TẦM NHÌN VÀ SỨ MỆNH ═══════ */}
      <PhilosophySection
        label="TẦM NHÌN VÀ SỨ MỆNH"
        title={"\u201CXây dựng hệ sinh thái trực quan liền mạch, kết nối hình ảnh số và mô hình vật lý.\u201D"}
        description="Fresh & Young hướng đến việc phát triển hệ sinh thái trình bày dự án toàn diện, từ diễn họa 3D, mô phỏng không gian đến sản phẩm mô hình vật lý thông qua liên doanh RY Models. Chúng tôi đồng hành cùng chủ đầu tư và các đơn vị kiến trúc bằng những công cụ trực quan hiệu quả, giúp tối ưu truyền thông, ra quyết định và trải nghiệm dự án."
      />

      {/* ═══════ 6. PRINCIPLES - NGUYÊN TẮC LÀM VIỆC ═══════ */}
      <LabelSection
        label="NGUYÊN TẮC LÀM VIỆC"
        title={"\u201CMọi quy trình đều hướng đến mục tiêu: hiệu quả vượt trội, chính xác tuyệt đối, chất lượng không thoả hiệp.\u201D"}
        description="Chúng tôi vận hành với tinh thần chuyên nghiệp tuyệt đối: lắng nghe rõ ràng, phản hồi nhanh chóng, triển khai chính xác và tối ưu liên tục. Mỗi dự án được tiếp cận như một thử thách mới để FY thể hiện tư duy cải tiến và khả năng sáng tạo. Sự minh bạch, trách nhiệm và tiêu chuẩn cao trong từng giai đoạn sản xuất giúp chúng tôi đảm bảo tiến độ và chất lượng ở mức xuất sắc nhất."
        image={{ src: "/images/about-principles-img.jpg", alt: "FY Principles", height: 800 }}
      />

      {/* ═══════ 7. TEAM - ĐỘI NGŨ CHUYÊN GIA ═══════ */}
      <TeamSection
        label="ĐỘI NGŨ CHUYÊN GIA"
        quote={"\u201CChúng tôi hội tụ những chuyên gia giàu trải nghiệm, chuẩn mực trong tư duy và xuất sắc trong từng chi tiết.\u201D"}
        members={teamMembers}
      />

      {/* ═══════ 8. BRANDS ═══════ */}
      <BrandsSection label="ĐƯỢC LỰA CHỌN BỞI NHỮNG THƯƠNG HIỆU HÀNG ĐẦU" />
    </>
  );
}

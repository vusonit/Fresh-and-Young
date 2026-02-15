import {
  SectionTitle,
  Button,
  ServiceHero,
  IntroSection,
  ExhibitionSection,
  WorkflowDiagramSection,
  ServiceValuesSection,
  ProjectsSection,
} from "@/components/shared";

const services = [
  {
    title: "3D Visualization",
    description:
      "Hình ảnh 3D chất lượng cao, chân thực và sống động. Chúng tôi sử dụng công nghệ tiên tiến nhất để tái hiện chính xác mọi chi tiết kiến trúc.",
    features: [
      "Exterior Rendering",
      "Interior Rendering",
      "Aerial View",
      "Detail Shots",
    ],
  },
  {
    title: "Animation",
    description:
      "Video animation kiến trúc chuyên nghiệp, đưa dự án của bạn đến gần hơn với khách hàng tiềm năng.",
    features: [
      "Flythrough Animation",
      "Walkthrough Animation",
      "Cinematic Presentation",
      "Product Animation",
    ],
  },
  {
    title: "Virtual Tour",
    description:
      "Trải nghiệm không gian thực tế ảo 360°, cho phép khách hàng khám phá dự án từ mọi góc nhìn.",
    features: [
      "360° Panorama",
      "Interactive Tour",
      "VR Experience",
      "Web-based Tour",
    ],
  },
  {
    title: "Masterplan",
    description:
      "Visualization quy hoạch tổng thể, giúp truyền tải tầm nhìn dự án một cách toàn diện và ấn tượng.",
    features: [
      "Site Planning",
      "Landscape Design",
      "Urban Planning",
      "Infrastructure Visualization",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <ServiceHero />

      <IntroSection
        headline="Quy trình làm việc tại Fresh & Young được xây dựng khoa học và minh bạch, kết hợp tư duy kiến trúc chuẩn xác với công nghệ hình ảnh tiên tiến để đảm bảo mỗi dự án đạt chất lượng cao nhất."
        description=""
      />

      <ExhibitionSection />

      <WorkflowDiagramSection />

      <ServiceValuesSection />

      <ProjectsSection />
    </>
  );
}

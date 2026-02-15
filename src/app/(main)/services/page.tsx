import { SectionTitle, Button } from "@/components/shared";

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
      <section className="bg-black py-20 lg:py-32 mt-20">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
            Dịch vụ
          </h1>
          <p className="text-lg md:text-xl text-text-gray max-w-2xl mx-auto">
            Giải pháp visualization toàn diện cho mọi dự án kiến trúc
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-black py-20 lg:py-32">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl md:text-4xl font-semibold text-text-dark mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-gray-dark mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li
                        key={fIndex}
                        className="flex items-center gap-2 text-text-dark"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="primary" href="/contact">
                    Tư vấn miễn phí
                  </Button>
                </div>
                <div
                  className={`bg-bg-dark h-64 lg:h-80 rounded-lg ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-text-gray">
                    [ Service Image ]
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-black py-20 lg:py-32">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12">
          <SectionTitle
            title="Quy trình làm việc"
            subtitle="Quy trình chuyên nghiệp, đảm bảo chất lượng đầu ra tốt nhất"
            align="center"
            variant="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { step: "01", title: "Tiếp nhận", desc: "Phân tích yêu cầu dự án" },
              { step: "02", title: "Lên ý tưởng", desc: "Phát triển concept sáng tạo" },
              { step: "03", title: "Thực hiện", desc: "Sản xuất và hoàn thiện" },
              { step: "04", title: "Bàn giao", desc: "Kiểm duyệt và chuyển giao" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-primary mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-text-light mb-2">
                  {item.title}
                </h3>
                <p className="text-text-gray">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-24">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-text-dark mb-6">
            Bắt đầu dự án của bạn
          </h2>
          <p className="text-lg text-text-dark/80 mb-10 max-w-2xl mx-auto">
            Liên hệ ngay để nhận báo giá và tư vấn miễn phí
          </p>
          <Button variant="white" href="/contact">
            Liên hệ ngay
          </Button>
        </div>
      </section>
    </>
  );
}

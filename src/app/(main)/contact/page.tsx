import { Button } from "@/components/shared";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black py-20 lg:py-32 mt-20">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-light mb-6">
            Liên hệ
          </h1>
          <p className="text-lg md:text-xl text-text-gray max-w-2xl mx-auto">
            Hãy kết nối với chúng tôi để bắt đầu dự án của bạn
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-black py-20 lg:py-32">
        <div className="max-w-[var(--max-width-content)] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-semibold text-text-dark mb-8">
                Thông tin liên hệ
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-text-gray-dark uppercase tracking-wider mb-2">
                    Địa chỉ
                  </h3>
                  <p className="text-lg text-text-dark">
                    Viet Tower, 1 Thái Hà, Đống Đa, Hà Nội
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-text-gray-dark uppercase tracking-wider mb-2">
                    Điện thoại
                  </h3>
                  <a
                    href="tel:+84932898222"
                    className="text-lg text-text-dark hover:text-primary transition-colors"
                  >
                    (+84) 932 898 222
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-text-gray-dark uppercase tracking-wider mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:hi@fy.com"
                    className="text-lg text-text-dark hover:text-primary transition-colors"
                  >
                    hi@fy.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-text-gray-dark uppercase tracking-wider mb-2">
                    Giờ làm việc
                  </h3>
                  <p className="text-lg text-text-dark">
                    Thứ 2 - Thứ 6: 9:00 - 18:00
                  </p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 h-64 bg-bg-dark rounded-lg flex items-center justify-center">
                <span className="text-text-gray">[ Google Map ]</span>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-semibold text-text-dark mb-8">
                Gửi tin nhắn
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Nhập họ và tên"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Dịch vụ quan tâm
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Chọn dịch vụ</option>
                    <option value="3d-visualization">3D Visualization</option>
                    <option value="animation">Animation</option>
                    <option value="virtual-tour">Virtual Tour</option>
                    <option value="masterplan">Masterplan</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Nội dung tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Mô tả yêu cầu của bạn..."
                  />
                </div>

                <Button variant="primary" type="submit" className="w-full">
                  Gửi tin nhắn
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

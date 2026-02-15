import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Main Content — 800px */}
      <section className="relative w-full bg-black overflow-hidden">
        <div className="relative w-[1440px] mx-auto" style={{ height: 800 }}>
          {/* Title */}
          <h1
            className="absolute text-[32px] font-medium leading-[1.35] text-bg-light uppercase"
            style={{ left: 122, top: 131, width: 457 }}
          >
            Chúng tôi luôn sẵn sàng kết nối!
          </h1>

          {/* Form — left side */}
          <div
            className="absolute"
            style={{ left: 122, top: 270, width: 605 }}
          >
            <ContactForm />
          </div>

          {/* Contact Info — right side */}
          <div
            className="absolute"
            style={{ left: 855, top: 270, width: 463 }}
          >
            {/* Row 1: Hotline + Website */}
            <div className="flex" style={{ gap: 60 }}>
              {/* Hotline */}
              <div className="flex flex-col gap-2" style={{ width: 184 }}>
                <span className="text-base font-normal leading-[1.22] text-white">
                  Hotline
                </span>
                <a
                  href="tel:+84932898222"
                  className="text-base font-normal leading-[1.35] text-white hover:text-primary transition-colors"
                >
                  (+84) 932 898 222
                </a>
              </div>

              {/* Website */}
              <div
                className="flex flex-col gap-2"
                style={{ width: 219 }}
              >
                <span className="text-base font-normal leading-[1.22] text-white">
                  Website
                </span>
                <a
                  href="https://fy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-normal leading-[1.35] text-white hover:text-primary transition-colors"
                >
                  fy.com
                </a>
              </div>
            </div>

            {/* Row 2: Email + Địa chỉ */}
            <div className="flex" style={{ gap: 60, marginTop: 70 }}>
              {/* Email */}
              <div className="flex flex-col gap-2" style={{ width: 184 }}>
                <span className="text-base font-normal leading-[1.22] text-white">
                  Email
                </span>
                <a
                  href="mailto:hi@fy.com"
                  className="text-base font-normal leading-[1.35] text-white hover:text-primary transition-colors"
                >
                  hi@fy.com
                </a>
              </div>

              {/* Địa chỉ */}
              <div
                className="flex flex-col gap-2"
                style={{ width: 219 }}
              >
                <span className="text-base font-normal leading-[1.22] text-white">
                  Địa chỉ
                </span>
                <span className="text-base font-normal leading-[1.35] text-white">
                  Viet Tower, 1 Thai Ha,
                  <br />
                  Dong Da, Ha Noi
                </span>
              </div>
            </div>

            {/* Row 3: Social */}
            <div style={{ marginTop: 48 }}>
              <span className="text-base font-normal leading-[1.35] text-white block mb-[13px]">
                Social
              </span>
              <div className="flex items-center gap-[15px]">
                {/* Facebook */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[30px] h-[30px] rounded-full border border-bg-light flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <svg
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                  >
                    <path
                      d="M5.2 5.6V4c0-.66.54-1.2 1.2-1.2h.6V0H5.2a3.2 3.2 0 00-3.2 3.2v2.4H0V8h2v8h3.2V8h2.4l.4-2.4H5.2z"
                      fill="#F4F4FA"
                    />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[30px] h-[30px] rounded-full border border-bg-light flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M3.1 14V4.55H0V14h3.1zM1.55 3.26c1.08 0 1.75-.72 1.75-1.63C3.28.72 2.63 0 1.57 0 .51 0 0 .72 0 1.63 0 2.54.5 3.26 1.53 3.26h.02zM4.75 14h3.1V8.7c0-.28.02-.56.1-.76.22-.56.72-1.14 1.56-1.14 1.1 0 1.54.84 1.54 2.07V14H14V8.48c0-2.96-1.58-4.33-3.68-4.33-1.72 0-2.48.96-2.9 1.62h.02V4.55H4.75c.04.86 0 9.45 0 9.45z"
                      fill="#F4F4FA"
                    />
                  </svg>
                </a>

                {/* Behance */}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[30px] h-[30px] rounded-full border border-bg-light flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                  >
                    <path
                      d="M6.22 4.7C6.82 4.22 7.14 3.5 7.14 2.64 7.14 .88 5.84 0 4.16 0H0v10h4.38c1.82 0 3.28-1.02 3.28-2.94 0-1.08-.56-2-1.44-2.36zM2.14 1.66h1.72c.72 0 1.28.34 1.28 1.12 0 .72-.44 1.14-1.14 1.14H2.14V1.66zm1.96 6.68H2.14V5.56h2.04c.88 0 1.42.48 1.42 1.38 0 .88-.62 1.4-1.5 1.4zm6.06-6.68c-2.42 0-3.74 1.72-3.74 3.84 0 2.24 1.42 3.84 3.74 3.84 1.86 0 3.02-.88 3.52-2.56h-1.76c-.16.56-.76 1-1.72 1-1.16 0-1.88-.68-2-1.8h5.58c.04-.16.06-.44.06-.72 0-2.02-1.16-3.6-3.68-3.6zm-1.82 3.1c.14-.98.78-1.62 1.82-1.62s1.62.66 1.74 1.62H8.34zM11.14 0H8.42v1.28h2.72V0z"
                      fill="#F4F4FA"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

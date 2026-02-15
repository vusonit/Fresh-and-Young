"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

const sitemapLinks = [
  { label: "Về chúng tôi", href: "/about" },
  { label: "Dịch vụ", href: "/services" },
  { label: "Dự án", href: "/projects" },
  { label: "Liên hệ", href: "/contact" },
];

const contactInfo = [
  { label: "(+84) 932 898 222", href: "tel:+84932898222" },
  { label: "hi@fy.com", href: "mailto:hi@fy.com" },
  { label: "fy.com", href: "https://fy.com" },
  { label: "Viet Tower, 1 Thai Ha, Dong Da, Ha Noi", href: "#" },
];

const networkLinks = [
  { label: "maxcreative.com", href: "https://maxcreative.com" },
  { label: "adpro.com", href: "https://adpro.com" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://behance.net",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-text-light">
      {/* Building Illustration */}
      <div className="w-full flex justify-center">
        <Image
          src="/images/building-illustration.svg"
          alt="Building Illustration"
          width={1200}
          height={300}
          className="w-full max-w-[var(--max-width-wide)] h-auto object-contain grayscale"
        />
      </div>

      {/* Footer Content */}
      <div className="max-w-[var(--max-width-wide)] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Logo & Social */}
          <div className="lg:col-span-1">
            <Logo variant="white" size="large" className="mb-6" />
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-light hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-xs font-medium text-text-light uppercase tracking-wider mb-4">
              SITEMAP
            </h4>
            <ul className="space-y-3">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bg-dark hover:opacity-80 transition-opacity text-[32px] font-semibold leading-[135%]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-medium text-text-light uppercase tracking-wider mb-4">
              LIÊN HỆ
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-text-light hover:text-primary transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div className="relative">
            <h4 className="text-xs font-medium text-text-light uppercase tracking-wider mb-4">
              MẠNG LƯỚI
            </h4>
            <ul className="space-y-3">
              {networkLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-light hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="absolute bottom-0 right-0 w-12 h-12 rounded-full border border-text-light flex items-center justify-center text-text-light hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 16V4M10 4L4 10M10 4L16 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[var(--max-width-wide)] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-light">
            <p>&copy;2025 FY. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a
                href="tel:+84932898222"
                className="hover:text-primary transition-colors"
              >
                (+84) 932 898 222
              </a>
              <a
                href="mailto:hi@fy.com"
                className="hover:text-primary transition-colors"
              >
                hi@fy.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

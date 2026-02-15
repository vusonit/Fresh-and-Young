"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { label: "Về chúng tôi", href: "/about" },
  { label: "Dịch vụ", href: "/services" },
  { label: "Dự án", href: "/projects" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"VN" | "EN">("VN");
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black ">
      <div className="w-[1440px] max-w-full mx-auto px-[122px] py-[31px] flex items-center justify-between h-[100px]">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[60px]">
          <div className="flex items-center gap-[42px]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-primary transition-colors font-normal text-[14px] leading-[135%] text-center ${
                  pathname === link.href ? "text-primary" : "text-[#F4F4FA]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setCurrentLang(currentLang === "VN" ? "EN" : "VN")}
              className="text-primary font-normal text-[14px] leading-[135%] hover:opacity-80 transition-opacity"
            >
              {currentLang === "VN" ? "VI" : "EN"}
            </button>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center w-[190px] h-[47px] hover:opacity-90 transition-opacity"
          >
            <span className="flex items-center justify-center w-[150px] h-[40px] bg-primary font-normal text-[16px] leading-[135%] text-center text-bg-dark">
              Kết nối ngay!
            </span>
            <span className="w-[40px] h-[40px] bg-primary flex items-center justify-center border-l-[0.25px] border-black">
              <Image
                src="/icons/icon_vector.svg"
                alt="Arrow"
                width={14}
                height={14}
              />
            </span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-text-light p-2"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {isMobileMenuOpen ? (
              <path d="M6 6L18 18M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 px-[122px]">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`hover:text-primary transition-colors font-normal text-[14px] leading-[135%] py-2 ${
                    pathname === link.href ? "text-primary" : "text-[#F4F4FA]"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() =>
                  setCurrentLang(currentLang === "VN" ? "EN" : "VN")
                }
                className="text-primary font-normal text-[14px] leading-[135%] text-left w-fit hover:opacity-80 transition-opacity"
              >
                {currentLang === "VN" ? "VI" : "EN"}
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center w-fit mt-2 hover:opacity-90 transition-opacity"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="flex items-center justify-center w-[150px] h-[40px] bg-primary font-normal text-[16px] leading-[135%] text-center text-bg-dark">
                  Kết nối ngay!
                </span>
                <span className="w-[40px] h-[40px] bg-primary flex items-center justify-center border-l-[0.25px] border-black">
                  <Image
                    src="/icons/icon_vector.svg"
                    alt="Arrow"
                    width={14}
                    height={14}
                  />
                </span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

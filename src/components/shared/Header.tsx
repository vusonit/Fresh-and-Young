"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";

const navLinks = [
  { label: "Về chúng tôi", href: "/about" },
  { label: "Dịch vụ", href: "/services" },
  { label: "Dự án", href: "/projects" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState<"VN" | "EN">("VN");

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[var(--max-width-wide)] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-gray hover:text-text-light transition-colors font-normal text-[14px] leading-[135%] text-center"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={() => setCurrentLang(currentLang === "VN" ? "EN" : "VN")}
              className="text-primary font-normal text-[14px] leading-[135%] hover:opacity-80 transition-opacity"
            >
              {currentLang}
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center bg-primary border-2 border-bg-dark hover:bg-primary-hover transition-colors"
            >
              <span className="font-normal text-[16px] leading-[135%] text-center text-bg-dark px-6 py-3">
                Kết nối ngay!
              </span>
              <span className="border-l-2 border-bg-dark px-4 py-3 flex items-center justify-center">
                <Image
                  src="/icons/icon_vector.svg"
                  alt="Arrow"
                  width={10}
                  height={10}
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
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-gray hover:text-text-light transition-colors font-normal text-[14px] leading-[135%] py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => setCurrentLang(currentLang === "VN" ? "EN" : "VN")}
                className="text-primary font-normal text-[14px] leading-[135%] text-left w-fit hover:opacity-80 transition-opacity"
              >
                {currentLang}
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center bg-primary border-2 border-bg-dark hover:bg-primary-hover transition-colors w-fit mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-normal text-[16px] leading-[135%] text-center text-bg-dark px-6 py-3">
                  Kết nối ngay!
                </span>
                <span className="border-l-2 border-bg-dark px-4 py-3 flex items-center justify-center">
                  <Image
                    src="/icons/icon_vector.svg"
                    alt="Arrow"
                    width={10}
                    height={10}
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

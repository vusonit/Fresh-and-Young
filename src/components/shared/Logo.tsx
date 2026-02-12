"use client";

import Image from "next/image";

interface LogoProps {
  variant?: "yellow" | "white";
  size?: "default" | "large";
  className?: string;
}

export default function Logo({ variant = "yellow", size = "default", className = "" }: LogoProps) {
  const dimensions = size === "large" ? { width: 80, height: 54 } : { width: 53, height: 36 };
  const filterClass = variant === "white" ? "brightness-0 invert" : "";

  return (
    <Image
      src="/logo/logo-fy.svg"
      alt="FY Logo"
      width={dimensions.width}
      height={dimensions.height}
      className={`${filterClass} ${className}`}
      priority
    />
  );
}

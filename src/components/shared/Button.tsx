"use client";

import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

type ButtonVariant = "primary" | "outline" | "white" | "outline-white";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  arrowPosition?: "left" | "right";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  variant = "primary",
  showArrow = true,
  arrowPosition = "right",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-3 px-6 py-3 font-medium text-base transition-all duration-200 cursor-pointer";

  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-primary text-bg-dark hover:bg-primary-hover",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-bg-dark",
    white: "bg-white text-bg-dark hover:bg-bg-light",
    "outline-white":
      "bg-transparent border border-white text-white hover:bg-white hover:text-bg-dark",
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {showArrow && arrowPosition === "left" && <ArrowIcon direction="right" />}
      <span>{children}</span>
      {showArrow && arrowPosition === "right" && <ArrowIcon direction="right" />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    if (isExternal) {
      return (
        <a href={href} className={combinedStyles} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {content}
    </button>
  );
}

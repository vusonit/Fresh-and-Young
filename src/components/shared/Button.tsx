"use client";

import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

type ButtonVariant = "primary" | "outline" | "white" | "outline-white";

interface ButtonProps {
  children: React.ReactNode;
  hoverText?: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const variantConfig: Record<
  ButtonVariant,
  { text: string; arrow: string; hoverText: string; hoverArrow: string }
> = {
  primary: {
    text: "bg-primary text-bg-dark",
    arrow: "bg-primary text-bg-dark border-l border-bg-dark/20",
    hoverText: "bg-bg-dark text-primary",
    hoverArrow: "bg-primary text-bg-dark",
  },
  outline: {
    text: "bg-transparent text-primary border-y border-r border-primary",
    arrow: "bg-transparent text-primary border border-primary",
    hoverText: "bg-primary text-bg-dark border-y border-l border-primary",
    hoverArrow: "bg-primary text-bg-dark border border-primary",
  },
  white: {
    text: "bg-white text-bg-dark",
    arrow: "bg-white text-bg-dark border-l border-bg-dark/10",
    hoverText: "bg-bg-dark text-white",
    hoverArrow: "bg-white text-bg-dark",
  },
  "outline-white": {
    text: "bg-transparent text-white border-y border-r border-white",
    arrow: "bg-transparent text-white border border-white",
    hoverText: "bg-white text-bg-dark border-y border-l border-white",
    hoverArrow: "bg-white text-bg-dark border border-white",
  },
};

export default function Button({
  children,
  hoverText,
  variant = "primary",
  showArrow = true,
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const config = variantConfig[variant];
  const hoverLabel = hoverText || children;

  const content = (
    <span className="group relative inline-flex items-stretch">
      {/* Default state: [Text] [Arrow] */}
      <span className="flex items-stretch opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <span
          className={`flex items-center px-6 py-3 font-medium text-base whitespace-nowrap ${config.text}`}
        >
          {children}
        </span>
        {showArrow && (
          <span
            className={`flex items-center justify-center w-[47px] ${config.arrow}`}
          >
            <ArrowIcon direction="right" />
          </span>
        )}
      </span>

      {/* Hover state: [Arrow] [HoverText] — overlaid */}
      <span className="absolute inset-0 flex items-stretch opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {showArrow && (
          <span
            className={`flex items-center justify-center w-[47px] ${config.hoverArrow}`}
          >
            <ArrowIcon direction="right" />
          </span>
        )}
        <span
          className={`flex items-center px-6 py-3 font-medium text-base whitespace-nowrap flex-1 ${config.hoverText}`}
        >
          {hoverLabel}
        </span>
      </span>
    </span>
  );

  const containerStyles = `inline-flex cursor-pointer ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("//");
    if (isExternal) {
      return (
        <a
          href={href}
          className={containerStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={containerStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={containerStyles}>
      {content}
    </button>
  );
}

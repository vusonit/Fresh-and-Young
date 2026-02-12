interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  variant?: "light" | "dark";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  variant = "dark",
  className = "",
}: SectionTitleProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const titleColor = variant === "light" ? "text-text-light" : "text-text-dark";
  const subtitleColor =
    variant === "light" ? "text-text-gray" : "text-text-gray-dark";

  return (
    <div className={`${alignClasses[align]} ${className}`}>
      <h2 className={`text-3xl md:text-4xl font-semibold ${titleColor} mb-4`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg ${subtitleColor} max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

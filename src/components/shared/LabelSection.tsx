import Image from "next/image";

interface LabelSectionProps {
  label: string;
  title: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    height?: number;
  };
}

export default function LabelSection({
  label,
  title,
  description,
  image,
}: LabelSectionProps) {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
        {/* Label */}
        <p className="text-base font-normal leading-[1.35em] text-center text-bg-light mb-[50px]">
          {label}
        </p>

        {/* Title */}
        <h2 className="text-[32px] font-medium leading-[1.219em] text-center text-bg-light max-w-[952px] mx-auto mb-6">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <p className="text-base font-normal leading-[135%] text-center text-bg-light max-w-[952px] mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Full-width image */}
      {image && (
        <div
          className="relative w-full mt-16"
          style={{ height: image.height || 800 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            quality={90}
          />
        </div>
      )}
    </section>
  );
}

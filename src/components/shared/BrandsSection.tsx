import Image from "next/image";

const BRAND_LOGOS = [
  "logo-citymark-residence",
  "logo-elysium-bayside",
  "logo-him-lam",
  "logo-metro-politan",
  "logo-royal-central-park",
  "logo-sol-fairway-residences",
  "logo-sun-feliza-suites",
  "logo-the-london",
  "logo-the-paris",
  "logo-vinhomes-dan-phuong",
  "logo-vinhomes-global-gate",
  "partner-logo-1",
  "partner-logo-3",
  "partner-logo-5",
];

interface BrandsSectionProps {
  label: string;
}

export default function BrandsSection({ label }: BrandsSectionProps) {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
        {/* Label */}
        <p className="text-base font-normal text-center text-bg-light mb-20">
          {label}
        </p>

        {/* Logo grid */}
        <div className="grid grid-cols-9 gap-6 md:gap-8">
          {BRAND_LOGOS.map((logoName) => (
            <div
              key={logoName}
              className="flex items-center justify-center p-2"
            >
              <Image
                src={`/icons/brands-logo/${logoName}.svg`}
                alt={logoName.replace("logo-", "").replace(/-/g, " ")}
                width={120}
                height={60}
                className="w-full h-auto max-h-12 object-contain brightness-0 invert opacity-90"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

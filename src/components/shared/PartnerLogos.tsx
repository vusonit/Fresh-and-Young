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

export default function PartnerLogos() {
  return (
    <section className="bg-black py-10 overflow-hidden">
      <div className="relative w-full h-[160px] flex items-center">
        <div className="animate-marquee flex items-center gap-[120px] whitespace-nowrap">
          {BRAND_LOGOS.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 120, height: 60 }}
            >
              <Image
                src={`/icons/brands-logo/${logo}.svg`}
                alt={logo.replace("logo-", "").replace(/-/g, " ")}
                width={120}
                height={60}
                className="w-full h-auto max-h-12 object-contain brightness-0 invert opacity-90"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {BRAND_LOGOS.map((logo, i) => (
            <div
              key={`dup-${i}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 120, height: 60 }}
            >
              <Image
                src={`/icons/brands-logo/${logo}.svg`}
                alt={logo.replace("logo-", "").replace(/-/g, " ")}
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

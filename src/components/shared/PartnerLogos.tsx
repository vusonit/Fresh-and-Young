import Image from "next/image";

const logos = [
  { src: "/icons/partner-logo-1.svg", alt: "Partner 1", width: 97, height: 50 },
  { src: "/icons/partner-logo-2.svg", alt: "Partner 2", width: 97, height: 20 },
  { src: "/icons/partner-logo-3.svg", alt: "Partner 3", width: 109, height: 23 },
  { src: "/icons/partner-logo-4.png", alt: "Partner 4", width: 72, height: 43 },
  { src: "/icons/partner-logo-5.svg", alt: "Partner 5", width: 161, height: 50 },
  { src: "/icons/partner-logo-6.svg", alt: "Partner 6", width: 68, height: 53 },
];

export default function PartnerLogos() {
  return (
    <section className="bg-black py-10 overflow-hidden">
      <div className="relative w-full h-[160px] flex items-center">
        <div className="animate-marquee flex items-center gap-[120px] whitespace-nowrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: logo.width, height: logo.height }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {logos.map((logo, i) => (
            <div
              key={`dup-${i}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: logo.width, height: logo.height }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

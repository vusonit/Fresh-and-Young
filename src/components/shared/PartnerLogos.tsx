import Image from "next/image";

const logos = [
  { src: "/icons/partner-logo-1.svg", alt: "Partner 1", width: 97, height: 50 },
  { src: "/icons/partner-logo-2.svg", alt: "Partner 2", width: 97, height: 20 },
  {
    src: "/icons/partner-logo-3.svg",
    alt: "Partner 3",
    width: 109,
    height: 23,
  },
  { src: "/icons/partner-logo-4.png", alt: "Partner 4", width: 72, height: 43 },
  {
    src: "/icons/partner-logo-5.svg",
    alt: "Partner 5",
    width: 161,
    height: 50,
  },
  { src: "/icons/partner-logo-6.svg", alt: "Partner 6", width: 68, height: 53 },
];

const BRAND_LOGOS = [
  "logo_vinhomes",
  "logo_bim_land",
  "logo_rox",
  "logo_mik_group",
  "logo_sun_property",
  "logo_vmi",
  "logo_vinhomes_market",
  "logo_the_gallery",
  "logo_sun_beauty_onsen",
  "logo_vinhomes_golden_city",
  "logo_vinhomes_royal_island",
  "logo_komorebi",
  "logo_vinhomes_global_gate",
  "logo_miyabi",
  "logo_the_union",
  "logo_the_miani",
  "logo_the_vista",
  "logo_simona",
  "logo_the_beverly",
  "logo_sun_cosmo_residence",
  "logo_felicity",
  "logo_sun_grand_city",
  "logo_glory_heights",
  "logo_beverly_2",
  "logo_origami",
  "logo_hon_thom",
  "logo_thung_lung_thanh_xuan",
  "logo_canopy_residences",
  "logo_tonkin",
  "logo_vinhomes_ocean_park",
  "logo_vinhomes_grand_park",
  "logo_ocean_city",
  "logo_vincom_royal_park",
  "logo_sun_memory_2",
  "logo_fantasy_home",
  "logo_lagoon_residences",
  "logo_bmhs_group",
  "logo_vinhomes_sky_park",
  "logo_vlasta",
  "logo_vinhomes_smart_city",
  "logo_arya_bay",
  "logo_the_zurich",
  "logo_marina_bayfront",
  "logo_skym",
  "logo_sun_memory",
  "logo_vinhomes_wonder_city",
  "logo_vinhomes_ocean_park_1",
  "logo_vinhomes_golden_river",
  "logo_the_paris_2",
  "logo_princess_manor",
  "logo_the_miyabi_2",
  "logo_aria_bay",
];

const PNG_LOGOS = new Set([
  "logo_mik_group",
  "logo_vinhomes_market",
  "logo_vinhomes_golden_river",
]);

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
                src={`/icons/brands/${logo}.${PNG_LOGOS.has(logo) ? "png" : "svg"}`}
                alt={logo.replace("logo_", "").replace(/_/g, " ")}
                width={120}
                height={60}
                className={`w-full h-auto max-h-12 object-contain ${
                  logo === "logo_sun_memory_2" || logo === "logo_the_miani"
                    ? ""
                    : "brightness-0 invert"
                } opacity-40`}
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {BRAND_LOGOS.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: 120, height: 60 }}
            >
              <Image
                src={`/icons/brands/${logo}.${PNG_LOGOS.has(logo) ? "png" : "svg"}`}
                alt={logo.replace("logo_", "").replace(/_/g, " ")}
                width={120}
                height={60}
                className={`w-full h-auto max-h-12 object-contain ${
                  logo === "logo_sun_memory_2" || logo === "logo_the_miani"
                    ? ""
                    : "brightness-0 invert"
                } opacity-40`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

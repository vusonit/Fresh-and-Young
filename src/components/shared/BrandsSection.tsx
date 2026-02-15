import Image from "next/image";

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

/* PNG logos that need .png extension instead of .svg */
const PNG_LOGOS = new Set([
  "logo_mik_group",
  "logo_vinhomes_market",
  "logo_vinhomes_golden_river",
]);

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
                src={`/icons/brands/${logoName}.${PNG_LOGOS.has(logoName) ? "png" : "svg"}`}
                alt={logoName.replace("logo_", "").replace(/_/g, " ")}
                width={120}
                height={60}
                className={`w-full h-auto max-h-12 object-contain ${
                  logoName === "logo_sun_memory_2" ||
                  logoName === "logo_the_miani"
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

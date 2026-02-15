import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative w-full h-[1080px] -mt-20 overflow-hidden bg-black">
      {/* 1440px container — all layers positioned inside */}
      <div className="relative w-[1440px] h-full mx-auto">
        {/* Z-1 ── Text (behind the overlay image, shows through transparent areas) */}
        <h1
          className="absolute z-[1] text-[136px] font-semibold leading-none text-bg-light text-center uppercase"
          style={{ left: 307, top: 85, width: 322 }}
        >
          OUR
        </h1>
        <h1
          className="absolute z-[1] text-[136px] font-semibold leading-none text-bg-light text-left uppercase"
          style={{ left: 411, top: 200, width: 694 }}
        >
          SERVICES
        </h1>

        {/* Z-2 ── Frame 40: base building image clipped to bottom portion */}
        <div
          className="absolute z-[2] left-1/2 -translate-x-1/2 overflow-hidden"
          style={{ top: 465, width: "max(1440px, 100vw)", height: 633 }}
        >
          <Image
            src="/images/service-hero-base.png"
            alt=""
            width={1588}
            height={894}
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              top: -248,
              width: "max(1588px, 110.28vw)",
              height: "auto",
            }}
            quality={90}
          />
        </div>

        {/* Z-3 ── Transparent PNG overlay (RGBA — text bleeds through) */}
        <Image
          src="/images/service-hero-building.png"
          alt="Our Services"
          width={1588}
          height={894}
          className="absolute z-[3] left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ top: 217, width: "max(1588px, 110.28vw)", height: "auto" }}
          priority
          quality={90}
        />

        {/* Z-4 ── Small text (topmost layer) */}
        <p
          className="absolute z-[4] text-[14px] font-normal leading-[135%] text-bg-light text-justify uppercase"
          style={{ left: 102, top: 363, width: 176 }}
        >
          Cung cấp Dịch vụ vượt chuẩn hướng đến giá trị bền vững.
        </p>
      </div>
    </section>
  );
}

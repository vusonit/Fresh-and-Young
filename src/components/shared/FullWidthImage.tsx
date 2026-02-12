import Image from "next/image";

interface FullWidthImageProps {
  src: string;
  alt?: string;
  height?: number;
}

export default function FullWidthImage({
  src,
  alt = "",
  height = 810,
}: FullWidthImageProps) {
  return (
    <section className="relative w-full" style={{ height }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        quality={90}
      />
    </section>
  );
}

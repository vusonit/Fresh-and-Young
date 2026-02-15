"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface IntroSectionProps {
  headline?: string;
  description?: string;
  mutedFromWord?: number;
}

function WordReveal({
  words,
  scrollYProgress,
  mutedFromWord,
}: {
  words: string[];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  mutedFromWord?: number;
}) {
  const totalWords = words.length;

  return (
    <h2 className="font-medium text-[32px] leading-[1.219em] text-center">
      {words.map((word, i) => {
        const wordStart = i / totalWords;
        const wordEnd = (i + 1) / totalWords;
        const isMuted = mutedFromWord !== undefined && i >= mutedFromWord;

        return (
          <Word
            key={i}
            word={word}
            scrollYProgress={scrollYProgress}
            range={[wordStart, wordEnd]}
            muted={isMuted}
          />
        );
      })}
    </h2>
  );
}

function Word({
  word,
  scrollYProgress,
  range,
  muted = false,
}: {
  word: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
  muted?: boolean;
}) {
  const opacity = useTransform(scrollYProgress, range, [0.25, 1]);
  const color = useTransform(
    scrollYProgress,
    range,
    muted
      ? ["rgba(46,46,58,0.25)", "rgba(46,46,58,1)"]
      : ["rgba(244,244,250,0.25)", "rgba(244,244,250,1)"]
  );

  return (
    <motion.span className="inline-block mr-[0.3em]" style={{ color, opacity }}>
      {word}
    </motion.span>
  );
}

export default function IntroSection({
  headline = "Fresh & Young là studio visualization kiến trúc, kết hợp tư duy thiết kế, và công nghệ hình ảnh tiên tiến để xây dựng những trải nghiệm không gian trực quan, chính xác và giàu giá trị cho các dự án.",
  description = "Thành lập từ năm 2024, Fresh & Young vươn lên trở thành đơn vị diễn hoạ được các doanh nghiệp, chủ đầu tư hàng đầu trong, ngoài nước lựa chọn hợp tác. Fresh & Young luôn đem đến cho khách hàng những hình ảnh kiến trúc táo bạo, mới mẻ bằng sự kết hợp giữa sức sáng tạo trẻ, tính chuyên nghiệp chuẩn mực và khát khao truyền cảm hứng không ngừng.",
  mutedFromWord,
}: IntroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.6", "center center"],
  });

  const descriptionOpacity = useTransform(scrollYProgress, [0.8, 1], [0.25, 1]);

  const words = headline.split(" ");

  return (
    <section
      ref={sectionRef}
      className="bg-black h-[478px] flex items-center justify-center"
    >
      <div className="w-[952px] max-w-full mx-auto px-6 flex flex-col items-center gap-[50px]">
        {/* Headline - scroll-driven word reveal */}
        <WordReveal words={words} scrollYProgress={scrollYProgress} mutedFromWord={mutedFromWord} />

        {/* Description - fade in with scroll */}
        {description && (
          <motion.p
            className="font-normal text-[16px] leading-[1.35em] text-center text-[#F4F4FA] h-[75px]"
            style={{ opacity: descriptionOpacity }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}

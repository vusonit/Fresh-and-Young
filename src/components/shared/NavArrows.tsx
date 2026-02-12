"use client";

interface NavArrowsProps {
  onPrev?: () => void;
  onNext?: () => void;
  className?: string;
}

export default function NavArrows({
  onPrev,
  onNext,
  className = "",
}: NavArrowsProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Previous */}
      <button
        onClick={onPrev}
        className="w-12 h-12 rounded-full border border-text-gray flex items-center justify-center text-text-gray hover:border-primary hover:text-primary transition-colors cursor-pointer"
        aria-label="Previous"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M18 6L10 14L18 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        className="w-12 h-12 rounded-full border border-text-gray flex items-center justify-center text-text-gray hover:border-primary hover:text-primary transition-colors cursor-pointer"
        aria-label="Next"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M10 6L18 14L10 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

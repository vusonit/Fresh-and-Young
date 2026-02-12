interface ArrowIconProps {
  direction?: "right" | "left" | "up" | "down";
  className?: string;
  size?: number;
}

export default function ArrowIcon({
  direction = "right",
  className = "",
  size = 20,
}: ArrowIconProps) {
  const rotations = {
    right: 0,
    down: 90,
    left: 180,
    up: 270,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: `rotate(${rotations[direction]}deg)` }}
    >
      <path
        d="M4.16669 10H15.8334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 4.16669L15.8333 10L10 15.8334"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

"use client";

interface WorkflowStepProps {
  number: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export default function WorkflowStep({
  number,
  title,
  description,
  isActive = false,
}: WorkflowStepProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Ellipse indicator */}
      <div
        className={`w-full h-[110px] rounded-[50%] border transition-colors duration-300 ${
          isActive
            ? "bg-primary border-primary"
            : "bg-transparent border-white/20"
        }`}
      />

      {/* Content */}
      <div className="flex items-start gap-4 w-full">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-base font-normal ${
                isActive ? "text-bg-dark" : "text-bg-light"
              }`}
            >
              {number}
            </span>
          </div>
          <h4
            className={`text-[24px] font-normal leading-tight mb-2 ${
              isActive ? "text-bg-dark" : "text-bg-light"
            }`}
          >
            {title}
          </h4>
        </div>

        {/* Separator line */}
        <div
          className={`flex-shrink-0 w-[1px] h-16 mt-1 ${
            isActive ? "bg-bg-light" : "bg-text-gray"
          }`}
        />

        {/* Description */}
        <p
          className={`flex-1 text-base font-normal leading-[135%] ${
            isActive ? "text-bg-light" : "text-text-gray"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

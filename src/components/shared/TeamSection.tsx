"use client";

import { TeamCard } from "@/components/shared";
import { motion } from "framer-motion";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

interface TeamSectionProps {
  label: string;
  quote: string;
  members: TeamMember[];
}

export default function TeamSection({
  label,
  quote,
  members,
}: TeamSectionProps) {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
        {/* Label */}
        <motion.p
          className="text-base font-normal text-center text-bg-light mb-16"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {label}
        </motion.p>

        {/* Quote */}
        <motion.h2
          className="text-[32px] font-medium leading-[1.22] text-center text-bg-light max-w-[952px] mx-auto mb-16"
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px", amount: 0.4 }}
        >
          {quote}
        </motion.h2>
      </div>

      {/* Team cards - horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-[25px] px-[122px] min-w-max justify-center">
          {members.map((member, i) => (
            <TeamCard
              key={i}
              name={member.name}
              title={member.title}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

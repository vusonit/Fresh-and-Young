import { TeamCard } from "@/components/shared";

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

export default function TeamSection({ label, quote, members }: TeamSectionProps) {
  return (
    <section className="bg-black py-20 lg:py-28">
      <div className="max-w-[var(--max-width-wide)] mx-auto px-[122px]">
        {/* Label */}
        <p className="text-base font-normal text-center text-bg-light mb-16">
          {label}
        </p>

        {/* Quote */}
        <h2 className="text-[32px] font-medium leading-[1.22] text-center text-bg-light max-w-[952px] mx-auto mb-16">
          {quote}
        </h2>
      </div>

      {/* Team cards - horizontal scroll */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-[25px] px-[122px] min-w-max">
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

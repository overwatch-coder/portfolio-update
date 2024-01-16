import { Skills } from "@/utils";
import Link from "next/link";
const TechStack = () => {
  return (
    <div className="overflow-x-hidden mt-16 container py-10 font-[poppins] flex flex-col gap-y-3 items-center">
      <div className="flex items-center justify-center gap-8 flex-wrap animate-marquee">
        {Skills.map((skill, idx) => (
          <Link
            href={skill.url}
            target="_blank"
            key={idx}
            className="flex flex-col items-center gap-y-2"
          >
            <skill.icon size={35} style={{ color: skill.color }} />
            <small className="font-medium">{skill.name}</small>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

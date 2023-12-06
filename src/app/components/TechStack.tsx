import { Skills } from "@/utils";
const TechStack = () => {
  return (
    <div className="overflow-x-hidden mt-16 container py-10 font-[poppins] flex flex-col gap-y-3 items-center">
      <div className="flex items-center justify-center gap-8 flex-wrap animate-marquee">
        {Skills.map((skill, idx) => (
          <span key={idx} className="flex flex-col items-center gap-y-2">
            <skill.icon size={35} className={skill.color} />
            <small className="font-medium">{skill.name}</small>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;

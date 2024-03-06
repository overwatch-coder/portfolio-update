import React from "react";
import TechStack from "../components/TechStack";

const SkillsPage = () => {
  return (
    <section className="flex flex-col space-y-5 py-10">
      <h1 className="uppercase text-start text-2xl md:text-4xl lg:text-6xl tracking-wider font-semibold text-slate-900 pb-2">
        Skills
      </h1>

      <TechStack />

      <div className="flex flex-col space-y-6 gap-5">
        <div className="flex flex-col py-5 space-y-2 flex-wrap border-b border-gray-400">
          <h3 className="uppercase font-semibold text-blue-900 md:text-xl">
            Programming Languages
          </h3>
          <p className="text-xs md:text-sm text-gray-400">
            Python, C, C++, JavaScript, PHP
          </p>
        </div>

        <div className="flex flex-col py-5 space-y-2 flex-wrap border-b border-gray-400">
          <h3 className="uppercase font-semibold text-blue-900 md:text-xl">
            Web Technologies, Libraries & Frameworks
          </h3>
          <p className="text-xs md:text-sm text-gray-400">
            HTML, CSS, Tailwind CSS, Boostsrap, React, Node.Js, NestJs, Next.Js,
            TypeScript, React Native
          </p>
        </div>

        <div className="flex flex-col py-5 space-y-2 flex-wrap">
          <h3 className="uppercase font-semibold text-blue-900 md:text-xl">
            Other Technologies & Skills
          </h3>
          <p className="text-xs md:text-sm text-gray-400">
            MySQL, Prisma, Git Version Control, SCRUM, MongoDB, Zustand, Redux
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;

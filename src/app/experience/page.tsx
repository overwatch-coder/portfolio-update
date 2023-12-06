import { Experiences } from "@/utils";
import React from "react";
import Experience from "../components/Experience";

const ExperiencePage = () => {
  return (
    <section className="flex flex-col space-y-5 py-10">
      <h1 className="uppercase text-start text-2xl md:text-4xl lg:text-6xl tracking-wider font-semibold text-slate-900 pb-2">
        Experience
      </h1>
      <div className="flex flex-col space-y-6">
        {Experiences.map((exp, idx) => (
          <Experience
            key={idx}
            title={exp.title}
            place={exp.place}
            company={exp.company}
            description={exp.description}
            date={exp.date}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperiencePage;

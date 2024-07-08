import { Projects } from "@/utils";
import Project from "../components/Project";

const ProjectsPage = () => {
  return (
    <section className="flex flex-col space-y-5 py-10">
      <h1 className="uppercase text-start text-2xl md:text-4xl lg:text-6xl tracking-wider font-semibold text-slate-900 pb-2">
        <span>Projects</span>
      </h1>

      <div className="grid grid-cols-1 gap-10">
        {Projects.map((project, idx) => (
          <Project
            name={project.name}
            subtitle={project.subtitle}
            description={project.description}
            skillset={project.skillset}
            github={project.github}
            site={project.site}
            photo={project.photo}
            key={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

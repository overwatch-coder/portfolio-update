import { Projects } from "@/utils";
import Project from "../components/Project";

const ProjectsPage = () => {
  return (
    <section className="flex flex-col space-y-5 py-10">
      <h1 className="uppercase text-start text-2xl md:text-4xl lg:text-6xl tracking-wider font-semibold text-slate-900 pb-2">
        <span>Projects</span>
      </h1>

      <div className="flex flex-col space-y-10">
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
            lastItem={idx + 1}
            length={Projects.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;

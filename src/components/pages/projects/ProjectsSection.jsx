import { Projects } from "../../../assets/data";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <section className="min-h-screen w-full bg-[#131316] flex flex-col items-center px-4 md:px-8 font-belanosima">
      {/* HEADER */}
      <div className="text-center mt-20 mb-12">
        <h1 className="font-bold text-5xl text-[#4ade80]">MY WORK</h1>

        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          I build modern, responsive front-end interfaces and interactive web
          experiences using React and modern UI technologies.
        </p>
      </div>

      {/* GRID */}
      <div
        className="
        w-full max-w-7xl
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-9
      "
      >
        {Projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

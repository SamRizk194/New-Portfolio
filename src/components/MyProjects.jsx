import { PROJECTS } from "../assets/data";

const textStyle = "text-gray-300 transition-all duration-300";
const textHoverStyle = "hover:text-[#00E609]";

const Project = ({ index, project }) => {
  return (
    <div>
      <div className="flex gap-2.5 items-center">
        <div className={`${textStyle} text-lg ${textHoverStyle}`}>
          {(index + 1).toString().padStart(2, "0")}.
        </div>
        <h4
          className={`${textStyle} ${textHoverStyle} text-2xl md:text-4xl lg:text-5xl font-bold flex items-center gap-3 mb-5`}
        >
          {project.title}
          <svg width="24" height="24">
            <path d="M18 13v6H5V8h6" stroke="currentColor" fill="none" />
            <path d="M10 14 21 3" stroke="currentColor" fill="none" />
            <path d="M15 3h6v6" stroke="currentColor" fill="none" />
          </svg>
        </h4>
      </div>

      <div
        className={`${textStyle} text-sm md:text-base mt-1 flex gap-2 flex-wrap`}
      >
        {project.techStack.map((tech, idx) => (
          <span key={tech} className={`${textHoverStyle}`}>
            {tech}
            {idx !== project.techStack.length - 1 && " • "}
          </span>
        ))}
      </div>
    </div>
  );
};

const MyProjects = () => {
  return (
    <div className="p-10 min-h-screen lg:px-50 lg:mt-40 font-anton">
      <h2 className={`${textStyle} text-3xl  mb-10`}>My Projects</h2>

      <div className="flex flex-col gap-10">
        {PROJECTS.map((project, idx) => (
          <Project key={project.slug} index={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

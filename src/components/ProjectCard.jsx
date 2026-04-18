import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="font-belanosima w-full max-w-5xl mx-auto bg-neutral-900 text-white min-h-[360px] p-5 sm:p-6 md:p-8 rounded-[25px] lg:rounded-[40px] border border-white/20 shadow-xl relative overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 md:mb-10 gap-6">
        <div className="flex items-center gap-4 sm:gap-6 w-full lg:w-auto">
          {/* project number */}
          <h2 className="text-4xl sm:text-6xl md:text-8xl tracking-tighter font-black text-white/90">
            {project.order}
          </h2>

          <div className="h-12 w-[1px] bg-white/20"></div>

          <div className="space-y-1">
            <h3 className="text-xs lg:text-[13px] font-semibold text-gray-500 uppercase tracking-widest">
              Client
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight break-words max-w-[200px] sm:max-w-md">
              {project.name}
            </p>
          </div>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto text-center px-6 py-3 border border-white/20 rounded-full text-xs font-bold uppercase hover:bg-white hover:text-black transition"
        >
          Live Project
        </a>
      </div>

      {/* الصورة */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[15px] lg:rounded-[35px] group">
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* زر العين فقط هو اللي يفتح المشروع */}
        <div className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={`/project/${project.id}`}>
            <button
              aria-label={`View details and case study for ${project.name}`}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-eye"
                aria-hidden="true"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

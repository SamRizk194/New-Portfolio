const ProjectCard = ({ project }) => {
  return (
    <div
      className={`
        relative group w-full max-w-full sm:max-w-sm mb-10
        ${project.highlight ? "bg-zinc-950 border border-white/5" : "bg-transparent"}
        rounded-[20px] sm:rounded-[24px]
        overflow-hidden shadow-lg
        transition-all duration-300
        sm:hover:scale-[1.02]
        ${project.highlight && "hover:border-[#4ade80]/30"}
      `}
    >
      {/* Image */}
      <div className="relative w-full h-44 sm:h-52 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className={`
            object-cover w-full h-full
            transition-all duration-700
            ${
              project.highlight
                ? "grayscale-[0.5] brightness-[0.6] blur-[6px] group-hover:blur-[3px]"
                : "group-hover:scale-105"
            }
          `}
        />

        {/* Overlay */}
        {!project.highlight && (
          <div className="absolute inset-0 bg-black/40 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition flex items-center justify-center">
            <button
              aria-label={`View details for ${project.name}`}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            >
              {/* Eye Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 md:w-5 md:h-5"
                aria-hidden="true"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        )}

        {/* Badge */}
        {project.badge && (
          <div className="absolute top-3 left-3 bg-black/60 px-3 py-1 rounded-full text-[10px] text-[#4ade80]">
            {project.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 text-center space-y-2">
        <h3 className="text-lg font-bold text-[#4ade80]">{project.name}</h3>

        <p className="text-sm text-gray-300 line-clamp-3">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;

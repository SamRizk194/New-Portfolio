import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Projects } from "../../../assets/data";
import { ExternalLink } from "lucide-react";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = Projects.find((p) => p.id === id);

  if (!project) return <div className="text-white p-10">Not found</div>;

  return (
    <main className="relative flex-1 min-h-screen bg-[#0c0c0e] overflow-hidden text-white">
      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgb(74, 222, 128) 1px, transparent 1px), linear-gradient(90deg, rgb(74, 222, 128) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* GLOW EFFECTS (خففنا التأثير) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#4ade80]/10 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-[#4ade80]/3 blur-[80px] rounded-full pointer-events-none z-0" />

      {/* CONTENT */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 md:mt-24 font-[belanosima] text-white">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="group text-start text-amber-400 hover:underline mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="overflow-visible"
            >
              <g className="transition-transform duration-300 group-hover:-translate-x-1">
                <path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
              </g>
              <path d="M20 9v6" />
            </svg>
          </button>

          {/* Title */}
          <div className="flex flex-col items-start w-full mt-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 tracking-tighter">
              {project.name}
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-white/60 leading-tight">
              {project.description}
            </p>
          </div>

          {/* Live Section */}
          <div className="w-full mt-8 md:mt-12">
            <section className="relative isolate bg-[#0c0c0e] w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-8 p-6 md:p-8 border border-amber-700/40 rounded-2xl backdrop-blur m-6">
              <div className="flex-1 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2 text-md text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  Live Project
                </div>

                <h2 className="text-3xl md:text-5xl font-bold">
                  Experience It Live
                </h2>

                <p className="text-white/70 max-w-xl leading-relaxed">
                  Explore the full functionality and design.
                </p>

                {project.link && (
                  <span className="text-xs text-white/40 italic">
                    {project.link}
                  </span>
                )}

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 w-fit px-6 py-3 rounded-full border border-amber-600 font-semibold text-amber-400 hover:bg-amber-600 hover:text-black transition-colors duration-300"
                >
                  Visit Live Site
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* IMAGE  */}
              <div className="relative z-20 isolate w-full md:w-[360px] h-[220px] md:h-[260px] rounded-xl overflow-hidden group bg-black">
                <img
                  src={project.image}
                  alt={project.name}
                  className="relative z-10 object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </section>
          </div>

          {/* Overview */}
          <div className="my-12 md:my-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4ade80]">
              Overview
            </h2>

            <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-4xl">
              {project.overview}
            </p>
          </div>

          {/* Achievements */}
          <div className="w-full pb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#4ade80]">
              Key Achievements
            </h2>

            <div className="flex flex-col gap-8">
              {project.achievements.map((item, i) => (
                <section
                  key={i}
                  className="group relative w-full bg-[#12161E] border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="flex-1 p-6 sm:p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                    <div className="flex flex-col gap-5">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xl md:text-2xl">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <p className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 w-full h-64 sm:h-80 md:h-auto md:w-[45%] lg:w-[50%] order-1 md:order-2 bg-black">
                    <img
                      src={item.image}
                      alt={item.text}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;

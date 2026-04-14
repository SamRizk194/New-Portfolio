import { useParams, useNavigate } from "react-router-dom";
import { Projects } from "../../../assets/data";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = Projects.find((p) => p.id === id);

  if (!project) return <div className="text-white p-10">Not found</div>;

  return (
    <main className="relative flex-1 min-h-screen bg-[#0c0c0e] overflow-hidden text-white">
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgb(74, 222, 128) 1px, transparent 1px), linear-gradient(90deg, rgb(74, 222, 128) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#4ade80]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-[#4ade80]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 font-[belanosima]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 md:mt-24">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="text-amber-400 hover:scale-110 transition mb-6"
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
            >
              <path d="M13 9a1 1 0 0 1-1-1V5.061a1 1 0 0 0-1.811-.75l-6.835 6.836a1.207 1.207 0 0 0 0 1.707l6.835 6.835a1 1 0 0 0 1.811-.75V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" />
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
            <section className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-8 p-6 md:p-8 border border-amber-700/40 rounded-2xl backdrop-blur m-6">
              <div className="flex-1 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2 text-md text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  Live Project
                </div>

                <h2 className="text-3xl md:text-5xl font-bold">
                  Experience It Live
                </h2>

                <p className="text-white/70 max-w-xl">
                  Explore the full functionality and design.
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-fit px-6 py-3 rounded-full border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-black transition"
                >
                  Visit Live Site
                </a>
              </div>

              <div className="relative w-full md:w-[360px] h-[220px] md:h-[260px] rounded-xl overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </section>
          </div>

          {/* Overview */}
          <div className="my-12 md:my-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4ade80]">
              Overview
            </h2>

            <p className="text-white/80 text-base md:text-lg max-w-4xl">
              {project.overview}
            </p>
          </div>

          {/* Achievements */}
          <div className="pb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#4ade80]">
              Key Achievements
            </h2>

            <div className="flex flex-col gap-8">
              {project.achievements.map((item, i) => (
                <section
                  key={i}
                  className="group relative w-full bg-[#12161E] border border-white/5 rounded-3xl overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="flex-1 p-6 md:p-12 flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <p className="text-white/80 mt-4">{item}</p>
                  </div>

                  <div className="relative w-full md:w-[45%] h-64 md:h-auto">
                    <img
                      src={project.image}
                      alt="achievement"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12161E] opacity-80"></div>
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

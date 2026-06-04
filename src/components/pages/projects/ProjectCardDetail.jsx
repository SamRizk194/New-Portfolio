import { useState } from "react";
import { motion } from "framer-motion";
import { Construction, Terminal } from "lucide-react";
import InceptionAlertCard from "../../animation/InceptionAlertCard";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const isHighlighted = project.highlight;
  const [showAlert, setShowAlert] = useState(false);

  // 🔥 HIGHLIGHTED CARD
  if (isHighlighted) {
    return (
      <>
        {/* ALERT */}
        {showAlert && (
          <InceptionAlertCard onClose={() => setShowAlert(false)} />
        )}

        <div
          onClick={() => setShowAlert(true)}
          className="relative group w-full max-w-full sm:max-w-sm bg-zinc-950 rounded-[24px] overflow-hidden shadow-lg border border-white/5 transition-all duration-300 sm:hover:scale-[1.02] hover:border-[#4ade80]/30 hover:shadow-[0_0_30px_rgba(74,222,128,0.05)] font-[belanosima] cursor-pointer"
        >
          {/* IMAGE */}
          <div className="relative w-full h-52 sm:h-64 overflow-hidden bg-black">
            {/* SCAN LINE */}
            <motion.div
              className="absolute left-0 right-0 h-[1px] z-30 pointer-events-none"
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 260, opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "linear",
              }}
              style={{
                background:
                  "linear-gradient(to right, transparent, #4ade80, transparent)",
                boxShadow: "0 0 10px #4ade80",
              }}
            />

            {/* IMAGE */}
            <img
              src={project.image}
              alt={project.name}
              className="object-cover w-full h-full grayscale-[0.5] contrast-[1.1] brightness-[0.6] blur-[8px] scale-110 transition-all duration-1000 group-hover:blur-[5px] group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

            {/* TOP BADGES */}
            <div className="absolute top-3 inset-x-3 flex justify-between items-start z-10">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-black/50 backdrop-blur-md rounded border border-white/10">
                <Construction className="w-3 h-3 text-[#4ade80] animate-pulse" />
                <span className="text-[9px] text-white/80 uppercase tracking-widest">
                  Dev_Mode
                </span>
              </div>

              <div className="p-1.5 bg-black/50 backdrop-blur-md rounded border border-white/10">
                <Terminal className="w-3 h-3 text-[#4ade80]/70" />
              </div>
            </div>

            {/* CENTER ICON */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="flex flex-col items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-2 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20">
                  <Construction className="w-5 h-5 text-[#4ade80]" />
                </div>

                <span className="text-white/60 text-[9px] uppercase tracking-[0.2em] font-bold">
                  Architecture_Phase
                </span>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="p-3 sm:p-4 flex flex-col gap-3 bg-zinc-950">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#4ade80] flex items-center justify-between">
                <span>{project.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-ping" />
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 leading-snug line-clamp-3 mt-1.5">
                {project.description}
              </p>
            </div>

            <div className="flex flex-col gap-1.5 pt-1 border-t border-white/5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/90 font-bold uppercase">
                  Core Setup
                </span>
                <span className="text-[9px] text-white/40 uppercase">Live</span>
              </div>

              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-[8%] bg-[#4ade80] shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // 🟢 NORMAL CARD
  return (
    <div className="relative group w-full max-w-full sm:max-w-sm mb-10 bg-transparent rounded-[20px] sm:rounded-[24px] overflow-hidden shadow-lg transition-all duration-300 sm:hover:scale-[1.02]">
      <div className="relative w-full h-44 sm:h-52 md:h-64 overflow-hidden">
        {/* IMAGE LINK فقط */}
        <Link to={`/project/${project.id}`}>
          <img
            src={project.image}
            alt={project.name}
            className="object-cover w-full h-full transition-all duration-700 group-hover:scale-105"
          />
        </Link>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition flex items-center justify-center">
          <Link
            to={`/project/${project.id}`}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </Link>
        </div>
      </div>

      {/* CONTENT */}
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

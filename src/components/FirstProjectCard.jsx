import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Construction, Terminal } from "lucide-react";
import InceptionAlertCard from "../components/animation/InceptionAlertCard";

function FirstProjectCard({ project }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-5 lg:mb-15 font-belanosima">
      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <InceptionAlertCard onClose={() => setOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= CARD ================= */}
      <div className="group relative w-full max-w-5xl mx-auto min-h-[360px] p-5 sm:p-6 md:p-8 rounded-[25px] lg:rounded-[40px] border border-[#22ff88]/40 bg-[#0c0c0e] shadow-[0_0_35px_rgba(34,255,136,0.08)] overflow-hidden">
        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#22ff88 1px, transparent 1px), linear-gradient(90deg, #22ff88 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* SCAN LINE */}
        <motion.div
          initial={{ top: "-20px" }}
          animate={{ top: "calc(100% + 20px)" }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="pointer-events-none absolute left-0 w-full h-[2px] z-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, #22ff88, transparent)",
            boxShadow: "0 0 14px #22ff88, 0 0 40px #22ff88",
            filter: "blur(0.3px)",
          }}
        />

        {/* HEADER */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 md:mb-10 gap-6">
          <div className="flex items-center gap-4 sm:gap-6 w-full lg:w-auto">
            <h2 className="text-4xl sm:text-6xl md:text-8xl tracking-tighter font-black text-[#22ff88]/30">
              01
            </h2>

            <div className="h-12 w-[1px] bg-white/20" />

            <div className="space-y-1">
              <div className="flex items-center gap-2 animate-pulse">
                <h3 className="text-xs font-semibold uppercase text-gray-500 tracking-widest">
                  System_Deploying
                </h3>
                <Construction className="text-[#22ff88] w-4 h-4" />
              </div>

              <p className="text-[#22ff88] text-xl font-medium drop-shadow-[0_0_4px_#22ff88]">
                {project.name}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md rounded-lg border border-[#22ff88]/40 text-[#22ff88] font-mono text-[10px] sm:text-xs shadow-[0_0_8px_#22ff8840]">
            <Terminal className="w-4 h-4 drop-shadow-[0_0_6px_#22ff88]" />
            STATUS: COMPILING…
          </div>
        </div>

        {/* IMAGE */}
        <div
          className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden rounded-[15px] lg:rounded-[35px] bg-zinc-900 group"
          onClick={() => setOpen(true)}
        >
          <motion.img
            src={project.image}
            alt={project.name}
            loading="lazy"
            decoding="async"
            className="
              absolute inset-0 w-full h-full object-cover
              grayscale opacity-40 contrast-125
              transition-transform duration-700 ease-out
              group-hover:scale-105
            "
          />

          {/* IMAGE OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-[#22ff88]/5
              shadow-[inset_0_0_80px_rgba(34,255,136,0.15)]
              opacity-0
              transition-opacity duration-500
              group-hover:opacity-100
              z-10
            "
          />

          {/* CENTER ICON (FIXED CENTER) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="flex flex-col items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              <div className="p-2 rounded-full bg-[#22ff88]/10 border border-[#22ff88]/20">
                <Construction className="w-5 h-5 text-[#22ff88]" />
              </div>

              <span className="text-white/60 text-[9px] uppercase tracking-[0.2em] font-bold">
                Architecture_Phase
              </span>
            </div>
          </div>

          {/* OVERLAY CONTENT */}
          <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 p-3 md:p-4 bg-zinc-900/80 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/5 z-20">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-white text-xs sm:text-sm md:text-base font-bold">
                  In-Progress Build
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#22ff88] shadow-[0_0_6px_#22ff88]"></span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <div className="h-1 w-4 sm:w-5 rounded-full bg-[#22ff88]"></div>
                  <div className="h-1 w-4 sm:w-5 rounded-full bg-[#22ff88]"></div>
                  <div className="h-1 w-4 sm:w-5 rounded-full bg-[#22ff88]"></div>
                  <div className="h-1 w-4 sm:w-5 rounded-full bg-white/10"></div>
                  <div className="h-1 w-4 sm:w-5 rounded-full bg-white/10"></div>
                </div>

                <span className="text-[10px] font-mono text-[#22ff88] uppercase">
                  v0.1
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstProjectCard;

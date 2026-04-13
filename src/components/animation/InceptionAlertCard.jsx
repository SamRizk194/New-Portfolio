import { useEffect } from "react";
import { X, RefreshCcw, Sparkles, Cpu, Orbit, Binary } from "lucide-react";
import { motion } from "framer-motion";

const InceptionAlertCard = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.overflowX = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "auto";
    };
  }, []);

  return (
    <>
      {/* Overlay */}
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />

      {/* Wrapper */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-x-hidden">
        {/* Card (slide from bottom → top) */}
        <motion.div
          initial={{ opacity: 0, y: 70, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full max-w-lg min-w-[320px] bg-[#0c0c0e]/95 border-t sm:border border-white/10 rounded-t-[40px] sm:rounded-[40px] p-7 sm:p-10 overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.6)] backdrop-blur-[24px]"
        >
          {/* glow blobs */}
          <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#4ade80]/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4ade80]/5 blur-[80px] rounded-full" />
          <div className="absolute -bottom-8 -left-8 text-[130px] font-black text-white/[0.02] uppercase select-none">
            Loop
          </div>

          {/* header */}
          <div className="relative flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                <span className="text-[10px] font-bold tracking-[0.35em] text-rose-500 uppercase">
                  Critical Logic Failure
                </span>
              </div>

              <p className="text-[9px] text-zinc-600 font-mono uppercase">
                KERNEL_RECURSION_ERROR_V.2.6
              </p>
            </div>

            <button
              onClick={onClose}
              className="hidden sm:flex p-2.5 rounded-2xl border border-white/5 bg-white/5 hover:bg-[#4ade80] hover:text-black transition"
            >
              <X size={16} />
            </button>
          </div>

          {/* center animation */}
          <div className="flex justify-center py-6 relative">
            <div className="relative">
              <div className="absolute -inset-7 border border-dashed border-[#4ade80]/20 rounded-full animate-spin-slow" />

              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 flex items-center justify-center">
                <RefreshCcw className="w-8 h-8 sm:w-9 sm:h-9 text-[#4ade80] animate-spin" />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-2 -right-2 bg-zinc-900 border border-white/10 p-2 rounded-xl"
              >
                <Sparkles className="w-4 h-4 text-[#4ade80]" />
              </motion.div>
            </div>
          </div>

          {/* title */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter">
              Inception <span className="text-[#4ade80]">Alert!</span>
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base">
              You're trying to open the{" "}
              <span className="text-white font-bold italic">portfolio</span>{" "}
              while you're already{" "}
              <span className="text-[#4ade80] underline">inside</span> it.
            </p>

            <p className="text-zinc-600 text-xs italic">
              "Reality.exe has stopped responding."
            </p>
          </div>

          {/* terminal */}
          <div className="bg-black/80 rounded-2xl p-4 border border-white/5 font-mono text-[10px] space-y-1.5 mt-6">
            <p className="text-[#4ade80]">&gt; scanning_reality...</p>
            <p className="text-blue-400">
              &gt; match_found: emad-portfolio.vercel.app
            </p>
            <p className="text-rose-500">
              &gt; error: USER_TRYING_TO_ENTER_SAME_DIMENSION
            </p>

            <p className="text-zinc-500">
              &gt; solution:{" "}
              <span className="text-white">Look around you.</span>
            </p>
          </div>

          {/* progress */}
          <div className="mt-5 space-y-2">
            <div className="flex justify-between text-[10px] text-zinc-600 uppercase">
              <span>Breaking Matrix...</span>
              <span>100%</span>
            </div>

            <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
              <div className="h-full bg-[#4ade80] animate-pulse" />
            </div>
          </div>

          {/* footer */}
          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3 items-center mt-4">
            <button className="w-full py-4 rounded-2xl bg-[#4ade80] text-black font-black uppercase text-xs tracking-[0.25em] hover:bg-[#22c55e] transition">
              Fair enough, I'm home.
            </button>

            <div className="flex items-center gap-3 text-[10px] text-zinc-700 uppercase font-black tracking-widest">
              <span className="flex items-center gap-1">
                <Cpu size={11} /> V2.0
              </span>
              <span className="w-1 h-1 bg-zinc-800 rounded-full" />
              <span className="flex items-center gap-1">
                <Orbit size={11} /> ∞
              </span>
              <span className="w-1 h-1 bg-zinc-800 rounded-full" />
              <span className="flex items-center gap-1">
                <Binary size={11} /> 010101
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default InceptionAlertCard;

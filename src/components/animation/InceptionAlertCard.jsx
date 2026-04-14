import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { X, RefreshCcw, Sparkles, Cpu, Orbit, Binary } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const InceptionAlertCard = ({ onClose }) => {
  const [progress, setProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const requestRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const speed = 0.4;

    const animate = () => {
      setProgress((prev) => {
        const next = prev + speed;
        return next >= 100 ? 0 : next;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
  };

  return createPortal(
    <AnimatePresence
      onExitComplete={() => {
        if (isClosing) onClose();
      }}
    >
      {!isClosing && (
        <>
          {/* blink animation */}
          <style>{`
            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0; }
            }
            .blink {
              animation: blink 1s infinite;
            }
          `}</style>

          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Wrapper */}
          <div className="font-belanosima fixed inset-0 z-[9999] flex items-center justify-center px-4 isolate">
            <motion.div
              initial={{ opacity: 0, y: 70, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{
                opacity: 0,
                y: 50,
                scale: 0.92,
                filter: "blur(6px)",
              }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg min-w-[320px] 
              bg-[#0c0c0e] border border-white/10 rounded-[40px] 
              p-7 sm:p-10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
            >
              {/* glow */}
              <div className="absolute -top-24 -left-24 w-60 h-60 bg-[#4ade80]/10 blur-[100px] rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#4ade80]/5 blur-[80px] rounded-full" />

              {/* watermark */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none">
                <p className="text-[120px] font-black uppercase text-[#4ade80]/5 select-none leading-none">
                  Oops
                </p>
              </div>

              <div className="relative space-y-6 sm:space-y-7">
                {/* header */}
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
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

                  {/* X button */}
                  <button
                    onClick={handleClose}
                    className="hidden sm:flex p-2.5 rounded-2xl border border-white/10 bg-white/5 
                    hover:bg-[#4ade80] hover:border-[#4ade80] transition group"
                  >
                    <X
                      size={16}
                      className="text-white group-hover:text-black transition-colors duration-200"
                    />
                  </button>
                </div>

                {/* loader */}
                <div className="flex justify-center py-1">
                  <div className="relative">
                    <div className="absolute -inset-7 border border-dashed border-[#4ade80]/20 rounded-full animate-spin-slow" />

                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/20 flex items-center justify-center">
                      <RefreshCcw className="text-[#4ade80] w-8 h-8 sm:w-9 sm:h-9 animate-spin" />
                    </div>

                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -top-2 -right-2 bg-zinc-900 border border-white/10 p-2 rounded-xl shadow-xl"
                    >
                      <Sparkles className="text-[#4ade80] w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* title */}
                <div className="text-center space-y-2">
                  <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tighter">
                    Inception <span className="text-[#4ade80]">Alert!</span>
                  </h2>

                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                    You're trying to open the{" "}
                    <span className="text-white font-bold italic">
                      portfolio
                    </span>{" "}
                    while you're already{" "}
                    <span className="text-[#4ade80] underline decoration-[#4ade80]/30 underline-offset-4">
                      inside
                    </span>{" "}
                    the portfolio.
                  </p>

                  <p className="text-zinc-600 text-xs italic">
                    "Reality.exe has stopped responding."
                  </p>
                </div>

                {/* terminal */}
                <div className="bg-black/80 rounded-2xl p-4 border border-white/5 font-mono text-[10px] space-y-1.5">
                  <p className="text-[#4ade80]">&gt; scanning_reality...</p>
                  <p className="text-blue-400">
                    &gt; match_found: sameh-folio.netlify.app
                  </p>
                  <p className="text-rose-500">
                    &gt; error: USER_TRYING_TO_ENTER_THE_SAME_DIMENSION
                  </p>

                  <p className="text-zinc-500">
                    &gt; solution:
                    <span className="text-white blink font-bold">
                      {" "}
                      Look around you, habibi.
                    </span>
                  </p>
                </div>

                {/* progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                    <span>Breaking Matrix...</span>
                    <span>{Math.floor(progress)}%</span>
                  </div>

                  <div className="h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-[#4ade80] shadow-[0_0_8px_rgba(74,222,128,0.4)]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* footer */}
                <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
                  <button
                    onClick={handleClose}
                    className="w-full py-4 rounded-2xl bg-[#4ade80] text-black font-black uppercase text-xs tracking-[0.25em] hover:bg-[#22c55e] active:scale-95 transition"
                  >
                    Fair enough, I'm home.
                  </button>

                  <div className="flex items-center gap-3 text-[10px] text-zinc-700 uppercase font-black tracking-widest shrink-0">
                    <span className="flex items-center gap-1">
                      <Cpu size={11} /> V2.0
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                    <span className="flex items-center gap-1">
                      <Orbit size={11} /> ∞
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-800" />
                    <span className="flex items-center gap-1">
                      <Binary size={11} /> 010101
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default InceptionAlertCard;

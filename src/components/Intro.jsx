import { motion } from "framer-motion";

export default function Intro({ onFinish }) {
  const text = "SAMEH Dev";

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { y: 50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.05,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: text.length * 0.05 + 1, duration: 1.5 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 bg-black flex justify-center items-center z-50"
    >
      <motion.h1
        className="flex text-[4.5rem] md:text-[9rem] font-anton"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letter}
            className="inline-block text-white font-semibold"
            style={{
              transform: "scaleY(4)",
              textShadow: "0 0 4px rgba(255,255,255,0.4)",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}

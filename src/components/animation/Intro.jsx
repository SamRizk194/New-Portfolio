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
    exit: {
      transition: {
        staggerChildren: 0.01,
        staggerDirection: -1,
      },
    },
  };

  const letter = {
    hidden: { y: "100%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.05, ease: "easeIn" },
    },
  };

  const column = {
    animate: (i) => ({
      y: "100%",
      transition: { delay: 1 + i * 0.08, duration: 0.6, ease: "easeInOut" },
    }),
  };

  return (
    <motion.div
      className="fixed inset-0 flex z-50 bg-transparent overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.1 }}
      onAnimationComplete={onFinish}
    >
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={column}
          animate="animate"
          className="h-full w-[10%] bg-black"
        />
      ))}

      <motion.h1
        className="absolute flex text-[4rem] md:text-[9rem] font-anton font-bold text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {text.split("").map((char, i) => (
          <motion.span key={i} variants={letter} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>
    </motion.div>
  );
}

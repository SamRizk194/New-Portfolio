import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Arrow from "./animation/Arrow";

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-70% 0px -30% 0px" }); // بدأ الاختفاء بدري
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ y: 0, opacity: 1, transition: { duration: 0.6 } });
    } else {
      controls.start({ y: -50, opacity: 0.5, transition: { duration: 0.6 } });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 0, opacity: 1 }} // ظاهر من البداية
      animate={controls}
      className="relative w-full h-[105vh] sm:h-[90vh] pt-0.5 pl-0 sm:pt-0 lg:pt-11 lg:pl-0 xl:pl-48"
    >
      <div className="max-w-[600px] flex flex-col gap-6 mt-30 ml-4 max-md:mt-[600px] xl:mt-50">
        <h1 className="text-[4.5rem] md:text-[5rem] leading-[0.9]">
          <span className="flex primary font-anton mb-1 ">FRONTEND</span>
          <span className="flex ml-4 foreground font-anton">DEVELOPER</span>
        </h1>

        <p className="my-3 text-left text-lg muted-foreground">
          Hi! I'm <span className="font-semibold foreground">Sameh</span>,
          creative Frontend Developer with experience in building
          high‑performance, scalable and responsive web solutions.
        </p>

        <a
          href="#about-me"
          className="group relative w-max px-8 py-3 tracking-widest text-lg font-anton
         text-black bg-[#00e65c] overflow-hidden flex items-center justify-center"
        >
          <span className="relative z-10">ABOUT ME</span>
          <span
            className="absolute bottom-0 w-[300%] h-[600%] bg-white translate-y-full
           group-hover:translate-y-0
           transition-transform duration-[400ms] group-hover:duration-[1500ms] ease-in-out
           rounded-t-[50%] z-0"
          ></span>
        </a>
      </div>

      <Arrow />
    </motion.div>
  );
};

export default Hero;

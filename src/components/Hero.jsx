import Arrow from "./animation/Arrow";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 70%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      tl.fromTo(
        ".slide-up-and-fade",
        { y: 0 },
        { y: -150, opacity: 0, stagger: 0.02 }
      );
    },
    { scope: containerRef }
  );

  return (
    <section className="relative overflow-hidden pl-4 xl:pl-48" id="banner">
      <Arrow />
      <div
        className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
        ref={containerRef}
      >
        <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
          <h1 className="slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
            <span className="primary">FRONTEND</span>
            <br /> <span className="ml-4 foreground">DEVELOPER</span>
          </h1>

          <p className="banner-description slide-up-and-fade mt-6 text-lg muted-foreground pb-9">
            Hi! I'm
            <span className="font-medium foreground"> Sameh</span>, A creative
            Frontend Developer with experience in building high-performance,
            scalable and responsive web solutions.
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

        <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton primary mb-1.5">
              3+
            </h5>
            <p className="muted-foreground">Years of Experience</p>
          </div>

          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton primary mb-1.5">
              7+
            </h5>
            <p className="muted-foreground">Completed Projects</p>
          </div>

          <div className="slide-up-and-fade">
            <h5 className="text-3xl sm:text-4xl font-anton primary mb-1.5">
              10K+
            </h5>
            <p className="muted-foreground">Hours Worked</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";
// import Arrow from "./animation/Arrow";

// const Hero = () => {
//   const controls = useAnimation();

//   useEffect(() => {
//     // تشغيل الحركة مرة واحدة عند التحميل
//     controls.start({
//       y: 0,
//       opacity: 1,
//       transition: { duration: 0.8, ease: "easeOut" },
//     });
//   }, [controls]);

//   return (
//     <motion.div
//       initial={{ y: 20, opacity: 0 }} // يبدأ مخفي شوية لتحت
//       animate={controls}
//       className="relative w-full h-[105vh] sm:h-[95vh] md:h-[77vh] lg:h-[84vh] xl:h-[95vh] pt-0.5 pl-0 sm:pt-0 lg:pt-11 lg:pl-0 xl:pl-48"
//     >
//       <div className="max-w-[600px] flex flex-col gap-6 mt-30 ml-4 xl:mt-50">
//         <h1 className="text-[4.5rem] md:text-[5rem] leading-[0.9]">
//           <span className="flex primary font-anton mb-1">FRONTEND</span>
//           <span className="flex ml-4 foreground font-anton">DEVELOPER</span>
//         </h1>

//         <p className="my-3 text-left text-lg muted-foreground">
//           Hi! I'm <span className="font-semibold foreground">Sameh</span>,
//           creative Frontend Developer with experience in building
//           high-performance, scalable and responsive web solutions.
//         </p>

//         <a
//           href="#about-me"
//           className="group relative w-max px-8 py-3 tracking-widest text-lg font-anton
//           text-black bg-[#00e65c] overflow-hidden flex items-center justify-center"
//         >
//           <span className="relative z-10">ABOUT ME</span>
//           <span
//             className="absolute bottom-0 w-[300%] h-[600%] bg-white translate-y-full
//             group-hover:translate-y-0
//             transition-transform duration-[400ms] group-hover:duration-[1500ms] ease-in-out
//             rounded-t-[50%] z-0"
//           ></span>
//         </a>
//       </div>

//       <Arrow />
//     </motion.div>
//   );
// };

// export default Hero;

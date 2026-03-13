import Arrow from "./animation/Arrow";

const Hero = () => {
  return (
    <section className="relative w-full h-[105vh]  sm:h-[100vh] md:h-[130vh] lg:h-[96vh] xl:h-[98vh] overflow-x-hidden lg:px-50 md:px-50">
      <div className="max-w-[600px] flex flex-col gap-6 mt-30 ml-4 xl:mt-50">
        <h1 className="text-[4.5rem] md:text-[5rem] leading-[0.9]">
          <span className="flex text-[#00E609] font-anton mb-1 ">FRONTEND</span>
          <span className="flex ml-4 text-gray-200 font-anton">DEVELOPER</span>
        </h1>

        <p className="my-3 text-left text-lg md:text-lg text-gray-300">
          Hi! I'm <span className="font-semibold text-white">sameh</span>. A
          creative Frontend Developer with 2+ years of experience building
          high‑performance, scalable, and responsive web solutions.
        </p>

        <a
          href="#about-me"
          className="group relative w-max px-8 py-3 tracking-widest text-lg font-anton
         text-black bg-[#00E609] overflow-hidden flex items-center justify-center"
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

      <div>
        <Arrow />
      </div>
    </section>
  );
};

export default Hero;

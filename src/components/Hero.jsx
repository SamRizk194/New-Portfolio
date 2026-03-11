const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-x-hidden">
      <div className="max-w-[600px] flex flex-col gap-6 md:ml-48 md:mt-40">
        {/* MAIN TITLE */}
        <h1 className="text-[4.5rem] md:text-[5rem] leading-[0.9]">
          <span className="flex text-[#00E609] font-anton mb-1 ">FRONTEND</span>
          <span className="flex ml-4 text-white font-anton">DEVELOPER</span>
        </h1>
        {/* DESCRIPTION  */}
        <p className="text-left text-gray-300 text-lg md:text-lg text-gray-300">
          Hi! I'm <span className="font-semibold text-white">sameh</span>. A
          creative Frontend Developer with 2+ years of experience building
          high‑performance, scalable, and responsive web solutions.
        </p>

        {/* RECTANGULAR BUTTON  */}
        <a
          href="#about-me"
          class="group relative w-max px-8 py-3 tracking-widest text-lg font-anton
         text-black bg-[#00E609] overflow-hidden flex items-center justify-center"
        >
          <span class="relative z-10">ABOUT ME</span>
          <span
            class="absolute bottom-0 w-[300%] h-[600%] bg-white translate-y-full
           group-hover:translate-y-0
           transition-transform duration-[400ms] group-hover:duration-[1500ms] ease-in-out
           rounded-t-[50%] z-0"
          ></span>
        </a>
      </div>

      <div>
        <div className="arrow-container">
          <svg
            width="376"
            height="111"
            viewBox="0 0 376 111"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1V39.9286L188 110V70.6822L1 1Z"
              className="arrow-line"
            />

            <path
              d="M375 1V39.9286L188 110V70.6822L375 1Z"
              className="arrow-line"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

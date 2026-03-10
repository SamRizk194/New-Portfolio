const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-x-hidden">
      <div className="max-w-[600px] flex flex-col gap-6 md:ml-45 md:mt-43 ">
        {/* MAIN TITLE */}
        <h1 className="text-[4.5rem] md:text-[6rem] font-bold leading-[0.9]">
          <span className="flex text-green-500 tracking-[-0.09em]">
            FRONTEND
          </span>
          <span className="flex ml-4 text-white tracking-[-0.05em]">
            DEVELOPER
          </span>
        </h1>
        {/* DESCRIPTION */}
        <p className="text-left text-lg md:text-xl text-gray-300">
          Hi! I'm <span className="font-semibold text-white">sameh</span>. A
          creative Frontend Developer with 2+ years of experience building
          high‑performance, scalable, and responsive web solutions.
        </p>

        {/* RECTANGULAR BUTTON */}
        <a
          href="#about-me"
          className="w-max text-black bg-green-500 text-sm font-bold px-3 py-3"
        >
          About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;

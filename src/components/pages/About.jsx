export default function AboutExperience() {
  return (
    <main className="relative flex-1 min-h-screen bg-[#0c0c0e] overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgb(74, 222, 128) 1px, transparent 1px), linear-gradient(90deg, rgb(74, 222, 128) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* GLOW EFFECTS */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#4ade80]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-[#4ade80]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 font-[belanosima] text-white">

        {/* ================= ABOUT ================= */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto max-w-[1375px] w-full py-12 px-5 md:px-10 lg:px-20">

            <div className="col-span-1 md:col-span-3 space-y-6">

              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-[#4ade80]">Me</span>
              </h2>

              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                I'm a Frontend React Developer focused on building modern, responsive, and high-performance web applications using React.
              </p>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed">
                I specialize in crafting clean UI, reusable components, and smooth user experiences with strong attention to performance and detail.
              </p>

              <div className="border-l-4 border-[#4ade80] pl-6 text-base md:text-lg text-white/60 font-medium">
                Currently focused on improving frontend architecture, performance optimization, and building production-ready React applications.
              </div>

            </div>

          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section className="max-w-[1375px] mx-auto px-5 md:px-10 lg:px-20 pb-20">

          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Experience
          </h3>

          <div className="p-6 md:p-10 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">

            <h4 className="text-2xl md:text-3xl font-bold mb-2">
              Frontend React Developer
            </h4>

            <p className="text-white/50 mb-6">
              2025 – Present
            </p>

            <ul className="list-disc list-inside space-y-2 text-white/70 mb-8">
              <li>Built responsive and scalable web applications using React.</li>
              <li>Developed reusable UI components with focus on clean architecture.</li>
              <li>Implemented API integration and state management solutions.</li>
              <li>Improved performance and optimized user experience across projects.</li>
              <li>Followed best practices in Git workflow and code organization.</li>
            </ul>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "Bootstrap",
                "Tailwind CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Redux Toolkit",
                "React Router",
                "Framer Motion",
                "GSAP",
                "Git",
                "GitHub",
                "Vite",
                "NPM",
                "React Lottie",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 text-sm bg-white/10 rounded-full border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>

        </section>

      </div>
    </main>
  );
}
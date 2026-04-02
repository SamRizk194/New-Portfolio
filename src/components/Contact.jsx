import React, { useState } from "react";
import {
  Phone,
  Mail,
  Github,
  Linkedin,
  Facebook,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "64bc60b9-3ab1-4392-bcf3-c824527eabda");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Network error. Try again later.");
    }
  };

  return (
    <section className="mb-12 border-b border-white/5 pb-6 px-3 lg:px-40 mt-70 font-belanosima">
      <div className="flex justify-between items-end mb-8">
        <h1 className="text-[8vw] md:text-[6vw] leading-none font-bold uppercase tracking-tighter text-white">
          Let's Talk <span className="text-[#00e65c] font-anton"> .</span>
        </h1>

        <div className="hidden md:flex flex-col items-end text-right pb-2">
          <span className="text-[#4ade80] text-xs font-mono animate-pulse">
            ● SYSTEM ONLINE
          </span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest">
            Available for new projects
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* contact */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <p className="text-lg text-zinc-400">
            Got a project? Let’s make it
            <span className="text-white border-b border-[#4ade80]"> ninja</span>
            .
          </p>

          <a
            href="https://wa.me/201553641841"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 p-4 rounded-xl bg-zinc-900/40 border border-white/10 hover:border-[#4ade80]/40 transition-all"
          >
            <Phone className="text-[#4ade80]" size={20} />
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
              +20 1553641841
            </span>
          </a>

          <a
            href="mailto:samehrizk1993@gmail.com"
            className="group flex items-center gap-3 p-4 rounded-xl bg-zinc-900/40 border border-white/10 hover:border-[#4ade80]/40 transition-all"
          >
            <Mail className="text-[#4ade80]" size={20} />
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white">
              samehrizk1993@gmail.com
            </span>
          </a>

          <div className="flex py-12 items-center justify-between p-4 rounded-xl bg-zinc-900/20 border border-white/5 text-zinc-500 text-xs">
            <div className="flex items-center gap-2">
              <MapPin className="text-[#4ade80]" size={16} />
              <span>Damietta, Egypt</span>
            </div>

            {/* social media icons */}
            <div className="flex gap-3 text-white">
              <a
                href="https://github.com/SamRizk194"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#4ade80] transition"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sameh-rizk-abb5ba258"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#4ade80] transition"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1GCB3g1Vtk/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#4ade80] transition"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="lg:col-span-8">
          <form
            className="relative overflow-hidden bg-[#0e0e10] p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl"
            onSubmit={handleSubmit}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#4ade80]"
              >
                <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                <path d="M20 2v4" />
                <path d="M22 4h-4" />
                <circle cx="4" cy="20" r="2" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white text-sm outline-none focus:border-[#4ade80]/50 transition-all"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email@example.com"
                  className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white text-sm outline-none focus:border-[#4ade80]/50 transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5 mb-6">
              <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">
                Tell me about the project
              </label>
              <textarea
                name="message"
                rows="3"
                placeholder="I have an idea for..."
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white text-sm outline-none focus:border-[#4ade80]/50 transition-all resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full bg-white hover:bg-[#4ade80] text-black font-bold uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-500"
            >
              Send Message
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowUpRight className="w-5 h-5 text-black" />
              </span>
            </button>
            {/* massage */}
            {result && (
              <p className="text-sm text-[#4ade80] mt-2 font-medium">
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

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
   <section className="mb-12 pb-6 px-3 lg:px-40 mt-70 font-belanosima">
      
      {/* HEADER + LINE UNDER IT */}
      <div className="mb-8 border-b border-white/5 pb-6 flex justify-between items-end">
        <h1 className="text-[8vw] md:text-[6vw] leading-none font-bold uppercase tracking-tighter text-white">
          Let's Talk <span className="text-[#00e65c] font-anton">.</span>
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

      {/* BODY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* CONTACT */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <p className="text-lg text-zinc-400">
            Got a project? Let’s make it
            <span className="text-white border-b border-[#4ade80]"> ninja</span>.
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

            <div className="flex gap-3 text-white">
              <a href="https://github.com/SamRizk194" target="_blank" rel="noreferrer">
                <Github size={18} className="hover:text-[#4ade80]" />
              </a>
              <a href="https://www.linkedin.com/in/sameh-rizk-abb5ba258" target="_blank" rel="noreferrer">
                <Linkedin size={18} className="hover:text-[#4ade80]" />
              </a>
              <a href="https://www.facebook.com/share/1GCB3g1Vtk/" target="_blank" rel="noreferrer">
                <Facebook size={18} className="hover:text-[#4ade80]" />
              </a>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="lg:col-span-8">
          <form
            className="relative overflow-hidden bg-[#0e0e10] p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 ml-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white text-sm outline-none focus:border-[#4ade80]/50"
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
                  className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white text-sm outline-none focus:border-[#4ade80]/50"
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
                className="w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white text-sm outline-none focus:border-[#4ade80]/50 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="group w-full bg-white hover:bg-[#4ade80] text-black font-bold uppercase tracking-widest py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-500"
            >
              Send Message
              <ArrowUpRight className="w-5 h-5 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

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
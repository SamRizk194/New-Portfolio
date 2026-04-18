import { Send, MapPin } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function Contacts() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "64bc60b9-3ab1-4392-bcf3-c824527eabda");

    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully!", {
          id: loadingToast,
          style: {
            background: "#0c0c0e",
            color: "#4ade80",
            border: "1px solid #4ade80",
          },
        });

        event.target.reset();
      } else {
        toast.error(data.message || "Something went wrong", {
          id: loadingToast,
        });
      }
    } catch (error) {
      toast.error("Network error", {
        id: loadingToast,
      });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#0c0c0e] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 md:px-12 font-[belanosima]">
      {/* TOAST */}
      <Toaster
        position="top-right"
        containerStyle={{ top: 100, zIndex: 9999 }}
      />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgb(74, 222, 128) 1px, transparent 1px), linear-gradient(90deg, rgb(74, 222, 128) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-[#4ade80]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30vw] h-[30vw] bg-[#4ade80]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20 flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6">
            <span className="text-[10px] sm:text-xs font-mono text-white/70 uppercase tracking-widest">
              Connection_Established
            </span>
            <span className="w-2 h-2 rounded-full bg-[#4ade80] animate-pulse ml-2" />
          </div>

          <h1 className="text-[12vw] md:text-[8vw] leading-none font-black uppercase tracking-tighter text-white text-center md:text-left">
            Let's <span className="text-[#4ade80]">Build</span>.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl text-center md:text-left leading-relaxed">
            Got a wild idea or a serious project? Drop a message. I'm available
            for freelance work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {/* LEFT SIDE */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/201553641841"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between p-6 h-40 rounded-[24px] bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:border-[#4ade80]/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ade80]/5 rounded-full blur-2xl group-hover:bg-[#4ade80]/20 transition-all duration-500" />

              <div className="flex justify-between items-start z-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#4ade80]"
                  >
                    <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                  </svg>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-zinc-600 group-hover:text-[#4ade80] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>

              <div className="z-10">
                <h3 className="text-zinc-400 text-sm mb-1">WhatsApp</h3>
                <p className="text-white text-xl md:text-2xl font-bold tracking-tight">
                  +20 1553641841
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=samehrizk1993@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between p-6 h-40 rounded-[24px] bg-zinc-900/40 backdrop-blur-xl border border-white/10 hover:border-[#4ade80]/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#4ade80]/5 rounded-full blur-2xl group-hover:bg-[#4ade80]/20 transition-all duration-500" />

              <div className="flex justify-between items-start z-10">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#4ade80]"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-zinc-600 group-hover:text-[#4ade80] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>

              <div className="z-10">
                <h3 className="text-zinc-400 text-sm mb-1">Direct Email</h3>
                <p className="text-white text-lg md:text-xl font-bold tracking-tight truncate">
                  samehrizk1993@gmail.com
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="p-6 rounded-[24px] bg-zinc-900/40 backdrop-blur-xl border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={18} className="text-zinc-400" />
                <h3 className="text-zinc-400 text-sm">Location</h3>
              </div>

              <p className="text-white font-bold flex items-center gap-2">
                <MapPin size={16} className="text-[#4ade80]" />
                Damietta, Egypt
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="relative h-full flex flex-col justify-between bg-zinc-950/80 backdrop-blur-2xl p-8 md:p-10 rounded-[32px] border border-white/10 shadow-2xl"
            >
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#4ade80]/50 to-transparent z-10" />

              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Send a Transmission
                </h2>
              </div>

              <div className="space-y-7 flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#4ade80] font-bold">
                      Your Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full bg-black/50 border-b-2 border-white/10 py-4 pt-5 text-white text-lg outline-none focus:border-[#4ade80] transition-colors placeholder:text-zinc-500"
                    />
                  </div>

                  <div className="group space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-[#4ade80] font-bold">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full bg-black/50 border-b-2 border-white/10 py-4 pt-5 text-white text-lg outline-none focus:border-[#4ade80] transition-colors placeholder:text-zinc-500"
                    />
                  </div>
                </div>

                <div className="group space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#4ade80] font-bold">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Describe your idea, timeline, and goals..."
                    className="w-full bg-black/50 border-b-2 border-white/10 py-4 pt-5 text-white text-lg outline-none focus:border-[#4ade80] transition-colors resize-none placeholder:text-zinc-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-xl bg-white text-black font-bold uppercase tracking-widest py-5 mt-8 transition-transform active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-[#4ade80] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

                <span className="relative z-10 flex items-center justify-center gap-3 group-hover:text-black transition-colors">
                  Initialize Sequence
                  <Send
                    size={18}
                    className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

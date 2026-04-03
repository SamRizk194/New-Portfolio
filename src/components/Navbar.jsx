import { useState, useEffect } from "react";
import { MoveUpRight } from "lucide-react";

const COLORS = [
  "bg-yellow-500 text-black",
  "bg-blue-500 text-white",
  "bg-teal-500 text-black",
  "bg-indigo-500 text-white",
];

const MENU_LINKS = [
  { name: "Home", url: "#" },
  { name: "About Me", url: "#about-me" },
  { name: "Experience", url: "#my-experience" },
  { name: "Projects", url: "#selected-projects" },
];

const SOCIAL_LINKS = [
  { name: "Facebook", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "GitHub", url: "#" },
];

const GENERAL_INFO = { email: "test@mail.com" };

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleNavigate = (url) => {
    if (url === "#") window.scrollTo({ top: 0, behavior: "smooth" });
    else {
      const id = url.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[2147483647] pointer-events-none isolate">
      {/* BUTTON */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-[2147483647] w-12 h-12 flex items-center justify-center group pointer-events-auto"
      >
        <span
          className={`absolute left-1/2 top-1/2 w-9 h-[3px] bg-white rounded-full 
          -translate-x-1/2 transition-all duration-300
          ${
            isMenuOpen
              ? "rotate-45 -translate-y-1/2"
              : "-translate-y-[8px] group-hover:rotate-12 group-hover:-translate-y-[4px]"
          }`}
        />
        <span
          className={`absolute left-1/2 top-1/2 w-9 h-[3px] bg-white rounded-full 
          -translate-x-1/2 transition-all duration-300
          ${
            isMenuOpen
              ? "-rotate-45 -translate-y-1/2"
              : "translate-y-[8px] group-hover:-rotate-12 group-hover:translate-y-[4px]"
          }`}
        />
      </button>

      {/* OVERLAY */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/70 transition-all duration-300 pointer-events-auto
        ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-[100vh] w-[500px] max-w-[calc(100vw-3rem)]
        overflow-hidden flex flex-col py-10 pointer-events-auto
        transition-transform duration-700
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div
          className={`absolute inset-0 rounded-full bg-neutral-800 transition-transform duration-700 
            ${isMenuOpen ? "scale-150 translate-x-0" : "scale-0"}`}
        />

        <div className="relative z-10 flex flex-col h-full text-white">
          <div className="grow flex items-center w-full max-w-[300px] mx-8 sm:mx-auto">
            {/* GRID للعمودين */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 w-full">
              {/* SOCIAL */}
              <div>
                <p className="text-neutral-400 mb-6">SOCIAL</p>
                <ul className="space-y-3">
                  {SOCIAL_LINKS.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg hover:underline text-neutral-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MENU */}
              <div>
                <p className="text-neutral-400 mb-6">MENU</p>
                <ul className="space-y-4 text-neutral-200">
                  {MENU_LINKS.map((link, idx) => (
                    <li key={link.name}>
                      <button
                        onClick={() => handleNavigate(link.url)}
                        className="group flex items-center gap-3 text-xl"
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full flex items-center justify-center 
                          transition-all duration-300 group-hover:scale-[2] ${COLORS[idx]}`}
                        >
                          <MoveUpRight
                            size={10}
                            className="scale-0 group-hover:scale-100 transition-all"
                          />
                        </span>
                        <span className="group-hover:underline">
                          {link.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* نهاية GRID */}
          </div>
        </div>
      </div>
    </div>
  );
}

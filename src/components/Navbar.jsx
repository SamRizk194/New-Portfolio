import { useState } from "react";
import { MoveUpRight } from "lucide-react";

const MENU = [
  { name: "Home", url: "#" },
  { name: "About Me", url: "#about-me" },
  { name: "Experience", url: "#my-experience" },
  { name: "Projects", url: "#selected-projects" },
];

const SOCIAL = [
  { name: "Facebook", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "GitHub", url: "#" },
];

const COLORS = [
  "bg-yellow-500 text-black",
  "bg-blue-500 text-white",
  "bg-teal-500 text-black",
  "bg-indigo-500 text-white",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleNavigate = (url) => {
    if (url !== "#") {
      const id = url.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.location.hash = id;
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setOpen(false);
  };

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-6 right-6 z-[60] w-12 h-12 flex items-center justify-center group"
      >
        {/* LINE 1 */}
        <span
          className={`absolute w-9 h-[3px] bg-white rounded-full transition-all duration-300 origin-center
          ${
            open
              ? "rotate-45 translate-y-0"
              : "-translate-y-[7px] group-hover:-translate-y-[4px] group-hover:rotate-[6deg]"
          }`}
        />

        {/* LINE 2 */}
        <span
          className={`absolute w-9 h-[3px] bg-white rounded-full transition-all duration-300 origin-center
          ${
            open
              ? "-rotate-45 translate-y-0"
              : "translate-y-[7px] group-hover:translate-y-[4px] group-hover:-rotate-[6deg]"
          }`}
        />
      </button>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/70 z-[40] transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[85vw] max-w-[550px]
        bg-neutral-900 text-white z-[50]
        transition-transform duration-500 flex flex-col p-8
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex-1 flex items-center justify-center">
          <div className="flex flex-col md:flex-row w-full items-start md:items-center gap-12 md:gap-20 md:justify-center">
            {/* MENU */}
            <div className="text-left">
              <p className="text-white/60 mb-5">MENU</p>
              <ul className="space-y-4">
                {MENU.map((item, idx) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigate(item.url)}
                      className="group flex items-center gap-3 text-lg hover:underline"
                    >
                      <span
                        className={`w-3.5 h-3.5 rounded-full flex items-center justify-center
                        transition-all group-hover:scale-[2]
                        ${COLORS[idx]}`}
                      >
                        <MoveUpRight
                          size={10}
                          className="scale-0 group-hover:scale-100 transition-all"
                        />
                      </span>

                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* SOCIAL */}
            <div className="text-left">
              <p className="text-white/60 mb-5">SOCIAL</p>
              <ul className="space-y-3">
                {SOCIAL.map((s) => (
                  <li key={s.name}>
                    <a href={s.url} className="hover:underline">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="mt-auto text-left sm:pl-30 ">
          <p className="text-white/60 mb-3">GET IN TOUCH</p>
          <a className="block hover:underline" href="mailto:test@mail.com">
            test@mail.com
          </a>
          <a className="block mt-2 hover:underline" href="tel:+201000000000">
            +20 100 000 0000
          </a>
        </div>
      </div>
    </>
  );
}

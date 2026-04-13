import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-black text-white px-5 sm:px-6 md:px-12 lg:px-20 pt-10 md:pt-12 pb-6 border-t border-white/10 font-belanosima">
      <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-12">
        {/* Left Section */}
        <div className="space-y-3 text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold tracking-tight">
            SAMEH<span className="text-[#4ade80]">.</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-xs mx-auto md:mx-0">
            Front-End Developer crafting smooth, animated, and user-focused web
            experiences.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer Navigation">
          <ul className="flex flex-row justify-center gap-6 md:flex-col md:items-start md:gap-3 text-xs sm:text-sm uppercase tracking-widest text-zinc-400">
            {[
              { name: "Home", path: "/" },
              { name: "Projects", path: "/projects" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `uppercase transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#4ade80]
                    ${isActive ? "text-[#4ade80]" : "hover:text-[#4ade80]"}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <span className="text-xs text-zinc-400 uppercase tracking-widest">
            Let’s connect
          </span>

          <ul className="flex gap-5">
            {[
              {
                icon: Github,
                label: "GitHub",
                link: "https://github.com/SamRizk194",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                link: "https://www.linkedin.com/in/sameh-rizk-abb5ba258",
              },
              {
                icon: Mail,
                label: "Email",
                link: "mailto:samehrizk1993@gmail.com",
              },
            ].map(({ icon: Icon, label, link }) => (
              <li key={label} className="relative group">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-[#4ade80] transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                >
                  <Icon size={20} />
                </a>

                {/* Tooltip */}
                <span className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-[10px] bg-zinc-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Bottom */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-3 text-[11px] sm:text-xs text-zinc-500">
        <span>© 2026 SAMEH. All rights reserved.</span>
        <span className="font-mono">Local time — {time}</span>
      </div>
    </footer>
  );
};

export default Footer;

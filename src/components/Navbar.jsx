import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Github, Linkedin, Facebook } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MENU_LINKS = [
  { name: "Home", url: "/" },
  { name: "Projects", url: "/projects" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/SamRizk194",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sameh-rizk-abb5ba258",
    icon: Linkedin,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/1GCB3g1Vtk/",
    icon: Facebook,
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    if (isMenuOpen) {
      gsap.fromTo(
        menuRefs.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.07,
          ease: "power4.out",
        },
      );
    }
  }, [isMenuOpen]);

  const handleHover = (index) => {
    gsap.to(menuRefs.current, {
      scale: (i) => (i === index ? 1.25 : 0.9),
      opacity: (i) => (i === index ? 1 : 0.5),
      y: (i) => (i === index ? -6 : 6),
      x: (i) => (i === index ? 0 : 10),
      duration: 0.5,
      ease: "power3.out",
      overwrite: "auto",
    });

    menuRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        color: i === index ? "#00e65c" : "#ffffff",
        duration: 0.3,
      });
    });
  };

  const resetHover = () => {
    gsap.to(menuRefs.current, {
      scale: 1,
      opacity: 1,
      y: 0,
      x: 0,
      duration: 0.5,
      ease: "power2.out",
      overwrite: "auto",
    });

    menuRefs.current.forEach((el) => {
      if (!el) return;
      gsap.to(el, {
        color: "#ffffff",
        duration: 0.3,
      });
    });
  };

  const handleNavigate = (url) => {
    navigate(url);
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-[99999998] ${
        isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* BUTTON */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 right-6 z-[12] w-12 h-12 flex items-center justify-center group pointer-events-auto"
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
        className={`fixed inset-0 bg-black/80 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MENU */}
      <div
        className={`fixed inset-0 flex flex-col items-center justify-center gap-8 text-white font-belanosima
        bg-black
        transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* MENU LINKS */}
        <div className="flex flex-col items-center gap-10">
          {MENU_LINKS.map((link, i) => (
            <button
              key={link.name}
              ref={(el) => (menuRefs.current[i] = el)}
              onMouseEnter={() => handleHover(i)}
              onMouseLeave={resetHover}
              onClick={() => handleNavigate(link.url)}
              className="text-4xl md:text-7xl font-bold uppercase tracking-tighter transform-gpu origin-center text-white"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* SOCIAL */}
        <div className="absolute bottom-10 md:bottom-20 pointer-events-auto">
          <ul className="flex items-center gap-6 justify-center">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00e65c] transition-colors duration-300"
                  >
                    <Icon size={30} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

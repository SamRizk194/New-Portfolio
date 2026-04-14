// src/assets/data.js
import htmlIcon from "./my-stack/html.png";
import cssIcon from "./my-stack/css.png";
import bootstrapIcon from "./my-stack/bootstrap.svg";
import tailwindIcon from "./my-stack/tailwind.png";
import jsIcon from "./my-stack/js.png";
import tsIcon from "./my-stack/ts.png";
import reactIcon from "./my-stack/react.png";
import nextIcon from "./my-stack/next.png";
import reduxIcon from "./my-stack/redux.png";
import routerIcon from "./my-stack/router.webp";
import gitIcon from "./my-stack/git.png";
import githubIcon from "./my-stack/GitHub.svg";
import npmIcon from "./my-stack/npm.svg";
import framerIcon from "./my-stack/framer-motion.png";
import gsapIcon from "./my-stack/gsap.png";
import fontAwesomeIcon from "./my-stack/font-awesome.png";
import viteIcon from "./my-stack/vite.svg";
import lottieIcon from "./my-stack/lottie.webp";

//projects
import portfolio from "../assets/my-stack/projects/portfolio.png";
import ecommerce from "../assets/my-stack/projects/e-commerce.png";
import agency from "../assets/my-stack/projects/agency-ai.png";
import foodera from "../assets/my-stack/projects/foodera.png";
import edusity from "../assets/my-stack/projects/edusity.png";
import portfoliov1 from "../assets/my-stack/projects/portfoliov1.png";
import bondi from "../assets/my-stack/projects/bondi.png";
import fylo from "../assets/my-stack/projects/fylo.png";
import grocify from "../assets/my-stack/projects/grocify.png";

export const MY_STACK = {
  skills: [
    { name: "HTML", icon: htmlIcon, color: "#E44D26" },
    { name: "Bootstrap", icon: bootstrapIcon, color: "#7952B3" },
    { name: "CSS", icon: cssIcon, color: "#1572B6" },
    { name: "Tailwind CSS", icon: tailwindIcon, color: "#06B6D4" },
    { name: "Javascript", icon: jsIcon, color: "#F7DF1E" },
    { name: "Typescript", icon: tsIcon, color: "#3178C6" },
    { name: "React", icon: reactIcon, color: "#61DAFB" },
    { name: "ReduxToolkit", icon: reduxIcon, color: "#764ABC" },
    { name: "Next.js", icon: nextIcon, color: "#000000" },
    { name: "ReactRouter", icon: routerIcon, color: "#CA4245" },
    { name: "Frammer Motion", icon: framerIcon, color: "#F0058D" },
    { name: "Git", icon: gitIcon, color: "#F05032" },
    { name: "GSAP", icon: gsapIcon, color: "#88CE02" },
    { name: "FontAwesome", icon: fontAwesomeIcon, color: "#5282BF" },
    { name: "GitHub", icon: githubIcon, color: "#181717" },
    { name: "vite", icon: viteIcon, color: "#646CFF" },
    { name: "npm", icon: npmIcon, color: "#CB3837" },
    { name: "React Lottie", icon: lottieIcon, color: "#F9A03C" },
  ],
};
export const Projects = [
  {
    id: "portfolio",
    name: "This Portfolio – You're Looking At It",
    order: "01",
    link: "#",
    image: portfolio,
    description:
      "A creative developer portfolio built with React, Tailwind CSS, GSAP, and a bit of obsession.",
    overview:
      "A modern developer portfolio showcasing projects with smooth animations, clean UI, and responsive layouts.",
    achievements: [
      "Built with React + Tailwind + GSAP",
      "Fully responsive across all devices",
      "Reusable and scalable component structure",
    ],
    highlight: true,
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    order: "02",
    link: "https://sam-e-commerce.netlify.app/",
    image: ecommerce,
    description:
      "An e-commerce site built with React, Vite, and Redux Toolkit.",
    overview:
      "A full-featured shopping experience with cart management and optimized performance.",
    achievements: [
      "Redux Toolkit for state management",
      "Dynamic cart system",
      "Responsive modern UI",
    ],
  },
  {
    id: "agency",
    name: "Agency-Ai",
    order: "03",
    link: "https://sam-agenciai.netlify.app/",
    image: agency,
    description: "Modern agency website built with React & Tailwind.",
    overview:
      "A sleek agency landing page with animations and responsive layout.",
    achievements: [
      "Smooth scroll animations",
      "Responsive design",
      "Web3Forms integration",
    ],
  },
  {
    id: "edusity",
    name: "Edusity",
    order: "04",
    link: "https://sam-edusity.netlify.app/",
    image: edusity,
    description: "React + Vite website with smooth scrolling and forms.",
    overview: "Educational platform UI with modern frontend practices.",
    achievements: ["React Hooks usage", "Form handling", "Custom CSS styling"],
  },
  {
    id: "foodera",
    name: "Foodera",
    order: "05",
    link: "https://samfoodera.netlify.app/",
    image: foodera,
    description: "Food and recipes website built with React and Bootstrap.",
    overview: "A clean UI for browsing meals and recipes.",
    achievements: [
      "Responsive Bootstrap layout",
      "Component-based structure",
      "Clean UI/UX",
    ],
  },
  {
    id: "portfolio-v1",
    name: "Portfolio V.1",
    order: "06",
    link: "https://sameh-rizk.netlify.app/",
    image: portfoliov1,
    description: "First version of my portfolio.",
    overview:
      "Initial version of my portfolio showcasing early frontend skills.",
    achievements: ["Basic responsive layout", "Simple UI structure"],
  },
  {
    id: "bondi",
    name: "Bondi",
    order: "07",
    link: "https://bondi-project.netlify.app/",
    image: bondi,
    description: "Responsive website built with HTML, CSS, and Bootstrap.",
    overview: "Static website focusing on layout and responsiveness.",
    achievements: [
      "Bootstrap grid system",
      "Font Awesome integration",
      "Responsive design",
    ],
  },
  {
    id: "fylo",
    name: "Fylo",
    order: "08",
    link: "https://sam-tailwind.netlify.app/",
    image: fylo,
    description: "React + Tailwind responsive project.",
    overview: "Frontend training project using Tailwind CSS.",
    achievements: ["Tailwind styling", "Responsive layout", "Modern UI design"],
  },
  {
    id: "grocify",
    name: "Grocify",
    order: "09",
    link: "https://sam-tailwind-page.netlify.app/",
    image: grocify,
    description: "Responsive Tailwind HTML page.",
    overview: "Landing page with responsive navbar and layout.",
    achievements: [
      "Hamburger menu",
      "Tailwind layout system",
      "Mobile-first design",
    ],
  },
];

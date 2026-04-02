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
import ecommerce from "../assets/my-stack/projects/e-commerce.png";
import portfolio from "../assets/my-stack/projects/portfolio.png";
import agency from "../assets/my-stack/projects/agency-ai.png";
import foodera from "../assets/my-stack/projects/foodera.png";
import edusity from "../assets/my-stack/projects/edusity.png";
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
    name: "E-Commerce",
    order: "01",
    link: "https://sam-e-commerce.netlify.app/",
    image: ecommerce,
  },
  {
    name: "Agency-Ai",
    order: "02",
    link: "https://sam-agenciai.netlify.app/",
    image: agency,
  },
  {
    name: "Edusity",
    order: "03",
    link: "https://sam-edusity.netlify.app/",
    image: edusity,
  },
  {
    name: "Foodera",
    order: "04",
    link: "https://samfoodera.netlify.app/",
    image: foodera,
  },
  {
    name: "Portfolio",
    order: "05",
    link: "https://sameh-rizk.netlify.app/",
    image: portfolio,
  },

  {
    name: "Bondi",
    order: "06",
    link: "https://bondi-project.netlify.app/",
    image: bondi,
  },
  {
    name: "Fylo",
    order: "07",
    link: "https://sam-tailwind.netlify.app/",
    image: fylo,
  },
  {
    name: "Grocify",
    order: "08",
    link: "https://sam-tailwind-page.netlify.app/",
    image: grocify,
  },
];

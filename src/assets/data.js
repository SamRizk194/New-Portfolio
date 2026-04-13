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
    name: "This Portfolio – You're Looking At It",
    order: "01",
    link: "#",
    image: portfolio,
    description:
      " A creative developer portfolio built with React, Tailwind CSS, GSAP, and a bit of obsession.",
    highlight: true,
  },
  {
    name: "E-Commerce",
    order: "02",
    link: "https://sam-e-commerce.netlify.app/",
    image: ecommerce,
    description:
      "An e-commerce site built with React, Vite, and Redux Toolkit, featuring a smooth shopping cart, responsive design, and fast performance.",
  },
  {
    name: "Agency-Ai",
    order: "03",
    link: "https://sam-agenciai.netlify.app/",
    image: agency,
    description:
      "Modern agency website built with React & Tailwind, fully responsive with smooth animations and Web3Forms.",
  },
  {
    name: "Edusity",
    order: "04",
    link: "https://sam-edusity.netlify.app/",
    image: edusity,
    description:
      "A React and Vite website with smooth scrolling, Web3 form submissions, custom CSS styling, and React Hooks for state management.",
  },
  {
    name: "Foodera",
    order: "05",
    link: "https://samfoodera.netlify.app/",
    image: foodera,
    description:
      "A React-based website for exploring food and recipes, built with a responsive design using Bootstrap and React Bootstrap components.",
  },
  {
    name: "Portfolio V.1",
    order: "06",
    link: "https://sameh-rizk.netlify.app/",
    image: portfoliov1,
    description: "",
  },

  {
    name: "Bondi",
    order: "07",
    link: "https://bondi-project.netlify.app/",
    image: bondi,
    description:
      "A responsive website built with HTML, CSS, and Bootstrap, featuring Font Awesome icons for improved design and user experience.",
  },
  {
    name: "Fylo",
    order: "08",
    link: "https://sam-tailwind.netlify.app/",
    image: fylo,
    description:
      "A responsive React + Vite project styled with Tailwind CSS, developed as a training exercise in modern frontend design and responsive design.",
  },
  {
    name: "Grocify",
    order: "09",
    link: "https://sam-tailwind-page.netlify.app/",
    image: grocify,
    description:
      "A responsive HTML page styled with Tailwind CSS, adapting to different screen sizes, with a navigation bar that turns into a hamburger menu on smaller screens.",
  },
];

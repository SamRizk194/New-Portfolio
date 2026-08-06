// src/assets/data.js
import htmlIcon from "./my-stack/html.png";
import cssIcon from "./my-stack/css.png";
import bootstrapIcon from "./my-stack/bootstrap.svg";
import tailwindIcon from "./my-stack/tailwind.png";
import jsIcon from "./my-stack/js.png";
import tsIcon from "./my-stack/ts.png";
import reactIcon from "./my-stack/react.svg";
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
import ecommerce1 from "../assets/my-stack/projects/E1.png";
import ecommerce2 from "../assets/my-stack/projects/E2.png";
import ecommerce3 from "../assets/my-stack/projects/E3.png";
import ecommerce4 from "../assets/my-stack/projects/E4.png";

import agency from "../assets/my-stack/projects/agency-ai.png";
import agency1 from "../assets/my-stack/projects/AG1.png";
import agency2 from "../assets/my-stack/projects/AG2.png";
import agency3 from "../assets/my-stack/projects/AG3.png";

import edusity from "../assets/my-stack/projects/edusity.png";
import edusity1 from "../assets/my-stack/projects/ED1.png";
import edusity2 from "../assets/my-stack/projects/ED2.png";
import edusity3 from "../assets/my-stack/projects/ED3.png";

import foodera from "../assets/my-stack/projects/foodera.png";
import foodera1 from "../assets/my-stack/projects/FO1.png";
import foodera2 from "../assets/my-stack/projects/FO2.png";
import foodera3 from "../assets/my-stack/projects/FO3.png";

import portfoliov1 from "../assets/my-stack/projects/portfoliov1.png";
import portfoliov11 from "../assets/my-stack/projects/PO1.png";
import portfoliov12 from "../assets/my-stack/projects/PO2.png";
import portfoliov13 from "../assets/my-stack/projects/PO3.png";

import bondi from "../assets/my-stack/projects/bondi.png";
import bondi1 from "../assets/my-stack/projects/BO1.png";
import bondi2 from "../assets/my-stack/projects/BO2.png";
import bondi3 from "../assets/my-stack/projects/BO3.png";

import fylo from "../assets/my-stack/projects/fylo.png";
import fylo1 from "../assets/my-stack/projects/FY1.png";
import fylo2 from "../assets/my-stack/projects/FY2.png";
import fylo3 from "../assets/my-stack/projects/FY3.png";

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
      "A modern developer portfolio showcasing projects with smooth animations, clean UI, and responsive layouts",
    achievements: [
      { text: "Built with React + Tailwind + GSAP", image: portfolio },
      { text: "Fully responsive across all devices", image: portfolio },
      { text: "Reusable and scalable component structure", image: portfolio },
    ],
    highlight: true,
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    order: "02",
    link: "https://sam-e-commerce.vercel.app/",
    image: ecommerce,
    description:
      "An e-commerce site built with React, Vite, and Redux Toolkit.",
    overview:
      "A full-featured shopping experience with cart management and optimized performance.",
    achievements: [
      { text: "Redux Toolkit for state management", image: ecommerce1 },
      { text: "Responsive modern UI", image: ecommerce2 },
      { text: "Dynamic cart system", image: ecommerce3 },
      { text: "Responsive modern UI", image: ecommerce4 },
    ],
  },
  {
    id: "agency",
    name: "Agency-Ai",
    order: "03",
    link: "https://sam-agency-ai.vercel.app/",
    image: agency,
    description: "Modern agency website built with React & Tailwind.",
    overview:
      "A sleek agency landing page with animations and responsive layout.",
    achievements: [
      { text: "Smooth scroll animations", image: agency1 },
      { text: "Responsive design", image: agency2 },
      { text: "Web3Forms integration", image: agency3 },
    ],
  },
  {
    id: "edusity",
    name: "Edusity",
    order: "04",
    link: "https://sam-edusity.vercel.app/",
    image: edusity,
    description: "React + Vite website with smooth scrolling and forms.",
    overview: "Educational platform UI with modern frontend practices.",
    achievements: [
      { text: "React Hooks usage", image: edusity1 },
      { text: "Form handling", image: edusity2 },
      { text: "Custom CSS styling", image: edusity3 },
    ],
  },
  {
    id: "foodera",
    name: "Foodera",
    order: "05",
    link: "https://sam-foodera.vercel.app/",
    image: foodera,
    description: "Food and recipes website built with React and Bootstrap.",
    overview: "A clean UI for browsing meals and recipes.",
    achievements: [
      { text: "Responsive Bootstrap layout", image: foodera1 },
      { text: "Component-based structure", image: foodera2 },
      { text: "Clean UI/UX", image: foodera3 },
    ],
  },
  {
    id: "portfolio-v1",
    name: "Portfolio V.1",
    order: "06",
    link: "https://sam-folio-v1.vercel.app/",
    image: portfoliov1,
    description: "First version of my portfolio.",
    overview:
      "Initial version of my portfolio showcasing early frontend skills.",
    achievements: [
      { text: "Basic responsive layout", image: portfoliov11 },
      { text: "Simple UI structure", image: portfoliov12 },
      { text: "Simple UI structure", image: portfoliov13 },
    ],
  },
  {
    id: "bondi",
    name: "Bondi",
    order: "07",
    link: "https://sam-bondi.vercel.app/",
    image: bondi,
    description: "Responsive website built with HTML, CSS, and Bootstrap.",
    overview: "Static website focusing on layout and responsiveness.",
    achievements: [
      { text: "Bootstrap grid system", image: bondi1 },
      { text: "Font Awesome integration", image: bondi2 },
      { text: "Responsive design", image: bondi3 },
    ],
  },
  {
    id: "fylo",
    name: "Fylo",
    order: "08",
    link: "https://sam-fylo.vercel.app/",
    image: fylo,
    description: "React + Tailwind responsive project.",
    overview: "Frontend training project using Tailwind CSS.",
    achievements: [
      { text: "Tailwind styling", image: fylo1 },
      { text: "Responsive layout", image: fylo2 },
      { text: "Modern UI design", image: fylo3 },
    ],
  },
  {
    id: "grocify",
    name: "Grocify",
    order: "09",
    link: "https://sam-grocify.vercel.app/",
    image: grocify,
    description: "Responsive Tailwind HTML page.",
    overview: "Landing page with responsive navbar and layout.",
    achievements: [{ text: "Hamburger menu", image: grocify }],
  },
];

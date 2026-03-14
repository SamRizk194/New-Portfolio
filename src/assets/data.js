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

export const MY_STACK = {
  frontend: [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Javascript", icon: jsIcon },
    { name: "Typescript", icon: tsIcon },
    { name: "React", icon: reactIcon },
    { name: "Next.js", icon: nextIcon },
    { name: "ReduxToolkit", icon: reduxIcon },
    { name: "ReactRouter", icon: routerIcon },
  ],

  tools: [
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "npm", icon: npmIcon },
    { name: "Frammer Motion", icon: framerIcon },
    { name: "GSAP", icon: gsapIcon },
    { name: "FontAwesome", icon: fontAwesomeIcon },
    { name: "vite", icon: viteIcon },
    { name: "React Lottie", icon: lottieIcon },
  ],
};

export const PROJECTS = [
  {
    slug: "project-1",
    title: "Project One",
    thumbnail: "#",
    year: "2023",
    techStack: ["React", "GSAP", "CSS"],
    description: "<p>This is a demo description of Project One.</p>",
    role: "<p>Developer</p>",
    images: ["#", "#"],
    sourceCode: "#",
    liveUrl: "#",
  },
  {
    slug: "project-2",
    title: "Project Two",
    thumbnail: "#",
    year: "2022",
    techStack: ["HTML", "CSS", "JS"],
    description: "<p>This is a demo description of Project Two.</p>",
    role: "<p>Designer</p>",
    images: ["#", "#"],
    sourceCode: "#",
    liveUrl: "#",
  },
];

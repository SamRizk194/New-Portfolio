import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Projects } from "../assets/data";
import Flower from "./animation/Flower";
import FirstProjectCard from "./FirstProjectCard";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

function MyProjects() {
  const [firstProject, ...restProjects] = Projects;

  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    cards.forEach((card) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const rect = card.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          const elementCenter = rect.top + rect.height / 2;

          const distance = Math.abs(windowHeight / 2 - elementCenter);

          const maxDistance = windowHeight / 2 + rect.height / 2;
          const opacity = 1 - Math.min(distance / maxDistance, 1);

          card.style.opacity = opacity;
        },
        scrub: true,
      });
    });
  }, []);

  return (
    <div className="px-3 lg:px-40 foreground">
      <h2 className="mb-10 lg:mb-25 text-xl flex items-center gap-2.5">
        <Flower size={30} />
        My Projects
      </h2>

      <div className="space-y-10">
        <div ref={(el) => (cardsRef.current[0] = el)}>
          <FirstProjectCard project={firstProject} />
        </div>
      </div>

      <div className="space-y-5 lg:space-y-15 mt-10">
        {restProjects.map((project, index) => (
          <div
            key={project.order}
            ref={(el) => (cardsRef.current[index + 1] = el)}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default MyProjects;

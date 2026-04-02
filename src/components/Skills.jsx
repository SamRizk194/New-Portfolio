import Flower from "./animation/Flower.jsx";
import IconsSphere from "./animation/IconsSphere.jsx";

const Skills = () => {
  return (
    <div className="mt-70 lg:mt-80 mb-0 sm:mt-40 sm:mb-10 foreground px-3 lg:px-4 xl:px-52">
      <h2 className="text-xl leading-none flex items-center gap-2.5 mb-6">
        <Flower size={30} />
        FRONTEND
      </h2>

      <p className="slide-up text-5xl font-anton leading-none muted-foreground uppercase">
        SKILLS & TOOLS
      </p>

      <IconsSphere />
    </div>
  );
};

export default Skills;

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-in",
          trigger: container.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up-and-fade", {
        y: 150,
        opacity: 0,
        stagger: 0.05,
      });
    },
    { scope: container }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "about-me-out",
          trigger: container.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 0.5,
        },
      });

      tl.to(".slide-up-and-fade", {
        y: -150,
        opacity: 0,
        stagger: 0.02,
      });
    },
    { scope: container }
  );

  return (
    <section
      className="lg:pt-25 px-3 sm:px-3 md:px-4 lg:px-3 xl:px-52"
      id="about-me"
    >
      <div ref={container}>
        <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade foreground">
          I believe in a user centered design approach, ensuring that every
          project I work on is tailored to meet the specific needs of its users.
        </h2>

        <p className="font-belanosima pb-3 border-b border-[#3d3d3d] slide-up-and-fade muted-foreground">
          This is me.
        </p>

        <div className="font-belanosima grid md:grid-cols-12 mt-9 ">
          <div className="md:col-span-5 ">
            <p className="text-5xl slide-up-and-fade foreground pb-8 font-semibold">
              <span className="w-fit h-fit p-0.5 bg-[#00e65c] text-black mr-1">
                Hi,
              </span>
              I&apos;m Sameh.
            </p>
          </div>
          <div className="md:col-span-7 font-sans">
            <div className="text-lg max-w-[450px]">
              <p className="slide-up-and-fade muted-foreground">
                I&apos;m a frontend web developer dedicated to turning ideas
                into creative solutions. I specialize in creating seamless and
                intuitive user experiences.
              </p>
              <p className="mt-3 slide-up-and-fade muted-foreground">
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
                By prioritizing performance, accessibility, and responsiveness,
                I strive to deliver experiences that not only engage users but
                also drive tangible results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

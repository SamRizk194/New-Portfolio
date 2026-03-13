import { useRef } from "react";
import { MY_STACK } from "../assets/data.js";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const slideUpEl = containerRef.current?.querySelectorAll(".slide-up");
      if (!slideUpEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 0.5,
        },
      });

      tl.from(".slide-up", {
        opacity: 0,
        y: 40,
        ease: "none",
        stagger: 0.4,
      });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 50%",
          end: "bottom 10%",
          scrub: 1,
        },
      });

      tl.to(containerRef.current, {
        y: -150,
        opacity: 0,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="my-stack"
      ref={containerRef}
      className="mt-50 text-gray-300 lg:px-50 md:px-50"
    >
      <div className="container">
        <h2 style={{ marginBottom: "2rem", fontSize: "2.5rem" }}>My Stack</h2>

        <div className="space-y-20">
          {Object.entries(MY_STACK).map(([key, value]) => (
            <div className="grid sm:grid-cols-12" key={key}>
              <div className="sm:col-span-5">
                <p className="slide-up text-5xl font-anton leading-none text-muted-foreground uppercase">
                  {key}
                </p>
              </div>

              <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                {value.map((item) => (
                  <div
                    className="slide-up flex gap-3.5 items-center leading-none"
                    key={item.name}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={item.icon}
                        alt={item.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <span className="text-2xl capitalize">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

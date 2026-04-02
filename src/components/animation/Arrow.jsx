import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Arrow = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const arrow1Ref = useRef(null);
  const arrow2Ref = useRef(null);

  useEffect(() => {
    gsap.set(svgRef.current, { fill: "transparent", autoAlpha: 0 });
    gsap.set(arrow1Ref.current, {
      strokeDasharray: arrow1Ref.current?.getTotalLength(),
      strokeDashoffset: arrow1Ref.current?.getTotalLength(),
    });
    gsap.set(arrow2Ref.current, {
      strokeDasharray: arrow2Ref.current?.getTotalLength(),
      strokeDashoffset: arrow2Ref.current?.getTotalLength(),
    });

    const tl = gsap.timeline({ repeat: -1 });
    tl.to(svgRef.current, { autoAlpha: 1, duration: 0.1 });
    tl.to(".svg-arrow", { duration: 2, delay: 1, strokeDashoffset: 0 });
    tl.to(svgRef.current, {
      duration: 0.5,
      delay: 0.5,
      fill: "#ffffff08",
    });
    tl.to(svgRef.current, { duration: 1, y: 300 });
    tl.to(svgRef.current, { duration: 0, autoAlpha: 0 });
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute mt-5 sm:mt-0 left-1/2 -translate-x-1/2 flex w-[345px] h-[200px] sm:w-[376px] sm:h-[300px] lg:h-[220px] overflow-hidden z-20"
    >
      <svg
        id="banner-arrow-svg"
        width="376"
        height="111"
        viewBox="0 0 376 111"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
      >
        <path
          className="svg-arrow svg-arrow-1"
          d="M1 1V39.9286L188 110V70.6822L1 1Z"
          stroke="#2C2C2C"
          ref={arrow1Ref}
          strokeWidth="2"
        />
        <path
          className="svg-arrow svg-arrow-2"
          d="M375 1V39.9286L188 110V70.6822L375 1Z"
          stroke="#2C2C2C"
          ref={arrow2Ref}
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default Arrow;

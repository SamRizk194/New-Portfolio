import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro({ onFinish }) {
  const letterRefs = useRef([]);
  const counterRef = useRef(null);
  const logoRef = useRef(null);
  const slatRefs = useRef([]);
  const containerRef = useRef(null);

  const text = "SAMEH RIZK";

  useEffect(() => {
    if (
      !counterRef.current ||
      !logoRef.current ||
      letterRefs.current.length === 0 ||
      slatRefs.current.length === 0 ||
      !containerRef.current
    )
      return;

    letterRefs.current = letterRefs.current.slice(0, text.length);
    slatRefs.current = slatRefs.current.slice(0, 5);

    const tl = gsap.timeline();

    tl.to({}, { duration: 0.4 });

    tl.to(
      { val: 0 },
      {
        val: 100,
        duration: 1.2,
        ease: "power1.inOut",
        onUpdate: function () {
          counterRef.current.textContent = String(
            Math.ceil(this.targets()[0].val),
          ).padStart(2, "0");
        },
      },
    );

    tl.to(counterRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.fromTo(
      letterRefs.current,
      { y: 60, opacity: 0, scale: 0.9, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        stagger: 0.06,
        duration: 0.8,
        ease: "power3.out",
      },
    );

    tl.to(
      logoRef.current,
      {
        scale: 1.03,
        duration: 0.6,
        ease: "power1.inOut",
      },
      "-=0.4",
    );

    tl.to(logoRef.current, {
      opacity: 0,
      y: -80,
      scale: 0.95,
      duration: 0.7,
      ease: "power3.inOut",
    });

    tl.fromTo(
      slatRefs.current,
      { scaleY: 1, transformOrigin: "top center" },
      {
        scaleY: 0,
        yPercent: (i) => (i % 2 === 0 ? -120 : 120),
        duration: 1.4,
        ease: "power4.inOut",
        stagger: 0.08,
      },
      "<",
    );

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => onFinish(),
    });
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden bg-transparent"
    >
      <div className="absolute inset-0 flex w-full h-full pointer-events-none z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (slatRefs.current[i] = el)}
            className="flex-1 bg-green-400 origin-top"
            style={{ transform: "scaleY(1)" }}
          />
        ))}
      </div>

      <h1
        ref={counterRef}
        className="absolute z-10 font-belanosima text-black/5 text-[20vw] font-bold leading-none tabular-nums w-[3ch] text-center"
      >
        00
      </h1>

      <h1
        ref={logoRef}
        className="absolute z-10 font-belanosima text-5xl sm:text-6xl md:text-7xl lg:text-[150px] xl:text-[180px] font-bold leading-none tracking-widest"
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (letterRefs.current[i] = el)}
            className="inline-block opacity-0"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
}

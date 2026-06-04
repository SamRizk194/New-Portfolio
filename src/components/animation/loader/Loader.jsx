import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onChangePage, onFinish }) {
  const layer = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      layer.current,
      { x: "-100%" },
      {
        x: "0%",
        duration: 0.9,
        ease: "power3.inOut",
      },
    )

      .to(layer.current, {
        x: "0%",
        duration: 0.1,
      })

      .add(() => {
        onChangePage?.();
      })

      .to(layer.current, {
        x: "100%",
        duration: 0.9,
        ease: "power3.inOut",
        onComplete: onFinish,
      });

    return () => tl.kill();
  }, []);

  return (
    <div
      ref={layer}
      className="fixed top-0 left-0 w-full h-full z-[99999999] will-change-transform bg-green-400"
    />
  );
}

import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import ParticlesBackground from "./components/animation/ParticlesBackground";
import Hero from "./components/Hero";
import Intro from "./components/animation/Intro";
import CustomCursor from "./components/animation/CustomCursor";
import AboutMe from "./components/AboutMe";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <CustomCursor />

      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
          width: "100vw",
          height: "100vh",
          background: "#000000",
        }}
        camera={{ position: [0, 0, 1000], fov: 75 }}
      >
        <ParticlesBackground />
      </Canvas>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(255,255,255,0.13)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div className="relative z-10 ">
        <Hero />
      </div>

      <div className="relative z-10">
        <AboutMe />
      </div>

      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
    </>
  );
}

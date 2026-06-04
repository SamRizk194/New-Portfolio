import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ParticlesBackground from "./components/animation/ParticlesBackground";
import CustomCursor from "./components/animation/CustomCursor";
import Intro from "./components/animation/Intro";
import Navbar from "./components/Navbar";
import ScrollProgressIndicator from "./components/animation/ScrollProgressIndicator";
import Footer from "./components/Footer";

import AnimatedRoutes from "./components/animation/loader/AnimatedRoutes";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div>
      {/* Background */}
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -5,
          width: "100vw",
          height: "100vh",
          background: "#000000",
        }}
        camera={{ position: [0, 0, 1000], fov: 75 }}
      >
        <ParticlesBackground />
      </Canvas>

      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
          zIndex: -4,
        }}
      />

      {/* UI */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <CustomCursor />
        <ScrollProgressIndicator />

        <Navbar />

        <main className="flex-1">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(255,255,255,0.08)",
          pointerEvents: "none",
          zIndex: -3,
        }}
      />

      {/* Intro */}
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
    </div>
  );
}

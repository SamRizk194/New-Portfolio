import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ParticlesBackground from "./components/animation/ParticlesBackground";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import CustomCursor from "./components/animation/CustomCursor";
import Intro from "./components/animation/Intro";
import Contact from "./components/Contact";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";
import ScrollProgressIndicator from "./components/animation/ScrollProgressIndicator";
import Footer from "./components/Footer";
// Routing
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About"
import Projects from "./components/pages/Projects"
import Contacts from "./components/pages/Contacts"

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div>
      <CustomCursor />
      <ScrollProgressIndicator />
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


{/* Routing */}
<div className="relative z-10 min-h-screen flex flex-col">
  <Navbar />

  <main className="flex-1">
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <AboutMe />
            <Skills />
            <MyProjects />
            <Contact />
          </>
        }
      />

      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contacts />} />
    </Routes>
  </main>

  <Footer />
</div>

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
      {showIntro && <Intro onFinish={() => setShowIntro(false)} />}
    </div>
  );
}
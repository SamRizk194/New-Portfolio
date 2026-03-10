import "./App.css";
import { Canvas } from "@react-three/fiber";
import ParticlesBackground from "./components/ParticlesBackground";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
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
          background: "rgba(255, 255, 255, 0.13)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          fontSize: "2rem",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <Hero />
      </div>
    </>
  );
}

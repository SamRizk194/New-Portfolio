import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

const particlesCount = 500;

const positions = (() => {
  const pos = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 2000;
    pos[i * 3 + 1] = Math.random() * 2000;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 2000;
  }
  return pos;
})();

export default function ParticlesBackground() {
  const particlesRef = useRef();

  useFrame(() => {
    if (!particlesRef.current) return;

    const pos = particlesRef.current.geometry.attributes.position.array;

    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3 + 1] -= 0.8;
      if (pos[i * 3 + 1] < -1000) pos[i * 3 + 1] = 1000;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={particlesRef} positions={positions}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={2.5}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

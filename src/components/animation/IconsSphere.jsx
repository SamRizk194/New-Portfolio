import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, PerspectiveCamera } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import { MY_STACK } from "../../assets/data";

function GlobeWithHtmlIcons({ triggerAnimation }) {
  const groupRef = useRef();
  const radius = 4.5;
  const [visibility, setVisibility] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // التحكم بالسحب
  const [dragging, setDragging] = useState(false);
  const lastPointer = useRef([0, 0]);

  // ✅ توحيد الإحداثيات (ماوس + لمس)
  const getPointerPosition = (e) => {
    if (e.touches && e.touches.length > 0) {
      return [e.touches[0].clientX, e.touches[0].clientY];
    }
    return [e.clientX, e.clientY];
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    setDragging(true);
    lastPointer.current = getPointerPosition(e);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;

    const [x, y] = getPointerPosition(e);
    const [lastX, lastY] = lastPointer.current;

    const deltaX = (x - lastX) * 0.01;
    const deltaY = (y - lastY) * 0.01;

    const qX = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(1, 0, 0),
      deltaY
    );

    const qY = new THREE.Quaternion().setFromAxisAngle(
      new THREE.Vector3(0, 1, 0),
      deltaX
    );

    groupRef.current.quaternion.multiplyQuaternions(
      qY,
      groupRef.current.quaternion
    );
    groupRef.current.quaternion.multiplyQuaternions(
      qX,
      groupRef.current.quaternion
    );

    lastPointer.current = [x, y];
  };

  const handlePointerUp = () => setDragging(false);

  // دوران تلقائي
  useFrame(() => {
    if (!groupRef.current) return;

    const axis = new THREE.Vector3(
      Math.random(),
      Math.random(),
      Math.random()
    ).normalize();

    const angle = 0.002;
    const q = new THREE.Quaternion().setFromAxisAngle(axis, angle);

    if (!dragging) {
      groupRef.current.quaternion.multiply(q);
    }

    // تحديث رؤية الأيقونات
    const camera = groupRef.current.parent?.children.find(
      (obj) => obj.type === "PerspectiveCamera"
    );

    if (!camera) return;

    const cameraDir = new THREE.Vector3()
      .subVectors(camera.position, groupRef.current.position)
      .normalize();

    const newVisibility = [];

    MY_STACK.skills.forEach((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / MY_STACK.skills.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      const localPos = new THREE.Vector3(x, y, z);
      const worldPos = localPos.clone();
      groupRef.current.localToWorld(worldPos);

      const iconDir = new THREE.Vector3()
        .subVectors(worldPos, groupRef.current.position)
        .normalize();

      let dot = iconDir.dot(cameraDir);
      dot = THREE.MathUtils.clamp(dot, 0, 1);

      newVisibility[i] = dot;
    });

    setVisibility(newVisibility);
  });

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onTouchStart={handlePointerDown} // ✅ دعم الموبايل
      onTouchMove={handlePointerMove} // ✅ دعم الموبايل
      onTouchEnd={handlePointerUp} // ✅ دعم الموبايل
    >
      {/* الكرة */}
      <mesh>
        <sphereGeometry args={[radius, 40, 35]} />
        <meshBasicMaterial
          color="#6366f1"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* الأيقونات */}
      {MY_STACK.skills.map((item, i) => {
        const phi = Math.acos(-1 + (2 * i) / MY_STACK.skills.length);
        const theta = Math.PI * (1 + Math.sqrt(5)) * i;

        const finalX = radius * Math.sin(phi) * Math.cos(theta);
        const finalY = radius * Math.cos(phi);
        const finalZ = radius * Math.sin(phi) * Math.sin(theta);

        const getRandomStart = () => {
          const dirs = ["top", "bottom", "left", "right", "front", "back"];
          const choice = dirs[Math.floor(Math.random() * dirs.length)];

          switch (choice) {
            case "top":
              return [Math.random() * 20 - 10, 15, Math.random() * 20 - 10];
            case "bottom":
              return [Math.random() * 20 - 10, -15, Math.random() * 20 - 10];
            case "left":
              return [-20, Math.random() * 20 - 10, Math.random() * 20 - 10];
            case "right":
              return [20, Math.random() * 20 - 10, Math.random() * 20 - 10];
            case "front":
              return [Math.random() * 20 - 10, Math.random() * 20 - 10, 15];
            case "back":
              return [Math.random() * 20 - 10, Math.random() * 20 - 10, -15];
            default:
              return [0, 0, -15];
          }
        };

        const initialPosition = getRandomStart();

        const { position } = useSpring({
          position: triggerAnimation
            ? [finalX, finalY, finalZ]
            : initialPosition,
          config: { mass: 3, tension: 50, friction: 25 },
        });

        const brightness = visibility[i] ?? 0;
        const scale = 0.7 + 0.8 * brightness;
        const opacity = 0.3 + 0.7 * brightness;

        return (
          <animated.group key={item.name} position={position}>
            <Html
              center
              style={{
                pointerEvents: dragging
                  ? "none"
                  : brightness > 0.1
                  ? "auto"
                  : "none",
                zIndex: 10,
              }}
            >
              <div
                className="group flex flex-col items-center justify-center"
                style={{
                  opacity,
                  transform: `scale(${scale})`,
                  transition: "all 0.2s ease-out",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-10 h-10"
                  style={{
                    filter:
                      hoveredIndex === i
                        ? "brightness(2) drop-shadow(0 0 10px white)"
                        : "none",
                    transform: hoveredIndex === i ? "scale(1.4)" : "scale(1)",
                  }}
                />
                <div
                  className="mt-1 px-3 py-1 text-xs font-bold text-white rounded-full"
                  style={{
                    whiteSpace: "nowrap",
                    opacity: hoveredIndex === i ? 1 : 0,
                    backgroundColor: item.color || "#6366f1",
                  }}
                >
                  {item.name}
                </div>
              </div>
            </Html>
          </animated.group>
        );
      })}
    </group>
  );
}

export default function FreeMovementSphere() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="py-30" ref={ref}>
      <Canvas
        style={{
          width: "100%",
          height: "500px",
          touchAction: "none", // ✅ مهم جدًا للموبايل
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 12]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <GlobeWithHtmlIcons triggerAnimation={inView} />
      </Canvas>
    </div>
  );
}

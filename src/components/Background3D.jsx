import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React, { useRef, useState, useEffect } from "react";

function FloatingTorus({ position }) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.y += delta * 0.3;
  });
  return (
    <mesh ref={ref} position={position} scale={0.5}>
      <torusGeometry args={[0.4, 0.1, 16, 100]} />
      <meshStandardMaterial color="#60a5fa" transparent opacity={0.4} />
    </mesh>
  );
}

function FloatingSphere({ position }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = Math.sin(t * 1) * 0.4;
    ref.current.rotation.y += 0.005;
  });
  return (
    <mesh ref={ref} position={position} scale={0.5}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="#f87171" transparent opacity={0.4} />
    </mesh>
  );
}

export function Background3D() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    const positions = [];
    const radius = 2;

    const generatePosition = () => {
      let x,
        y,
        z,
        isValid = false;
      while (!isValid) {
        x = (Math.random() - 0.5) * 10;
        y = (Math.random() - 0.5) * 10;
        z = (Math.random() - 0.5) * 10;
        isValid = !positions.some((p) => {
          const d = Math.sqrt((x - p.x) ** 2 + (y - p.y) ** 2 + (z - p.z) ** 2);
          return d < radius;
        });
      }
      return { x, y, z };
    };

    const newObjects = Array.from({ length: 20 }, (_, i) => {
      const pos = generatePosition();
      positions.push(pos);
      const Element = Math.random() > 0.5 ? FloatingTorus : FloatingSphere;
      return <Element key={i} position={[pos.x, pos.y, pos.z]} />;
    });

    setObjects(newObjects);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -10,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {objects}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

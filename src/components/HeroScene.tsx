"use client";

import { Float, Text } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[2, 3, 4]} intensity={1.1} />
      <Float speed={1.6} rotationIntensity={0.2} floatIntensity={0.4}>
        <Text fontSize={0.9} color="#f4f4f5" anchorX="center" anchorY="middle">
          Nathan Gwyn
        </Text>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="h-[320px] w-full md:h-[420px]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

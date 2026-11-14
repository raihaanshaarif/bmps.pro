"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useInView } from "./useInView";

const BARS = 64;

/* A 3D level meter: every bar is a song being played somewhere, and tracked. */
function Bars() {
  const { viewport } = useThree();
  const fit = Math.min(1, viewport.width / 8.5);
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const low = useMemo(() => new THREE.Color("#3a4170"), []);
  const high = useMemo(() => new THREE.Color("#f2cf98"), []);
  const tmp = useMemo(() => new THREE.Color(), []);

  useLayoutEffect(() => {
    if (!mesh.current) return;
    for (let i = 0; i < BARS; i++) mesh.current.setColorAt(i, low);
  }, [low]);

  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < BARS; i++) {
      const a = (i / BARS) * Math.PI * 2;
      const n = i / BARS;
      const h =
        0.2 +
        Math.abs(Math.sin(n * 9 + t * 2.1)) * 0.7 +
        Math.abs(Math.sin(n * 23 - t * 3.3)) * 0.4 +
        Math.max(0, Math.sin(t * 1.7 + n * 3)) * 0.45;
      const radius = 2.6;
      dummy.position.set(Math.cos(a) * radius, h / 2, Math.sin(a) * radius);
      dummy.rotation.set(0, -a, 0);
      dummy.scale.set(1, h, 1);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
      tmp.copy(low).lerp(high, Math.min(1, (h - 0.2) / 1.5));
      m.setColorAt(i, tmp);
    }
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    m.parent!.rotation.y = t * 0.15;
  });

  return (
    <group scale={fit}>
      <instancedMesh ref={mesh} args={[undefined, undefined, BARS]}>
        <boxGeometry args={[0.12, 1, 0.12]} />
        <meshStandardMaterial metalness={0.3} roughness={0.25} emissive="#e3a957" emissiveIntensity={0.35} />
      </instancedMesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.35, 2.85, 128]} />
        <meshBasicMaterial color="#e3a957" transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

export default function EqualizerScene() {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="absolute inset-0">
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, 1.75]}
        camera={{ position: [0, 4.6, 9.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        onCreated={({ camera }) => camera.lookAt(0, 0.6, 0)}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={30} color="#ffe6c2" />
        <pointLight position={[-6, 2, 4]} intensity={20} color="#6d7bd6" />
        <Bars />
      </Canvas>
    </div>
  );
}

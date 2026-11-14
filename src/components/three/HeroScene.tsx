"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useInView } from "./useInView";

const GOLD = new THREE.Color("#e3a957");
const NAVY = new THREE.Color("#3a4170");

/* A field of particles that ripples outward like sound travelling through a room. */
function SoundField() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const { pointer } = useThree();

  const geometry = useMemo(() => {
    const cols = 220;
    const rows = 90;
    const pos = new Float32Array(cols * rows * 3);
    let i = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        pos[i++] = (c / (cols - 1) - 0.5) * 44;
        pos[i++] = 0;
        pos[i++] = (r / (rows - 1) - 0.5) * 18;
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return g;
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uGold: { value: GOLD },
      uNavy: { value: NAVY },
      uPixel: { value: 1 },
    }),
    [],
  );

  useFrame((state, dt) => {
    if (!mat.current) return;
    const u = mat.current.uniforms;
    u.uTime.value += dt;
    u.uPixel.value = state.viewport.dpr;
    u.uMouse.value.lerp(new THREE.Vector2(pointer.x * 20, -pointer.y * 8), 0.05);
  });

  return (
    <points geometry={geometry} position={[0, -3.2, -4]} rotation={[0.12, 0, 0]}>
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={/* glsl */ `
          uniform float uTime;
          uniform vec2 uMouse;
          uniform float uPixel;
          varying float vH;
          varying float vFade;
          void main() {
            vec3 p = position;
            // sound source sits at the centre of the room; waves radiate from it
            float d = length(p.xz - vec2(0.0, -2.0));
            float wave = sin(d * 1.15 - uTime * 2.4) * 0.55 * exp(-d * 0.06);
            // a slower "bass" swell across the field
            wave += sin(p.x * 0.25 + uTime * 0.8) * 0.35 + cos(p.z * 0.4 + uTime * 0.6) * 0.2;
            // visitor's pointer pushes a second source into the field
            float md = length(p.xz - uMouse);
            wave += sin(md * 2.0 - uTime * 4.0) * 0.35 * exp(-md * 0.35);
            p.y += wave;
            vH = wave;
            vFade = smoothstep(22.0, 6.0, abs(p.x)) * smoothstep(9.0, 2.0, abs(p.z + 1.0));
            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mv;
            gl_PointSize = (2.2 + wave * 1.6) * uPixel * (14.0 / -mv.z);
          }
        `}
        fragmentShader={/* glsl */ `
          uniform vec3 uGold;
          uniform vec3 uNavy;
          varying float vH;
          varying float vFade;
          void main() {
            vec2 c = gl_PointCoord - 0.5;
            float r = length(c);
            if (r > 0.5) discard;
            float glow = smoothstep(0.5, 0.0, r);
            vec3 col = mix(uNavy, uGold, smoothstep(-0.4, 0.8, vH));
            gl_FragColor = vec4(col, glow * vFade * 0.9);
          }
        `}
      />
    </points>
  );
}

/* Rings that expand from the record, like a broadcast signal. */
function BroadcastRings() {
  const group = useRef<THREE.Group>(null);
  const count = 5;
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    group.current?.children.forEach((child, i) => {
      const k = ((t * 0.35 + i / count) % 1 + 1) % 1;
      const s = 2.5 + k * 4.5;
      child.scale.set(s, s, s);
      ((child as THREE.Mesh).material as THREE.MeshBasicMaterial).opacity = (1 - k) * 0.35;
    });
  });
  return (
    <group ref={group} rotation={[-Math.PI / 2.3, 0, 0]}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i}>
          <ringGeometry args={[0.98, 1, 128]} />
          <meshBasicMaterial color={GOLD} transparent depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

/* A vinyl record drawn in code: grooves catch the light as it spins. */
function Vinyl() {
  const disc = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  const [grooves, label] = useMemo(() => {
    const size = 1024;
    const g = document.createElement("canvas");
    g.width = g.height = size;
    const gx = g.getContext("2d")!;
    gx.fillStyle = "#14151c";
    gx.fillRect(0, 0, size, size);
    for (let r = size * 0.18; r < size * 0.5; r += 2.2) {
      const shade = 34 + (Math.abs(Math.sin(r * 12.9898)) * 43758.5453 % 1) * 22;
      gx.strokeStyle = `rgb(${shade},${shade},${shade + 6})`;
      gx.lineWidth = 1;
      gx.beginPath();
      gx.arc(size / 2, size / 2, r, 0, Math.PI * 2);
      gx.stroke();
    }
    // light sheen
    const sheen = gx.createConicGradient(0, size / 2, size / 2);
    sheen.addColorStop(0, "rgba(255,255,255,0)");
    sheen.addColorStop(0.12, "rgba(255,240,210,0.16)");
    sheen.addColorStop(0.25, "rgba(255,255,255,0)");
    sheen.addColorStop(0.62, "rgba(255,255,255,0)");
    sheen.addColorStop(0.75, "rgba(255,240,210,0.12)");
    sheen.addColorStop(0.88, "rgba(255,255,255,0)");
    gx.fillStyle = sheen;
    gx.beginPath();
    gx.arc(size / 2, size / 2, size * 0.5, 0, Math.PI * 2);
    gx.fill();

    const l = document.createElement("canvas");
    l.width = l.height = 512;
    const lx = l.getContext("2d")!;
    const grad = lx.createRadialGradient(256, 256, 20, 256, 256, 256);
    grad.addColorStop(0, "#f2cf98");
    grad.addColorStop(1, "#c9853a");
    lx.fillStyle = grad;
    lx.fillRect(0, 0, 512, 512);
    lx.fillStyle = "#34394d";
    lx.font = "800 120px sans-serif";
    lx.textAlign = "center";
    lx.textBaseline = "middle";
    lx.fillText("BMPS", 256, 200);
    lx.font = "600 34px sans-serif";
    lx.fillText("PERFORMANCE RIGHTS", 256, 330);
    lx.beginPath();
    lx.arc(256, 256, 14, 0, Math.PI * 2);
    lx.fillStyle = "#0b0e1a";
    lx.fill();

    const gt = new THREE.CanvasTexture(g);
    const lt = new THREE.CanvasTexture(l);
    gt.colorSpace = lt.colorSpace = THREE.SRGBColorSpace;
    gt.anisotropy = 8;
    return [gt, lt];
  }, []);

  useFrame((_, dt) => {
    if (!disc.current) return;
    disc.current.rotation.y -= dt * 0.9;
    const parent = disc.current.parent!;
    parent.rotation.x = THREE.MathUtils.lerp(parent.rotation.x, 0.55 - pointer.y * 0.15, 0.05);
    parent.rotation.z = THREE.MathUtils.lerp(parent.rotation.z, -0.25 + pointer.x * 0.12, 0.05);
  });

  return (
    <group rotation={[0.55, 0, -0.25]}>
      <group ref={disc}>
        <mesh>
          <cylinderGeometry args={[2.4, 2.4, 0.06, 128]} />
          <meshStandardMaterial attach="material-0" color="#16171f" metalness={0.3} roughness={0.4} />
          <meshStandardMaterial attach="material-1" map={grooves} metalness={0.25} roughness={0.38} />
          <meshStandardMaterial attach="material-2" color="#0b0c12" />
        </mesh>
        <mesh position={[0, 0.032, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.82, 96]} />
          <meshStandardMaterial map={label} roughness={0.6} />
        </mesh>
      </group>
      <BroadcastRings />
    </group>
  );
}

/* Keeps the record to the right of the headline on wide screens, behind it on phones. */
function VinylSpot() {
  const { viewport } = useThree();
  const wide = viewport.aspect > 1.1;
  const scale = wide ? Math.min(0.7, viewport.width / 16) : 0.55;
  const position: [number, number, number] = wide ? [viewport.width * 0.24, 0.5, 0] : [1.6, 2.4, -1];
  return (
    <group position={position} scale={scale}>
      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.6}>
        <Vinyl />
      </Float>
    </group>
  );
}

function Rig() {
  useFrame(({ camera, pointer }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.6, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 1.2 + pointer.y * 0.3, 0.03);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function HeroScene() {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className="absolute inset-0">
      <Canvas
        frameloop={inView ? "always" : "never"}
        dpr={[1, 1.75]}
        camera={{ position: [0, 1.2, 9], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 6, 4]} intensity={1.6} color="#ffe6c2" />
        <pointLight position={[-5, 2, 3]} intensity={18} color="#e3a957" />
        <pointLight position={[5, -2, 2]} intensity={10} color="#6d7bd6" />
        <SoundField />
        <VinylSpot />
        <Sparkles count={70} scale={[16, 7, 6]} size={2.6} speed={0.35} color="#f2cf98" opacity={0.7} />
        <Rig />
      </Canvas>
    </div>
  );
}

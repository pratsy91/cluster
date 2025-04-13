import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiFigma,
  SiRedux,
  SiNodedotjs,
  SiLinkedin,
  SiStripe,
} from "react-icons/si";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";

// 3D Torus
function FloatingTorus({ position }) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.2; // Reduced speed
    ref.current.rotation.y += delta * 0.3; // Reduced speed
  });
  return (
    <mesh ref={ref} position={position} scale={0.5}>
      <torusGeometry args={[0.4, 0.1, 16, 100]} />
      <meshStandardMaterial color="#60a5fa" transparent opacity={0.4} />
    </mesh>
  );
}

// 3D Sphere
function FloatingSphere({ position }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = Math.sin(t * 1) * 0.4; // Slower vertical movement
    ref.current.rotation.y += 0.005; // Slower rotation
  });
  return (
    <mesh ref={ref} position={position} scale={0.5}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshStandardMaterial color="#f87171" transparent opacity={0.4} />
    </mesh>
  );
}

// 3D Background
function Background3D() {
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
        overflow: "hidden",
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      {objects}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}

// Gradient Overlay
function GradientOverlay() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0f0c29]/20 via-[#302b63]/20 to-[#24243e]/20 animate-gradientMove pointer-events-none z-[-9]" />
  );
}

// Twinkling Stars
function Stars() {
  const stars = new Array(50).fill().map((_, i) => ({
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    delay: Math.random() * 2,
  }));

  return stars.map((star, index) => (
    <div
      key={index}
      className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-60 animate-twinkle pointer-events-none"
      style={{
        left: star.left,
        top: star.top,
        animationDelay: `${star.delay}s`,
      }}
    />
  ));
}

// Glow Overlays
function GlowOverlays() {
  return (
    <>
      <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-full bg-blue-500 opacity-10 blur-sm animate-pulse pointer-events-none" />
      <div className="absolute bottom-[15%] right-[15%] w-16 h-16 rounded-full bg-pink-500 opacity-10 blur-sm animate-ping pointer-events-none" />
      <div className="absolute top-[50%] right-[30%] w-16 h-16 rounded-full bg-purple-500 opacity-10 blur-sm animate-pulse pointer-events-none" />
    </>
  );
}

// Navbar
function Navbar() {
  return (
    <>
      <nav className="w-full px-6 py-2 flex items-center justify-between fixed top-0 z-20 bg-transparent backdrop-blur-md text-white">
        <div className="text-xl font-bold">⚡ BOLT</div>
        <div className="flex items-center gap-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="w-4 h-4 cursor-pointer hover:text-blue-400 transition" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="w-4 h-4 cursor-pointer hover:text-blue-400 transition" />
          </a>
          <a href="#contact">
            <FaDiscord className="w-4 h-4 cursor-pointer hover:text-blue-400 transition" />
          </a>
          <button className="floating-button px-3 py-1 text-xs rounded bg-black text-white hover:bg-gray-800 transition">
            Sign In
          </button>
          <button className="floating-button px-3 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </nav>
      <div className="mt-20 w-full flex justify-center z-20">
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-1.5 rounded-full shadow shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-400/30 hover:-translate-y-0.5 cursor-pointer">
          <SiStripe className="w-4 h-4 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300" />
          <span className="transition-colors duration-300">
            New! Stripe Payments support
          </span>
        </div>
      </div>
    </>
  );
}

// Tech Icons
function TechIconsSection() {
  const icons = [
    { Icon: SiNextdotjs, color: "text-white", glow: "255,255,255" },
    { Icon: SiReact, color: "text-cyan-400", glow: "34,211,238" },
    { Icon: SiTypescript, color: "text-blue-500", glow: "59,130,246" },
    { Icon: SiJavascript, color: "text-yellow-400", glow: "250,204,21" },
    { Icon: SiHtml5, color: "text-orange-500", glow: "249,115,22" },
    { Icon: SiCss3, color: "text-blue-400", glow: "96,165,250" },
    { Icon: SiTailwindcss, color: "text-sky-400", glow: "56,189,248" },
    { Icon: SiFigma, color: "text-pink-500", glow: "236,72,153" },
    { Icon: SiRedux, color: "text-purple-400", glow: "192,132,252" },
    { Icon: SiNodedotjs, color: "text-green-500", glow: "34,197,94" },
  ];

  return (
    <div className="mt-6 w-full flex justify-center">
      <div className="grid grid-cols-5 gap-6 max-w-4xl">
        {icons.map(({ Icon, color, glow }, i) => (
          <Icon
            key={i}
            className={`w-10 h-10 ${color} opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer
              hover:drop-shadow-[0_0_6px_rgba(${glow},0.4)]
              drop-shadow-[0_0_2px_rgba(${glow},0.2)]`}
          />
        ))}
      </div>
    </div>
  );
}

// App Component
export default function App() {
  return (
    <>
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <Background3D />
        <GradientOverlay />
        <Stars />
        <GlowOverlays />
      </div>

      <Navbar />

      <main className="relative pt-20 text-white flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="text-center z-10 max-w-[500px] transition-transform duration-500">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent relative transition-transform duration-300 hover:drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
            What do you want to build?
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent transition-colors duration-500 hover:from-green-400 hover:to-blue-400"></span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 mb-4 relative group transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]">
            Prompt, run, edit, and deploy full-stack{" "}
            <span className="text-white font-medium group-hover:text-pink-400 transition-colors duration-300">
              web
            </span>{" "}
            and{" "}
            <span className="text-white font-medium group-hover:text-yellow-300 transition-colors duration-300">
              mobile
            </span>{" "}
            apps.
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent group-hover:text-transparent group-hover:bg-clip-text transition-colors duration-500"></span>
          </p>

          <div className="bg-white/10 mx-auto backdrop-blur-md border border-white/20 rounded-xl p-3 w-full max-w-md mb-6 shadow-lg shadow-blue-500/20 focus-within:border-blue-400 focus-within:shadow-blue-400/30 focus-within:shadow-md transition-all duration-300">
            <textarea
              placeholder="How can Bolt help you today?"
              className="w-full h-20 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none text-sm border-none"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {[
              "Import from Figma",
              "Build a mobile app with Expo",
              "Start a blog with Astro",
              "Create a docs site with Vitepress",
              "Scaffold UI with shadcn",
              "Draft a presentation with Slidev",
            ].map((text, i) => (
              <button
                key={i}
                className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-md border border-white/20 hover:bg-white/20 transition text-xs"
              >
                {text}
              </button>
            ))}
          </div>

          <TechIconsSection />
          {/* Footer Links */}
          <footer className="fixed bottom-4 right-4 z-10 text-xs text-gray-400 space-x-4">
            <a href="#" className="hover:text-white transition">
              We're hiring
            </a>
            <a href="#" className="hover:text-white transition">
              Help Center
            </a>
            <a href="#" className="hover:text-white transition">
              Pricing
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
          </footer>
        </div>
      </main>
    </>
  );
}

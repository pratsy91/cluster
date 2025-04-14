import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { GlowOverlays } from "./components/GlowOverlays";
import { Stars } from "./components/Stars";
import { GradientOverlay } from "./components/GradientOverlay";
import { Background3D } from "./components/Background3D";
import { TechIconsSection } from "./components/TechSection";
import { PricingCards } from "./components/PricingCards";

export default function App() {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col min-h-screen overflow-hidden text-white relative">
      {/* Background effects */}
      <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
        <Background3D />
        <GradientOverlay />
        <Stars />
        <GlowOverlays />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow pt-20 px-4 flex flex-col items-center justify-start">
        <div className="text-center z-10 max-w-[700px] transition-transform duration-500">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent relative transition-transform duration-300 hover:drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]">
            What do you want to build?
          </h1>
          <p className="text-base sm:text-lg text-gray-400 mb-4 relative group transition-all duration-300">
            Prompt, run, edit, and deploy full-stack{" "}
            <span className="text-white font-medium group-hover:text-pink-400 transition-colors duration-300">
              web
            </span>{" "}
            and{" "}
            <span className="text-white font-medium group-hover:text-yellow-300 transition-colors duration-300">
              mobile
            </span>{" "}
            apps.
          </p>

          {/* Textarea Input with Button */}
          <div className="relative bg-white/10 mx-auto backdrop-blur-md border border-white/20 rounded-xl p-3 w-full max-w-md mb-2 shadow-lg shadow-blue-500/20 focus-within:border-blue-400 focus-within:shadow-blue-400/30 transition-all duration-300">
            <textarea
              placeholder="How can Bolt help you today?"
              className="w-full h-20 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none text-sm border-none pr-24"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {input.trim() !== "" && (
              <button className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 transition-colors text-xs px-3 py-1 rounded-md">
                Generate Idea
              </button>
            )}
          </div>

          {/* Dynamic Suggestion */}
          <div className="h-5 mb-4">
            <div
              className={`text-sm text-green-300 transition-opacity duration-300 ${
                input.trim() !== "" ? "opacity-100" : "opacity-0"
              }`}
            >
              ⚡ Try building your idea with our templates or AI support.
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap mt-2 gap-2 justify-center mb-4 max-w-[500px] mx-auto">
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

          {/* Tech icons */}
          <TechIconsSection />

          {/* Pricing cards */}
          <PricingCards />
        </div>
      </main>

      {/* Footer */}
      <footer className="z-10 text-xs text-gray-400 space-x-4 py-4 px-6 lg:text-end text-center">
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
  );
}

import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { GlowOverlays } from "./components/GlowOverlays";
import { Stars } from "./components/Stars";
import { GradientOverlay } from "./components/GradientOverlay";
import { Background3D } from "./components/Background3D";
import { TechIconsSection } from "./components/TechSection";
import { PricingCards } from "./components/PricingCards";

export default function App() {
  const [input, setInput] = useState("");
  const [ideaGenerated, setIdeaGenerated] = useState(false);
  const [actionMessage, setActionMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleGenerateIdeaClick = () => {
    setIdeaGenerated(true);
    setInput("");
    setTimeout(() => setIdeaGenerated(false), 3000);
  };

  const handleButtonClick = (action) => {
    const messages = {
      "Import from Figma":
        "🚀 Importing Figma designs... Let’s bring your design to life!",
      "Build a mobile app with Expo":
        "📱 Building a mobile app with Expo... It's going to be a great journey!",
      "Start a blog with Astro":
        "📝 Starting your blog with Astro... Let’s make your content shine!",
      "Create a docs site with Vitepress":
        "📚 Creating a docs site with Vitepress... Your documentation awaits!",
      "Scaffold UI with shadcn":
        "🎨 Scaffolding UI with shadcn... Let's design something beautiful!",
      "Draft a presentation with Slidev":
        "🎤 Drafting your presentation with Slidev... Let’s impress your audience!",
    };
    setActionMessage(messages[action]);
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen text-white relative">
      <div className="fixed inset-0 -z-10">
        <Background3D />
        <GradientOverlay />
        <Stars />
        <GlowOverlays />
      </div>

      <Navbar />

      <main className="flex-grow px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Build stunning web & mobile experiences
          </h1>
          <p className="text-gray-300 text-lg">
            Prompt. Generate. Launch. Bring your creative ideas to life with our
            intelligent builder. No boundaries.
          </p>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg max-w-xl">
            <textarea
              placeholder="Describe what you want to build..."
              className="w-full h-32 bg-transparent text-white placeholder-gray-400 focus:outline-none resize-none text-base"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="mt-2 h-10">
              <button
                onClick={handleGenerateIdeaClick}
                className={`bg-pink-600 hover:bg-pink-700 text-sm px-4 py-2 rounded-md transition-opacity duration-300 ${
                  input.trim() ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
              >
                Generate Idea
              </button>
            </div>
          </div>
          <p
            className={`text-green-300 text-sm mt-2 transition-opacity duration-300 ${
              input.trim() ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            ⚡ Need inspiration? Try one of our starter templates below.
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {[
              "Import from Figma",
              "Build a mobile app with Expo",
              "Start a blog with Astro",
              "Create a docs site with Vitepress",
              "Scaffold UI with shadcn",
              "Draft a presentation with Slidev",
            ].map((text) => (
              <button
                key={text}
                onClick={() => handleButtonClick(text)}
                className="text-sm bg-white/10 border border-white/20 px-3 py-1 rounded hover:bg-white/20 transition"
              >
                {text}
              </button>
            ))}
          </div>
        </section>

        {/* Right Column */}
        <section className="space-y-12">
          <TechIconsSection />
          <PricingCards />
        </section>
      </main>

      {ideaGenerated && (
        <div className="fixed bottom-0 w-full py-3 bg-blue-600 text-white text-center text-sm shadow-lg z-20">
          🎉 Your idea has been generated! Start building now.
        </div>
      )}

      {showMessage && (
        <div className="fixed bottom-0 w-full py-3 bg-green-600 text-white text-center text-sm shadow-lg z-20">
          {actionMessage}
        </div>
      )}

      <footer className="py-6 text-xs text-center text-gray-400 space-x-4">
        <a href="#" className="hover:text-white">
          We're hiring
        </a>
        <a href="#" className="hover:text-white">
          Help Center
        </a>
        <a href="#" className="hover:text-white">
          Pricing
        </a>
        <a href="#" className="hover:text-white">
          Terms
        </a>
        <a href="#" className="hover:text-white">
          Privacy
        </a>
      </footer>
    </div>
  );
}

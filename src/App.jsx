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

    setTimeout(() => {
      setIdeaGenerated(false);
    }, 3000);
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

    // Hide the message after 2 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

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
              <button
                onClick={handleGenerateIdeaClick}
                className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 transition-colors text-xs px-3 py-1 rounded-md"
              >
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
                onClick={() => handleButtonClick(text)}
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

      {ideaGenerated && (
        <div
          className="fixed bottom-0 w-full py-3 bg-blue-600 text-white text-center text-sm shadow-lg transform translate-y-full transition-all duration-500 z-20"
          style={{
            transform: ideaGenerated ? "translateY(0)" : "translateY(100%)",
          }}
        >
          <p>
            🎉 Your idea has been generated! <br />
            Start building with our templates or AI support.
          </p>
        </div>
      )}

      {showMessage && (
        <div
          className="fixed bottom-0 w-full py-3 bg-green-600 text-white text-center text-sm shadow-lg transform translate-y-full transition-all duration-500"
          style={{
            transform: showMessage ? "translateY(0)" : "translateY(100%)",
          }}
        >
          <p>{actionMessage}</p>
        </div>
      )}

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

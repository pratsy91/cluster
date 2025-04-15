import React, { useState } from "react";
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
} from "react-icons/si";

export function TechIconsSection() {
  const [techMessage, setTechMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const icons = [
    {
      Icon: SiNextdotjs,
      color: "text-white",
      glow: "255,255,255",
      message: "Build powerful web apps with Next.js!",
      messageColor: "bg-white text-black",
    },
    {
      Icon: SiReact,
      color: "text-cyan-400",
      glow: "34,211,238",
      message: "React: Where dynamic UIs meet simplicity!",
      messageColor: "bg-cyan-400 text-white",
    },
    {
      Icon: SiTypescript,
      color: "text-blue-500",
      glow: "59,130,246",
      message: "TypeScript: Add types for better code clarity.",
      messageColor: "bg-blue-500 text-white",
    },
    {
      Icon: SiJavascript,
      color: "text-yellow-400",
      glow: "250,204,21",
      message: "JavaScript: The language that powers the web.",
      messageColor: "bg-yellow-400 text-black",
    },
    {
      Icon: SiHtml5,
      color: "text-orange-500",
      glow: "249,115,22",
      message: "HTML5: Structuring the web, one tag at a time.",
      messageColor: "bg-orange-500 text-white",
    },
    {
      Icon: SiCss3,
      color: "text-blue-400",
      glow: "96,165,250",
      message: "CSS3: Styling with precision and flair.",
      messageColor: "bg-blue-400 text-white",
    },
    {
      Icon: SiTailwindcss,
      color: "text-sky-400",
      glow: "56,189,248",
      message: "Tailwind CSS: Utility-first CSS for fast styling.",
      messageColor: "bg-sky-400 text-white",
    },
    {
      Icon: SiFigma,
      color: "text-pink-500",
      glow: "236,72,153",
      message: "Figma: Collaborate and design beautifully.",
      messageColor: "bg-pink-500 text-white",
    },
    {
      Icon: SiRedux,
      color: "text-purple-400",
      glow: "192,132,252",
      message: "Redux: Centralized state management for React.",
      messageColor: "bg-purple-400 text-white",
    },
    {
      Icon: SiNodedotjs,
      color: "text-green-500",
      glow: "34,197,94",
      message: "Node.js: Powering the backend with JavaScript.",
      messageColor: "bg-green-500 text-white",
    },
  ];

  const handleIconClick = (message, messageColor) => {
    setTechMessage(message);
    setMessageColor(messageColor);
    setTimeout(() => {
      setTechMessage("");
      setMessageColor("");
    }, 3000);
  };

  return (
    <div className="mt-6 w-full flex justify-center flex-col items-center gap-2">
      <p className="text-gray-400">
        or start a blank app with your favorite stack
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl px-4">
        {icons.map(({ Icon, color, glow, message, messageColor }, i) => (
          <div key={i} className="relative group">
            <Icon
              className={`w-10 h-10 ${color} opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer
                hover:drop-shadow-[0_0_6px_rgba(${glow},0.4)]
                drop-shadow-[0_0_2px_rgba(${glow},0.2)]`}
              onClick={() => handleIconClick(message, messageColor)}
            />
          </div>
        ))}
      </div>

      {/* Dynamic tech message bar */}
      {techMessage && (
        <div
          className={`fixed bottom-0 left-0 right-0 py-3 text-center text-sm shadow-lg z-50 transition-all duration-300 ${messageColor}`}
        >
          <p>{techMessage}</p>
        </div>
      )}
    </div>
  );
}

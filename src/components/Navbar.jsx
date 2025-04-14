import { useState } from "react";
import { SiLinkedin, SiStripe } from "react-icons/si";
import { FaXTwitter, FaDiscord, FaBars } from "react-icons/fa6";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-6 py-2 flex items-center justify-between fixed top-0 z-20 bg-transparent backdrop-blur-md text-white">
        <div className="text-xl font-bold font-mono italic">⚡ BOLT</div>

        {/* Desktop Menu (visible on larger screens) */}
        <div className="hidden md:flex items-center gap-3">
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

        {/* Hamburger Menu (visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            <FaBars className="w-6 h-6 cursor-pointer hover:text-blue-400 transition" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-black/80 z-30">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 mt-20">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
            <a href="#contact" className="text-white text-xl">
              <FaDiscord className="w-6 h-6" />
            </a>
            <button className="floating-button px-3 py-1 text-xs rounded bg-black text-white hover:bg-gray-800 transition">
              Sign In
            </button>
            <button className="floating-button px-3 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* Mobile Stripe Notification (visible on all screen sizes) */}
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

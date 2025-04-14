import { useState } from "react";
import { SiLinkedin, SiStripe } from "react-icons/si";
import { FaXTwitter, FaDiscord, FaBars } from "react-icons/fa6";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isGetStartedModalOpen, setIsGetStartedModalOpen] = useState(false);
  const [showStripeMessage, setShowStripeMessage] = useState(false);

  const handleModalClose = () => {
    setIsSignInModalOpen(false);
    setIsGetStartedModalOpen(false);
  };

  const handleStripeBadgeClick = () => {
    setShowStripeMessage(true);
    setTimeout(() => {
      setShowStripeMessage(false); // Hide the message after 3 seconds
    }, 3000);
  };

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
          <button
            onClick={() => setIsSignInModalOpen(true)}
            className="floating-button px-3 py-1 text-xs rounded bg-black text-white hover:bg-gray-800 transition"
          >
            Sign In
          </button>
          <button
            onClick={() => setIsGetStartedModalOpen(true)}
            className="floating-button px-3 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
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
            <button
              onClick={() => setIsSignInModalOpen(true)}
              className="floating-button px-3 py-1 text-xs rounded bg-black text-white hover:bg-gray-800 transition"
            >
              Sign In
            </button>
            <button
              onClick={() => setIsGetStartedModalOpen(true)}
              className="floating-button px-3 py-1 text-xs rounded bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      <div className="mt-20 w-full flex justify-center z-20">
        <div
          onClick={handleStripeBadgeClick}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm px-4 py-1.5 rounded-full shadow shadow-blue-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-400/30 hover:-translate-y-0.5 cursor-pointer"
        >
          <SiStripe className="w-4 h-4 text-indigo-400 transition-colors duration-300 group-hover:text-indigo-300" />
          <span className="transition-colors duration-300">
            New! Stripe Payments support
          </span>
        </div>
      </div>

      {/* Stripe Message */}
      {showStripeMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg">
          <p className="text-lg font-semibold">
            Stripe Payment Integration is Live!
          </p>
        </div>
      )}

      {/* Modals for Sign In and Get Started */}
      {isSignInModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-40">
          <div className="bg-black/60 text-white p-8 rounded-lg w-full max-w-md backdrop-blur-md shadow-lg border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:border-blue-400 transition-all"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:border-blue-400 transition-all"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Sign In
              </button>
            </form>
            <button
              onClick={handleModalClose}
              className="mt-6 text-blue-600 hover:underline text-center block"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isGetStartedModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-40">
          <div className="bg-black/60 text-white p-8 rounded-lg w-full max-w-md backdrop-blur-md shadow-lg border border-white/20">
            <h2 className="text-2xl font-bold mb-6 text-center">Get Started</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:border-blue-400 transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 bg-transparent border border-gray-500 rounded-md text-white focus:outline-none focus:border-blue-400 transition-all"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Get Started
              </button>
            </form>
            <button
              onClick={handleModalClose}
              className="mt-6 text-blue-600 hover:underline text-center block"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

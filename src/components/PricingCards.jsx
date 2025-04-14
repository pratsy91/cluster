import React, { useState } from "react";

export function PricingCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const plans = [
    {
      title: "Free",
      price: "$0",
      features: ["1 Project", "Community Support", "Basic Templates"],
      details:
        "The Free plan is great for individuals or small projects. It offers the basic functionality to get started.",
    },
    {
      title: "Pro",
      price: "$12/mo",
      features: ["Unlimited Projects", "Priority Support", "Pro Templates"],
      details:
        "The Pro plan is perfect for teams and professionals who need advanced tools and priority support.",
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      features: ["Custom Solutions", "Dedicated Support", "Team Access"],
      details:
        "The Enterprise plan is tailored for large organizations with custom solutions and dedicated support.",
    },
  ];

  const handleButtonClick = (plan) => {
    setModalContent(plan);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1400px] px-4">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="flex flex-col justify-between bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-6 text-left text-white shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-blue-400/30 w-full"
        >
          <div>
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <ul className="space-y-2 text-sm text-gray-300">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <button
            className="mt-6 w-full py-2 text-sm font-medium bg-white/20 border border-white/30 rounded-md hover:bg-white/30 transition-all"
            onClick={() => handleButtonClick(plan)}
          >
            {plan.title === "Enterprise" ? "Contact Sales" : "Get Started"}
          </button>
        </div>
      ))}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-xl text-black dark:text-white rounded-lg shadow-xl max-w-lg w-full p-6 transform transition-all duration-300 ease-out">
            <h3 className="text-2xl font-semibold mb-4 text-center text-white">
              {modalContent.title} Plan
            </h3>
            <p className="text-lg mb-4 text-white">{modalContent.details}</p>
            <h4 className="text-xl font-semibold mb-2 text-white">Features:</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {modalContent.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

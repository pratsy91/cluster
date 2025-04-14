export function PricingCards() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      features: ["1 Project", "Community Support", "Basic Templates"],
    },
    {
      title: "Pro",
      price: "$12/mo",
      features: ["Unlimited Projects", "Priority Support", "Pro Templates"],
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      features: ["Custom Solutions", "Dedicated Support", "Team Access"],
    },
  ];
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
          <button className="mt-6 w-full py-2 text-sm font-medium bg-white/20 border border-white/30 rounded-md hover:bg-white/30 transition-all">
            {plan.title === "Enterprise" ? "Contact Sales" : "Get Started"}
          </button>
        </div>
      ))}
    </div>
  );
}

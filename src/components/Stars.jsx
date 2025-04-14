export function Stars() {
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

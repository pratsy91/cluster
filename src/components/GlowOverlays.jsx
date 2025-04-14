export function GlowOverlays() {
  return (
    <>
      <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-full bg-blue-500 opacity-10 blur-sm animate-pulse pointer-events-none" />
      <div className="absolute bottom-[15%] right-[15%] w-16 h-16 rounded-full bg-pink-500 opacity-10 blur-sm animate-ping pointer-events-none" />
      <div className="absolute top-[50%] right-[30%] w-16 h-16 rounded-full bg-purple-500 opacity-10 blur-sm animate-pulse pointer-events-none" />
    </>
  );
}

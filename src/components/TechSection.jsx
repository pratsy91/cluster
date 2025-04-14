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
  const icons = [
    { Icon: SiNextdotjs, color: "text-white", glow: "255,255,255" },
    { Icon: SiReact, color: "text-cyan-400", glow: "34,211,238" },
    { Icon: SiTypescript, color: "text-blue-500", glow: "59,130,246" },
    { Icon: SiJavascript, color: "text-yellow-400", glow: "250,204,21" },
    { Icon: SiHtml5, color: "text-orange-500", glow: "249,115,22" },
    { Icon: SiCss3, color: "text-blue-400", glow: "96,165,250" },
    { Icon: SiTailwindcss, color: "text-sky-400", glow: "56,189,248" },
    { Icon: SiFigma, color: "text-pink-500", glow: "236,72,153" },
    { Icon: SiRedux, color: "text-purple-400", glow: "192,132,252" },
    { Icon: SiNodedotjs, color: "text-green-500", glow: "34,197,94" },
  ];

  return (
    <div className="mt-6 w-full flex justify-center flex-col items-center gap-2">
      <p className=" text-gray-400">
        or start a blank app with your favorite stack
      </p>
      <div className="grid grid-cols-5 gap-6 max-w-4xl">
        {icons.map(({ Icon, color, glow }, i) => (
          <Icon
            key={i}
            className={`w-10 h-10 ${color} opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer
              hover:drop-shadow-[0_0_6px_rgba(${glow},0.4)]
              drop-shadow-[0_0_2px_rgba(${glow},0.2)]`}
          />
        ))}
      </div>
    </div>
  );
}

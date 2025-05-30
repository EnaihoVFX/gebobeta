import { Bot, DollarSign, Video, TrendingUp, Star, Heart } from "lucide-react";

const iconItems = [
  { Icon: Bot, position: "top-20 left-10", size: 28, delayClass: "delay-0" },
  { Icon: DollarSign, position: "top-40 right-20", size: 24, delayClass: "delay-1000" },
  { Icon: Video, position: "bottom-40 left-20", size: 26, delayClass: "delay-500" },
  { Icon: TrendingUp, position: "top-60 left-1/3", size: 22, delayClass: "delay-[1500ms]" },
  { Icon: Star, position: "bottom-60 right-1/4", size: 20, delayClass: "delay-[750ms]" },
  { Icon: Heart, position: "top-80 right-10", size: 18, delayClass: "delay-[1250ms]" },
];

const circleItems = [
  { position: "top-32 left-1/4", size: "w-3 h-3", delayClass: "delay-0" },
  { position: "bottom-32 right-1/3", size: "w-4 h-4", delayClass: "delay-1000" },
  { position: "top-1/2 left-10", size: "w-2 h-2", delayClass: "delay-500" },
  { position: "top-1/3 right-20", size: "w-3 h-3", delayClass: "delay-[1500ms]" },
];

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Icons */}
      {iconItems.map(({ Icon, position, size, delayClass }, index) => (
        <div
          key={`icon-${index}`}
          className={`absolute ${position} animate-float ${delayClass} opacity-10`}
        >
          <Icon className="text-purple-400" size={size} />
        </div>
      ))}

      {/* Circles */}
      {circleItems.map(({ position, size, delayClass }, index) => (
        <div
          key={`circle-${index}`}
          className={`absolute ${position} ${size} bg-purple-600/10 rounded-full animate-float ${delayClass}`}
        />
      ))}
    </div>
  );
};

export default FloatingElements;

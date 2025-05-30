import { Sparkles, Star, TrendingUp, Users } from "lucide-react";
import { useState, useEffect } from "react";

const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const news = [
    {
      icon: TrendingUp,
      text: "Over 50,000 creators joined this month",
      highlight: "50,000",
      color: "text-green-400"
    },
    {
      icon: Star,
      text: "New AI features released",
      highlight: "AI features",
      color: "text-purple-400"
    },
    {
      icon: Users,
      text: "Join the fastest growing creator community",
      highlight: "creator community",
      color: "text-blue-400"
    },
    {
      icon: Sparkles,
      text: "Early access now available",
      highlight: "Early access",
      color: "text-yellow-400"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentNews = news[currentIndex];
  const Icon = currentNews.icon;

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="bg-black/40 backdrop-blur-xl border border-purple-800/20 rounded-full px-6 py-3 shadow-lg w-full">
        <div className="flex items-center gap-3 animate-fade-in justify-center">
          <Icon className={`${currentNews.color} animate-pulse`} size={14} />
          <p className="text-sm text-purple-100 whitespace-nowrap overflow-hidden text-ellipsis">
            {currentNews.text.split(currentNews.highlight).map((part, i, arr) => (
              i === arr.length - 1 ? (
                <span key={i}>{part}</span>
              ) : (
                <>
                  {part}<span className={`font-semibold ${currentNews.color}`}>{currentNews.highlight}</span>
                </>
              )
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;

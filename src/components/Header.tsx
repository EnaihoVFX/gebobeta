import { Button } from "@/components/ui/button";
import { Users, Zap } from "lucide-react";
import NewsTicker from "@/components/NewsTicker";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="inline-block bg-black/40 backdrop-blur-xl border border-purple-800/20 rounded-full shadow-2xl">
            <div className="px-6 py-3">
              <div className="flex items-center group">
                <div className="w-10 h-10 transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src="/lovable-uploads/a873b545-75e8-4feb-9990-b24825b30f2a.png" 
                    alt="Gebo Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="ml-3 hidden sm:block">
                  <span className="text-white font-bold text-lg tracking-tight block"></span>
                  <span className="text-purple-200/80 text-xs font-medium tracking-wide block">Own Every Frame; Be the future</span>
                </div>
              </div>
            </div>
          </div>

          {/* News Ticker */}
          <div className="flex-1 mx-4">
            <NewsTicker />
          </div>
          
          {/* Stats and CTA */}
          <div className="inline-block bg-black/40 backdrop-blur-xl border border-purple-800/20 rounded-full shadow-2xl">
            <div className="px-6 py-3">
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-4">
                  <div className="flex items-center space-x-2 bg-purple-900/30 backdrop-blur-sm rounded-full px-3 py-1.5 border border-purple-700/30">
                    <Users className="text-purple-300" size={14} />
                    <span className="text-purple-200 text-sm font-medium">1,247 creators</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-purple-900/30 backdrop-blur-sm rounded-full px-3 py-1.5 border border-purple-700/30">
                    <Zap className="text-purple-400" size={14} />
                    <span className="text-purple-200 text-sm font-medium">Early access</span>
                  </div>
                </div>
                <Button 
                  size="sm"
                  className="bg-purple-1000 text-white hover:bg-purple-800 rounded-full px-6 py-1.5 font-medium text-sm transition-all duration-200 border border-purple-500/30 hover:scale-105"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

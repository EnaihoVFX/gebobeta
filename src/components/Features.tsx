import { Bot, DollarSign, Zap, Users, Video, TrendingUp, Sparkles, Star, Crown, Target, Award, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Video Editing",
      description: "Upload raw footage and watch our AI transform it into engaging, professional content with perfect cuts, effects, and transitions.",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-900/40 to-violet-900/20",
      hoverBg: "from-purple-800/60 to-violet-800/40",
      delay: "0s"
    },
    {
      icon: DollarSign,
      title: "Monetize Everything",
      description: "Earn money from every interaction. Likes, shares, comments, and views all translate directly into real income.",
      color: "from-emerald-500 to-green-600",
      bgColor: "from-emerald-900/40 to-green-900/20",
      hoverBg: "from-emerald-800/60 to-green-800/40",
      delay: "0.1s"
    },
    {
      icon: Zap,
      title: "Instant Publishing",
      description: "From upload to published in seconds. Our AI handles editing, optimization, and posting across all your social channels.",
      color: "from-yellow-500 to-orange-600",
      bgColor: "from-yellow-900/40 to-orange-900/20",
      hoverBg: "from-yellow-800/60 to-orange-800/40",
      delay: "0.2s"
    },
    {
      icon: Users,
      title: "Creator Community",
      description: "Connect with like-minded creators, collaborate on projects, and grow your audience together.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-900/40 to-indigo-900/20",
      hoverBg: "from-blue-800/60 to-indigo-800/40",
      delay: "0.3s"
    },
    {
      icon: Video,
      title: "Smart Content Optimization",
      description: "AI analyzes trending content and optimizes your videos for maximum engagement and viral potential.",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-900/40 to-rose-900/20",
      hoverBg: "from-pink-800/60 to-rose-800/40",
      delay: "0.4s"
    },
    {
      icon: TrendingUp,
      title: "Real-Time Analytics",
      description: "Track your earnings, engagement, and growth with detailed analytics and performance insights.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-900/40 to-blue-900/20",
      hoverBg: "from-cyan-800/60 to-blue-800/40",
      delay: "0.5s"
    }
  ];

  const floatingElements = [
    { icon: Crown, x: 5, y: 20, rotation: -12, delay: "0s" },
    { icon: Target, x: 95, y: 15, rotation: 15, delay: "1s" },
    { icon: Award, x: 3, y: 80, rotation: 8, delay: "2s" },
    { icon: Globe, x: 97, y: 75, rotation: -10, delay: "3s" }
  ];

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-32 font-inter overflow-hidden">
      {/* Top fade for seamless blend with Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
      
      {/* Main background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      {/* Bottom fade for seamless blend with WaitlistForm */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      
      {/* Enhanced atmospheric layers */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/20 via-transparent to-purple-900/15"></div>
      
      {/* Enhanced grid pattern with better visibility */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0NywgNTEsIDIzNCwwLjA4KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      {/* Enhanced atmospheric glowing orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] bg-blue-500/12 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-3/4 left-1/2 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/6 left-1/4 w-72 h-72 bg-indigo-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>

      {/* Floating elements matching Hero style */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className="absolute hidden xl:block floating-element opacity-0"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `rotate(${element.rotation}deg)`,
            animation: `fadeIn 0.8s ease-out ${element.delay} forwards, floatUp 4s ease-in-out infinite ${element.delay}`
          }}
        >
          <div className="bg-purple-900/50 backdrop-blur-xl border border-purple-500/50 rounded-2xl p-5 hover:bg-purple-800/60 hover:border-purple-400/70 transition-all duration-300 hover:scale-110 hover:rotate-0 shadow-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            <element.icon className="text-purple-200 hover:text-white transition-all duration-200" size={22} />
          </div>
        </div>
      ))}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header matching Hero typography */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8 opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 0.2s forwards' }}>
            <div className="group flex items-center bg-gradient-to-r from-purple-900/60 to-blue-900/60 backdrop-blur-xl rounded-full px-10 py-5 border border-purple-500/50 hover:border-purple-400/70 transition-all duration-300 cursor-pointer hover:scale-105 shadow-2xl hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]">
              <Sparkles className="text-purple-200 mr-3 group-hover:text-white animate-pulse" size={20} />
              <span className="text-purple-100 font-bold text-lg tracking-wide group-hover:text-white">✨ Platform Features</span>
              <div className="ml-4 flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" 
                      style={{ animationDelay: `${i * 0.3}s`, animationDuration: '1.5s' }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 0.4s forwards' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Why creators choose{" "}
            </span>
            <span className="relative inline-block group">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent font-black hover:scale-105 transition-all duration-300 cursor-pointer">
                Gebo
              </span>
              <Star className="absolute -top-4 -right-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-spin" style={{ animationDuration: '3s' }} size={24} />
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-purple-200/90 max-w-4xl mx-auto leading-relaxed font-medium opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 0.6s forwards' }}>
            The only platform combining cutting-edge AI technology with real monetization opportunities for content creators.
          </p>
        </div>

        {/* Features Grid with Hero-style cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-10 rounded-3xl bg-gradient-to-br ${feature.bgColor} 
                         border border-purple-500/50 backdrop-blur-xl hover:border-purple-400/70 
                         transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl
                         hover:bg-gradient-to-br hover:${feature.hoverBg} cursor-pointer
                         opacity-0 shadow-2xl hover:shadow-[0_0_40px_rgba(168,85,247,0.2)]`}
              style={{
                animation: `fadeIn 0.8s ease-out ${0.8 + index * 0.1}s forwards`
              }}
            >
              {/* Enhanced hover glow effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 
                              group-hover:opacity-25 transition-opacity duration-500 blur-2xl`}></div>
              
              {/* Icon with enhanced styling */}
              <div className={`relative w-18 h-18 rounded-2xl bg-gradient-to-r ${feature.color} 
                              flex items-center justify-center mb-8 
                              group-hover:scale-110 transition-transform duration-300
                              shadow-xl group-hover:shadow-2xl`}>
                <feature.icon className="w-9 h-9 text-white drop-shadow-sm" />
              </div>

              {/* Content with enhanced typography */}
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-5 group-hover:text-purple-100 transition-colors duration-300 font-inter leading-tight">
                  {feature.title}
                </h3>
                <p className="text-purple-300/95 text-lg leading-relaxed group-hover:text-purple-200/95 transition-colors duration-300 font-medium">
                  {feature.description}
                </p>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-white/30 group-hover:bg-white/60 transition-colors duration-300"></div>
              <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-purple-400/40 group-hover:bg-purple-300/70 transition-colors duration-300"></div>
              <div className="absolute top-1/2 right-6 w-1 h-1 rounded-full bg-violet-400/30 group-hover:bg-violet-300/60 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action matching Hero button style */}
        <div className="text-center mt-20 opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 1.6s forwards' }}>
          <button className="group relative px-16 py-6 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 
                           text-white font-black text-xl rounded-3xl hover:scale-110 transition-all duration-300
                           shadow-2xl hover:shadow-[0_0_50px_rgba(168,85,247,0.8)] border border-purple-400/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center font-inter">
              <Zap className="mr-4 group-hover:scale-125 transition-transform duration-200" size={24} />
              Start Creating Today
              <Sparkles className="ml-4 group-hover:rotate-12 transition-transform duration-300" size={24} />
            </span>
          </button>
        </div>

        {/* Additional info matching Hero footer style */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-300/80 text-base mt-12 opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 1.8s forwards' }}>
          <div className="flex items-center font-semibold group cursor-pointer hover:text-purple-200 transition-colors duration-200 bg-purple-900/30 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-700/30"
            onClick={scrollToWaitlist}>
            <Star className="mr-2 text-purple-400 group-hover:scale-110 transition-transform duration-200" size={16} />
            <span className="group-hover:text-purple-200 font-inter">Join 50,000+ creators already building</span>
          </div>
          <div className="hidden sm:block w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <span className="font-semibold hover:text-purple-200 cursor-pointer transition-colors duration-200 flex items-center bg-purple-900/30 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-700/30 font-inter"
            onClick={scrollToWaitlist}>
            <Sparkles className="mr-2 text-purple-400" size={14} />
            Free to start • No setup fees • Instant payouts
          </span>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        .font-inter {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes floatUp {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
          }
          50% { 
            transform: translateY(-15px) scale(1.05); 
          }
        }
        
        .floating-element {
          animation-fill-mode: both;
        }
        
        .floating-element:nth-child(1) { animation-delay: 0s; }
        .floating-element:nth-child(2) { animation-delay: 1s; }
        .floating-element:nth-child(3) { animation-delay: 2s; }
        .floating-element:nth-child(4) { animation-delay: 3s; }
        
        /* Mobile optimizations matching Hero */
        @media (max-width: 768px) {
          .floating-element {
            display: none !important;
          }
          
          .text-7xl {
            font-size: 3rem;
          }
          
          .text-2xl {
            font-size: 1.25rem;
          }
        }
        
        /* Reduced motion support matching Hero */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .animate-spin,
          .floating-element {
            animation: none;
          }
          
          .transition-all,
          .transition-transform,
          .transition-colors,
          .transition-opacity {
            transition: none;
          }
        }
        
        /* High contrast mode support matching Hero */
        @media (prefers-contrast: high) {
          .bg-purple-900\/40 {
            background-color: rgba(88, 28, 135, 0.8);
          }
          
          .border-purple-600\/40 {
            border-color: rgba(147, 51, 234, 0.8);
          }
        }
        
        /* Button hover effects matching Hero */
        button:hover {
          transform: translateY(-2px);
        }
        
        /* Backdrop blur support matching Hero */
        @supports (backdrop-filter: blur(10px)) {
          .backdrop-blur-md {
            backdrop-filter: blur(20px) saturate(150%);
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
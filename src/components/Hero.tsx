import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play, Users, Star, ChevronDown, Zap, TrendingUp, Award, Globe, Camera, Heart, Share2, MessageCircle, Eye, X, Volume2, Maximize, MoreHorizontal, Check, Clock, Rocket, Target, Crown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [floatingCards, setFloatingCards] = useState([]);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const heroRef = useRef(null);
  
  const words = ["Videos", "Content", "Stories", "Moments", "Reels", "Posts"];
  
  const stats = [
    { icon: Users, label: "Active Creators", value: "12,470+", delay: "0s", trend: "+23%" },
    { icon: TrendingUp, label: "Content Generated", value: "2.3M+", delay: "0.2s", trend: "+156%" },
    { icon: Award, label: "Earnings Paid", value: "$1.2M+", delay: "0.4s", trend: "+89%" },
    { icon: Globe, label: "Countries", value: "67", delay: "0.6s", trend: "+12%" }
  ];

  const socialProofs = [
    { icon: Heart, count: "24.1K", color: "text-red-400" },
    { icon: Share2, count: "8.9K", color: "text-blue-400" },
    { icon: MessageCircle, count: "12.3K", color: "text-green-400" },
    { icon: Eye, count: "157K", color: "text-yellow-400" }
  ];

  const testimonials = [
    { name: "Sarah Chen", role: "Content Creator", avatar: "SC", quote: "Made $2.3K in my first month!", verified: true },
    { name: "Alex Rivera", role: "Influencer", avatar: "AR", quote: "AI editing saved me 20 hours/week", verified: true },
    { name: "Maya Patel", role: "Artist", avatar: "MP", quote: "My engagement increased by 340%!", verified: true }
  ];

  const features = [
    { icon: Zap, title: "Instant AI Editing", desc: "Auto-cut, effects, music" },
    { icon: TrendingUp, title: "Viral Optimization", desc: "AI predicts trending content" },
    { icon: Award, title: "Smart Monetization", desc: "Earn from every interaction" },
    { icon: Crown, title: "Premium Templates", desc: "Hollywood-grade effects" }
  ];

  // Initialize particles with more variety
  useEffect(() => {
    const initialParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8,
      opacity: Math.random() * 0.6 + 0.2,
      color: Math.random() > 0.5 ? 'purple' : 'blue',
    }));
    setParticles(initialParticles);

    // More floating cards
    const cards = [
      { id: 1, icon: Camera, title: "AI Video Editor", subtitle: "Smart cuts & effects", x: 8, y: 15, rotation: -12 },
      { id: 2, icon: Zap, title: "Instant Processing", subtitle: "3x faster rendering", x: 88, y: 12, rotation: 8 },
      { id: 3, icon: TrendingUp, title: "Viral Predictor", subtitle: "94% accuracy rate", x: 12, y: 75, rotation: 10 },
      { id: 4, icon: Award, title: "Earn Rewards", subtitle: "$0.05 per view", x: 85, y: 78, rotation: -6 },
      { id: 5, icon: Crown, title: "Premium Access", subtitle: "Exclusive templates", x: 5, y: 45, rotation: 15 },
      { id: 6, icon: Target, title: "Smart Targeting", subtitle: "Find your audience", x: 92, y: 45, rotation: -10 }
    ];
    setFloatingCards(cards);
  }, []);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        let newX = particle.x + particle.speedX;
        let newY = particle.y + particle.speedY;

        // Handle boundary conditions
        if (newX > window.innerWidth) newX = 0;
        if (newX < 0) newX = window.innerWidth;
        if (newY > window.innerHeight) newY = 0;
        if (newY < 0) newY = window.innerHeight;

        return {
          ...particle,
          x: newX,
          y: newY
        };
      }));
    };

    const interval = setInterval(animateParticles, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  const VideoModal = () => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowVideoModal(false)}>
      <div className="relative bg-black/90 rounded-2xl border border-purple-700/50 max-w-4xl w-full aspect-video overflow-hidden" onClick={e => e.stopPropagation()}>
        {/* Video Player Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent p-4 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <Play className="text-white" size={14} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Gebo Platform Demo</h3>
                <p className="text-purple-300 text-sm">How AI creates viral content automatically</p>
              </div>
            </div>
            <button 
              onClick={() => setShowVideoModal(false)}
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Fake Video Content */}
        <div className="w-full h-full bg-gradient-to-br from-purple-900 via-black to-blue-900 flex items-center justify-center relative">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
              <Play className="text-purple-400" size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Demo Video Loading...</h3>
              <p className="text-purple-300">Experience the future of content creation</p>
            </div>
            <div className="flex justify-center space-x-4">
              <div className="h-1 w-16 bg-purple-600 rounded-full animate-pulse"></div>
              <div className="h-1 w-12 bg-purple-600/50 rounded-full animate-pulse delay-200"></div>
              <div className="h-1 w-20 bg-purple-600/30 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>

        {/* Video Player Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-white">
                <Play size={14} className="mr-1" />
                Play
              </Button>
              <div className="flex items-center space-x-2 text-white/70">
                <Volume2 size={16} />
                <div className="w-16 h-1 bg-white/20 rounded-full">
                  <div className="w-10 h-full bg-white/70 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white/70 text-sm">2:34 / 5:12</span>
              <button className="text-white/70 hover:text-white">
                <Maximize size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-32 pb-16 font-inter">
        {/* Enhanced background with more layers */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-black transition-all duration-500"
          style={{
            transform: `translate(${mousePosition.x * 8}px, ${mousePosition.y * 8}px)`,
          }}
        ></div>
        
        {/* Additional gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        {/* Bottom fade for seamless transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        
        {/* Enhanced animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className={`absolute rounded-full ${particle.color === 'purple' ? 'bg-purple-400/30' : 'bg-blue-400/30'} animate-pulse`}
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                opacity: particle.opacity,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Enhanced floating cards */}
        {floatingCards.map((card) => (
          <div
            key={card.id}
            className="absolute hidden xl:block group cursor-pointer transition-all duration-1000 hover:scale-110 floating-card"
            style={{
              left: `${card.x}%`,
              top: `${card.y}%`,
              transform: `rotate(${card.rotation}deg)`,
              animationDelay: `${card.id * 0.3}s`,
            }}
          >
            <div className="bg-purple-900/40 backdrop-blur-md border border-purple-600/40 rounded-2xl p-5 group-hover:bg-purple-800/50 group-hover:border-purple-500/60 transition-all duration-300 group-hover:scale-110 group-hover:rotate-0 shadow-2xl">
              <card.icon className="text-purple-300 group-hover:text-purple-200 mb-3 group-hover:scale-110 transition-all duration-200" size={24} />
              <h4 className="text-purple-100 text-sm font-semibold mb-1 whitespace-nowrap">{card.title}</h4>
              <p className="text-purple-300/70 text-xs whitespace-nowrap">{card.subtitle}</p>
            </div>
          </div>
        ))}
        
        {/* Enhanced grid pattern */}
        <div 
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE0NywgNTEsIDIzNCwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc=')] opacity-60 transition-opacity duration-300"
          style={{
            opacity: 0.3 + mousePosition.x * 0.3,
          }}
        ></div>

        {/* Multiple glowing orbs */}
        <div className="absolute top-1/6 left-1/5 w-72 h-72 bg-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/5 right-1/6 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 space-y-12">
          {/* Enhanced badge */}
          <div className="flex items-center justify-center mb-8 opacity-0 animate-fade-in" style={{ animation: 'fadeIn 0.8s ease-out 0.2s forwards' }}>
            <div className="group flex items-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md rounded-full px-8 py-4 border border-purple-600/40 hover:border-purple-500/60 transition-all duration-300 cursor-pointer hover:scale-105 shadow-2xl">
              <Sparkles className="text-purple-300 mr-3 group-hover:text-purple-200 animate-pulse" size={18} />
              <span className="text-purple-100 font-semibold text-base tracking-wide group-hover:text-white">🚀 AI-Powered Social Revolution</span>
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
                <span className="text-purple-300/70 text-sm">BETA</span>
              </div>
            </div>
          </div>
          
          {/* Main content with better spacing */}
          <div className="space-y-8">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                Create. Earn. Repeat.{" "}
              </span>
              <br />
              <span className="relative inline-block group">
                <span className="text-white hover:text-purple-200 transition-all duration-300 cursor-pointer relative font-black">
                  With Gebo
                  <Star className="absolute -top-6 -right-6 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 animate-spin" style={{ animationDuration: '3s' }} size={28} />
                  <div className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </span>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-purple-200/90 max-w-4xl mx-auto leading-relaxed opacity-0 font-medium" style={{ animation: 'fadeIn 0.8s ease-out 0.4s forwards' }}>
              The first social platform where AI edits your{' '}
              <span className="text-purple-300 font-bold relative inline-block min-w-[120px] group cursor-pointer">
                <span className="transition-all duration-500 group-hover:scale-110 inline-block bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent">
                  {words[currentWordIndex]}
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 to-purple-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
              </span>
              {' '}automatically and you earn money from every single interaction.
            </p>
          </div>

          {/* Social proof and CTA section */}
          <div className="space-y-12">
            {/* Social proof indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 0.6s forwards' }}>
              {socialProofs.map((proof, index) => (
                <div key={index} className="flex items-center space-x-2 group cursor-pointer bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-700/30 hover:border-purple-600/50 transition-all duration-200">
                  <proof.icon className={`${proof.color} group-hover:scale-110 transition-transform duration-200`} size={18} />
                  <span className="text-purple-200 font-semibold group-hover:text-purple-100 transition-colors duration-200">{proof.count}</span>
                </div>
              ))}
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 0.8s forwards' }}>
              <Button 
                onClick={scrollToWaitlist}
                size="lg" 
                className="relative bg-gradient-to-r from-purple-600 to-purple-500 text-white hover:from-purple-500 hover:to-purple-400 px-12 py-5 text-lg font-bold transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] group rounded-2xl border border-purple-400/30 overflow-hidden shadow-2xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center">
                  <Rocket className="mr-3" size={20} />
                  Join the Waitlist
                  <ArrowRight className={`ml-3 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} size={20} />
                </span>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => setShowVideoModal(true)}
                className="relative overflow-hidden border-2 border-purple-600/60 bg-transparent text-purple-200 hover:bg-purple-900/40 hover:text-white px-12 py-5 text-lg font-bold transition-all duration-300 hover:scale-110 group rounded-2xl shadow-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 transform scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-300"></div>
                <span className="relative z-10 flex items-center">
                  <Play className="mr-3 group-hover:scale-110 transition-transform duration-200" size={20} />
                  Watch Demo
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                  </div>
                </span>
              </Button>
            </div>
          </div>

          {/* Features grid and stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 0.9s forwards' }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group cursor-pointer p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-md border border-purple-600/40 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <feature.icon className="text-purple-400 mx-auto mb-3 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-200" size={24} />
                <h4 className="text-white font-bold mb-2 group-hover:text-purple-200 transition-colors duration-200">{feature.title}</h4>
                <p className="text-purple-300/80 text-sm group-hover:text-purple-200/90 transition-colors duration-200">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 opacity-0" style={{ animation: 'fadeIn 0.8s ease-out 1s forwards' }}>
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group cursor-pointer p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-black/40 backdrop-blur-md border border-purple-600/40 hover:border-purple-500/60 transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl opacity-0"
                style={{ 
                  animation: `fadeIn 0.6s ease-out ${1.2 + index * 0.1}s forwards`
                }}
              >
                <stat.icon className="text-purple-400 mx-auto mb-3 group-hover:text-purple-300 group-hover:scale-110 transition-all duration-200" size={24} />
                <div className="text-3xl font-black text-white mb-2 group-hover:text-purple-100 transition-colors duration-200">{stat.value}</div>
                <div className="text-purple-300/80 text-sm mb-2 group-hover:text-purple-200/90 transition-colors duration-200">{stat.label}</div>
                <div className="flex items-center justify-center space-x-1">
                  <TrendingUp className="text-green-400" size={12} />
                  <span className="text-green-400 text-xs font-semibold">{stat.trend}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced footer info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-purple-300/80 text-base opacity-0 mb-8" style={{ animation: 'fadeIn 0.8s ease-out 1.4s forwards' }}>
            <div className="flex items-center font-semibold group cursor-pointer hover:text-purple-200 transition-colors duration-200 bg-purple-900/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-700/30"
              onClick={scrollToWaitlist}>
              <Clock className="mr-2 text-purple-400 group-hover:scale-110 transition-transform duration-200" size={16} />
              <span className="group-hover:text-purple-200">12,470 creators joined today</span>
            </div>
            <div className="hidden sm:block w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="font-semibold hover:text-purple-200 cursor-pointer transition-colors duration-200 flex items-center bg-purple-900/30 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-700/30"
              onClick={scrollToWaitlist}>
              <Sparkles className="mr-2 text-purple-400" size={14} />
              Early access • No credit card required • Join 50K+ waitlist
            </span>
          </div>

          {/* Enhanced scroll indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={scrollToWaitlist}>
            <div className="p-3 rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md border border-purple-600/40 group-hover:border-purple-500/60 group-hover:from-purple-800/60 group-hover:to-blue-800/60 transition-all duration-300 shadow-xl">
              <ChevronDown className="text-purple-400 group-hover:text-purple-300 transition-colors duration-200" size={28} />
            </div>
          </div>
        </div>

        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
            
            .font-inter {
              font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(30px); }
              to { opacity: 1; transform: translateY(0); }
            }
            
            @keyframes floatUp {
              0%, 100% { transform: translateY(0px) scale(1); }
              50% { transform: translateY(-15px) scale(1.05); }
            }
            
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
            
            .floating-card {
              animation: floatUp 4s ease-in-out infinite;
            }
            
            .floating-card:nth-child(1) { animation-delay: 0s; }
            .floating-card:nth-child(2) { animation-delay: 0.5s; }
            .floating-card:nth-child(3) { animation-delay: 1s; }
            .floating-card:nth-child(4) { animation-delay: 1.5s; }
            .floating-card:nth-child(5) { animation-delay: 2s; }
            .floating-card:nth-child(6) { animation-delay: 2.5s; }
            
            .shimmer-effect {
              background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
              background-size: 200% 100%;
              animation: shimmer 2s infinite;
            }
            
            /* Custom scrollbar for modal */
            .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(0,0,0,0.1);
              border-radius: 2px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(168,85,247,0.5);
              border-radius: 2px;
            }
            
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(168,85,247,0.7);
            }
            
            /* Glow effects */
            .glow-purple {
              box-shadow: 0 0 20px rgba(168,85,247,0.3), 0 0 40px rgba(168,85,247,0.1);
            }
            
            .glow-blue {
              box-shadow: 0 0 20px rgba(59,130,246,0.3), 0 0 40px rgba(59,130,246,0.1);
            }
            
            /* Text glow */
            .text-glow {
              text-shadow: 0 0 10px rgba(168,85,247,0.5), 0 0 20px rgba(168,85,247,0.3);
            }
            
            /* Backdrop blur support */
            @supports (backdrop-filter: blur(10px)) {
              .backdrop-blur-custom {
                backdrop-filter: blur(20px) saturate(150%);
              }
            }
            
            /* Button hover effects */
            .btn-primary:hover {
              transform: translateY(-2px);
              box-shadow: 0 10px 25px rgba(168,85,247,0.4);
            }
            
            .btn-secondary:hover {
              transform: translateY(-2px);
              box-shadow: 0 8px 20px rgba(168,85,247,0.2);
            }
            
            /* Particle animation variations */
            .particle-1 { animation-duration: 3s; }
            .particle-2 { animation-duration: 4s; }
            .particle-3 { animation-duration: 5s; }
            
            /* Loading animation for video */
            @keyframes loading-pulse {
              0%, 100% { opacity: 0.4; }
              50% { opacity: 1; }
            }
            
            .loading-animation {
              animation: loading-pulse 1.5s ease-in-out infinite;
            }
            
            /* Mobile optimizations */
            @media (max-width: 768px) {
              .floating-card {
                display: none !important;
              }
              
              .text-8xl {
                font-size: 3.5rem;
              }
              
              .text-3xl {
                font-size: 1.5rem;
              }
            }
            
            /* High contrast mode support */
            @media (prefers-contrast: high) {
              .bg-purple-900\/40 {
                background-color: rgba(88, 28, 135, 0.8);
              }
              
              .border-purple-600\/40 {
                border-color: rgba(147, 51, 234, 0.8);
              }
            }
            
            /* Reduced motion support */
            @media (prefers-reduced-motion: reduce) {
              .animate-pulse,
              .animate-bounce,
              .floating-card,
              .animate-spin {
                animation: none;
              }
              
              .transition-all,
              .transition-transform,
              .transition-colors,
              .transition-opacity {
                transition: none;
              }
            }
          `}
        </style>
      </div>

      {/* Video Modal */}
      {showVideoModal && <VideoModal />}
    </>
  );
};

export default Hero;
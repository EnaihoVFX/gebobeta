import React, { useState, useEffect } from 'react';
import { Mail, Twitter, Instagram, Linkedin, Github, ArrowUp, Sparkles } from 'lucide-react';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
  ];

  const footerLinks = [
    { title: 'Product', links: ['Features', 'Pricing', 'API', 'Updates'] },
    { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press'] },
    { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'Tutorials'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
  ];

  return (
    <footer className="relative py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900/20 to-black border-t border-purple-500/20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.01}%`,
            top: `${mousePosition.y * 0.01}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-bounce" 
             style={{ animationDelay: '2s', animationDuration: '4s' }} />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-pink-500/5 rounded-full blur-xl animate-pulse" 
             style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Logo and Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/a873b545-75e8-4feb-9990-b24825b30f2a.png" 
                  alt="Gebo" 
                  className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hidden">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                </h3>
                <div className="flex items-center space-x-1 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-purple-300">AI-Powered</span>
                </div>
              </div>
            </div>
            
            <p className="text-purple-200/80 leading-relaxed max-w-md">
              Revolutionizing social media with cutting-edge AI technology. 
              Built for creators, by creators. Join the future of digital interaction.
            </p>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((section, index) => (
              <div key={section.title} className="space-y-4" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="text-white font-semibold text-lg tracking-tight">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-purple-200/70 hover:text-white transition-all duration-300 text-sm font-medium hover:translate-x-1 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media and Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-purple-500/20">
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <div className="flex items-center space-x-2 text-purple-200/80">
              <Mail className="w-4 h-4" />
              <a href="mailto:geboproto@gmail.com" className="hover:text-white transition-colors duration-300">
                geboproto@gmail.com
              </a>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`p-2 bg-white/5 rounded-full border border-purple-500/20 text-purple-301 transition-all duration-300 hover:scale-110 hover:bg-white/10 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-purple-300/60 text-sm font-medium">
              © {currentYear} GEBO AI. All rights reserved.
            </p>
            <p className="text-purple-400/40 text-xs mt-1">
              Built for creators, by creators.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50 group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
        </button>
      )}
    </footer>
  );
};

export default Footer;

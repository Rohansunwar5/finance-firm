import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Waves } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Mission", href: "#services" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('#home')}>
            {/* Icon */}
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-br from-blue-600 to-cyan-600' 
                : 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/30'
            } group-hover:scale-110`}>
              <Waves className="w-6 h-6 text-white" />
            </div>
            
            {/* Text Logo */}
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-xl tracking-tight transition-all duration-300 ${
                isScrolled 
                  ? 'text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text' 
                  : 'text-white'
              } group-hover:scale-105 inline-block`}
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                Ksheerabdhi
              </span>
              <span className={`text-xs font-medium tracking-widest transition-colors duration-300 ${
                isScrolled ? 'text-slate-600' : 'text-blue-200'
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}>
                INCORPORATED
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`font-medium transition-colors duration-300 hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-white hover:text-accent'
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant={isScrolled ? "primary" : "hero"}
              onClick={() => scrollToSection('#contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-card rounded-lg mt-2 p-4 animate-in slide-in-from-top-4 duration-300">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 text-foreground hover:text-primary font-medium transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <Button 
              variant="primary" 
              className="w-full mt-4"
              onClick={() => scrollToSection('#contact')}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>

      {/* Google Fonts Link - Add this to your HTML head if not already present */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@500&display=swap" 
        rel="stylesheet" 
      />
    </nav>
  );
};

export default Navigation;
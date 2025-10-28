// components/ui/Navigation.tsx
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Waves } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", isRoute: false },   
    { label: "Mission", href: "#services", isRoute: false },
    { label: "Our Team", href: "/team", isRoute: true },
    { label: "Clients", href: "#clients", isRoute: false },
    { label: "Contact", href: "#contact", isRoute: false }
  ];

  const scrollToSection = (href: string) => {
    // If we're not on the home page and trying to access a hash section
    if (location.pathname !== '/' && href.startsWith('#')) {
      window.location.href = '/' + href;
    } else if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      scrollToSection('#contact');
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a1730]/95 backdrop-blur-md shadow-xl shadow-[#FFD700]/5' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
  <img 
    src="/logo.png" 
    alt="Ksheerabdhi Inc Logo" 
    className={`h-24 w-auto transition-all duration-300 ${
      isScrolled ? 'brightness-100' : 'brightness-100'
    } group-hover:scale-110`}
  />
</Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-white hover:text-[#FFD700]' : 'text-white hover:text-[#FFD700]'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-white hover:text-[#FFD700]' : 'text-white hover:text-[#FFD700]'
                  }`}
                >
                  {item.label}
                </button>
              )
            ))}
            <Button 
              className="bg-[#FFD700] text-[#0a1730] hover:bg-[#e6c200] font-semibold px-6 transition-all duration-300 hover:scale-105"
              onClick={handleContactClick}
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
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#13294b]/95 backdrop-blur-md border border-[#FFD700]/20 rounded-lg mt-2 p-4 animate-in slide-in-from-top-4 duration-300">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left py-3 text-white hover:text-[#FFD700] font-medium transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-white hover:text-[#FFD700] font-medium transition-colors duration-300"
                >
                  {item.label}
                </button>
              )
            ))}
            <Button 
              className="w-full mt-4 bg-[#FFD700] text-[#0a1730] hover:bg-[#e6c200] font-semibold"
              onClick={handleContactClick}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>

      {/* Google Fonts Link */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@500&display=swap" 
        rel="stylesheet" 
      />
    </nav>
  );
};

export default Navigation;
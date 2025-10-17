import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Users, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.jpg" 
          alt="Investment Background" 
          className="w-full h-full object-cover"
        />
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Financial Chart Lines Animation */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M 0 400 Q 250 300 500 350 T 1000 300 T 1500 400 T 2000 350" 
            stroke="url(#lineGradient)" 
            strokeWidth="3" 
            fill="none"
            className="animate-pulse"
          />
          <path 
            d="M 0 500 Q 250 450 500 480 T 1000 450 T 1500 500 T 2000 480" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-1 pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-400/30 animate-in slide-in-from-bottom-8 duration-1000">
          <TrendingUp className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium text-blue-100">Smart Investment Solutions</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 animate-in slide-in-from-bottom-8 duration-1000 delay-150 px-2">
          Bridging Wealth & Opportunity
          <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text mt-2">
            Through Smarter Investments
          </span>
        </h1>
        
        <p className="hidden sm:block text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto text-slate-200 animate-in slide-in-from-bottom-8 duration-1000 delay-300 leading-relaxed px-4">
          At Ksheerabdhi Inc, we help individuals and businesses strategically grow their funds by connecting them with trusted networks and high-potential investment opportunities.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10 animate-in slide-in-from-bottom-8 duration-1000 delay-450 px-4">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
            <Shield className="w-3 md:w-4 h-3 md:h-4 text-blue-400" />
            <span className="text-xs md:text-sm">Trusted Networks</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
            <TrendingUp className="w-3 md:w-4 h-3 md:h-4 text-green-400" />
            <span className="text-xs md:text-sm">Strategic Growth</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20">
            <Users className="w-3 md:w-4 h-3 md:h-4 text-purple-400" />
            <span className="text-xs md:text-sm">Expert Guidance</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center animate-in slide-in-from-bottom-8 duration-1000 delay-600 px-4">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold rounded-full shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
            size="lg" 
            onClick={() => scrollToSection('services')}
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300"
            size="lg" 
            onClick={() => scrollToSection('contact')}
          >
            Talk to an Expert
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
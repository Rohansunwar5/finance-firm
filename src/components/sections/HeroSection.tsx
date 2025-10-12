import { Button } from "@/components/ui/button";
import Galaxy from '../ui/Galaxy'; // Adjust the import path as needed
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.2}
          glowIntensity={0.4}
          saturation={0.6}
          hueShift={220}
          rotationSpeed={0.05}
          twinkleIntensity={0.4}
          speed={0.8}
          transparent={false}
        />
      </div>
      
      {/* Optional overlay for better text readability - pointer-events-none allows mouse to pass through */}
      <div className="absolute inset-0 bg-black/30 z-1 pointer-events-none"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-8 duration-1000">
          Bridging Wealth & Opportunity
          <span className="block text-accent">Through Smarter Investments</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-in slide-in-from-bottom-8 duration-1000 delay-300">
          At Ksheerabdhi Inc, we help individuals and businesses strategically grow their funds by connecting them with trusted networks and high-potential investment opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-8 duration-1000 delay-600">
          <Button variant="hero" size="lg" onClick={() => scrollToSection('services')}>
            Explore Our Services
          </Button>
          <Button variant="heroSecondary" size="lg" onClick={() => scrollToSection('contact')}>
            Talk to an Expert
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
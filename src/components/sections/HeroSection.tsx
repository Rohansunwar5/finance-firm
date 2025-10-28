import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Users, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#081325] via-[#0a1730] to-[#0a1730] text-white">
      {/* Background Image with unified color filter */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt="Investment Background"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />

        {/* Floating Golden & Navy Glows */}
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-56 h-56 bg-[#C0C0C0]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Financial Chart Lines */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFD700" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFD700" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
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
            style={{ animationDelay: "0.5s" }}
          />
        </svg>
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081325]/60 via-[#0a1730]/80 to-[#0a1730]/90 z-1 pointer-events-none"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#FFD700]/40 animate-in slide-in-from-bottom-8 duration-1000">
          <TrendingUp className="w-4 h-4 text-[#FFD700]" />
          <span className="text-sm font-medium text-[#FFD700]/90">
            Smart Investment Solutions
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 animate-in slide-in-from-bottom-8 duration-1000 delay-150 px-2">
          Bridging Wealth & Opportunity
          <span className="block text-transparent bg-gradient-to-r from-[#FFD700] via-[#FFC300] to-[#C0C0C0] bg-clip-text mt-2">
            Through Smarter Investments
          </span>
        </h1>

        <p className="hidden sm:block text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 animate-in slide-in-from-bottom-8 duration-1000 delay-300 leading-relaxed px-4">
          At Ksheerabdhi Inc, we help individuals and businesses strategically
          grow their funds by connecting them with trusted networks and
          high-potential investment opportunities.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-in slide-in-from-bottom-8 duration-1000 delay-450 px-4">
          {[
            { icon: <Shield />, text: "Trusted Networks" },
            { icon: <TrendingUp />, text: "Strategic Growth" },
            { icon: <Users />, text: "Expert Guidance" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#FFD700]/30"
            >
              <div className="text-[#FFD700] w-4 h-4">{item.icon}</div>
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom-8 duration-1000 delay-600 px-4">
          <Button
            className="bg-gradient-to-r from-[#FFD700] to-[#e6c200] hover:from-[#e6c200] hover:to-[#c8a800] text-[#0a1730] px-8 py-5 text-lg font-semibold rounded-full shadow-lg hover:shadow-[#FFD700]/40 transition-all duration-300 group"
            onClick={() => scrollToSection("services")}
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-[#FFD700]/40 hover:border-[#FFD700]/60 px-8 py-5 text-lg font-semibold rounded-full transition-all duration-300"
            onClick={() => scrollToSection("contact")}
          >
            Talk to an Expert
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-[#FFD700]/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#FFD700]/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

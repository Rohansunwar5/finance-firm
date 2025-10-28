import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';

const CtaSection = () => {
  const benefits = [
    "Strategic Fund Diversification",
    "Access to Trusted Networks",
    "Tailored Investment Strategies",
    "Sustainable Wealth Growth"
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#081325] via-[#0a1730] to-[#0a1730] relative overflow-hidden text-white">

      {/* Animated Soft Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#FFD700]/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-[#C0C0C0]/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Bridge Your Capital
              <span className="block text-[#FFD700]">To Smarter Opportunities</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Partner with Ksheerabdhi Inc to strategically grow your funds, access trusted private networks, 
              and unlock investment opportunities designed to maximize returns and minimize risk.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center justify-center space-x-2 text-gray-200 animate-in slide-in-from-bottom-8"
                style={{ animationDelay: `${(index + 2) * 200}ms`, animationDuration: '800ms' }}
              >
                <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 text-lg font-semibold bg-[#FFD700] text-[#0a1730] hover:bg-[#e6c200] transform hover:scale-105 transition-all duration-300 rounded-xl"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              size="lg" 
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 text-lg font-semibold border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0a1730] transform hover:scale-105 transition-all duration-300 rounded-xl"
            >
              Explore Opportunities
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-600/40">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">14+</div>
              <div className="text-gray-200">Years of Market Expertise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">95%</div>
              <div className="text-gray-200">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-2">20+</div>
              <div className="text-gray-200">Trusted Global Markets</div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 bg-[#13294b]/50 backdrop-blur-sm rounded-2xl border border-[#FFD700]/20">
            <p className="text-gray-100 mb-4">
              <strong>Take the next step.</strong> Partner with us to make your funds work smarter through strategic investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-300">
              <a href="mailto:mpsreenath1975@gmail.com" className="hover:text-[#FFD700] transition-colors duration-300">
                mpsreenath1975@gmail.com
              </a>
              <span className="hidden sm:inline text-[#FFD700]">|</span>
              <a href="tel:+91-9886074636" className="hover:text-[#FFD700] transition-colors duration-300">
                +91 9886074636
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

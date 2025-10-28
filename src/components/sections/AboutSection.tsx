import { CheckCircle } from "lucide-react";
const teamPhoto = "/cover.jpg";

const AboutSection = () => {
  const achievements = [
    "500+ Investors Empowered",
    "Strategic Access to Trusted Networks",
    "95% Client Retention Rate",
    "Trusted Financial Bridge Across 20+ Markets"
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#081325] via-[#0a1730] to-[#0a1730] relative overflow-hidden text-white"
    >
      {/* Soft Glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#FFD700]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-[#C0C0C0]/10 rounded-full blur-[100px] animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Column */}
          <div className="animate-in slide-in-from-left-8 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bridging Wealth & Opportunity
              <span className="block text-[#FFD700] drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]">
                Through Smart Investments
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              At <span className="text-[#FFD700] font-semibold">Ksheerabdhi Inc</span>, we empower individuals and 
              businesses to make smarter investment decisions through strategic fund allocation and diversification. 
              By connecting investors with our trusted private networks, we unlock sustainable growth opportunities 
              while minimizing financial risk.
            </p>

            <div className="space-y-5">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-in slide-in-from-left-8 duration-1000"
                  style={{ animationDelay: `${300 + index * 100}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-[#FFD700] flex-shrink-0" />
                  <span className="text-gray-200 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div className="animate-in slide-in-from-right-8 duration-1000">
            <div className="relative group">
              <img
                src={teamPhoto}
                alt="Our financial advisory team"
                className="rounded-2xl shadow-2xl w-full object-cover border border-[#FFD700]/20 transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#FFD700] to-[#e6c200] text-[#0a1730] p-6 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.3)] border border-[#FFD700]/40">
                <div className="text-center">
                  <div className="text-3xl font-bold">14+</div>
                  <div className="text-sm font-semibold opacity-90">
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

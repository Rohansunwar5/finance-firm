import { CheckCircle } from "lucide-react";
// Use the public folder path directly for images
const teamPhoto = "/cover.jpg";

const AboutSection = () => {
  const achievements = [
    "500+ Clients Guided to Financial Success",
    "15+ Years of Wealth Management Expertise",
    "95% Client Retention Rate",
    "Trusted Across 20+ Global Markets"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-in slide-in-from-left-8 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
               Empowering Your Future
              <span className="text-primary block">With Financial Expertise</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Since our inception, we've been committed to helping individuals, families, and businesses 
              secure their financial futures. Our experienced advisors deliver tailored investment strategies, 
              wealth planning solutions, and risk management services designed to build lasting prosperity.
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 animate-in slide-in-from-left-8 duration-1000" style={{ animationDelay: `${300 + index * 100}ms` }}>
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-in slide-in-from-right-8 duration-1000">
            <div className="relative">
              <img 
                src={teamPhoto}
                alt="Our financial advisory team"
                className="rounded-2xl shadow-card w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-elegant">
                <div className="text-center">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
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
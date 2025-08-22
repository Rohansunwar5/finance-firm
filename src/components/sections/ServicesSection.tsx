import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Cog, BarChart3, Shield, Target } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Wealth Management",
      description: "Tailored strategies to grow, protect, and transfer wealth across generations.",
      features: ["Portfolio Management", "Retirement Planning", "Estate Planning", "Asset Allocation"]
    },
    {
      icon: Users,
      title: "Private Client Advisory",
      description: "Personalized financial guidance to help you achieve long-term stability and success.",
      features: ["Financial Planning", "Succession Advisory", "Trust Services", "Tax Efficiency"]
    },
    {
      icon: Cog,
      title: "Corporate Finance",
      description: "Expert solutions to strengthen businesses with funding, structuring, and capital strategies.",
      features: ["Mergers & Acquisitions", "Capital Structuring", "Debt Advisory", "Valuation Services"]
    },
    {
      icon: BarChart3,
      title: "Investment Solutions",
      description: "Access diversified opportunities with data-driven investment strategies.",
      features: ["Equities & Bonds", "Private Equity Access", "Alternative Investments", "Global Markets"]
    },
    {
      icon: Shield,
      title: "Risk & Insurance Planning",
      description: "Comprehensive protection for your personal and business assets.",
      features: ["Risk Assessment", "Insurance Advisory", "Hedging Strategies", "Crisis Preparedness"]
    },
    {
      icon: Target,
      title: "Performance & Growth",
      description: "Drive sustainable financial performance with strategies that maximize returns.",
      features: ["Goal-Based Planning", "Performance Benchmarking", "Wealth Growth Strategies", "Continuous Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions designed to safeguard your wealth, grow your assets, 
            and provide peace of mind for the future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 border-0 shadow-card animate-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100}ms`, animationDuration: '1000ms' }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-500">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Cog, BarChart3, Shield, Target } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Business Strategy & Growth",
      description: "Unlock new opportunities with data-driven strategies designed to accelerate sustainable growth.",
      features: [
        "Market Positioning & Expansion",
        "Business Model Innovation",
        "Revenue Optimization",
        "Strategic Partnerships"
      ]
    },
    {
      icon: Users,
      title: "Product & Experience Design",
      description: "Build experiences users love through human-centered design, rapid iteration, and customer insight.",
      features: [
        "UX Research & Strategy",
        "Product Prototyping",
        "Customer Journey Mapping",
        "Experience Innovation"
      ]
    },
    {
      icon: Cog,
      title: "Technology & Operations",
      description: "Streamline operations with modern, scalable technology solutions tailored to your business.",
      features: [
        "Process Automation",
        "Cloud Architecture & DevOps",
        "Systems Integration",
        "Operational Efficiency"
      ]
    },
    {
      icon: BarChart3,
      title: "Data & Insights",
      description: "Transform raw data into powerful insights that drive smarter decision-making and strategy.",
      features: [
        "Advanced Analytics",
        "Data Strategy & Governance",
        "Performance Dashboards",
        "AI & Predictive Modeling"
      ]
    },
    {
      icon: Shield,
      title: "Risk, Security & Compliance",
      description: "Protect your business and customers with proactive risk management and compliance frameworks.",
      features: [
        "Security Assessments",
        "Regulatory Compliance",
        "Risk Mitigation Strategies",
        "Business Continuity Planning"
      ]
    },
    {
      icon: Target,
      title: "Performance Acceleration",
      description: "Turn strategy into measurable outcomes with continuous optimization and performance benchmarking.",
      features: [
        "Goal-Based Roadmapping",
        "Operational KPIs & OKRs",
        "Performance Benchmarking",
        "Scaling Playbooks"
      ]
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
            From strategy to execution — we help modern businesses scale, innovate, and thrive in an ever-evolving landscape.
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

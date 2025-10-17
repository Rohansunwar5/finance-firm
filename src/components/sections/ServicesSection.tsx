import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Sparkles } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Purpose</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
            Mission & Vision
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guiding principles that drive our commitment to your financial success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <Card className="group relative overflow-hidden border-0 shadow-elegant hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[100px] group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-primary/50 group-hover:scale-110 transition-all duration-500">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    Mission Statement
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to empower clients with strategic financial guidance, smart fund diversification, and access to trusted private lending networks to help them achieve sustainable growth.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-primary font-medium">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                Empowering Your Growth
              </div>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="group relative overflow-hidden border-0 shadow-elegant hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-bl-[100px] group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-accent/50 group-hover:scale-110 transition-all duration-500">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    Vision Statement
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become a trusted financial bridge that empowers individuals and businesses to grow their wealth through smart investment strategies and reliable lending networks.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-accent font-medium">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                Building Your Future
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
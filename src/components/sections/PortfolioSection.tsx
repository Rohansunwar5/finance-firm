import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, Users, Target } from 'lucide-react';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'digital', label: 'Digital Transformation' },
    { id: 'strategy', label: 'Strategic Planning' },
    { id: 'operations', label: 'Operations' }
  ];

  const projects = [
    {
      id: 1,
      category: 'digital',
      title: "Global Bank Digital Transformation",
      description: "Led comprehensive digital overhaul resulting in 40% improved customer satisfaction and $50M cost savings.",
      impact: "+40% Customer Satisfaction",
      savings: "$50M Cost Savings",
      duration: "18 months",
      tags: ["Digital Banking", "Process Automation", "Customer Experience"],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 2,
      category: 'strategy',
      title: "Retail Chain Expansion Strategy",
      description: "Developed market entry strategy for 200+ new locations across 15 states, achieving 25% revenue growth.",
      impact: "+25% Revenue Growth",
      savings: "200+ New Locations",
      duration: "12 months",
      tags: ["Market Analysis", "Expansion Planning", "Revenue Growth"],
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 3,
      category: 'operations',
      title: "Manufacturing Efficiency Optimization",
      description: "Streamlined operations for Fortune 500 manufacturer, reducing waste by 35% and improving productivity.",
      impact: "+30% Productivity",
      savings: "35% Waste Reduction",
      duration: "8 months",
      tags: ["Lean Manufacturing", "Process Optimization", "Sustainability"],
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 4,
      category: 'digital',
      title: "E-commerce Platform Modernization",
      description: "Modernized legacy systems for major e-commerce player, resulting in 60% faster page loads and improved conversion.",
      impact: "+45% Conversion Rate",
      savings: "60% Faster Performance",
      duration: "10 months",
      tags: ["E-commerce", "System Architecture", "Performance"],
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      id: 5,
      category: 'strategy',
      title: "Healthcare Network Consolidation",
      description: "Strategic merger guidance for regional healthcare network, achieving seamless integration and improved patient care.",
      impact: "+50% Operational Efficiency",
      savings: "$30M Synergies",
      duration: "24 months",
      tags: ["Healthcare", "M&A", "Integration"],
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 6,
      category: 'operations',
      title: "Supply Chain Resilience Program",
      description: "Built robust supply chain framework reducing disruption risk by 70% and improving vendor relationships.",
      impact: "70% Risk Reduction",
      savings: "+90% Vendor Satisfaction",
      duration: "14 months",
      tags: ["Supply Chain", "Risk Management", "Vendor Relations"],
      icon: <Users className="w-6 h-6" />
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-in slide-in-from-bottom-8 duration-1000">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-300">
            Real results for real businesses. Explore how we've helped organizations transform and achieve their goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-in slide-in-from-bottom-8 duration-1000 delay-500">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'primary' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className="transition-all duration-300 hover:shadow-elegant"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-border hover:border-primary/20 animate-in slide-in-from-bottom-8"
              style={{ animationDelay: `${(index + 3) * 100}ms`, animationDuration: '800ms' }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {project.icon}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="font-semibold text-primary">{project.impact}</div>
                    <div className="text-muted-foreground">Impact</div>
                  </div>
                  <div className="text-center p-3 bg-secondary rounded-lg">
                    <div className="font-semibold text-primary">{project.savings}</div>
                    <div className="text-muted-foreground">Achievement</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Duration: {project.duration}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
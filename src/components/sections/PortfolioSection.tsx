import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Rocket, BarChart3, Wrench } from 'lucide-react';

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'product', label: 'Product Innovation' },
    { id: 'growth', label: 'Growth & Scale' },
    { id: 'operations', label: 'Operational Excellence' }
  ];

  const projects = [
    {
      id: 1,
      category: 'product',
      title: "AI-driven Product Launch",
      description: "Led the development and GTM strategy of a new AI-powered product suite, increasing market share and user adoption significantly.",
      impact: "+60% User Growth",
      savings: "3x Faster Launch Cycle",
      duration: "9 months",
      tags: ["AI/ML", "Product Strategy", "MVP Launch"],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: 2,
      category: 'growth',
      title: "Global Expansion Playbook",
      description: "Designed and executed scalable market entry strategy enabling expansion across 12 countries with measurable revenue acceleration.",
      impact: "+40% ARR Growth",
      savings: "12 New Markets",
      duration: "14 months",
      tags: ["Market Strategy", "Growth", "Global Expansion"],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      id: 3,
      category: 'operations',
      title: "Operational Cost Optimization",
      description: "Restructured legacy workflows for a Fortune 500 firm, improving delivery timelines and reducing overhead costs.",
      impact: "+30% Productivity",
      savings: "$25M Cost Savings",
      duration: "10 months",
      tags: ["Automation", "Efficiency", "Cost Reduction"],
      icon: <Wrench className="w-6 h-6" />
    },
    {
      id: 4,
      category: 'product',
      title: "E-commerce Performance Overhaul",
      description: "Modernized a leading e-commerce platform’s infrastructure, resulting in faster experiences and stronger customer retention.",
      impact: "+50% Conversion Rate",
      savings: "70% Faster Load Time",
      duration: "8 months",
      tags: ["E-commerce", "Infra Modernization", "UX Optimization"],
      icon: <Rocket className="w-6 h-6" />
    },
    {
      id: 5,
      category: 'growth',
      title: "Strategic M&A Integration",
      description: "Orchestrated seamless post-merger integration of a healthcare network, aligning technology, operations, and patient care delivery.",
      impact: "+45% Operational Synergy",
      savings: "$40M Integration Value",
      duration: "18 months",
      tags: ["Healthcare", "M&A", "Strategy"],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      id: 6,
      category: 'operations',
      title: "Supply Chain Resilience Upgrade",
      description: "Engineered robust supply chain systems to minimize disruption risks and increase supplier trust across geographies.",
      impact: "75% Risk Reduction",
      savings: "+90% Vendor Satisfaction",
      duration: "12 months",
      tags: ["Supply Chain", "Risk Management", "Resilience"],
      icon: <Wrench className="w-6 h-6" />
    }
  ];

  const filteredProjects =
    activeCategory === 'all'
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
            A proven record of delivering impact. Explore how we’ve helped startups and enterprises innovate, scale, and optimize their operations.
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
              style={{
                animationDelay: `${(index + 3) * 100}ms`,
                animationDuration: '800ms'
              }}
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
                    <div className="text-muted-foreground">Outcome</div>
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
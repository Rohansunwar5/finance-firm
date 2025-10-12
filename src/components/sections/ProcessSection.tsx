import { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Discovery & Research",
      description: "We start by understanding your business, market, and user needs to define clear goals and success metrics.",
      icon: "🔍"
    },
    {
      title: "Strategy & Roadmap",
      description: "A tailored strategic plan is crafted — aligning product vision, technology, and business objectives.",
      icon: "🧭"
    },
    {
      title: "Design & Build",
      description: "We design, prototype, and build scalable solutions with modern tech stacks and best practices.",
      icon: "⚡"
    },
    {
      title: "Launch & Optimize",
      description: "Your product or initiative goes live with performance tracking, user feedback loops, and optimization cycles.",
      icon: "🚀"
    },
    {
      title: "Scale & Evolve",
      description: "We help you scale sustainably — expanding features, automating workflows, and refining strategy for long-term impact.",
      icon: "📈"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-in slide-in-from-bottom-8 duration-1000">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-300">
            A clear, proven framework that transforms ideas into scalable products and sustainable growth.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-border rounded-full">
            <div 
              className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative text-center transform transition-all duration-500 ${
                  index <= activeStep ? 'scale-105 opacity-100' : 'scale-95 opacity-70'
                }`}
              >
                {/* Step Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                  index <= activeStep 
                    ? 'bg-gradient-primary text-primary-foreground shadow-glow' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  {index < activeStep ? (
                    <CheckCircle className="w-8 h-8" />
                  ) : (
                    <span>{step.icon}</span>
                  )}
                </div>

                {/* Step Content */}
                <div className={`transition-all duration-500 ${
                  index === activeStep ? 'animate-pulse' : ''
                }`}>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-primary">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Manual Step Navigation */}
        <div className="flex justify-center mt-12 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStep ? 'bg-primary scale-125' : 'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

import { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Discovery & Research", description: "We start by understanding your business, market, and user needs to define clear goals and success metrics.", icon: "🔍" },
    { title: "Strategy & Roadmap", description: "A tailored strategic plan is crafted — aligning product vision, technology, and business objectives.", icon: "🧭" },
    { title: "Design & Build", description: "We design, prototype, and build scalable solutions with modern tech stacks and best practices.", icon: "⚡" },
    { title: "Launch & Optimize", description: "Your product or initiative goes live with performance tracking, user feedback loops, and optimization cycles.", icon: "🚀" },
    { title: "Scale & Evolve", description: "We help you scale sustainably — expanding features, automating workflows, and refining strategy for long-term impact.", icon: "📈" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
 <section
  className="py-24 bg-gradient-to-b from-[#0a1730] via-[#0a1730] to-[#081325] relative overflow-hidden -mt-[1px]"
>


      {/* Decorative gradient overlay */}
     <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a1730] via-[#0a1730]/70 to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-blue-950/0 via-blue-950/70 to-blue-900" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Our Process
          </h2>
          <p className="text-lg text-blue-100/80 max-w-3xl mx-auto">
            A proven framework that transforms ideas into scalable products and sustainable growth.
          </p>
        </div>

        {/* Progress line */}
        <div className="relative">
          <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-blue-800/40 rounded-full">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full transition-all duration-1000 ease-out shadow-yellow-500/40"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative text-center transform transition-all duration-500 ${
                  index <= activeStep ? 'scale-105 opacity-100' : 'scale-95 opacity-70'
                }`}
              >
                {/* Step icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                    index <= activeStep
                      ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-blue-950 shadow-lg shadow-yellow-500/40'
                      : 'bg-blue-900/40 border border-blue-700 text-yellow-200'
                  }`}
                >
                  {index < activeStep ? <CheckCircle className="w-8 h-8" /> : <span>{step.icon}</span>}
                </div>

                {/* Step text */}
                <div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      index <= activeStep ? 'text-yellow-400' : 'text-white'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-blue-100/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <div
                    className={`hidden md:block absolute top-8 -right-4 ${
                      index < activeStep ? 'text-yellow-400' : 'text-white/30'
                    }`}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-12 space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeStep
                  ? 'bg-yellow-400 scale-125 shadow-yellow-400/50'
                  : 'bg-blue-800 hover:bg-yellow-400/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Smooth transition bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#081325]/70 to-[#081325] pointer-events-none" />

    </section>
  );
};

export default ProcessSection;

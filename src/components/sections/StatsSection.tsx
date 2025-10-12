import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: 300, label: "Investors Empowered", suffix: "+" },
    { value: 150, label: "Million Capital Allocated", suffix: "+" },
    { value: 250, label: "Successful Partnerships", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 16);
    });
  };

  return (
    <section id="stats-section" className="py-20 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 animate-in slide-in-from-bottom-8 duration-1000">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-300">
            Empowering investors and businesses to grow through strategic investments and trusted networks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center transform hover:scale-105 transition-all duration-300 animate-in slide-in-from-bottom-8"
              style={{ animationDelay: `${(index + 2) * 200}ms`, animationDuration: '1000ms' }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

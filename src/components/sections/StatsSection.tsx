import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { value: 300, label: "Investors Empowered", suffix: "+" },
    { value: 150, label: "Million Capital Allocated", suffix: "+" },
    { value: 250, label: "Successful Partnerships", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true);
        animateCounters();
      }
    }, { threshold: 0.1 });

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
   <section
  id="stats-section"
  className="py-24 bg-gradient-to-b from-[#081325] via-[#0a1730] to-[#0a1730] relative overflow-hidden"
>


      {/* Gradient blend from ProcessSection */}
      
      
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#081325] via-[#081325]/80 to-transparent pointer-events-none" />

      {/* Subtle glow elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Empowering investors and businesses to grow through strategic investments and trusted networks.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-blue-900/40 backdrop-blur-md rounded-2xl p-8 border border-blue-700 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  {counters[index]}{stat.suffix}
                </div>
                <div className="text-blue-100/90 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade out bottom */}
    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-[#0a1730]/80 to-[#0a1730] pointer-events-none" />



    </section>
  );
};

export default StatsSection;

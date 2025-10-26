// pages/Team.tsx
import Navigation from "@/components/ui/Navigation";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, TrendingUp, Shield, Users, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const founders = [
    {
      name: "M P Sreenath Gupta & M S Lakshmi",
      role: "Co-Founders",
      image: "/founder1.jpg",
      bio: "Visionary leaders who bring decades of financial expertise and a commitment to ethical investment practices. Their guidance has shaped Ksheerabdhi Inc. into a trusted financial partner.",
      linkedin: "#",
      email: "mpsreenath1975@gmail.com"
    },
    {
      name: "M Prabhakara Gupta & M P Kalavathi",
      role: "Co-Founders",
      image: "/founder2.jpg",
      bio: "Founding pillars of Ksheerabdhi Inc., bringing deep-rooted family values and financial wisdom. Their strategic vision established the foundation for the firm's integrity-driven approach.",
      linkedin: "#",
      email: "contact@ksheerabdhi.com"
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Built on trust and transparency in every client relationship"
    },
    {
      icon: Users,
      title: "Family Values",
      description: "Rooted in generational wisdom and personal commitment"
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Delivering strategic, sustainable financial solutions"
    },
    {
      icon: Award,
      title: "Experience",
      description: "Over a decade of proven financial expertise"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-blue-200 to-cyan-200">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-cyan-500 rounded-full opacity-60 animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-60 animate-ping" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-semibold mb-8 border border-blue-200 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <span className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Since 2010 • Licensed 2017
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              Meet the Family Behind
              <span className="block mt-2 text-transparent bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text animate-gradient">
                Ksheerabdhi Inc
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              Where financial wisdom meets family values a legacy of trust, integrity, and excellence in financial consultancy.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              {[
                { value: "2010", label: "Founded" },
                { value: "2017", label: "Licensed" },
                { value: "14+", label: "Years" },
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* About Us Section with Scroll Animation */}
      <section ref={aboutRef} className="py-24 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">Ksheerabdhi Inc</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-8">
              <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    Financial Wisdom Rooted in Family Values
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    Established in <strong>2010</strong> and formally licensed in <strong>2017</strong>, Ksheerabdhi Inc. has evolved into a trusted name in financial consultancy. Founded by <strong>Mr. M. Prabhakara Gupta</strong>, <strong>Mrs. M. P. Kalavathi</strong>, <strong>Mr. M. P. Sreenath Gupta</strong>, and <strong>Mrs. M. S. Lakshmi</strong>, the firm represents the collective vision of a family deeply committed to integrity, trust, and financial excellence.
                  </p>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <p className="text-slate-700 leading-relaxed text-lg">
                  What began as a family-led advisory initiative has grown into a professional consultancy firm that offers tailored financial solutions to individuals, families, and businesses. At Ksheerabdhi Inc., we combine time-tested values with forward-looking financial strategies to ensure that every client receives guidance that is both personal and performance-driven.
                </p>
              </div>

              <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Our approach is rooted in <strong>understanding</strong> our clients' goals, their challenges, and the opportunities that lie ahead. We take pride in offering transparent, strategic, and sustainable financial solutions that help our clients grow with confidence.
                </p>
              </div>

              {/* Values Grid */}
              <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-white p-6 rounded-xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                      style={{ animationDelay: `${900 + index * 100}ms` }}
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">{value.title}</h4>
                      <p className="text-sm text-slate-600">{value.description}</p>
                    </div>
                  );
                })}
              </div>

              <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <p className="text-slate-700 leading-relaxed text-lg">
                  With over a decade of experience and a deep grasp of the evolving financial landscape, Ksheerabdhi Inc. continues to serve as a reliable partner for those seeking clarity, stability, and success in their financial journeys.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">Founding Family</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A legacy of trust, built by family, sustained by excellence.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <div 
                key={index}
                className="group animate-in fade-in slide-in-from-bottom-8 duration-1000"
                style={{ animationDelay: `${200 + index * 200}ms` }}
              >
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-3">
                  {/* Image Container with Overlay */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                    <img 
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name)}&size=600&background=3b82f6&color=fff&bold=true&font-size=0.35`;
                      }}
                    />
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {founder.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                        <p className="text-blue-600 font-semibold text-lg">
                          
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                    
                    {/* Contact Links */}
                    {/* <div className="flex gap-4 pt-4 border-t border-slate-200">
                      <a 
                        // href={`mailto:${founder.email}`}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-lg hover:from-blue-600 hover:to-cyan-600 hover:text-white transition-all duration-300 group/link"
                      >
                        <Mail className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Email</span>
                      </a>
                      <a 
                        // href={founder.linkedin}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 rounded-lg hover:from-blue-600 hover:to-cyan-600 hover:text-white transition-all duration-300 group/link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Connect</span>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Connect with our family of financial experts to explore how we can help you achieve lasting prosperity through trusted, personalized guidance.
            </p>
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400"
              onClick={() => window.location.href = '/#contact'}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Ksheerabdhi Inc</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                A trusted private finance firm committed to delivering tailored investment and wealth management solutions since 2010.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">Wealth Management</li>
                <li className="hover:text-white transition-colors cursor-pointer">Investment Advisory</li>
                <li className="hover:text-white transition-colors cursor-pointer">Private Equity</li>
                <li className="hover:text-white transition-colors cursor-pointer">Corporate Finance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/team" className="hover:text-white transition-colors">Team</a></li>
                <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="hover:text-white transition-colors">mpsreenath1975@gmail.com</li>
                <li className="hover:text-white transition-colors">+91 9886074636</li>
                <li className="hover:text-white transition-colors">Bangalore, India</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2025 Ksheerabdhi Inc. All rights reserved. | Licensed since 2017</p>
          </div>
        </div>
      </footer>

      <style>
        {`
          @keyframes gradient {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Team;
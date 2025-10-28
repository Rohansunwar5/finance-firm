import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Sparkles } from "lucide-react";

const ServicesSection = () => {
  return (
<section
  id="services"
  className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-950 via-[#0c1840] to-[#081325] text-white"
>


      {/* Background accents */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-800/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-2 rounded-full mb-6 border border-yellow-500/30">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-300">
              Our Purpose
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-yellow-400 drop-shadow-lg">
            Mission & Vision
          </h2>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Guiding principles that drive our commitment to your financial
            success
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Mission Card */}
          <Card className="group relative overflow-hidden border border-blue-800/50 bg-gradient-to-br from-blue-900/70 to-blue-950/80 backdrop-blur-md shadow-xl hover:shadow-yellow-600/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-[100px] group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/40 group-hover:scale-110 transition-all duration-500">
                  <Target className="w-7 h-7 text-blue-950" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    Mission Statement
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full"></div>
                </div>
              </div>
              <p className="text-slate-200 leading-relaxed">
                Our mission is to empower clients with strategic financial
                guidance, smart fund diversification, and access to trusted
                private lending networks to help them achieve sustainable
                growth.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-yellow-400 font-medium">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                Empowering Your Growth
              </div>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="group relative overflow-hidden border border-yellow-600/30 bg-gradient-to-br from-blue-900/70 to-blue-950/80 backdrop-blur-md shadow-xl hover:shadow-yellow-600/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-[100px] group-hover:scale-150 transition-transform duration-700"></div>
            <CardContent className="p-8 relative z-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/40 group-hover:scale-110 transition-all duration-500">
                  <Eye className="w-7 h-7 text-blue-950" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                    Vision Statement
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-transparent rounded-full"></div>
                </div>
              </div>
              <p className="text-slate-200 leading-relaxed">
                To become a trusted financial bridge that empowers individuals
                and businesses to grow their wealth through smart investment
                strategies and reliable lending networks.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-yellow-400 font-medium">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                Building Your Future
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Decorative line */}
        <div className="mt-20 flex justify-center">
          <div className="w-64 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full shadow-yellow-500/40 shadow-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

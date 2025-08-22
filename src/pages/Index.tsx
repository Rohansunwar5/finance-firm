import Navigation from "@/components/ui/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ClientsSection from "@/components/sections/ClientsSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <ProcessSection />
        {/* <PortfolioSection /> */}
        <ClientsSection />
        <FaqSection />
        <CtaSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-primary-foreground py-12">
  <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-4 gap-8">
      
      {/* Company Intro */}
      <div>
        <h3 className="text-2xl font-bold mb-4">Company</h3>
        <p className="text-primary-foreground/80">
          A trusted private finance firm committed to delivering tailored investment,
          wealth management, and advisory solutions for individuals and businesses.
        </p>
      </div>
      
      {/* Services */}
      <div>
        <h4 className="font-semibold mb-4">Our Services</h4>
        <ul className="space-y-2 text-primary-foreground/80">
          <li>Wealth Management</li>
          <li>Investment Advisory</li>
          <li>Private Equity Solutions</li>
          <li>Corporate Finance</li>
        </ul>
      </div>
      
      {/* Company */}
      <div>
        <h4 className="font-semibold mb-4">Company</h4>
        <ul className="space-y-2 text-primary-foreground/80">
          <li>About Us</li>
          <li>Leadership</li>
          <li>Careers</li>
          <li>Insights</li>
        </ul>
      </div>
      
      {/* Contact */}
      <div>
        <h4 className="font-semibold mb-4">Contact Us</h4>
        <ul className="space-y-2 text-primary-foreground/80">
          <li>contact@fintrustcapital.com</li>
          <li>+91 98765 43210</li>
          <li>15th Floor, Global Tower</li>
          <li>Bangalore, India</li>
        </ul>
      </div>
    </div>
    
    {/* Bottom Bar */}
    <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60 text-sm">
      <p>&copy; 2025 company Pvt. Ltd. All rights reserved.</p>
      <p className="mt-2">
        Disclaimer: Investments are subject to market risks. Please read all related documents carefully before investing.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Index;

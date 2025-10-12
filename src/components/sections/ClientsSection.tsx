import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const ClientsSection = () => {
  const testimonials = [
    {
      name: "Anita Sharma",
      position: "Founder, CapitalBridge Ventures",
      testimonial: "Ksheerabdhi helped us secure the right investors and streamline capital allocation. Their advisory transformed our funding approach.",
      rating: 5
    },
    {
      name: "Rajiv Menon",
      position: "CEO, GrowthFund Corp",
      testimonial: "Their strategic financial guidance enabled us to manage our funds efficiently and scale operations with confidence.",
      rating: 5
    },
    {
      name: "Laura Williams",
      position: "Entrepreneur, GreenFuture Ventures",
      testimonial: "With their insights, we successfully connected with lenders and investors, ensuring sustainable growth for our startup.",
      rating: 5
    }
  ];

  const clientLogos = [
    { src: "/AtmosConstruction.png", alt: "Atmos Construction" },
    { src: "/bhagyashreedevelopers.png", alt: "Bhagyashree Developers" },
    { src: "/kadamgroup.webp", alt: "Kadam Group" },
    { src: "/IconHomz.webp", alt: "IconHomz" },
    { src: "/rojaincorp.png", alt: "Rojain Corp" },
    { src: "/sizzleproperties.png", alt: "Sizzle Properties" },
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Client Logos - Marquee */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">
            Trusted by Investors & Organizations
          </h3>

          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-12 py-8 mx-6 rounded-lg bg-black/5 backdrop-blur-sm shadow-card hover:shadow-elegant hover:bg-black/10 transition-all duration-300 min-w-[200px]"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt}
                    className="h-20 w-auto max-w-[180px] object-contain transition-all duration-300"
                    onError={(e) => {
                      console.error(`Failed to load image: ${logo.src}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from investors and businesses who have leveraged our expertise to connect with the right funding and investment opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-elegant transition-all duration-500 border-0 shadow-card"
            >
              <CardContent className="p-8">
                <Quote className="w-8 h-8 text-primary mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.testimonial}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
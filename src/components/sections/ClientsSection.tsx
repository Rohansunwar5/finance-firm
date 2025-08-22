import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const ClientsSection = () => {
const testimonials = [
  {
    name: "Anita Sharma",
    position: "Managing Director, Fortune Group",
    company: "Fortune Group",
    testimonial: "Their investment strategies not only protected our capital during market volatility but also generated consistent growth. Truly invaluable expertise.",
    rating: 5
  },
  {
    name: "Rajiv Menon",
    position: "CFO, Metro Holdings",
    company: "Metro Holdings",
    testimonial: "With their financial planning and risk management support, we reduced debt exposure and improved liquidity across all our subsidiaries.",
    rating: 5
  },
  {
    name: "Laura Williams",
    position: "Founder, GreenFuture Ventures",
    company: "GreenFuture Ventures",
    testimonial: "They guided us through complex fundraising rounds and provided clear financial roadmaps. Our startup is now positioned for sustainable growth.",
    rating: 5
  }
];


  const clientLogos = [
    "Client logos",
    "Client logos",
    "Client logos",
    "Client logos",
    "Client logos",
    "Client logos",
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Client Logos - Marquee */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">
            Trusted by Leading Organizations
          </h3>

          {/* Marquee wrapper */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-8 py-4 mx-4 rounded-lg bg-white shadow-card hover:shadow-elegant transition-all duration-300"
                >
                  <span className="text-lg font-bold text-primary">{logo}</span>
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
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with us.
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
                  <p className="text-sm font-medium text-primary">
                    {testimonial.company}
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

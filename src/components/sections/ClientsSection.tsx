import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const ClientsSection = () => {
  const testimonials = [
    {
      name: "Prasad M",
      position: "Founder, M1 Homes",
      testimonial:
        "Ksheerabdhi helped us secure the right investors and streamline capital allocation. Their advisory transformed our funding approach.",
      rating: 5,
    },
    {
      name: "Jagdeshwar Reddy",
      position: "Founder, J R Housing and Developers",
      testimonial:
        "Their strategic financial guidance enabled us to manage our funds efficiently and scale operations with confidence.",
      rating: 5,
    },
    {
      name: "M M Yuvaraj",
      position: "CEO, Roja Incorp",
      testimonial:
        "With their insights, we successfully connected with lenders and investors, ensuring sustainable growth for our startup.",
      rating: 5,
    },
  ];

  const clientLogos = [
    { src: "/AtmosConstruction.png", alt: "Atmos Construction" },
    { src: "/bhagyashreedevelopers.png", alt: "Bhagyashree Developers" },
    { src: "/kadamgroup.png", alt: "Kadam Group" },
    { src: "/IconHomz.webp", alt: "IconHomz" },
    { src: "/rojaincorp.png", alt: "Rojain Corp" },
    { src: "/sizzleproperties.png", alt: "Sizzle Properties" },
    { src: "/M1.png", alt: "Mordern spaces" },
    { src: "/mordernspaces.png", alt: "M1" },
  ];

  return (
    <section
      id="clients"
      className="py-20 bg-gradient-to-b from-[#081325] via-[#0a1730] to-[#0a1730] relative overflow-hidden text-white"
    >
      {/* Decorative glow elements for depth */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#C0C0C0]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Client Logos */}
        <div className="text-center mb-16">
          <h3 className="text-lg font-semibold text-gray-300 mb-8">
            Trusted by Investors & Organizations
          </h3>

          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {clientLogos.concat(clientLogos).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-12 py-8 mx-6 rounded-xl bg-black border border-[#FFD700]/10 backdrop-blur-sm shadow-[0_0_20px_rgba(255,215,0,0.05)] hover:shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-300 min-w-[200px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-16 w-auto max-w-[160px] object-contain"
                    onError={(e) => {
                      console.error(`Failed to load image: ${logo.src}`);
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Hear from investors and businesses who have leveraged our expertise
            to connect with the right funding and investment opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-[#13294b]/50 border border-[#FFD700]/20 hover:shadow-[0_0_25px_rgba(255,215,0,0.15)] transition-all duration-500 rounded-2xl backdrop-blur-sm"
            >
              <CardContent className="p-8 text-white">
                <Quote className="w-8 h-8 text-[#FFD700] mb-4" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#FFD700] fill-[#FFD700]"
                    />
                  ))}
                </div>

                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.testimonial}"
                </p>

                <div className="border-t border-[#FFD700]/20 pt-4">
                  <p className="font-semibold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Smooth transition into FAQ */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#0a1730]/80 to-[#081325] pointer-events-none" /> */}
    </section>
  );
};

export default ClientsSection;

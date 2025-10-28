import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: [
        "Ksheerabdhi Inc.",
        "#49-2, Neeladri, Shankar Mutt Road, Shankarpuram, Basvangudi, Bangalore 560004",
      ],
    },
    {
      icon: Mail,
      title: "Private Inquiries",
      details: [
        "Contact Number: ‪+91 9886074636",
        "Email: mpsreenath1975@gmail.com",
      ],
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 relative bg-gradient-to-b from-[#0a1730] via-[#081325] to-[#060e20] text-white overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#C0C0C0]/10 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-6">
            Connect With Ksheerabdhi Inc.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Partner with us to explore investment opportunities. Reach out to
            discuss funding solutions, strategic partnerships, or to get
            personalized advisory support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-[#13294b]/60 border border-[#FFD700]/20 shadow-lg backdrop-blur-md animate-in slide-in-from-left-8 duration-1000">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-[#FFD700] mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      First Name
                    </label>
                    <Input
                      placeholder="John"
                      required
                      className="bg-[#0a1730]/60 border border-[#FFD700]/20 text-gray-100 placeholder-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                      Last Name
                    </label>
                    <Input
                      placeholder="Doe"
                      required
                      className="bg-[#0a1730]/60 border border-[#FFD700]/20 text-gray-100 placeholder-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="bg-[#0a1730]/60 border border-[#FFD700]/20 text-gray-100 placeholder-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Company / Organization
                  </label>
                  <Input
                    placeholder="Your Company Name"
                    className="bg-[#0a1730]/60 border border-[#FFD700]/20 text-gray-100 placeholder-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Describe your funding or investment needs..."
                    rows={5}
                    required
                    className="bg-[#0a1730]/60 border border-[#FFD700]/20 text-gray-100 placeholder-gray-400 focus:border-[#FFD700] focus:ring-[#FFD700]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FFD700] text-[#0a1730] hover:bg-[#e6c200] font-semibold transform hover:scale-105 transition-all duration-300"
                >
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-1000">
            <h3 className="text-2xl font-bold text-[#FFD700] mb-8">
              Get in Touch
            </h3>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-[#13294b]/60 border border-[#FFD700]/20 hover:shadow-[0_0_20px_rgba(255,215,0,0.1)] transition-all duration-300"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationDuration: "1000ms",
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FFD700]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#FFD700]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p
                          key={detailIndex}
                          className="text-gray-300 leading-relaxed"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: ["Ksheerabdhi Inc.", "#49-2, Neeladri, Shankar Mutt Road, Shankarpuram, Basvangudi, Bangalore 560004"]
    },
    {
      icon: Mail,
      title: "Private Inquiries",
      details: [" Contact Number: ‪+91 9886074636", "Email: mpsreenath1975@gmail.com "]
    },
    // {
    //   icon: Clock,
    //   title: "Business Hours",
    //   details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: By Appointment Only"]
    // }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connect With Ksheerabdhi Inc.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with us to explore investment and opportunities. Reach out to discuss funding solutions, strategic partnerships, or to get personalized advisory support.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card animate-in slide-in-from-left-8 duration-1000">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="john@company.com" required />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company / Organization
                  </label>
                  <Input placeholder="Your Company Name" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Describe your funding or investment needs..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6 animate-in slide-in-from-right-8 duration-1000">
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>
            
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-in slide-in-from-right-8"
                style={{ animationDelay: `${index * 100}ms`, animationDuration: '1000ms' }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground">{detail}</p>
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

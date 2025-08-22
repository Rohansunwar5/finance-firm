import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What services do you provide as a private finance firm?",
      answer: "We specialize in wealth management, investment advisory, retirement planning, estate structuring, and risk management. Our goal is to help clients preserve and grow their wealth with tailored financial strategies."
    },
    {
      question: "Do you only work with high-net-worth individuals?",
      answer: "While we serve many high-net-worth individuals and families, our services are also tailored for professionals, entrepreneurs, and institutions seeking expert financial planning and investment solutions."
    },
    {
      question: "How do you ensure my investments are secure?",
      answer: "We work with regulated custodians and trusted financial institutions, follow strict compliance standards, and employ risk management strategies to protect and grow your capital responsibly."
    },
    {
      question: "What is your investment philosophy?",
      answer: "Our philosophy focuses on long-term value creation through diversified portfolios, disciplined risk management, and a balanced mix of traditional and alternative investments. We always align strategies with your personal goals and risk tolerance."
    },
    {
      question: "Can you assist with retirement and estate planning?",
      answer: "Yes. We create personalized retirement plans to ensure financial independence and help structure estates to optimize tax efficiency, succession, and wealth transfer to future generations."
    },
    {
      question: "Do you provide corporate financial advisory services?",
      answer: "Absolutely. We assist businesses with capital structuring, cash flow optimization, risk hedging, and strategic investment decisions tailored to long-term growth."
    },
    {
      question: "How do you measure success in client relationships?",
      answer: "We measure success by achieving your financial goals—whether that's growing wealth, preserving capital, or securing a legacy for your family. Regular performance reviews and transparent reporting keep you informed every step of the way."
    },
    {
      question: "Do you offer confidential and personalized service?",
      answer: "Yes. Confidentiality is central to our practice. Every strategy is custom-built around your financial goals, family priorities, and lifestyle needs."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-in slide-in-from-bottom-8 duration-1000">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-300">
            Get answers to common questions about our consulting services and approach
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4 animate-in slide-in-from-bottom-8 duration-1000 delay-500">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:shadow-card transition-all duration-300"
              >
                <AccordionTrigger className="text-left hover:text-primary py-6 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12 animate-in slide-in-from-bottom-8 duration-1000 delay-700">
            <p className="text-muted-foreground mb-6">
              Still have questions? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                Contact Our Team
              </a>
              <a 
                href="tel:+1-555-123-4567"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all duration-300"
              >
                Call Us: +91 - 9322284165
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
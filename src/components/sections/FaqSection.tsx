import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "What does Ksheerabdhi Inc specialize in?",
      answer: "We connect individuals and businesses with investment and opportunities, offering strategic financial advisory, risk management, and capital allocation services tailored to your needs."
    },
    {
      question: "Who can benefit from your services?",
      answer: "We work with investors, startups, SMEs, and institutions looking to grow, allocate, or manage funds efficiently. Our services cater to both private and corporate clients."
    },
    {
      question: "How do you ensure secure investments?",
      answer: "We collaborate with regulated financial institutions, implement robust risk management strategies, and follow best practices to protect your capital while maximizing opportunities."
    },
    {
      question: "Can you assist with funding for projects or businesses?",
      answer: "Yes. We facilitate access to funding and strategic investment networks, helping projects and businesses secure the right capital at the right time."
    },
    {
      question: "How transparent is your process?",
      answer: "Transparency is central to our approach. We provide detailed reporting, ongoing updates, and clear insights to help clients make informed financial decisions."
    },
    {
      question: "Do you offer personalized financial guidance?",
      answer: "Absolutely. Every plan is customized to the client's goals, risk profile, and investment horizon, ensuring maximum alignment with their objectives."
    }
  ];

  return (
  <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#0a1730] via-[#0a1730] to-[#081325]">
    {/* Decorative glow elements */}
    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#C0C0C0]/10 rounded-full blur-3xl"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-6 animate-in slide-in-from-bottom-8 duration-1000">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-200 max-w-3xl mx-auto animate-in slide-in-from-bottom-8 duration-1000 delay-300">
          Answers to common questions about how we connect people with investment and opportunities.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto">
        <Accordion 
          type="single" 
          collapsible 
          className="space-y-4 animate-in slide-in-from-bottom-8 duration-1000 delay-500"
        >
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white/5 backdrop-blur-sm border border-[#FFD700]/20 rounded-lg px-6 hover:bg-white/10 hover:border-[#FFD700]/40 transition-all duration-300"
            >
              <AccordionTrigger className="text-left hover:text-[#FFD700] py-6 text-lg font-medium text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-in slide-in-from-bottom-8 duration-1000 delay-700">
          <p className="text-gray-200 mb-6">
            Still have questions? Reach out and let's discuss how we can assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#FFD700] text-[#0a1730] font-semibold rounded-lg hover:bg-[#e6c200] hover:shadow-[0_0_15px_#FFD700]/40 transition-all duration-300 hover:-translate-y-1"
            >
              Contact Our Team
            </a>
            <a 
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#FFD700]/40 text-[#FFD700] rounded-lg hover:bg-[#FFD700]/10 hover:border-[#FFD700]/60 transition-all duration-300"
            >
              Call Us: +91 9886074636
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

};

export default FaqSection;

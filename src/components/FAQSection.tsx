import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What makes Easy Remit Solutions secure and reliable?",
    answer:
      "Easy Remit Solutions implements bank-grade security protocols including end-to-end encryption, multi-factor authentication, and real-time fraud detection. Our infrastructure is built on AWS with a 99.9% uptime SLA so every transaction stays protected and reliable.",
  },
  {
    question: "What support does Easy Remit Solutions offer to partners?",
    answer:
      "Partners receive comprehensive support including dedicated account managers, 24/7 technical assistance, integration documentation, training resources, and regular product updates. We also provide customization consulting to help tailor solutions to your specific business needs.",
  },
  {
    question: "Does Easy Remit Solutions offer data migration services?",
    answer:
      "Yes, we provide complimentary data migration services for clients transitioning from existing applications. Our team ensures a seamless transition to the EasyRemit Suite, minimizing disruptions while preserving data integrity. Service availability varies by selected plan.",
  },
  {
    question: "How customizable are Easy Remit Solutions products?",
    answer:
      "Our solutions are fully customizable to meet unique business requirements. Partners with source code access can modify core functionality, while all users benefit from extensive configuration options, white-labeling capabilities, and API integrations.",
  },
  {
    question: "What documentation and resources are provided?",
    answer:
      "We provide comprehensive documentation including technical API references, database schemas, user guides for all portals, integration tutorials, and video walkthroughs. Enterprise clients also receive personalized onboarding and training sessions.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container max-w-[1200px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Get answers to common questions about Easy Remit Solutions, our
              security posture, and how we accelerate your global remittance
              roadmap.
            </p>
            <div className="p-6 rounded-xl bg-gradient-to-br from-cyan/10 to-teal/10 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our team is here to help. Reach out for personalized assistance.
              </p>
              <Link
                to="/enrollment"
                className="text-primary font-medium text-sm hover:underline"
              >
                Contact our team →
              </Link>
            </div>
          </div>

          {/* Right Content - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 bg-card data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

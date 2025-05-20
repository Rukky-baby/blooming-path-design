
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Is Bloomingship a dating app?",
    answer: "No, Bloomingship is not a dating app. We're a relationship education platform that provides personalized content to help you grow emotionally and relate better to others across all relationship types and stages."
  },
  {
    question: "What are Zones?",
    answer: "Zones are personalized spaces within Bloomingship designed for different relationship stages. Each zone provides specialized content, tools, and community interactions tailored to your current relationship status and needs."
  },
  {
    question: "Who curates the content?",
    answer: "Our content comes from three sources: our in-house team of relationship experts, psychology professionals, and educators; verified external experts (therapists, coaches, psychologists); and creators who specialize in healthy relationships."
  },
  {
    question: "Is it teen-safe?",
    answer: "Yes, we have a dedicated Friendship Zone specifically designed for teens, with age-appropriate content focused on healthy friendships, boundaries, and emotional intelligence. All content is carefully monitored and moderated."
  },
  {
    question: "Can I access multiple Zones?",
    answer: "While we recommend focusing on the zone that matches your current relationship stage for the most personalized experience, you can explore other zones for broader insights or future preparation."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-bloom-cream">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-bloom-purple/20">
                <AccordionTrigger className="text-left font-serif text-lg text-bloom-text-dark py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-bloom-gray/90 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

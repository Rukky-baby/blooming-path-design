
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    quote: "As a teen, it felt like someone finally understood what I was going through.",
    author: "Amaka, 17",
    avatar: "/avatar-1.png",
    type: "Teen",
  },
  {
    quote: "Bloomingship helped me slow down and understand myself before dating again.",
    author: "Tola, Single",
    avatar: "/avatar-2.png",
    type: "Self-Discovery",
  },
  {
    quote: "I share insights weekly, and the feedback from users is genuinely fulfilling.",
    author: "Dr. Bisi, Relationship Coach",
    avatar: "/avatar-3.png",
    type: "Expert",
  },
  {
    quote: "The personalized content helped me navigate my divorce with more grace than I thought possible.",
    author: "Michael, Post-Married",
    avatar: "/avatar-4.png",
    type: "Rebuilding",
  },
  {
    quote: "My partner and I both use Bloomingship. It's given us a shared language for tough conversations.",
    author: "Sarah & James, Dating",
    avatar: "/avatar-5.png",
    type: "Dating",
  },
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const card = scrollContainerRef.current.children[index];
      if (card) {
        card.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(253,225,211,0.2),transparent)] pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Here's what people are experiencing on Bloomingship</h2>
        </div>

        {/* Scrollable testimonials */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-none"
        >
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="min-w-[300px] md:min-w-[380px] bloom-card snap-center"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="text-bloom-gray/90 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-bloom-purple/20 flex items-center justify-center text-bloom-purple font-bold mr-4">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-bloom-text-dark">{testimonial.author}</p>
                    <p className="text-sm text-bloom-gray/70">{testimonial.type}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? "bg-bloom-purple" : "bg-gray-200"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


import { Card, CardContent } from "@/components/ui/card";
import { Check, HeartHandshake, Settings, MessageSquare } from "lucide-react";

const steps = [
  {
    title: "Join & Set Up",
    description: "Answer 20 thoughtful questions to help us understand your relationship perspective and emotional style.",
    icon: <Check className="w-6 h-6 text-bloom-purple" />,
  },
  {
    title: "Get Curated Content",
    description: "Your feed is built around you — based on personality, gender, location, status, age, and more.",
    icon: <Settings className="w-6 h-6 text-bloom-purple" />,
  },
  {
    title: "Learn & Grow",
    description: "Access content from trusted experts, psychologists, and relatable voices.",
    icon: <MessageSquare className="w-6 h-6 text-bloom-purple" />,
  },
  {
    title: "Find Your Zone (Optional)",
    description: "Explore a custom space built for your life stage — with tools, conversations, and guidance specific to your current needs.",
    icon: <HeartHandshake className="w-6 h-6 text-bloom-purple" />,
  },
];

const HowItWorks = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Your space. Your pace.</h2>
          <p className="text-lg text-bloom-gray/80 max-w-2xl mx-auto">
            Bloomingship adapts to where you are in your relationship journey, providing the right content at the right time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="bloom-card card-hover overflow-hidden group">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-bloom-purple/10 group-hover:bg-bloom-purple/20 transition-colors">
                  {step.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{step.title}</h3>
                <p className="text-bloom-gray/80">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

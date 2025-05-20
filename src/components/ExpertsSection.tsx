
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, BarChart, Award, DollarSign } from "lucide-react";

const expertBenefits = [
  {
    title: "Niche targeting",
    description: "Your content reaches exactly the right audience",
    icon: <Target className="w-6 h-6 text-bloom-purple" />,
  },
  {
    title: "High engagement",
    description: "Our users are not scrolling for fun — they're here to grow",
    icon: <BarChart className="w-6 h-6 text-bloom-purple" />,
  },
  {
    title: "Visibility and credibility",
    description: "Build your authority with an audience that values what you offer",
    icon: <Award className="w-6 h-6 text-bloom-purple" />,
  },
  {
    title: "Future perks",
    description: "Monetization options, content analytics, brand building",
    icon: <DollarSign className="w-6 h-6 text-bloom-purple" />,
  },
];

const ExpertsSection = () => {
  return (
    <section id="experts" className="section-padding bg-bloom-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(155,135,245,0.1),transparent)] pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Grow your impact where it matters most.</h2>
            <p className="text-lg text-bloom-gray/90 mb-8">
              Bloomingship is where thoughtful experts meet users actively seeking change, growth, and emotional connection.
            </p>
            
            <Button className="bg-bloom-purple hover:bg-bloom-purple-dark text-white rounded-full px-8 py-6">
              Join as an Expert
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expertBenefits.map((benefit, index) => (
              <Card key={index} className="bloom-card card-hover">
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-bloom-purple/10">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-bloom-gray/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;

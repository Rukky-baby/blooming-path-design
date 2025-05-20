
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, Leaf, User, Users, BookOpen, 
  FlowerIcon 
} from "lucide-react";
import { useRef, useState } from "react";

const zones = [
  {
    name: "Friendship Zone",
    description: "For teens navigating social connections and emotions",
    icon: <Users className="w-6 h-6 text-green-600" />,
    color: "bg-green-50 border-green-100",
    accent: "text-green-600",
  },
  {
    name: "Self-Discovery Zone",
    description: "For singles focusing on personal growth and identity",
    icon: <User className="w-6 h-6 text-blue-600" />,
    color: "bg-blue-50 border-blue-100",
    accent: "text-blue-600",
  },
  {
    name: "Matchmaking Zone",
    description: "For singles ready to find meaningful connections",
    icon: <Heart className="w-6 h-6 text-pink-600" />,
    color: "bg-pink-50 border-pink-100",
    accent: "text-pink-600",
  },
  {
    name: "Dating Zone",
    description: "For couples building and strengthening their connection",
    icon: <FlowerIcon className="w-6 h-6 text-purple-600" />,
    color: "bg-purple-50 border-purple-100",
    accent: "text-purple-600",
  },
  {
    name: "Spousal Zone",
    description: "For married partners navigating life together",
    icon: <BookOpen className="w-6 h-6 text-indigo-600" />,
    color: "bg-indigo-50 border-indigo-100",
    accent: "text-indigo-600",
  },
  {
    name: "Rebuilding Zone",
    description: "For those healing and moving forward after relationships",
    icon: <Leaf className="w-6 h-6 text-teal-600" />,
    color: "bg-teal-50 border-teal-100",
    accent: "text-teal-600",
  },
];

const ZonesSection = () => {
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
    <section id="zones" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(167,196,160,0.1),transparent)] pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Something special for every season of love.</h2>
          <p className="text-lg text-bloom-gray/80 max-w-2xl mx-auto">
            Zones are personalized spaces within Bloomingship designed to guide, support, and serve your current relationship status.
          </p>
        </div>

        {/* Mobile zone selector */}
        <div className="md:hidden flex justify-center mb-8 px-4 overflow-x-auto pb-2">
          <div className="flex gap-2">
            {zones.map((zone, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors ${
                  activeIndex === index 
                    ? "bg-bloom-purple text-white" 
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {zone.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable cards */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-none"
        >
          {zones.map((zone, index) => (
            <Card 
              key={index} 
              className={`min-w-[280px] md:min-w-[320px] card-hover snap-center ${zone.color} border`}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-full bg-white/80 backdrop-blur-sm">
                    {zone.icon}
                  </div>
                  <span className={`text-sm font-medium rounded-full px-3 py-1 ${zone.accent} bg-white/80`}>
                    {zone.name.split(" ")[0]}
                  </span>
                </div>
                <h3 className={`text-xl font-serif font-semibold mb-3 ${zone.accent}`}>
                  {zone.name}
                </h3>
                <p className="text-bloom-gray/90">{zone.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop navigation dots */}
        <div className="hidden md:flex justify-center gap-2 mt-6">
          {zones.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? "bg-bloom-purple" : "bg-gray-200"
              }`}
              aria-label={`View zone ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZonesSection;

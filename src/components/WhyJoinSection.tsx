
import { Card, CardContent } from "@/components/ui/card";

const userTypes = [
  {
    type: "Teens",
    benefit: "A safe space to learn about boundaries, friendships, and emotions without judgment",
    color: "bg-bloom-sage/20",
  },
  {
    type: "Singles (Choosing Me First)",
    benefit: "Empowering content for growth, reflection, and rediscovery",
    color: "bg-bloom-rose/20",
  },
  {
    type: "Singles (Dating)",
    benefit: "Mindful insights into attraction, compatibility, and readiness",
    color: "bg-bloom-peach/20",
  },
  {
    type: "In a Relationship",
    benefit: "Tools to build trust, improve communication, and stay emotionally aligned",
    color: "bg-bloom-purple/20",
  },
  {
    type: "Married",
    benefit: "Support to keep intimacy alive and navigate life together",
    color: "bg-bloom-sage/20",
  },
  {
    type: "Post-Married",
    benefit: "A gentle space to heal, learn, and open up to what's next",
    color: "bg-bloom-rose/20",
  },
];

const WhyJoinSection = () => {
  return (
    <section className="section-padding bg-bloom-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(248,198,200,0.1),transparent)] pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Real people. Real stages. Real support.</h2>
          <p className="text-lg text-bloom-gray/80 max-w-2xl mx-auto">
            Life isn't one-size-fits-all — and neither is love. Whether you're figuring out who you are, who you love, or how to heal, Bloomingship helps you thrive in your own way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userTypes.map((userType, index) => (
            <Card key={index} className={`bloom-card card-hover ${userType.color} border-0`}>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-3">{userType.type}</h3>
                <p className="text-bloom-gray/90">{userType.benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;

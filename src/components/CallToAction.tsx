
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bloom-gradient"></div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white">
            Wherever you are in your journey — let's grow through it together.
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join a relationship platform that listens, supports, and evolves with you.
          </p>
          <Button className="bg-white hover:bg-gray-100 text-bloom-purple rounded-full px-8 py-6 text-lg font-medium">
            Login
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-32 h-32 md:w-64 md:h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
      <div className="absolute top-1/4 -right-16 w-48 h-48 rounded-full bg-white opacity-10 blur-3xl"></div>
    </section>
  );
};

export default CallToAction;

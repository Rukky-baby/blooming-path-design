
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(155,135,245,0.1),transparent)] pointer-events-none"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in">
            <span className="text-bloom-purple">Wherever you are in your journey</span> — let's grow through it together.
          </h1>
          <p className="text-lg md:text-xl text-bloom-gray/90 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Join a relationship platform that listens, supports, and evolves with you.
          </p>
          <Button 
            className="bg-bloom-purple hover:bg-bloom-purple-dark text-white rounded-full px-8 py-6 text-lg shadow-lg animate-fade-in" 
            style={{ animationDelay: "400ms" }}
          >
            Login
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-32 h-32 md:w-64 md:h-64 rounded-full bg-bloom-sage opacity-20 blur-3xl"></div>
      <div className="absolute top-1/4 -right-16 w-24 h-24 md:w-48 md:h-48 rounded-full bg-bloom-rose opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 md:w-32 md:h-32 rounded-full bg-bloom-peach opacity-20 blur-3xl animate-pulse-gentle"></div>
    </section>
  );
};

export default HeroSection;

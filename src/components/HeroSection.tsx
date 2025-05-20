
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Flower } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(155,135,245,0.1),transparent)] pointer-events-none"></div>
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content - Left Side */}
          <div className="text-left">
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
          
          {/* Visual - Right Side */}
          <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white/50 backdrop-blur-sm border border-bloom-purple/10">
              <AspectRatio ratio={4/3} className="w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-bloom-purple/5 to-bloom-rose/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Large central flower */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-gentle" style={{ animationDelay: "0ms" }}>
                      <div className="relative">
                        <Flower size={160} className="text-bloom-purple opacity-75" strokeWidth={1.5} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 bg-bloom-peach rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Smaller flowers scattered around */}
                    <div className="absolute top-[20%] left-[20%] animate-pulse-gentle" style={{ animationDelay: "500ms" }}>
                      <Flower size={60} className="text-bloom-rose opacity-60" strokeWidth={1.5} />
                    </div>
                    <div className="absolute bottom-[25%] right-[15%] animate-pulse-gentle" style={{ animationDelay: "1200ms" }}>
                      <Flower size={70} className="text-bloom-purple opacity-60" strokeWidth={1.5} />
                    </div>
                    <div className="absolute top-[15%] right-[25%] animate-pulse-gentle" style={{ animationDelay: "800ms" }}>
                      <Flower size={50} className="text-bloom-sage opacity-70" strokeWidth={1.5} />
                    </div>
                    <div className="absolute bottom-[20%] left-[25%] animate-pulse-gentle" style={{ animationDelay: "1500ms" }}>
                      <Flower size={45} className="text-bloom-peach opacity-50" strokeWidth={1.5} />
                    </div>
                    
                    {/* Floating petals */}
                    <div className="absolute top-[40%] left-[60%] animate-float">
                      <div className="w-6 h-6 bg-bloom-purple/30 rounded-full transform rotate-45"></div>
                    </div>
                    <div className="absolute top-[30%] right-[35%] animate-float" style={{ animationDelay: "1s" }}>
                      <div className="w-4 h-4 bg-bloom-rose/40 rounded-full transform rotate-12"></div>
                    </div>
                    <div className="absolute bottom-[35%] left-[40%] animate-float" style={{ animationDelay: "2s" }}>
                      <div className="w-5 h-5 bg-bloom-peach/30 rounded-full transform rotate-30"></div>
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
            
            {/* Decorative element below the main visual */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-bloom-sage/20 blur-2xl"></div>
          </div>
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

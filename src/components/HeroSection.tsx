
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Flower, Sprout } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [bloom, setBloom] = useState(false);
  
  useEffect(() => {
    // Start the blooming animation after component mounts
    const timer = setTimeout(() => {
      setBloom(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

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
          
          {/* Visual - Right Side: Animated Blooming Flower */}
          <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white/50 backdrop-blur-sm border border-bloom-purple/10">
              <AspectRatio ratio={4/3} className="w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-bloom-purple/5 to-bloom-rose/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Animated Blooming Flower */}
                  <div className="relative w-72 h-72">
                    {/* Center of flower */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-bloom-peach z-20 shadow-inner transition-all duration-1000 ${bloom ? 'scale-100' : 'scale-0'}`}></div>
                    
                    {/* Flower petals - staggered animation */}
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`absolute top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 transition-all duration-1500 ease-out z-10`}
                        style={{ 
                          transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(${bloom ? -60 : 0}px)`, 
                          opacity: bloom ? 1 : 0,
                          transitionDelay: `${i * 100}ms`
                        }}
                      >
                        <div 
                          className="w-20 h-32 rounded-full bg-bloom-purple/80 origin-bottom"
                          style={{ 
                            transform: `translateX(10px) rotate(45deg) scaleY(${bloom ? 1 : 0.2})`,
                            transitionProperty: 'transform, opacity',
                            transitionDuration: '1.5s',
                            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
                          }}
                        ></div>
                      </div>
                    ))}
                    
                    {/* Stem */}
                    <div className={`absolute top-1/2 left-1/2 w-4 h-48 bg-bloom-sage rounded-full -translate-x-1/2 origin-top transition-all duration-1000 ${bloom ? 'scale-y-100' : 'scale-y-0'}`} style={{ transformOrigin: 'center top' }}></div>
                    
                    {/* Small sprouts/leaves */}
                    <div className={`absolute top-[60%] left-[48%] transition-all duration-1000 ${bloom ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
                      <Sprout className="text-bloom-sage transform -rotate-30 scale-100" size={30} />
                    </div>
                    <div className={`absolute top-[70%] left-[54%] transition-all duration-1000 ${bloom ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                      <Sprout className="text-bloom-sage transform rotate-30 scale-75" size={24} />
                    </div>
                    
                    {/* Floating particles */}
                    {bloom && [...Array(8)].map((_, i) => (
                      <div
                        key={`particle-${i}`}
                        className="absolute rounded-full bg-bloom-purple/30"
                        style={{
                          width: `${Math.random() * 8 + 3}px`,
                          height: `${Math.random() * 8 + 3}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animation: `float ${Math.random() * 3 + 2}s infinite ease-in-out`,
                          animationDelay: `${Math.random() * 2}s`
                        }}
                      ></div>
                    ))}
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

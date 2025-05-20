
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src="/logo-placeholder.svg" 
            alt="Bloomingship Logo" 
            className="h-8 md:h-10" 
          />
          <span className="font-serif text-xl md:text-2xl font-bold text-bloom-purple-dark">
            Bloomingship
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-bloom-text-dark hover:text-bloom-purple transition-colors">
            About
          </a>
          <a href="#zones" className="text-bloom-text-dark hover:text-bloom-purple transition-colors">
            Explore Zones
          </a>
          <a href="#experts" className="text-bloom-text-dark hover:text-bloom-purple transition-colors">
            For Experts
          </a>
          <a href="#testimonials" className="text-bloom-text-dark hover:text-bloom-purple transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-bloom-text-dark hover:text-bloom-purple transition-colors">
            FAQ
          </a>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-bloom-purple hover:bg-bloom-purple-dark text-white rounded-full px-6">
            Login
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="flex flex-col gap-6 mt-10">
              <a href="#about" className="text-bloom-text-dark hover:text-bloom-purple text-lg">
                About
              </a>
              <a href="#zones" className="text-bloom-text-dark hover:text-bloom-purple text-lg">
                Explore Zones
              </a>
              <a href="#experts" className="text-bloom-text-dark hover:text-bloom-purple text-lg">
                For Experts
              </a>
              <a href="#testimonials" className="text-bloom-text-dark hover:text-bloom-purple text-lg">
                Testimonials
              </a>
              <a href="#faq" className="text-bloom-text-dark hover:text-bloom-purple text-lg">
                FAQ
              </a>
            </nav>
            <div className="mt-8">
              <Button className="bg-bloom-purple hover:bg-bloom-purple-dark text-white rounded-full px-6 w-full">
                Login
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

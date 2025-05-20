
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhyJoinSection from "@/components/WhyJoinSection";
import ZonesSection from "@/components/ZonesSection";
import ExpertsSection from "@/components/ExpertsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyJoinSection />
      <ZonesSection />
      <ExpertsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

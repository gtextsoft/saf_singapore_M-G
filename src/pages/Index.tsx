
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import BenefitsSection from "@/components/BenefitsSection";
import BusinessLessonsSection from "@/components/BusinessLessonsSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to hash on page load if present
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    // Update document title
    document.title = "Singapore Founders & C-Suite Retreat 2025";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20">
        <HeroSection />
      </section>
      
      {/* Introduction Section */}
      <section>
        <IntroSection />
      </section>
      
      {/* Benefits Section */}
      <section id="benefits">
        <BenefitsSection />
      </section>
      
      {/* Business Lessons Section */}
      <section id="lessons">
        <BusinessLessonsSection />
      </section>
      
      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>
      
      {/* Pricing Section */}
      <section id="pricing">
        <PricingSection />
      </section>
      
      {/* Call to Action Section */}
      <section>
        <CallToActionSection />
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

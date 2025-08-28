
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import SpeakersSection from "@/components/SpeakersSection";
import BenefitsSection from "@/components/BenefitsSection";
import BusinessLessonsSection from "@/components/BusinessLessonsSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to hash on page load if present
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    // Update document title
    document.title = "Singapore Tourism 2025";
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

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
      
      {/* Speakers Section */}
      <section id="speakers">
        <SpeakersSection />
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

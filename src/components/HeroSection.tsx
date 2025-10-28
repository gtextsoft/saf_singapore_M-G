
import { Button } from "@/components/ui/button";
import { ArrowDown, Calendar, MapPin, Users } from "lucide-react";
import { useState } from "react";
import TicketFormModal from "./TicketFormModal";

const HeroSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(212,175,55,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>

      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center min-h-screen">
        {/* Main Title with Enhanced Typography */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
          Founders' Retreat
        </h1>
        
        {/* Subtitle with Better Contrast */}
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-gold animate-fade-in font-medium leading-relaxed max-w-4xl">
          Singapore - Where Visionary Leaders Recharge, Network, and Scale Beyond Borders
        </h2>
        
        {/* Tagline with Enhanced Styling */}
        <p className="text-lg md:text-xl max-w-3xl mb-12 opacity-95 animate-fade-in font-light leading-relaxed">
          Success Isn't Just About Working Harder, It's About Scaling Smarter
        </p>

        {/* Retreat Highlight */}
        <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl mb-8 border border-white/20 animate-fade-in">
          <div className="flex items-center justify-center space-x-3 text-gold-light">
            <Users className="w-6 h-6" />
            <span className="font-semibold">Exclusive Retreat Experience</span>
          </div>
          <p className="text-sm mt-2 opacity-90">
            Intimate networking with business titans in a relaxed, premium environment
          </p>
        </div>
        
        {/* Enhanced CTA Button */}
        <Button 
          onClick={() => setIsFormOpen(true)}
          className="btn-primary text-lg px-8 py-4 text-lg animate-fade-in shadow-2xl hover:shadow-gold/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
        >
          CLAIM MY SEAT NOW
        </Button>
        
        {/* Enhanced Date Display */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 animate-fade-in">
          <div className="flex items-center space-x-2 text-gold-light">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">28th November - 4th December 2025</span>
          </div>
          <div className="flex items-center space-x-2 text-gold-light">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-medium">Limited Spots Available</span>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gold-light" />
        </div>
      </div>
      
      <TicketFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default HeroSection;

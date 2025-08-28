
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import PricingSection from "./PricingSection";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-navy/95 backdrop-blur-md shadow-2xl py-3 border-b border-gold/20" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center group">
            <div className="relative">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpEh0Q2A0Js46PR3va95bzURVGzrQSqTlVw&s" 
                alt="Logo" 
                className="h-10 w-10 mr-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="absolute inset-0 rounded-full bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-white font-serif font-bold text-xl group-hover:text-gold transition-colors duration-300">
              Singapore Tourism 2025
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-white hover:text-gold transition-all duration-300 relative group">
              Benefits
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#speakers" className="text-white hover:text-gold transition-all duration-300 relative group">
              Speakers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#lessons" className="text-white hover:text-gold transition-all duration-300 relative group">
              Business Lessons
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#about" className="text-white hover:text-gold transition-all duration-300 relative group">
              About Host
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#pricing" className="btn-primary text-sm px-6 py-2.5">
              CLAIM MY SEAT
            </a>
          </div>
          
          <div className="md:hidden">
            <Button className="bg-gold hover:bg-gold-dark text-navy-dark px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              CLAIM MY SEAT
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

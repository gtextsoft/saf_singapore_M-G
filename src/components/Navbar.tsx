
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-navy shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpEh0Q2A0Js46PR3va95bzURVGzrQSqTlVw&s" 
              alt="Logo" 
              className="h-8 mr-3" 
            />
            <span className="text-white font-serif font-bold text-xl">Singapore Summit 2025</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#benefits" className="text-white hover:text-gold transition-colors">Benefits</a>
            <a href="#lessons" className="text-white hover:text-gold transition-colors">Business Lessons</a>
            <a href="#about" className="text-white hover:text-gold transition-colors">About Host</a>
            <a href="#pricing" className="btn-primary">CLAIM MY SEAT</a>
          </div>
          
          <div className="md:hidden">
            <Button className="bg-gold text-navy-dark px-3 py-1 rounded text-sm">CLAIM MY SEAT</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

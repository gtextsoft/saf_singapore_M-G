
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { label: "Benefits", href: "#benefits" },
    { label: "Speakers", href: "#speakers" },
    { label: "Business Lessons", href: "#lessons" },
    { label: "About Host", href: "#about" },
    { label: "Past Events", href: "/past-events", isRoute: true },
  ];

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

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
              Founders' Retreat Singapore
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white hover:text-gold transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white hover:text-gold transition-all duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                </a>
              )
            )}
            <Button 
              asChild
              className="btn-primary text-sm px-6 py-2.5"
            >
              <a href="#tickets">CLAIM MY SEAT</a>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={`flex h-11 w-11 flex-col items-center justify-center space-y-1.5 rounded-lg border border-gold/40 text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span
                className={`block h-0.5 w-6 rounded-sm bg-current transition-transform duration-300 ${
                  isMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-sm bg-current transition-opacity duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-6 rounded-sm bg-current transition-transform duration-300 ${
                  isMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
            <Button 
              asChild
              className="bg-gold hover:bg-gold-dark text-navy-dark px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <a href="#tickets">CLAIM MY SEAT</a>
            </Button>
          </div>
        </div>
      </div>
      <div
        id="mobile-navigation"
        className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="space-y-4 bg-navy/90 px-4 pb-6 pt-4 shadow-inner backdrop-blur">
          {navigationLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={handleNavLinkClick}
                className="block text-base font-medium text-white transition-colors hover:text-gold"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={handleNavLinkClick}
                className="block text-base font-medium text-white transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            )
          )}
          <Button
            asChild
            className="w-full btn-primary text-base py-3"
          >
            <a href="#tickets" onClick={handleNavLinkClick}>
              CLAIM MY SEAT
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

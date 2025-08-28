import { Mail, Phone, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-navy-dark via-navy to-navy-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(212,175,55,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center group">
              <div className="relative">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpEh0Q2A0Js46PR3va95bzURVGzrQSqTlVw&s" 
                  alt="Logo" 
                  className="h-12 w-12 mr-3 rounded-full shadow-xl group-hover:scale-110 transition-transform duration-300" 
                />
                <div className="absolute inset-0 rounded-full bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-bold group-hover:text-gold transition-colors duration-300">
                Singapore Tourism 2025
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Where Visionary Leaders Recharge, Network, and Scale Beyond Borders
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 text-gold border-b-2 border-gold pb-2 inline-block">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors duration-300" />
                <a 
                  href="mailto:products@stephenakintayo.com" 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  products@stephenakintayo.com
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-gold group-hover:text-gold-light transition-colors duration-300" />
                <a 
                  href="tel:+2348167901719" 
                  className="text-gray-300 hover:text-gold transition-colors duration-300"
                >
                  +234 (816) 790-1719
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 text-gold border-b-2 border-gold pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { href: "#", label: "About the Summit" },
                { href: "#speakers", label: "Speakers" },
                { href: "#", label: "Schedule" },
                { href: "#", label: "FAQs" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-gold transition-all duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 text-gold border-b-2 border-gold pb-2 inline-block">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {[
                { 
                  href: "https://ng.linkedin.com/company/stephenakintayo", 
                  icon: <Linkedin className="w-6 h-6" />, 
                  label: "LinkedIn" 
                },
                { 
                  href: "https://www.instagram.com/stephenakintayo/?hl=en", 
                  icon: <Instagram className="w-6 h-6" />, 
                  label: "Instagram" 
                },
                { 
                  href: "https://www.instagram.com/stephenakintayo/?hl=en", 
                  icon: <Twitter className="w-6 h-6" />, 
                  label: "Twitter" 
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="p-3 bg-navy-light hover:bg-gold text-gray-300 hover:text-navy-dark rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            &copy; {currentYear} Singapore Tourism. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Curated by Dr. Stephen Akintayo, Africa's foremost investment coach.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

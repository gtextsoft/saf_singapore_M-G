
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpEh0Q2A0Js46PR3va95bzURVGzrQSqTlVw&s" 
                alt="Logo" 
                className="h-8 mr-2" 
              />
              <h3 className="text-lg font-bold">Singapore Summit 2025</h3>
            </div>
            <p className="text-sm text-gray-300">
              Where Visionary Leaders Recharge, Network, and Scale Beyond Borders
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Email: products@stephenakintayo.com</li>
              <li>Phone: +1 (234) 567-8900</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">About the Summit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Speakers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">Schedule</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gold transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://ng.linkedin.com/company/stephenakintayo" className="text-gray-300 hover:text-gold transition-colors">LinkedIn</a>
              <a href="https://www.instagram.com/stephenakintayo/?hl=en" className="text-gray-300 hover:text-gold transition-colors">Twitter</a>
              <a href="https://www.instagram.com/stephenakintayo/?hl=en" className="text-gray-300 hover:text-gold transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Singapore Founders & C-Suite Retreat. All rights reserved.</p>
          <p className="mt-2">
            Curated by Dr. Stephen Akintayo, Africa's foremost investment coach.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";

const PricingOption = ({ title, price, discountPrice, features, isPopular = false }: { 
  title: string; 
  price: string; 
  discountPrice?: string; 
  features: string[];
  isPopular?: boolean; 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden border ${isPopular ? 'border-gold' : 'border-gray-200'}`}>
      {isPopular && (
        <div className="bg-gold text-navy-dark text-center py-2 font-bold">
          EARLY BIRD OFFER
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-6">
          {discountPrice ? (
            <div>
              <span className="text-3xl font-bold text-navy">${discountPrice}</span>
              <span className="text-lg line-through text-gray-400 ml-2">${price}</span>
              <p className="text-green-600 font-medium">Save ${parseInt(price) - parseInt(discountPrice)}</p>
            </div>
          ) : (
            <span className="text-3xl font-bold text-navy">${price}</span>
          )}
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gold mr-2">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <a href="https://pay.gtextglobal.com/singapore-retreat-for/" target="_blank" rel="noopener noreferrer">
          <Button className={`w-full ${isPopular ? 'btn-primary' : 'bg-navy text-white hover:bg-navy-light'}`}>
            CLAIM MY SEAT
          </Button>
        </a>
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <div className="bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
          What's This Experience Worth?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          If you had the opportunity to invest in yourself, take a productive break, and immerse yourself in a room filled with high-level founders and C-suite executives, how much would that be worth? Surely, $5,000 wouldn't be too much for such a life-changing experience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingOption 
            title="Individual" 
            price="2000" 
            discountPrice="1500"
            isPopular={true}
            features={[
              "Premium accommodation in Singapore",
              "All meals included",
              "Access to all workshops",
              "Personal business assessment",
              "Networking opportunities",
              "Action plan to scale your business"
            ]}
          />
          <PricingOption 
            title="Couples" 
            price="3000" 
            features={[
              "Premium accommodation in Singapore",
              "All meals included",
              "Access to all workshops for both",
              "2 Personal business assessments",
              "Networking opportunities",
              "Action plans to scale your businesses"
            ]}
          />
          <PricingOption 
            title="Standard (Later)" 
            price="2000" 
            features={[
              "Premium accommodation in Singapore",
              "All meals included",
              "Access to all workshops",
              "Personal business assessment",
              "Networking opportunities",
              "Action plan to scale your business"
            ]}
          />
        </div>
        
        <div className="text-center mt-10">
          <p className="text-lg font-medium mb-4">
            Thousands of people will see this daily, and spots will fill up fast!
          </p>
          <a href="https://pay.gtextglobal.com/singapore-retreat-for/" target="_blank" rel="noopener noreferrer">
            <Button className="btn-primary text-lg">
              CLAIM MY SEAT NOW BEFORE PRICES INCREASE!
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;

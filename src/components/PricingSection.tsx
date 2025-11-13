import { Button } from "@/components/ui/button";

const PricingOption = ({ title, price, discountPrice, features, isPopular = false, ctaHref, soldOut = false }: { 
  title: string; 
  price: string; 
  discountPrice?: string; 
  features: string[];
  isPopular?: boolean;
  ctaHref: string;
  soldOut?: boolean;
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-lg overflow-hidden border ${isPopular ? 'border-gold' : 'border-gray-200'}`}>
      {isPopular && (
        <div className="bg-gold text-navy-dark text-center py-2 font-bold">
          EARLY BIRD OFFER
        </div>
      )}
      {soldOut && (
        <div className="bg-red-600 text-white text-center py-1 text-sm font-semibold">
          SOLD OUT
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
        {soldOut ? (
          <Button 
            disabled
            className="w-full bg-gray-200 text-gray-500 cursor-not-allowed"
          >
            SOLD OUT
          </Button>
        ) : (
          <Button 
            asChild
            className={`w-full ${isPopular ? 'btn-primary' : 'bg-navy text-white hover:bg-navy-light'}`}
          >
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              CLAIM MY SEAT
            </a>
          </Button>
        )}
      </div>
    </div>
  );
};

const PricingSection = () => {
  return (
    <div id="tickets" className="bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">
          What's This Experience Worth?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12">
          If you had the opportunity to invest in yourself, take a productive break, and immerse yourself in a room filled with high-level founders and C-suite executives, how much would that be worth? Surely, $5,000 wouldn't be too much for such a life-changing experience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <PricingOption 
            title="Economy (Early Bird)" 
            price="7000" 
            ctaHref="https://app.mailingboss.com/lists/68b6ad768df66/subscribe"
            soldOut={true}
            features={[
              "Premium accommodation in Singapore",
              "All meals included",
              "Access to all workshops",
              "Personal business assessment",
              "Networking opportunities",
              "Action plan to scale your business",
              "Early Bird registration closes July 30th, 2025"
            ]}
          />
          <PricingOption 
            title="Business Class (Early Bird)" 
            price="15000" 
            discountPrice="12000"
            soldOut={true}
            ctaHref="https://app.mailingboss.com/lists/68b6ad768df66/subscribe"
            features={[
              "Business Class accommodation in Singapore",
              "All meals included",
              "Access to all workshops",
              "Personal business assessment",
              "Exclusive networking opportunities",
              "VIP action plan to scale your business",
              "Early Bird registration closes July 30th, 2025"
            ]}
          />
          <PricingOption 
            title="Self-Travel Ticket" 
            price="2000" 
            ctaHref="https://pay.gtextglobal.com/virtual-to-the-singapore-retreat-copy-2/"
            isPopular={true}
            features={[
              "Access to all workshops",
              "Personal business assessment",
              "Networking opportunities",
              "Action plan to scale your business",
              "For visa-free travelers only",
              "You arrange your own travel & accommodation",
              "Perfect for those who can travel independently"
            ]}
          />
          <PricingOption 
            title="Virtual Ticket" 
            price="200" 
            discountPrice="100"
            ctaHref="https://app.mailingboss.com/lists/68b6ad768df66/subscribe"
            features={[
              "Live-stream access to all sessions",
              "On-demand recordings for 30 days",
              "Digital workbook and resources",
              "Virtual networking lounge",
              "Interactive Q&A with speakers",
              "Action plan templates to implement immediately"
            ]}
          />
        </div>
        
        <div className="text-center mt-10">
          <p className="text-lg font-medium mb-4">
            Early Bird registration ends July 30th, 2025. Entire event registration closes September 25th, 2025.<br/>
            Thousands of people will see this daily, and spots will fill up fast!
          </p>
          <Button 
            asChild
            className="btn-primary text-lg"
          >
            <a href="https://pay.gtextglobal.com/virtual-to-the-singapore-retreat/" target="_blank" rel="noopener noreferrer">
              CLAIM MY SEAT NOW BEFORE PRICES INCREASE!
            </a>
          </Button>
        </div>
      </div>
      
    </div>
  );
};

export default PricingSection;

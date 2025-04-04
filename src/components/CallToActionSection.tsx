
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <div className="bg-navy text-white">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Ready to Step Into the Next Level of Leadership?
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-navy-light p-8 rounded-lg mb-10">
            <h3 className="text-2xl font-bold mb-4 text-gold">Too Busy To Take 5 Days Off?</h3>
            <p className="mb-6">
              Then this retreat is exactly for you. If your business depends on you working 16-hour days, you need the strategies to build systems that run without you.
            </p>
            <p className="font-medium">So now, there's nothing holding you back.</p>
          </div>
          
          <h3 className="text-2xl font-bold mb-6">Your Three Choices Right Now:</h3>
          
          <div className="space-y-6 mb-10">
            <div className="flex items-start">
              <span className="font-bold text-red-500 mr-3">❌</span>
              <div>
                <span className="font-bold">Option A:</span> Ignore this opportunity and keep grinding alone—while your competitors out-network and out-innovate you.
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="font-bold text-yellow-500 mr-3">⚠️</span>
              <div>
                <span className="font-bold">Option B:</span> Decide to register later, only to find that the special offer is gone, and you'll have to pay $2,000.
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="font-bold text-green-500 mr-3">✅</span>
              <div>
                <span className="font-bold">Option C:</span> Spend Oct 13–19 2025 in Singapore with the sharpest minds in business and return with:
                <ul className="mt-2 ml-6 list-disc">
                  <li>A fail-safe plan to expand into new markets.</li>
                  <li>3+ new board-level contacts and investment opportunities.</li>
                  <li>The clarity and confidence to lead without second-guessing.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Here's How to Join Us:</h3>
            <ol className="mb-8 inline-block text-left">
              <li className="mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gold text-navy font-bold flex items-center justify-center mr-3">1</span>
                <span>Click "Claim My Seat" below.</span>
              </li>
              <li className="mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gold text-navy font-bold flex items-center justify-center mr-3">2</span>
                <span>Select your package and complete your registration.</span>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 rounded-full bg-gold text-navy font-bold flex items-center justify-center mr-3">3</span>
                <span>Further details will be sent to you.</span>
              </li>
            </ol>
            
            <Button className="btn-primary text-lg">CLAIM MY SEAT NOW BEFORE PRICES INCREASE!</Button>
            
            <p className="mt-6 text-sm opacity-80 italic">
              No fluff. No bullet points. Just the unapologetic truth about what it takes to lead at the highest level in 2025.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;

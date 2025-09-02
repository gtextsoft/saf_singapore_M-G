
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, XCircle, AlertTriangle, Zap, Users, Star } from "lucide-react";

const CallToActionSection = () => {
  return (
    <div className="bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(212,175,55,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-6 py-3 rounded-full mb-8">
            <Zap className="w-6 h-6" />
            <span className="font-semibold text-lg">Limited Time Opportunity</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gold-light to-white bg-clip-text text-transparent">
            Ready to Step Into the Next Level of Leadership?
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Busy Business Owner Section */}
          <div className="bg-white/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl mb-12 border border-white/20 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gold flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 mr-3" />
              Too Busy To Take 5 Days Off?
            </h3>
            <p className="text-lg mb-6 leading-relaxed text-center">
              Then this retreat is exactly for you. If your business depends on you working 16-hour days, you need the strategies to build systems that run without you.
            </p>
            <p className="font-medium text-center text-gold-light text-lg">So now, there's nothing holding you back.</p>
          </div>
          
          {/* Enhanced Choices Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Your Three Choices Right Now:</h3>
            
            <div className="space-y-8">
              <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start">
                  <XCircle className="w-8 h-8 text-red-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-red-400 text-lg">Option A:</span>
                    <p className="text-lg leading-relaxed mt-2">
                      Ignore this opportunity and keep grinding alone—while your competitors out-network and out-innovate you.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start">
                  <AlertTriangle className="w-8 h-8 text-yellow-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-yellow-400 text-lg">Option B:</span>
                    <p className="text-lg leading-relaxed mt-2">
                      Decide to register later, only to find that the special offer is gone, and you'll have to pay $2,500 extra.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/10 border border-green-500/20 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-start">
                  <CheckCircle className="w-8 h-8 text-green-500 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-green-400 text-lg">Option C:</span>
                    <p className="text-lg leading-relaxed mt-2">
                      Spend 28th November to 4th December 2025 in Singapore with Dr. Stephen Akintayo and Dr. Cosmos Maduka in an intimate retreat setting and return with:
                    </p>
                    <ul className="mt-4 ml-6 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>A fail-safe plan to expand into new markets.</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>3+ new board-level contacts and investment opportunities.</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                        <span>The clarity and confidence to lead without second-guessing.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced How to Join Section */}
          <div className="text-center bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gold">Here's How to Join Us:</h3>
            <ol className="mb-10 inline-block text-left space-y-4">
              {[
                "Click \"Claim My Seat\" below.",
                "Select your package and complete your registration.",
                "Further details will be sent to you."
              ].map((step, index) => (
                <li key={index} className="flex items-center group">
                  <span className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light text-navy font-bold flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {index + 1}
                  </span>
                  <span className="text-lg group-hover:text-gold-light transition-colors duration-300">{step}</span>
                </li>
              ))}
            </ol>
            
            <Button className="btn-primary text-xl px-10 py-5 group">
              CLAIM MY SEAT NOW BEFORE PRICES INCREASE!
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <p className="mt-8 text-lg opacity-90 italic text-gold-light">
              No fluff. No bullet points. Just the unapologetic truth about what it takes to lead at the highest level in 2025.
            </p>
          </div>

          {/* Retreat Experience Highlight */}
          <div className="mt-12 bg-gradient-to-r from-gold/10 to-gold/5 p-8 rounded-3xl border border-gold/20">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-4">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Exclusive Retreat Experience</span>
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">What Makes This Retreat Special?</h4>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <h5 className="font-semibold text-navy mb-2">Two World-Class Mentors</h5>
                <p className="text-sm text-gray-600">Learn from Dr. Akintayo and Dr. Maduka</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-gold" />
                </div>
                <h5 className="font-semibold text-navy mb-2">Intimate Setting</h5>
                <p className="text-sm text-gray-600">Small group for deeper connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;

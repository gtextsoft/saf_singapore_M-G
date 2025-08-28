import { Check, Star, Award, Target, Users } from "lucide-react";

const IntroSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(10,35,66,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-navy">
          {/* Enhanced Opening */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5" />
              <span className="font-semibold">Premium Retreat Experience</span>
            </div>
            <p className="text-xl md:text-2xl mb-6 leading-relaxed font-light">
              Let's be real: burning out isn't a badge of honor, and grinding alone in your office won't take your business global.
            </p>
          </div>
          
          {/* Enhanced Main Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-navy flex items-center justify-center">
              <Target className="w-8 h-8 mr-3 text-gold" />
              Imagine this instead:
            </h3>
            
            <ul className="space-y-6 mb-10">
              {[
                "Waking up in a premium Airbnb in the heart of Singapore.",
                "Engaging in deep, strategy-driven conversations with business titans and C-suite executives who've scaled globally.",
                "Learning a proven framework to break past growth plateaus—without sacrificing your health, relationships, or peace of mind."
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 mr-4 p-2 bg-gold/20 rounded-full group-hover:bg-gold/40 transition-colors duration-300">
                    <Check className="text-gold" size={20} />
                  </div>
                  <span className="text-lg leading-relaxed group-hover:text-navy transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="text-center">
              <p className="text-lg font-medium text-navy-light leading-relaxed">
                This is exactly what you'll get at the Singapore Tourism 2025 retreat, curated by Dr. Stephen Akintayo, Africa's foremost investment coach.
              </p>
            </div>
          </div>
          
          {/* Enhanced Highlight Box */}
          <div className="bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(212,175,55,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8">
                <Award className="w-10 h-10 text-gold mr-4" />
                <h3 className="text-2xl md:text-3xl font-bold">What Makes This Retreat Different From Any Other Leadership Event?</h3>
              </div>
              
              <ul className="space-y-4 mb-8 max-w-3xl mx-auto">
                {[
                  "Diagnose your blind spots with brutally honest assessments.",
                  "Get prescribed, practical solutions—not just theory.",
                  "Walk away with a clear action plan to scale your business beyond borders."
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-4 p-2 bg-gold/20 rounded-full group-hover:bg-gold/40 transition-colors duration-300">
                      <Check className="text-gold" size={20} />
                    </div>
                    <span className="text-lg leading-relaxed group-hover:text-gold-light transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-center text-lg italic text-gold-light">
                All of this while disconnecting from the noise and rebooting for your next-level success in an intimate retreat setting.
              </p>
            </div>
          </div>

          {/* Retreat Benefits Highlight */}
          <div className="mt-12 bg-gradient-to-r from-gold/10 to-gold/5 p-8 rounded-3xl border border-gold/20">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-4 py-2 rounded-full mb-4">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Retreat Benefits</span>
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">Why a Retreat Format?</h4>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-gold" />
                </div>
                <h5 className="font-semibold text-navy mb-2">Intimate Networking</h5>
                <p className="text-sm text-gray-600">Smaller groups for deeper connections</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-gold" />
                </div>
                <h5 className="font-semibold text-navy mb-2">Relaxed Environment</h5>
                <p className="text-sm text-gray-600">Premium setting for focused learning</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <h5 className="font-semibold text-navy mb-2">Direct Access</h5>
                <p className="text-sm text-gray-600">One-on-one time with speakers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

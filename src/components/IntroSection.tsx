
import { Check } from "lucide-react";

const IntroSection = () => {
  return (
    <div className="bg-white">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-navy">
          <p className="text-lg mb-6">
            Let's be real: burning out isn't a badge of honor, and grinding alone in your office won't take your business global.
          </p>
          
          <h3 className="text-2xl font-bold mb-4">Imagine this instead:</h3>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <Check className="checkmark flex-shrink-0 mt-1" size={20} />
              <span>Waking up in a premium Airbnb in the heart of Singapore.</span>
            </li>
            <li className="flex items-start">
              <Check className="checkmark flex-shrink-0 mt-1" size={20} />
              <span>Engaging in deep, strategy-driven conversations with business titans and C-suite executives who've scaled globally.</span>
            </li>
            <li className="flex items-start">
              <Check className="checkmark flex-shrink-0 mt-1" size={20} />
              <span>Learning a proven framework to break past growth plateaus—without sacrificing your health, relationships, or peace of mind.</span>
            </li>
          </ul>
          
          <p className="text-lg font-medium">
            This is exactly what you'll get at the Singapore Founders & C-Suite Retreat 2025, curated by Dr. Stephen Akintayo, Africa's foremost investment coach.
          </p>
          
          <div className="mt-10 bg-navy-light text-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">What Makes This Different From Any Other Leadership Event?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="text-gold mr-2 flex-shrink-0 mt-1" size={20} />
                <span>Diagnose your blind spots with brutally honest assessments.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-gold mr-2 flex-shrink-0 mt-1" size={20} />
                <span>Get prescribed, practical solutions—not just theory.</span>
              </li>
              <li className="flex items-start">
                <Check className="text-gold mr-2 flex-shrink-0 mt-1" size={20} />
                <span>Walk away with a clear action plan to scale your business beyond borders.</span>
              </li>
            </ul>
            <p className="mt-4 italic">All of this while disconnecting from the noise and rebooting for your next-level success.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

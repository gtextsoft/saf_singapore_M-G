
import { Check } from "lucide-react";

interface BenefitCategoryProps {
  title: string;
  icon?: string;
  benefits: string[];
}

const BenefitCategory = ({ title, benefits }: BenefitCategoryProps) => {
  return (
    <div className="feature-card">
      <h3 className="text-xl font-bold mb-4 text-navy border-b border-gold pb-2">{title}</h3>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <Check className="checkmark flex-shrink-0 mt-1" size={18} />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BenefitsSection = () => {
  const benefitCategories = [
    {
      title: "Global Expansion & High-Level Networking",
      benefits: [
        "Engage with influential CEOs, investors, and business leaders.",
        "Build strategic alliances that unlock new markets.",
        "Participate in high-impact industry discussions that shape the future of business."
      ]
    },
    {
      title: "Expert Insights & Business Scaling Strategies",
      benefits: [
        "Gain proven strategies for exponential business growth.",
        "Learn cutting-edge leadership techniques from global experts.",
        "Receive personalized coaching from Dr. Stephen Akintayo and other top mentors."
      ]
    },
    {
      title: "Personal Growth & Leadership Innovation",
      benefits: [
        "Take part in interactive problem-solving sessions for scaling businesses.",
        "Learn how to navigate competitive markets and differentiate your brand.",
        "Implement fail-proof investment and growth strategies that give you an edge."
      ]
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-navy">What's In It For You?</h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-navy-light">
          Join an exclusive community of visionary leaders for 7 days of transformation and business expansion
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefitCategories.map((category, index) => (
            <BenefitCategory key={index} title={category.title} benefits={category.benefits} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

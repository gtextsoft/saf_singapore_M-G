
import { Check, Globe, TrendingUp, Users } from "lucide-react";

interface BenefitCategoryProps {
  title: string;
  icon: React.ReactNode;
  benefits: string[];
  delay: number;
}

const BenefitCategory = ({ title, icon, benefits, delay }: BenefitCategoryProps) => {
  return (
    <div 
      className="feature-card group hover:scale-105 transition-all duration-500 cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-gradient-to-br from-gold to-gold-light rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-navy border-b-2 border-gold pb-2 flex-1">{title}</h3>
      </div>
      <ul className="space-y-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start group/item">
            <div className="flex-shrink-0 mt-1 mr-3 p-1 bg-gold/20 rounded-full group-hover/item:bg-gold/40 transition-colors duration-300">
              <Check className="text-gold" size={16} />
            </div>
            <span className="text-gray-700 leading-relaxed group-hover/item:text-navy transition-colors duration-300">{benefit}</span>
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
      icon: <Globe className="w-6 h-6 text-white" />,
      benefits: [
        "Engage with influential CEOs, investors, and business leaders.",
        "Build strategic alliances that unlock new markets.",
        "Participate in high-impact industry discussions that shape the future of business."
      ]
    },
    {
      title: "Expert Insights & Business Scaling Strategies",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      benefits: [
        "Gain proven strategies for exponential business growth.",
        "Learn cutting-edge leadership techniques from global experts.",
        "Receive personalized coaching from Dr. Stephen Akintayo and other top mentors."
      ]
    },
    {
      title: "Personal Growth & Leadership Innovation",
      icon: <Users className="w-6 h-6 text-white" />,
      benefits: [
        "Take part in interactive problem-solving sessions for scaling businesses.",
        "Learn how to navigate competitive markets and differentiate your brand.",
        "Implement fail-proof investment and growth strategies that give you an edge."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(10,35,66,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy bg-gradient-to-r from-navy via-navy-light to-navy bg-clip-text text-transparent">
            What's In It For You?
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-navy-light leading-relaxed">
            Join an exclusive community of visionary leaders for 7 days of transformation and business expansion
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefitCategories.map((category, index) => (
            <BenefitCategory 
              key={index} 
              title={category.title} 
              icon={category.icon} 
              benefits={category.benefits}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;

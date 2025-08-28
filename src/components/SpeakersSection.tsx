import { Award, Globe, TrendingUp, Users, Star, BookOpen, Building2, Target } from "lucide-react";

interface SpeakerProps {
  name: string;
  title: string;
  image: string;
  bio: string;
  expertise: string[];
  achievements: string[];
  icon: React.ReactNode;
}

const Speaker = ({ name, title, image, bio, expertise, achievements, icon }: SpeakerProps) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group hover:scale-105">
      {/* Speaker Header */}
      <div className="text-center mb-8">
        <div className="relative inline-block mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gold/20 group-hover:border-gold/40 transition-colors duration-300">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 p-3 bg-gradient-to-br from-gold to-gold-light rounded-full shadow-lg">
            {icon}
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-navy mb-2">{name}</h3>
        <p className="text-gold font-semibold text-lg">{title}</p>
      </div>

      {/* Bio */}
      <p className="text-gray-700 leading-relaxed mb-6 text-center">{bio}</p>

      {/* Expertise */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-navy mb-3 flex items-center">
          <Target className="w-5 h-5 mr-2 text-gold" />
          Areas of Expertise
        </h4>
        <div className="flex flex-wrap gap-2">
          {expertise.map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full border border-gold/20"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Key Achievements */}
      <div>
        <h4 className="text-lg font-semibold text-navy mb-3 flex items-center">
          <Award className="w-5 h-5 mr-2 text-gold" />
          Key Achievements
        </h4>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start text-sm text-gray-600">
              <Star className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Stephen Akintayo",
      title: "Africa's Foremost Investment Coach & Host",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFedlfSMOfNRFFezw6zu9nUq8TocP5T0pRNhvV1_zdcIA43dKPcMZtSI7Z6Zp4DxpZKWq1mpSmCcLn_uYvHpZuIw",
      bio: "A Harvard-educated investment coach, prolific author of 35 books, and founder of the Stephen Akintayo Foundation. Dr. Akintayo has transformed thousands of lives through his investment strategies and philanthropic initiatives.",
      expertise: ["Investment Strategy", "Business Scaling", "Leadership Development", "Real Estate", "Philanthropy"],
      achievements: [
        "Harvard University graduate in Essential Management Skills",
        "Author of 45 life-transforming books",
        "Trained coach by The Coaching Academy, UK",
        "Multiple award-winning business strategist",
        "Founded Stephen Akintayo Foundation"
      ],
      icon: <BookOpen className="w-6 h-6 text-white" />
    },
    {
      name: "Dr. Cosmos Maduka",
      title: "Business Mogul & Coscharis Group Founder",
      image: "https://probitasreport.com/uploads/images/202412/image_870x_67736b5620f16.jpg",
      bio: "A visionary entrepreneur and founder of Coscharis Group, one of Nigeria's most successful conglomerates. Dr. Maduka is renowned for his business acumen, strategic thinking, and ability to build sustainable business empires.",
      expertise: ["Business Strategy", "Corporate Leadership", "Market Expansion", "Investment Management", "Strategic Planning"],
      achievements: [
        "Founder & CEO of Coscharis Group",
        "Built a multi-billion naira business empire",
        "Pioneered automotive and healthcare industries in Nigeria",
        "Multiple business awards and recognitions",
        "Mentor to countless entrepreneurs and business leaders"
      ],
      icon: <Building2 className="w-6 h-6 text-white" />
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
          <div className="inline-flex items-center space-x-2 bg-gold/10 text-gold px-6 py-3 rounded-full mb-8">
            <Users className="w-6 h-6" />
            <span className="font-semibold text-lg">Meet Your Mentors</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy bg-gradient-to-r from-navy via-navy-light to-navy bg-clip-text text-transparent">
            World-Class Speakers & Mentors
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-navy-light leading-relaxed">
            Learn directly from Africa's most successful business leaders and investment experts during this exclusive retreat
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <Speaker 
              key={index} 
              {...speaker}
            />
          ))}
        </div>

        {/* Retreat Focus */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-navy via-navy-light to-navy-dark text-white p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(212,175,55,0.1)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gold">
                Why This Retreat Experience is Unique
              </h3>
              <p className="text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
                Unlike traditional conferences, this retreat offers intimate access to business titans in a relaxed, 
                networking-focused environment. You'll have direct conversations with Dr. Akintayo and Dr. Maduka, 
                gaining insights that would take years to acquire elsewhere.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="font-semibold mb-2">Global Perspective</h4>
                  <p className="text-sm text-gold-light">Learn international business strategies</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="font-semibold mb-2">Practical Insights</h4>
                  <p className="text-sm text-gold-light">Real-world strategies you can implement</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-gold" />
                  </div>
                  <h4 className="font-semibold mb-2">Networking</h4>
                  <p className="text-sm text-gold-light">Connect with fellow business leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;

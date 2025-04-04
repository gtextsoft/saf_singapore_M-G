
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="about" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 animate-fade-in">
            Meet Your Host
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start animate-fade-in">
            <div className="rounded-lg overflow-hidden shadow-xl mb-6 transform transition-all duration-500 hover:scale-105">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFedlfSMOfNRFFezw6zu9nUq8TocP5T0pRNhvV1_zdcIA43dKPcMZtSI7Z6Zp4DxpZKWq1mpSmCcLn_uYvHpZuIw"
                alt="Dr. Stephen Akintayo"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-navy mb-2">Dr. Stephen Akintayo</h3>
              <p className="text-gray-600 italic mb-4">Africa's foremost investment coach</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="#" className="text-navy hover:text-gold transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-navy hover:text-gold transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg shadow-md animate-fade-in">
            <div className={`prose max-w-none text-gray-700 ${isExpanded ? '' : 'line-clamp-6'}`}>
              <p className="mb-4">
                Dr Stephen Akintayo is Africa's most sought after investment coach. He is the CEO/MD of Gtext Global which is the mother company of so many subsidiaries which includes Gtext Homes, a real estate company with a highly innovative and young workforce. It is based in Nigeria, United Arab Emirates (UAE), with presence in the United State of America, United Kingdom, etc.
              </p>
              <p className="mb-4">
                Other organisations include Stephen Akintayo Consulting SAC, a vibrant organisation that heavily building capacities all over the world through paid mentorship programmes in the areas of real estate brokerage and investment, e-commerce, digital marketing, freelancing, authoring and speaking, cryptocurrency and forex trade training, etc.
              </p>
              
              {isExpanded && (
                <>
                  <p className="mb-4">
                    Born in Gonge area of Maiduguri, Borno State, the north eastern part of Nigeria in a very impoverished environment and with a civil servant mother who raised him and his four other siblings with her meagre salary given that his father's contract business crumbled. His passion for philanthropy was informed by his upbringing.
                  </p>
                  <p className="mb-4">
                    "The day you start giving is the day you start living, the day you stop giving is the day you start dying. Give daily to live daily. Give Joy, Give counsel, Give Smiles, Give Food and Give Business Ideas to change the world" - Stephen Akintayo.
                  </p>
                  <p className="mb-4">
                    He is a prolific author who has 35 books in his name which includes Survival Instincts, The Information Millionaire, Maximising Your Real Estate Investment, Managing Family Finance, among other life-transforming books.
                  </p>
                  <p className="mb-4">
                    His first degree is in microbiology from Olabisi Onabanjo University, Ogun state, Nigeria. He is a member of Institute of Strategic Management (ISMN). He is also a graduate of Harvard University, where he studied essential management skills for emerging leaders. He is also a trained coach by The Coaching Academy, UK.
                  </p>
                  <p>
                    He is a multiple award winner. He is happily married and blessed with three children, two boys, and a lovely girl.
                  </p>
                </>
              )}
            </div>
            
            <div className="mt-6 text-center">
              <Button 
                onClick={toggleExpand}
                className="bg-gold hover:bg-gold-dark text-navy-dark font-medium rounded-full py-2 px-6 flex items-center gap-2 mx-auto transform transition-all duration-300 hover:scale-105"
              >
                {isExpanded ? (
                  <>
                    Read Less <ChevronUp size={18} />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown size={18} />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-block border-t border-b border-gray-200 py-8 px-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpEh0Q2A0Js46PR3va95bzURVGzrQSqTlVw&s" 
              alt="Stephen Akintayo Foundation" 
              className="h-24 mx-auto mb-4 transform transition-all duration-500 hover:scale-105" 
            />
            <p className="text-gray-600 italic">
              Curated by Dr. Stephen Akintayo, Africa's foremost investment coach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

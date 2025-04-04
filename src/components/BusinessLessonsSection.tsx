
const BusinessLessonsSection = () => {
  const lessons = [
    {
      title: "Market Expansion & Diversification",
      description: "Learn how to break into new industries and global markets while maintaining profitability."
    },
    {
      title: "Government & Corporate Relations",
      description: "Discover practical strategies for building strategic relationships with key policymakers and regulators."
    },
    {
      title: "Smart Investment Decision-Making",
      description: "Get equipped with data-backed tools to make high-return investment choices that align with your business goals."
    },
    {
      title: "Customer Acquisition Mastery",
      description: "Leverage cost-effective, data-driven marketing to scale faster while keeping costs low."
    },
    {
      title: "Market Differentiation Tactics",
      description: "Learn how to stand out in a saturated industry, dominate your niche, and drive sustainable growth."
    }
  ];

  return (
    <div className="bg-navy text-white">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Key Business Lessons You'll Master
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-gold">
          Practical, actionable strategies you can implement immediately
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <div key={index} className="bg-navy-light p-6 rounded-lg border border-gold/20 hover:border-gold/50 transition-all">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center font-bold mr-3">
                  {index + 1}
                </div>
                <h3 className="font-bold text-xl">{lesson.title}</h3>
              </div>
              <p className="text-white/80">{lesson.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessLessonsSection;

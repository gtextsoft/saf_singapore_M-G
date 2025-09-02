import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const PastEvents = () => {
  useEffect(() => {
    document.title = "Past Events - Singapore Tourism 2025";
  }, []);

  const pastEvents = [
    {
      id: 1,
      title: "Singapore Tourism Summit 2024",
      date: "March 15, 2024",
      location: "Marina Bay Sands, Singapore",
      attendees: "500+",
      duration: "Full Day",
      description: "A comprehensive summit exploring the latest trends in Singapore tourism, featuring keynote speakers from the hospitality industry and government officials.",
      image: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?w=600&h=400&fit=crop&crop=center",
      tags: ["Tourism", "Hospitality", "Government"]
    },
    {
      id: 2,
      title: "Digital Innovation in Travel 2024",
      date: "June 22, 2024",
      location: "Singapore Expo, Singapore",
      attendees: "300+",
      duration: "Half Day",
      description: "Exploring how technology is revolutionizing the travel industry, with focus on AI, mobile apps, and digital customer experiences.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
      tags: ["Technology", "Digital", "Innovation"]
    },
    {
      id: 3,
      title: "Sustainable Tourism Conference 2024",
      date: "September 8, 2024",
      location: "Gardens by the Bay, Singapore",
      attendees: "400+",
      duration: "Full Day",
      description: "Focusing on eco-friendly tourism practices, sustainable development, and environmental conservation in the tourism sector.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&crop=center",
      tags: ["Sustainability", "Environment", "Eco-Tourism"]
    },
    {
      id: 4,
      title: "Culinary Tourism Workshop 2024",
      date: "November 12, 2024",
      location: "Chinatown Heritage Centre, Singapore",
      attendees: "150+",
      duration: "Half Day",
      description: "A hands-on workshop exploring Singapore's diverse culinary heritage and its role in attracting food tourism.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&crop=center",
      tags: ["Food", "Culture", "Heritage"]
    },
    {
      id: 5,
      title: "Business Travel Forum 2024",
      date: "January 20, 2024",
      location: "Raffles Hotel, Singapore",
      attendees: "250+",
      duration: "Full Day",
      description: "Addressing the needs of business travelers and corporate tourism, featuring insights from major corporations and travel agencies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
      tags: ["Business", "Corporate", "Travel"]
    },
    {
      id: 6,
      title: "Cultural Heritage Symposium 2024",
      date: "April 18, 2024",
      location: "National Museum of Singapore",
      attendees: "200+",
      duration: "Half Day",
      description: "Celebrating Singapore's rich cultural diversity and heritage sites, and their importance in cultural tourism.",
      image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=600&h=400&fit=crop&crop=center",
      tags: ["Culture", "Heritage", "Museum"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy-dark to-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Past Events
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our previous successful events and discover the insights, connections, and experiences that have shaped Singapore's tourism landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gold text-navy-dark font-semibold">
                      Past Event
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="h-4 w-4 mr-2 text-gold" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="h-4 w-4 mr-2 text-gold" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Users className="h-4 w-4 mr-2 text-gold" />
                      <span className="text-sm">{event.attendees} attendees</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="h-4 w-4 mr-2 text-gold" />
                      <span className="text-sm">{event.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-gold/20 to-gold/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Don't Miss Our Next Event
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join us for Singapore Tourism 2025 and be part of the future of tourism in Singapore.
          </p>
          <a 
            href="/#pricing" 
            className="inline-block bg-gold hover:bg-gold-dark text-navy-dark font-bold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Register for Singapore Tourism 2025
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PastEvents;

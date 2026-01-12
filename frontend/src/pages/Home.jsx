import React from 'react';
import HomeSlider from '../components/features/HomeSlider';
import ServiceCard from '../components/cards/ServiceCard';
import ZodiacSection from '../components/features/ZodiacSection'; 
import { 
  Sparkles, 
  Hand, 
  HeartHandshake, 
  ScrollText, 
  MessageCircle, 
  MoonStar 
} from 'lucide-react';
import Testimonials from '../components/features/Testimonials';
const Home = () => {
  
  // Services Data
  const services = [
    {
      icon: ScrollText,
      title: "Kundli Generation",
      description: "Get your detailed Janam Kundli with planetary positions and dosha analysis instantly.",
      link: "/services"
    },
    {
      icon: Hand,
      title: "AI Palmistry",
      description: "Scan your palm using our advanced AI to reveal career, health, and fate lines.",
      link: "/palmistry"
    },
    {
      icon: HeartHandshake,
      title: "Matchmaking",
      description: "Detailed Guna Milan and compatibility check for marriage and relationships.",
      link: "/services"
    },
    {
      icon: MoonStar,
      title: "Daily Horoscope",
      description: "Start your day with accurate predictions based on your sun and moon signs.",
      link: "/horoscope"
    },
    {
      icon: MessageCircle,
      title: "Chat with Astrologer",
      description: "Connect with expert Vedic astrologers for personalized guidance and remedies.",
      link: "/contact"
    },
    {
      icon: Sparkles,
      title: "Gemstone Suggestion",
      description: "Find out which lucky gemstone suits you best to enhance your fortune.",
      link: "/services"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      
      {/* 1. Hero Slider Section */}
      <HomeSlider />

      {/* 2. Services Grid Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 font-[Cinzel]">
            Divine Services for Your <span className="text-amber-400">Soul</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

      </section>

      {/* 3. Zodiac Signs Section */}
      <ZodiacSection />
<Testimonials />
    </div>
  );
};

export default Home;
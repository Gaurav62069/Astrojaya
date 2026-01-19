import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import HomeSlider from '../components/features/HomeSlider';
import ServiceCard from '../components/cards/ServiceCard';
import ZodiacSection from '../components/features/ZodiacSection'; 
import { 
  Sparkles, 
  Hand, 
  HeartHandshake, 
  ScrollText, 
  MessageCircle, 
  MoonStar,
  Star
} from 'lucide-react';
import Testimonials from '../components/features/Testimonials';

const Home = () => {
  
  // Services Data
  const services = [
    {
      icon: ScrollText,
      title: "Kundli Generation",
      description: "Get your detailed Janam Kundli with planetary positions and dosha analysis instantly.",
      link: "/kundli"
    },
    {
      icon: Hand,
      title: "Palmistry",
      description: "Scan your palm using our astrologers to reveal career, health, and fate lines.",
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
    <div className="min-h-screen ">
      
      {/* 1. Hero Slider Section */}
      <HomeSlider />

      {/* --- NEW SECTION: ASTROApna INTRO --- */}
      <section className="relative py-20 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="space-y-6">
            <span className="text-amber-400 font-medium tracking-widest uppercase text-sm flex items-center gap-2">
              <Star size={16} fill="currentColor" /> Welcome to AstroApna
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[Cinzel] leading-tight">
              Unlock the Wisdom of the <span className="text-amber-400">Cosmos</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At AstroApna, we bridge the gap between ancient Vedic science and modern technology. 
              Our mission is to provide you with accurate, personalized guidance to navigate life's 
              challenges with confidence.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Whether you are seeking answers about your career, love life, or health, our expert 
              astrology is here to light your path. Experience the power of 
              traditional Jyotish Shastra combined with precise calculations.
            </p>
            
            <div className="pt-4">
              <Link to="/about" className="px-8 py-3 bg-transparent border border-amber-500 text-amber-400 font-bold rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300">
                Know More About Us
              </Link>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-purple-600 rounded-2xl blur-lg opacity-30 transform rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=2070&auto=format&fit=crop" 
              alt="Vedic Astrology" 
              className="relative w-full h-auto rounded-2xl shadow-2xl border border-slate-800"
            />
          </div>
        </div>
      </section>

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
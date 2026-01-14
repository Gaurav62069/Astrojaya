import React from 'react';
import { Star, Award, Users, Heart, Phone, MessageCircle,ShieldCheck } from 'lucide-react';

const About = () => {
  
  // --- LIST OF ALL ASTROLOGERS (Introduction Style) ---
  const astrologers = [
    {
      id: 1,
      name: "Acharya Apna",
      title: "Vedic Astrology & Vastu Expert",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
      intro: "Acharya Apna is a renowned Vedic Astrologer with over 15 years of experience. He specializes in Kundli analysis, matchmaking, and Vastu Shastra. His remedies are simple yet effective, helping thousands of people find direction in their careers and personal lives.",
      exp: "15+ Years Exp",
      rating: "4.9"
    },
    {
      id: 2,
      name: "Pandit Rahul Shastri",
      title: "Nadi Shastra & Gemology Specialist",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
      intro: "Pandit Rahul Shastri brings the ancient wisdom of Nadi Shastra to the modern world. With a deep understanding of gemstones and their planetary effects, he has guided many business tycoons and celebrities towards success and stability.",
      exp: "12+ Years Exp",
      rating: "4.8"
    },
    {
      id: 3,
      name: "Dr. Neha Sharma",
      title: "Tarot Reader & Spiritual Healer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
      intro: "Dr. Neha is a gifted intuitive reader who combines Tarot with psychological insights. She helps people navigate complex relationship issues and emotional blocks. Her sessions are known to be therapeutic and deeply transformative.",
      exp: "8+ Years Exp",
      rating: "4.9"
    },
    {
      id: 4,
      name: "Swami Vasudev",
      title: "Palmistry & Face Reading Master",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
      intro: "Swami Vasudev has mastered the art of Samudrika Shastra (Face & Palm Reading). He can reveal your destiny, health, and wealth prospects just by analyzing your palm lines and facial features with high accuracy.",
      exp: "20+ Years Exp",
      rating: "5.0"
    },
    {
      id: 5,
      name: "Acharya Simran Kaur",
      title: "Numerology & Name Correction Expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      intro: "Acharya Simran believes that numbers rule the universe. She specializes in name correction and mobile numerology to align your vibrations with success. Her guidance is perfect for new business names and baby naming.",
      exp: "10+ Years Exp",
      rating: "4.7"
    },
    {
      id: 6,
      name: "Guruji Amit Verma",
      title: "Lal Kitab & Remedial Expert",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
      intro: "Guruji Amit is famous for his quick and easy remedies from the Lal Kitab. He focuses on practical solutions for financial debts, court cases, and marriage delays without suggesting expensive rituals.",
      exp: "18+ Years Exp",
      rating: "4.8"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 text-white px-4 md:px-8">
      
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-[Cinzel] mb-4">
            About <span className="text-amber-400">AstroApna</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Your trusted companion in decoding the language of the stars. We combine the 
            wisdom of ancient Vedic scriptures with modern analytical tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "100% Privacy", desc: "Your birth details and consultations are kept strictly confidential." },
            { icon: Users, title: "Expert Astrologers", desc: "Verified and experienced Vedic experts for accurate guidance." },
            { icon: Award, title: "Accurate Predictions", desc: "Precision-driven calculations for Kundli and Horoscope." }
          ].map((item, idx) => (
            <div key={idx} className="border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] p-8 rounded-2xl text-center ">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-400">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-[Cinzel]">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

        {/* --- HEADING CHANGED HERE --- */}
        <div className="mb-12 border-l-4 border-amber-500 pl-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[Cinzel]">
               Let's contact with our <span className="text-amber-400">Astrologers</span>
            </h2>
            <p className="text-gray-400 mt-2">Meet our team of expert guides ready to help you.</p>
        </div>

        {/* --- ASTROLOGERS LIST (Detailed Layout) --- */}
        <div className="space-y-16">
          {astrologers.map((astro, index) => (
            <div 
              key={astro.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center bg-slate-850/50 p-6 md:p-8 rounded-3xl border border-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]`}
            >
              
              {/* Image Side */}
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="relative aspect-[3/4] md:aspect-square rounded-2xl overflow-hidden border-2 border-amber-500/20 shadow-2xl group">
                  <img 
                    src={astro.image} 
                    alt={astro.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                    <div className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star size={16} fill="currentColor" /> {astro.rating} Rating
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Side (Introduction + Name) */}
              <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full text-sm font-bold border border-amber-500/20 mb-2">
                   {astro.title}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white font-[Cinzel]">
                  {astro.name}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {astro.intro}
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-4 text-gray-400 border-t border-white/10 mt-6">
                    <div className="flex items-center gap-2">
                        <Award className="text-amber-500" size={20} />
                        <span className="font-bold text-white">{astro.exp}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="text-amber-500" size={20} />
                        <span className="font-bold text-white">5k+ Clients</span>
                    </div>
                </div>

                {/* Contact Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                    <button className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-xl hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
                        <MessageCircle size={18} /> Chat Now
                    </button>
                    <button className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                        <Phone size={18} /> Call Now
                    </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-white/10 pt-12">
            {[
                { label: "Happy Users", value: "50k+" },
                { label: "Verified Experts", value: "100+" },
                { label: "Predictions", value: "1M+" },
                { label: "Years Active", value: "5+" }
            ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-slate-900/30 rounded-2xl border border-white/5">
                    <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{stat.label}</p>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default About;
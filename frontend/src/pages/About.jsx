import React from 'react';
import { Star, Award, Users, Heart, Phone, MessageCircle,ShieldCheck } from 'lucide-react';

const About = () => {
  
  // --- LIST OF ALL ASTROLOGERS (Introduction Style) ---
  const astrologers = [
    {
      id: 1,
      name: "Jaya Pandey",
      title: "Palm Reader, Vedic Astrologer & Vastu Expert",
      image: "https://res.cloudinary.com/ddnpzsybs/image/upload/v1768795033/IMG-20260118-WA0019_jkfljp.jpg",
      intro: "Jaya Ji is a renowned Vedic Astrologer with over 15 years of experience. she specializes in Palmistry, Kundli analysis, matchmaking, and Vastu Shastra. Her remedies are simple yet effective, helping thousands of people find direction in their life and career .",
      exp: "15+ Years Exp",
      rating: "4.9"
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
          <p className="text-gray-200 text-lg max-w-3xl mx-auto">
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
              <p className="text-gray-200">{item.desc}</p>
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
                        <MessageCircle size={18}/> Chat Now
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-white/10 pt-12 ">
            {[
                { label: "Happy Users", value: "50k+" },
                { label: "Verified Experts", value: "100+" },
                { label: "Predictions", value: "1M+" },
                { label: "Years Active", value: "5+" }
            ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-slate-900/30 rounded-2xl border border-white/5 backdrop-blur-md">
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
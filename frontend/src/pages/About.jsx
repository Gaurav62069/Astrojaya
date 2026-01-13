import React from 'react';
import { Star, ShieldCheck, Users, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      
      {/* --- SECTION 1: ABOUT PLATFORM --- */}
      <div className="max-w-7xl mx-auto mb-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-[Cinzel] mb-4">
            About <span className="text-amber-400">AstroJaya</span>
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

      {/* --- SECTION 2: ABOUT JAYA (THE PERSON) --- */}
      <div className="max-w-7xl mx-auto bg-slate-850/50 rounded-3xl overflow-hidden border border-slate-800 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          
          {/* Image Side */}
          <div className="relative h-96 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop" 
              alt="Acharya Jaya" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r"></div>
          </div>

          {/* Content Side */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-amber-400 mb-4">
              <Sparkles size={20} />
              <span className="font-bold tracking-widest uppercase text-sm">Lead Astrologer & Founder</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[Cinzel] mb-6">
              Acharya <span className="text-amber-400">Jaya</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                With over 15 years of devoted practice in Vedic Astrology, Acharya Jaya has helped 
                thousands of individuals find clarity and purpose. Her journey began in Varanasi, 
                where she studied ancient scriptures under renowned Gurus.
              </p>
              <p>
                Jaya specializes in <strong>Nadi Astrology, Gemology, and Vastu Shastra</strong>. 
                She believes that astrology is not just about predicting the future, but about 
                empowering you to create it.
              </p>
              <p>
                <em>"The stars guide us, but our karma defines us. My goal is to help you align your 
                actions with the cosmic flow for a harmonious life."</em>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800 flex gap-8">
              <div>
                <span className="block text-3xl font-bold text-white font-[Cinzel]">15+</span>
                <span className="text-sm text-gray-400">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-white font-[Cinzel]">10k+</span>
                <span className="text-sm text-gray-400">Happy Clients</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default About;
import React, { useState } from 'react';
import { 
  Sun, Moon, Heart, Briefcase, Activity, 
  Sparkles, Calendar, Droplets, Palette, ChevronRight 
} from 'lucide-react';

// 12 Signs Data
const signs = [
  { name: "Aries", icon: "♈", date: "Mar 21 - Apr 19" },
  { name: "Taurus", icon: "♉", date: "Apr 20 - May 20" },
  { name: "Gemini", icon: "♊", date: "May 21 - Jun 20" },
  { name: "Cancer", icon: "♋", date: "Jun 21 - Jul 22" },
  { name: "Leo", icon: "♌", date: "Jul 23 - Aug 22" },
  { name: "Virgo", icon: "♍", date: "Aug 23 - Sep 22" },
  { name: "Libra", icon: "♎", date: "Sep 23 - Oct 22" },
  { name: "Scorpio", icon: "♏", date: "Oct 23 - Nov 21" },
  { name: "Sagittarius", icon: "♐", date: "Nov 22 - Dec 21" },
  { name: "Capricorn", icon: "♑", date: "Dec 22 - Jan 19" },
  { name: "Aquarius", icon: "♒", date: "Jan 20 - Feb 18" },
  { name: "Pisces", icon: "♓", date: "Feb 19 - Mar 20" },
];

const Horoscope = () => {
  const [activeSign, setActiveSign] = useState("Aries");
  const [viewType, setViewType] = useState("daily"); // 'daily' or 'weekly'

  // Dummy Prediction Data
  const prediction = {
    daily: {
      general: "Today brings a wave of clarity. The confusion that has been clouding your judgment will lift, allowing you to see things as they truly are. Trust your intuition.",
      love: "Venus aligns with your sign, bringing romantic opportunities. If single, you might meet someone intriguing.",
      career: "A new project requires your attention. Focus on details and avoid rushing into decisions.",
      health: "Energy levels are high today. Great day for outdoor activities."
    },
    weekly: {
      general: "This week focuses on personal growth and relationships. You may find yourself re-evaluating long-term goals. Patience will be your best ally.",
      love: "Mid-week brings a surprise in your love life. Existing relationships will deepen through honest conversation.",
      career: "Expect some financial gains towards the weekend. A good time to plan investments.",
      health: "Watch out for minor stress-related headaches. Yoga and meditation are recommended."
    }
  };

  const currentData = viewType === 'daily' ? prediction.daily : prediction.weekly;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Cosmic Guidance</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Cinzel]">
            Horoscope & <span className="text-amber-400">Predictions</span>
          </h1>
          
          {/* Toggle Daily/Weekly */}
          <div className="flex justify-center mt-8">
            <div className="bg-slate-900 p-1 rounded-full border border-slate-800 flex">
              <button 
                onClick={() => setViewType('daily')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${viewType === 'daily' ? 'bg-amber-500 text-slate-900' : 'text-gray-400 hover:text-white'}`}
              >
                Daily
              </button>
              <button 
                onClick={() => setViewType('weekly')}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${viewType === 'weekly' ? 'bg-amber-500 text-slate-900' : 'text-gray-400 hover:text-white'}`}
              >
                Weekly
              </button>
            </div>
          </div>
        </div>

        {/* --- SIGN SELECTOR (Scrollable) --- */}
        <div className="flex overflow-x-auto p-5 gap-5 sm:justify-left mb-10 scrollbar-hide bg-white/5 backdrop-blur-md rounded-2xl">
          {signs.map((sign) => (
            <button
              key={sign.name}
              onClick={() => setActiveSign(sign.name)}
              className={`flex flex-col items-center min-w-[90px] p-4 rounded-xl border transition-all duration-300 ${
                activeSign === sign.name
                  ? "bg-amber-500 border-amber-500 text-slate-900 scale-110 shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                  : "bg-slate-900/50 border-slate-700 text-gray-400 hover:border-amber-500/50 hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"
              }`}
            >
              <span className="text-3xl mb-2">{sign.icon}</span>
              <span className="text-xs font-bold uppercase">{sign.name}</span>
            </button>
          ))}
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Main Prediction Card */}
          <div className="lg:col-span-2 space-y-8">
            <div className=" rounded-2xl p-8 relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white font-[Cinzel] flex items-center gap-3">
                        {activeSign} <span className="text-amber-400 text-4xl">{signs.find(s => s.name === activeSign).icon}</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">{signs.find(s => s.name === activeSign).date}</p>
                </div>
                <div className="flex items-center gap-2 text-amber-400 bg-amber-400/10 px-4 py-2 rounded-full border border-amber-400/20">
                    <Calendar size={16} />
                    <span className="text-sm font-bold capitalize">{viewType} Forecast</span>
                </div>
              </div>

              <p className="text-gray-200 text-lg leading-relaxed mb-8 border-l-4 border-amber-500 pl-4">
                "{currentData.general}"
              </p>

              {/* Detailed Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-pink-400 font-bold">
                        <Heart size={18} /> Love
                    </div>
                    <p className="text-sm text-gray-400">{currentData.love}</p>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold">
                        <Briefcase size={18} /> Career
                    </div>
                    <p className="text-sm text-gray-400">{currentData.career}</p>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-green-400 font-bold">
                        <Activity size={18} /> Health
                    </div>
                    <p className="text-sm text-gray-400">{currentData.health}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Stats (Visible only in Daily for now, or adaptable) */}
          <div className="space-y-6">
            <div className=" rounded-2xl p-6 border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]">
                <h3 className="text-white font-bold mb-6 font-[Cinzel] flex items-center gap-2">
                    <Sparkles className="text-amber-400" size={20} /> Lucky Stats
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 rounded-lg border border-slate-800 bg-slate-950/50">
                        <span className="text-gray-400">Lucky Number</span>
                        <span className="font-bold text-white text-lg">7</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-950/50 rounded-lg border border-slate-800">
                        <span className="text-gray-400">Lucky Color</span>
                        <span className="font-bold text-white">Red</span>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Horoscope;
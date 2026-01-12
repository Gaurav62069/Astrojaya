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

  // Dummy Prediction Data (Real app me ye API se aayega)
  const prediction = {
    general: "Today brings a wave of clarity. The confusion that has been clouding your judgment will lift, allowing you to see things as they truly are. Trust your intuition.",
    love: "Venus aligns with your sign, bringing romantic opportunities. If single, you might meet someone intriguing. Couples should plan a date night.",
    career: "A new project requires your attention. Focus on details and avoid rushing into decisions. Your leadership skills will be tested.",
    health: "Energy levels are high today. It's a great day for outdoor activities or starting a new fitness routine. Stay hydrated.",
    luckyNumber: "7",
    luckyColor: "Royal Blue",
    mood: "Optimistic"
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Daily Guidance</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Cinzel]">
            Horoscope & <span className="text-amber-400">Predictions</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Select your zodiac sign to reveal what the stars have planned for you today regarding love, career, and health.
          </p>
        </div>

        {/* --- SIGN SELECTOR (Scrollable) --- */}
        <div className="flex overflow-x-auto pb-6 gap-4 md:justify-center mb-10 scrollbar-hide">
          {signs.map((sign) => (
            <button
              key={sign.name}
              onClick={() => setActiveSign(sign.name)}
              className={`flex flex-col items-center min-w-[90px] p-4 rounded-xl border transition-all duration-300 ${
                activeSign === sign.name
                  ? "bg-amber-500 border-amber-500 text-slate-900 scale-110 shadow-[0_0_20px_rgba(251,191,36,0.4)]"
                  : "bg-slate-900 border-slate-800 text-gray-400 hover:border-amber-500/50 hover:text-white"
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
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-3xl font-bold text-white font-[Cinzel] flex items-center gap-3">
                        {activeSign} <span className="text-amber-400 text-4xl">{signs.find(s => s.name === activeSign).icon}</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-1">{signs.find(s => s.name === activeSign).date}</p>
                </div>
                <div className="flex items-center gap-2 text-amber-400 bg-amber-400/10 px-4 py-2 rounded-full border border-amber-400/20">
                    <Calendar size={16} />
                    <span className="text-sm font-bold">Today</span>
                </div>
              </div>

              <p className="text-gray-200 text-lg leading-relaxed mb-8 border-l-4 border-amber-500 pl-4">
                "{prediction.general}"
              </p>

              {/* Detailed Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-pink-400 font-bold">
                        <Heart size={18} /> Love
                    </div>
                    <p className="text-sm text-gray-400">{prediction.love}</p>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-blue-400 font-bold">
                        <Briefcase size={18} /> Career
                    </div>
                    <p className="text-sm text-gray-400">{prediction.career}</p>
                </div>
                <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 mb-2 text-green-400 font-bold">
                        <Activity size={18} /> Health
                    </div>
                    <p className="text-sm text-gray-400">{prediction.health}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Quick Stats & Planets */}
          <div className="space-y-6">
            
            {/* Lucky Stats */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-6 font-[Cinzel] flex items-center gap-2">
                    <Sparkles className="text-amber-400" size={20} /> Cosmic Stats
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
                        <div className="flex items-center gap-3 text-gray-300">
                            <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400"><Sun size={18} /></div>
                            <span>Lucky Number</span>
                        </div>
                        <span className="font-bold text-white text-lg">{prediction.luckyNumber}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
                        <div className="flex items-center gap-3 text-gray-300">
                            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Palette size={18} /></div>
                            <span>Lucky Color</span>
                        </div>
                        <span className="font-bold text-white">{prediction.luckyColor}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-950 rounded-lg border border-slate-800">
                        <div className="flex items-center gap-3 text-gray-300">
                            <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><Droplets size={18} /></div>
                            <span>Current Mood</span>
                        </div>
                        <span className="font-bold text-white">{prediction.mood}</span>
                    </div>
                </div>
            </div>

            {/* Planetary Positions (Static for UI) */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="font-bold mb-2 font-[Cinzel]">Planetary Transit</h3>
                    <p className="text-sm text-indigo-200 mb-4">Moon is currently transiting through Taurus.</p>
                    <button className="w-full py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-sm font-bold transition-colors flex items-center justify-center gap-2">
                        View Full Chart <ChevronRight size={16} />
                    </button>
                </div>
                <Moon className="absolute -bottom-4 -right-4 text-indigo-500/20 w-32 h-32" />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Horoscope;

import React from 'react';
import { Link } from 'react-router-dom';

const zodiacSigns = [
  { name: "Aries", symbol: "♈", date: "Mar 21 - Apr 19" },
  { name: "Taurus", symbol: "♉", date: "Apr 20 - May 20" },
  { name: "Gemini", symbol: "♊", date: "May 21 - Jun 20" },
  { name: "Cancer", symbol: "♋", date: "Jun 21 - Jul 22" },
  { name: "Leo", symbol: "♌", date: "Jul 23 - Aug 22" },
  { name: "Virgo", symbol: "♍", date: "Aug 23 - Sep 22" },
  { name: "Libra", symbol: "♎", date: "Sep 23 - Oct 22" },
  { name: "Scorpio", symbol: "♏", date: "Oct 23 - Nov 21" },
  { name: "Sagittarius", symbol: "♐", date: "Nov 22 - Dec 21" },
  { name: "Capricorn", symbol: "♑", date: "Dec 22 - Jan 19" },
  { name: "Aquarius", symbol: "♒", date: "Jan 20 - Feb 18" },
  { name: "Pisces", symbol: "♓", date: "Feb 19 - Mar 20" },
];

const ZodiacSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header */}
        <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Daily Predictions</span>
        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-12 font-[Cinzel]">
          Choose Your <span className="text-amber-400">Zodiac Sign</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {zodiacSigns.map((sign) => (
            <Link 
              key={sign.name} 
              to={`/horoscope/${sign.name.toLowerCase()}`}
              className="group relative bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-amber-500 hover:bg-slate-700/50 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center"
            >
              {/* Symbol */}
              <div className="text-5xl mb-3 text-gray-500 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                {sign.symbol}
              </div>
              
              {/* Name */}
              <h3 className="text-lg font-bold text-white font-[Cinzel]">{sign.name}</h3>
              
              {/* Date */}
              <p className="text-xs text-gray-400 mt-1">{sign.date}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ZodiacSection;
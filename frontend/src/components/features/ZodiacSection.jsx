import React from 'react';
import { Link } from 'react-router-dom';

const zodiacSigns = [
  { name: "Aries", nameHi: "मेष", symbol: "♈", date: "Mar 21 - Apr 19" },
  { name: "Taurus", nameHi: "वृषभ", symbol: "♉", date: "Apr 20 - May 20" },
  { name: "Gemini", nameHi: "मिथुन", symbol: "♊", date: "May 21 - Jun 20" },
  { name: "Cancer", nameHi: "कर्क", symbol: "♋", date: "Jun 21 - Jul 22" },
  { name: "Leo", nameHi: "सिंह", symbol: "♌", date: "Jul 23 - Aug 22" },
  { name: "Virgo", nameHi: "कन्या", symbol: "♍", date: "Aug 23 - Sep 22" },
  { name: "Libra", nameHi: "तुला", symbol: "♎", date: "Sep 23 - Oct 22" },
  { name: "Scorpio", nameHi: "वृश्चिक", symbol: "♏", date: "Oct 23 - Nov 21" },
  { name: "Sagittarius", nameHi: "धनु", symbol: "♐", date: "Nov 22 - Dec 21" },
  { name: "Capricorn", nameHi: "मकर", symbol: "♑", date: "Dec 22 - Jan 19" },
  { name: "Aquarius", nameHi: "कुंभ", symbol: "♒", date: "Jan 20 - Feb 18" },
  { name: "Pisces", nameHi: "मीन", symbol: "♓", date: "Feb 19 - Mar 20" },
];

const ZodiacSection = () => {
  return (
    <section className="py-20 px-4 border-t border-slate-800">
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
              to={`/horoscope?sign=${sign.name}`} // Yahan URL fix kiya taki click karne par sahi sign khule
              className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] flex flex-col items-center"
            >
              {/* Symbol */}
              <div className="text-5xl mb-3 text-gray-500 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-300">
                {sign.symbol}
              </div>
              
              {/* Name (English + Hindi) */}
              <h3 className="text-lg font-bold text-white font-[Cinzel] flex flex-col items-center">
                {sign.name}
                {/* Hindi Name in Golden Color */}
                <span className="text-sm text-amber-500 font-sans mt-1">({sign.nameHi})</span>
              </h3>
              
              {/* Date */}
              <p className="text-xs text-gray-200 mt-2">{sign.date}</p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ZodiacSection;
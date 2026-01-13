import React from 'react';
import { 
  Heart, Briefcase, Activity, 
  ScrollText, Baby, Hash, CalendarCheck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const servicesList = [
  {
    icon: ScrollText,
    title: "Kundali Milan",
    desc: "Comprehensive horoscope matching for marriage. Analysis of Gunas, Manglik Dosh, and compatibility.",
    color: "text-amber-400",
    bg: "bg-amber-500/10"
  },
  {
    icon: Briefcase,
    title: "Career Astrology",
    desc: "Guidance on job changes, business ventures, promotions, and choosing the right career path.",
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    icon: Heart,
    title: "Love & Marriage",
    desc: "Solutions for relationship issues, delay in marriage, and love life predictions based on Venus.",
    color: "text-pink-400",
    bg: "bg-pink-500/10"
  },
  {
    icon: Activity,
    title: "Health & Dosh Nivaran",
    desc: "Identify health risks and Vedic remedies for Kaal Sarp Dosh, Shani Sade Sati, and others.",
    color: "text-green-400",
    bg: "bg-green-500/10"
  },
  {
    icon: CalendarCheck,
    title: "Shubh Muhurat",
    desc: "Find the most auspicious dates and times for weddings, housewarming, or starting new business.",
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  {
    icon: Baby,
    title: "Naamkaran (Naming)",
    desc: "Suggesting lucky names for newborns based on Nakshatra and planetary positions for a bright future.",
    color: "text-orange-400",
    bg: "bg-orange-500/10"
  },
  {
    icon: Hash,
    title: "Numerology",
    desc: "Unlock the power of numbers. Name correction and lucky number analysis for success.",
    color: "text-teal-400",
    bg: "bg-teal-500/10"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen  pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">What We Offer</span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-[Cinzel] mt-2">
            Our <span className="text-amber-400">Services</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore our wide range of Vedic services designed to bring harmony, success, and peace to your life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div key={index} className="group border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] p-8 rounded-2xl">
              <div className={`w-14 h-14 ${service.bg} ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-[Cinzel]">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <Link to="/book" className="text-amber-400 text-sm font-bold uppercase tracking-wider hover:text-white transition-colors">
                Book Consultation →
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 md:p-12 bg-gradient-to-r from-amber-600/50 to-amber-500/50 rounded-3xl text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-[Cinzel] mb-4">Not sure what you need?</h2>
                <p className="text-slate-900/80 mb-8 text-lg font-medium">Talk to our experts and get a personalized recommendation.</p>
                <Link to="/contact" className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors inline-block">
                    Contact Us Today
                </Link>
            </div>
            {/* Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        </div>

      </div>
    </div>
  );
};

export default Services;
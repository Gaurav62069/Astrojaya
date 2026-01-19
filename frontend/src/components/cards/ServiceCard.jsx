import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="group relative p-6 rounded-xl border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(251,191,36,0.15)] overflow-hidden">
      
      {/* Glossy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Icon */}
      <div className="w-14 h-14 mb-4 rounded-xl bg-slate-900/50 border border-slate-700 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500 group-hover:text-amber-400 transition-all duration-300 shadow-lg">
        <Icon className="w-7 h-7 text-gray-300 group-hover:text-amber-400 transition-colors" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2 font-[Cinzel] tracking-wide group-hover:text-amber-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-6 leading-relaxed border-b border-white/5 pb-4 group-hover:border-amber-500/30 transition-colors">
        {description}
      </p>

      {/* Button */}
      <Link 
        to={link} 
        className="inline-flex items-center text-amber-500 font-bold text-xs uppercase tracking-widest hover:text-amber-400 transition-all group-hover:translate-x-1"
      >
        Explore <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
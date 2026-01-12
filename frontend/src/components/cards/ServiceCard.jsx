import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="group relative p-6 bg-slate-900 border border-slate-800 rounded-xl hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.1)] hover:-translate-y-1">
      
      {/* Icon Circle */}
      <div className="w-14 h-14 mb-4 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
        <Icon className="w-7 h-7 text-amber-400 group-hover:text-slate-900" />
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-bold text-white mb-2 font-[Cinzel] group-hover:text-amber-400 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      {/* Button/Link */}
      <Link 
        to={link} 
        className="inline-flex items-center text-amber-400 font-semibold text-sm hover:tracking-wide transition-all"
      >
        Explore Service <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
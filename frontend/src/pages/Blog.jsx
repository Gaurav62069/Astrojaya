import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowLeft, Star } from 'lucide-react';

const Blog = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 text-center relative overflow-hidden shadow-2xl">
        
        {/* Background Glow */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl"></div>

        {/* Icon */}
        <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 relative group">
           <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md group-hover:blur-lg transition-all duration-500"></div>
           <BookOpen className="w-10 h-10 text-amber-400 relative z-10" />
        </div>

        {/* Content */}
        <h1 className="text-3xl md:text-5xl font-bold font-[Cinzel] text-white mb-4">
          Astrology <span className="text-amber-400">Blog</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-2 font-medium">
          Wisdom of the Stars Coming Soon!
        </p>
        
        <p className="text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto">
          Our experts are writing insightful articles on Vedic Astrology, Planetary Transits, and Spiritual Growth. Stay tuned for cosmic updates.
        </p>

        {/* Button */}
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 font-bold rounded-xl hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all">
          <ArrowLeft size={18} /> Back to Home
        </Link>

      </div>
    </div>
  );
};

export default Blog;
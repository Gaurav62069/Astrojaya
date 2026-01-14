import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Aditi Sharma",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "AstroApna ki Kundli reading ekdum accurate thi! Meri business problem ka jo solution mila, usne meri life change kar di. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Maine AI Palmistry try kiya aur main hairan tha ki result itna sahi kaise ho sakta hai. Ye technology aur astrology ka best combination hai.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "Roz subah daily horoscope padhti hu. Inki predictions bahut helpful hoti hain din plan karne mein. Great website!",
    rating: 4
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4  relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 font-[Cinzel]">
            What Our <span className="text-amber-400">Devotees</span> Say
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg relative group">
              
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 text-slate-700 group-hover:text-amber-500/20 w-10 h-10 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < review.rating ? "fill-amber-400 text-amber-400" : "fill-slate-600 text-slate-600"}`} 
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{review.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full border-2 border-amber-500 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold font-[Cinzel]">{review.name}</h4>
                  <p className="text-xs text-amber-400 uppercase tracking-wide">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
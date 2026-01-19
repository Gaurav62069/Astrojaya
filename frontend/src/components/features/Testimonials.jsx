import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Amisha Kumari",
    role: "Student",
    image: "https://res.cloudinary.com/ddnpzsybs/image/upload/v1768795033/IMG-20260118-WA0021_pvzw0b.jpg",
    content: "Hello, I am Amisha Kumari I really had a majestic experience with AstroApna ,as without sharing my details she explained everything about my nature ,my situation and everything by hand reading From my point of view as a palmist she is good choice ,and i will definitely recommend her to others She gave me an advice which I will never forget , Because of her I think twice before believing anyone ,and don't get hurt. She gave me strength to face the reality And I am thankful to her",
    rating: 5
  },
  {
    id: 2,
    name: "Deepak Verma",
    role: "Software Engineer",
    image: "https://res.cloudinary.com/ddnpzsybs/image/upload/v1768795033/IMG-20260118-WA0020_wxcrwc.jpg",
    content: " I had a wonderful experience with the astrologer. She patiently listened to all my questions and gave clear, accurate answers to each one. Her palm reading was very detailed and matched many real-life situations, which truly impressed me. She explained everything in a calm and positive way, making me feel comfortable and confident. I am very satisfied with the guidance and would definitely recommend her to others seeking genuine astrological advice.",
    rating: 5
  },
  {
    id: 3,
    name: "Mohit Kumar",
    role: "Engineer",
    image: "https://res.cloudinary.com/ddnpzsybs/image/upload/v1768795033/IMG-20260118-WA0022_e1e7pc.jpg",
    content: " Consulting Jaya ji was one of the best decisions I made. She has deep knowledge of palmistry and understood my situation perfectly without me telling her anything. The solution she gave me for my problems was very practical and effective. She gave me the confidence to handle difficult times. I highly recommend her to anyone seeking genuine guidance.",
    rating: 4
  },
  {
    id: 3,
    name: "Soumya gupta ",
    role: "The Developer",
    image: "https://res.cloudinary.com/ddnpzsybs/image/upload/v1768798565/IMG_20260119_102549_qrx9hn.jpg",
    content: " My session with Jaya ji was truly insightful. I was surprised by how accurately she read my past and present just by looking at my palm, without asking any questions. Her guidance gave me a new perspective on my life and relationships. She is a very gifted palmist. I would definitely urge others to visit her for clarity and mental peace.",
    rating: 4
  },
  {
    id: 3,
    name: "Sudhakar Kumar",
    role: "Lecturer",
    image: "https://res.cloudinary.com/ddnpzsybs/image/upload/v1768803615/IMG_20260119_114814_wzagik.jpg",
    content: " I really had a majestic experience with Jaya ji. Without sharing my details, she explained everything about my nature, my situation, and everything by hand reading. From my point of view, as a palmist she is a good choice, and I will definitely recommend her to others. She gave me an advice which I will never forget. Because of her, I think twice before believing anyone and don't get hurt. She gave me strength to face the reality. I am thankful to her",
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
            <div key={review.id} className="bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1 shadow-lg relative group">
              
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
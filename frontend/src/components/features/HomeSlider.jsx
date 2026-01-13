import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MessageCircle, Phone } from 'lucide-react';

// Swiper ke styles import karna zaruri hai
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- SLIDE DATA (5 Slides: 3 Services + 2 Ads) ---
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop", 
    title: "Unlock Your Destiny",
    subtitle: "Vedic Astrology & Modern AI combined to guide your path.",
    btnText: "Get Free Horoscope",
    link: "/horoscope",
    isAd: false
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507915133614-5c9c37574343?q=80&w=2069&auto=format&fit=crop", 
    title: "AI Palm Reading",
    subtitle: "Scan your hand from 4 angles and reveal hidden secrets.",
    btnText: "Try AI Scan Now",
    link: "/palmistry",
    isAd: false
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1606293926075-69a00febf280?q=80&w=2070", 
    title: "Premium Pooja Services",
    subtitle: "Expert Pandits for Graha Shanti & Dosha Nivaran.",
    btnText: "Book Now",
    link: "/services",
    isAd: true // Ad Slide
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=1974&auto=format&fit=crop", 
    title: "Kundli Milan",
    subtitle: "Find the perfect match with detailed Guna Milan & analysis.",
    btnText: "Check Compatibility",
    link: "/services",
    isAd: false
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1615526879891-9e85559d2979?q=80&w=2070",
    title: "Certified Gemstones",
    subtitle: "Wear your lucky stone for success & prosperity.",
    btnText: "Visit Shop",
    link: "/shop",
    isAd: true // Ad Slide
  }
];

const HomeSlider = () => {
  // --- TYPEWRITER EFFECT LOGIC ---
  const [text, setText] = useState('');
  const fullText = "Trusted Astrology Guidance...";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        speed={1500}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full bg-black">
            {/* Background Image */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90"></div>

            {/* Content Box */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto pt-16">
              
              {/* Ad Label (Agar Ad hai toh) */}
              {slide.isAd && (
                <span className="mb-4 px-4 py-1 bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-bold rounded-full uppercase tracking-widest flex items-center gap-2 animate-fade-in">
                  <Star size={12} fill="currentColor" /> Sponsored
                </span>
              )}

              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-[Cinzel] tracking-wide leading-tight">
                {slide.title}
              </h1>
              
              {/* Subtitle with Typewriter Effect (Sirf pehli line ya static) */}
              <div className="h-8 mb-2 hidden md:block">
                <p className="text-amber-400 font-mono text-sm md:text-lg tracking-widest uppercase">
                  {text}<span className="animate-pulse">|</span>
                </p>
              </div>

              {/* Slide Subtitle */}
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light drop-shadow-md tracking-wide">
                {slide.subtitle}
              </p>
              
              {/* Buttons Row */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                
                {/* Primary Button */}
                <Link 
                  to={slide.link}
                  className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full text-lg shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_35px_rgba(251,191,36,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
                >
                  {slide.btnText}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* Pulse Call/WhatsApp Button */}
                <button 
                  onClick={() => window.open('https://wa.me/919876543210', '_blank')}
                  className="px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-amber-500 text-amber-400 font-bold rounded-full text-lg hover:bg-amber-500 hover:text-black transition-all duration-300 animate-pulse flex items-center gap-2"
                >
                  <MessageCircle size={20} /> Chat Now
                </button>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
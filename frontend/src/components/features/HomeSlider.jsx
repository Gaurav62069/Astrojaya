import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Swiper ke styles import karna zaruri hai
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Slide Data
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop", 
    title: "Unlock Your Destiny",
    subtitle: "Vedic Astrology & Modern AI combined to guide your path.",
    btnText: "Get Free Horoscope",
    link: "/horoscope"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507915133614-5c9c37574343?q=80&w=2069&auto=format&fit=crop", 
    title: "AI Palm Reading",
    subtitle: "Scan your hand from 4 angles and reveal hidden secrets.",
    btnText: "Try AI Scan Now",
    link: "/palmistry"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=1974&auto=format&fit=crop", 
    title: "Kundli Milan",
    subtitle: "Find the perfect match with detailed Guna Milan & analysis.",
    btnText: "Check Compatibility",
    link: "/services"
  }
];

const HomeSlider = () => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }} // Fixes text overlap issue
        speed={1500} // Smooth slow transition
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full bg-black">
            {/* Background Image with optimized opacity */}
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            
            {/* Gradient Overlay: Top dark for navbar, bottom dark for blend */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90"></div>

            {/* Content Box */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-5xl mx-auto pt-16">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-[Cinzel] tracking-wide leading-tight">
                {slide.title}
              </h1>
              
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light drop-shadow-md tracking-wide">
                {slide.subtitle}
              </p>
              
              <Link 
                to={slide.link}
                className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold rounded-full text-lg shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_35px_rgba(251,191,36,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
              >
                {slide.btnText}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
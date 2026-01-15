import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom'; // <--- useNavigate added
import { ArrowRight, Star, MessageCircle } from 'lucide-react';
import { useAlert } from '../../context/AlertContext';


// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- SLIDE DATA ---
const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop", 
    title: "Unlock Your Destiny",
    subtitle: "Vedic Astrology & Modern AI combined to guide your path.",
    btnText: "Get Free Horoscope",
    link: "/horoscope",
    isAd: true
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/ddnpzsybs/image/upload/v1768466745/palm_y0fftu.jpg", 
    title: "Palm Reading",
    subtitle: "Scan your hand from 4 angles and reveal hidden secrets.",
    btnText: "Try AI Scan Now",
    link: "/palmistry",
    isAd: true
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/ddnpzsybs/image/upload/v1768466746/puja_hla3lq.jpg", 
    title: "Premium Pooja Services",
    subtitle: "Expert Pandits for Graha Shanti & Dosha Nivaran.",
    btnText: "Book Now",
    link: "/services",
    isAd: true 
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/ddnpzsybs/image/upload/v1768466745/kundlimilan_i7dw7s.jpg", 
    title: "Kundli Milan",
    subtitle: "Find the perfect match with detailed Guna Milan & analysis.",
    btnText: "Check Compatibility",
    link: "/services",
    isAd: true
  },
  {
    id: 5,
    image: "https://res.cloudinary.com/ddnpzsybs/image/upload/v1768466745/gemstone_pycvp2.jpg",
    title: "Certified Gemstones",
    subtitle: "Wear your lucky stone for success & prosperity.",
    btnText: "Visit Shop",
    link: "/shop",
    isAd: true 
  }
];

const HomeSlider = () => {
  const navigate = useNavigate(); // <--- Hook for redirection
const { showAlert } = useAlert();
  // --- SECURITY CHECK FUNCTION ---
  const handleChatClick = () => {
    const user = localStorage.getItem("user"); // Check local storage
    
    if (!user) {
      // Agar User Login Nahi Hai -> Alert & Redirect
      showAlert(
        "Login Required 🔒",                     // Title
        "To chat with our premium Astrologers, you need to login first.", // Message
        "warning",                               // Type (warning/error/success)
        () => navigate("/login")                 // Action after clicking OK
      );
      navigate("/login");
    } else {
      // Agar User Login Hai -> Open WhatsApp
      window.open('https://wa.me/919541371359', '_blank');
    }
  };
  // -------------------------------

  // --- TYPEWRITER EFFECT LOGIC ---
  const [text, setText] = useState('');
  const fullText = "Trusted Astrology Guidance...";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100); 
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] bg-transparent">
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
          <SwiperSlide key={slide.id} className="relative w-full h-full bg-transparent">
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
              
              {/* Ad Label */}
              {slide.isAd && (
                <span className="mb-4 px-4 py-1 bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-bold rounded-full uppercase tracking-widest flex items-center gap-2 animate-fade-in">
                  <Star size={12} fill="currentColor" /> Sponsored
                </span>
              )}

              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] font-[Cinzel] tracking-wide leading-tight">
                {slide.title}
              </h1>
              
              {/* Typewriter Subtitle */}
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

                {/* SECURE Chat Button (Modified) */}
                <button 
                  onClick={handleChatClick} // <--- Ab ye function call hoga
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
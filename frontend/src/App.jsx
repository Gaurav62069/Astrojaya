import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import { AlertTriangle,Sparkles  } from 'lucide-react';
import { AlertProvider } from './context/AlertContext';
import logo from '/logo.png'
// --- PAGES IMPORT ---
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Horoscope from './pages/Horoscope';
import Palmistry from './pages/Palmistry';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import About from './pages/About';
import Services from './pages/Services';
import Kundli from './pages/Kundli';
import AdminPanel from './pages/AdminPanel';
import Blog from './pages/Blog';  
import Tarot from './pages/Tarot';
// --- GLOBAL SPINNER (Initial Load) ---
const GlobalSpinner = () => (
  <div className="fixed inset-0 bg-slate-800/60 z-50 flex flex-col items-center justify-center overflow-hidden">
    
    {/* Background Mystical Effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/10 blur-3xl rounded-full animate-pulse"></div>

    {/* Logo Container */}
    <div className="relative flex flex-col items-center z-10 space-y-2">
      {/* Animated Icon */}
      <div className="relative">
         {/* Glow behind icon */}
         <div className="absolute inset-0 bg-amber-500/30 blur-xl rounded-full animate-ping-slow"></div>
         {/* Slow Spinning Sparkle */}
         <img src={logo} alt='loading' className="w-28 h-24  animate-[spin_4s_linear_infinite] relative z-10" />
      </div>
      
      {/* Animated Text */}
      <div className="text-center space-y-2 animate-fade-in-up">
        <h1 className="text-5xl font-bold font-[Cinzel] text-white tracking-wider">
          Astro<span className="text-amber-400">Apna</span>
        </h1>
        <p className="text-amber-200/70 text-sm uppercase tracking-[0.3em] font-medium relative pl-2">
          <span className="animate-pulse">Loading Destiny...</span>
        </p>
      </div>
    </div>
  </div>
);

// --- MAIN APP LOGIC (Inside Router) ---
const AppContent = () => {
  const [progress, setProgress] = useState(0);
  const [isAppLoading, setIsAppLoading] = useState(true);
  const location = useLocation();

  // Pages where Navbar/Footer should NOT appear
  const isNoLayoutPage = ['/login', '/signup', '/admin'].includes(location.pathname);

  // Fake Initial Load Animation
  useEffect(() => {
    setTimeout(() => {
      setIsAppLoading(false);
    }, 1500);
  }, []);

  // Route Change Handler (Trigger Loading Bar)
  useEffect(() => {
    setProgress(30);
    setTimeout(() => setProgress(100), 500);
  }, [location]);

  // --- BANNER LOGIC ---
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;
  const isPremiumExpired = user && user.subscriptionStatus === "expired";

  // Show Global Spinner initially
  if (isAppLoading) return <GlobalSpinner />;

  return (
    <>
      <ScrollToTop />
      
      {/* --- TOP LOADING BAR --- */}
      <LoadingBar
        color='#f59e0b' // Amber-500
        height={3}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        // Dynamic Position: Navbar ke niche (80px) ya Top (0px)
        style={{ top: isNoLayoutPage ? '0px' : '80px' }} 
        className="z-[100]" // Ensure it's above everything else
      />
<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        
        {/* 1. Base Dark Background Color */}
        <div className="absolute inset-0 bg-[#0f172a]"></div>

        {/* 2. Hand Image (Base Layer) */}
        {/* 'w-full h-full object-cover' ensures it covers the whole screen */}
        <div className="absolute inset-0 flex items-end justify-center">
             <img 
               src="https://res.cloudinary.com/ddnpzsybs/image/upload/v1768736469/IMG_20260118_170740_xtbyel.jpg" 
               alt="Mystic Hand" 
               className="w-full h-full object-cover object-bottom opacity-80" 
             />
        </div>

        {/* 3. Spinning Chakra (Top Layer) */}
        {/* Placed AFTER hand div so it appears ON TOP */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
           <img 
             src="https://res.cloudinary.com/ddnpzsybs/image/upload/v1768466741/chakra_uvl240.png" 
             alt="Mystic Chakra" 
             // mix-blend-plus-lighter adds a glowing effect over the hand
             className="w-full h-full object-cover object-bottom opacity-50 animate-[spin_60s_linear_infinite] mix-blend-plus-lighter" 
           />
        </div>

      </div>
      <div className="min-h-screen bg-slate-800/40 text-white font-[Inter]">
        
        {/* Navbar */}
        {!isNoLayoutPage && <Navbar />}

        {/* Premium Expired Banner */}
        {!isNoLayoutPage && isPremiumExpired && (
          <div className="fixed top-20 left-0 w-full z-40 bg-red-600/95 backdrop-blur-md text-white px-4 py-3 flex flex-wrap items-center justify-center gap-3 shadow-lg animate-fade-in-down border-b border-red-500">
            <div className="flex items-center gap-2">
              <AlertTriangle size={20} className="text-white fill-red-600" />
              <span className="text-sm md:text-base font-bold text-center">
                Your Premium Subscription has ended! Renew now.
              </span>
            </div>
            <button className="bg-white text-red-600 px-4 py-1 rounded-full text-xs font-extrabold hover:bg-gray-100 transition-colors shadow-md uppercase tracking-wider">
              Renew Now
            </button>
          </div>
        )}

        {/* Content Wrapper */}
        <div className={`${!isNoLayoutPage && isPremiumExpired ? 'mt-14' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/horoscope" element={<Horoscope />} />
            <Route path="/palmistry" element={<Palmistry />} />
            <Route path="/kundli" element={<Kundli />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Booking />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tarot" element={<Tarot />} />
          </Routes>
        </div>

        {/* Footer */}
        {!isNoLayoutPage && <Footer />}
      </div>
    </>
  );
};

// --- ROOT APP COMPONENT ---
function App() {
  return (
    <AlertProvider>
    <Router>
      <AppContent />
    </Router>
    </AlertProvider>
  );
}

export default App;
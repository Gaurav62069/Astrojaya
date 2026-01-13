import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User, Sparkles, CalendarCheck, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null); // User state manage karne ke liye
  
  const location = useLocation();
  const navigate = useNavigate();

  // Check Active Link
  const isActive = (path) => location.pathname === path;

  // --- AUTH CHECK EFFECT ---
  // Jaise hi page change hoga, ye check karega ki user login hai ya nahi
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, [location]);

  // --- LOGOUT FUNCTION ---
  const handleLogout = () => {
    localStorage.removeItem("user"); // Data clear
    setUser(null); // State clear
    setIsOpen(false); // Mobile menu close
    navigate("/login"); // Redirect to Login
  };

  // Common Styles
  const baseStyle = "block py-2 px-3 text-sm font-medium rounded md:p-0 transition-colors duration-300";
  const activeStyle = "text-amber-400"; // Yellow for active
  const inactiveStyle = "text-gray-300 hover:text-amber-400"; // Gray default

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-slate-850/50 backdrop-blur-md transition-all">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-8">
        
        {/* --- LOGO --- */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group">
          <div className="bg-gradient-to-br from-amber-400 to-yellow-700 p-2 rounded-xl shadow-[0_0_15px_rgba(251,191,36,0.3)] group-hover:shadow-[0_0_25px_rgba(251,191,36,0.6)] transition-all duration-300">
             <Sparkles className="w-5 h-5 text-black fill-black" />
          </div>
          <span className="self-center text-2xl font-bold whitespace-nowrap text-white font-[Cinzel] tracking-wide">
            Astro<span className="text-amber-400">Jaya</span>
          </span>
        </Link>

        {/* --- RIGHT SIDE BUTTONS (Desktop) --- */}
        <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse items-center">
          
          {/* Book Consultation (Desktop Only) */}
          <Link 
            to="/book" 
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-600 hover:from-amber-500 hover:to-yellow-700 text-slate-900 font-bold rounded-lg text-sm px-5 py-2.5 transition-all shadow-[0_0_10px_rgba(251,191,36,0.3)] hover:shadow-[0_0_20px_rgba(251,191,36,0.5)] transform hover:-translate-y-0.5"
          >
            <CalendarCheck size={18} strokeWidth={2.5} />
            Book Consultation
          </Link>

          {/* --- LOGIN / LOGOUT TOGGLE --- */}
          {user ? (
            // LOGGED IN VIEW
            <div className="flex items-center gap-3">
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-gray-200 hover:text-red-400 border border-white/20 hover:border-red-400 hover:bg-red-400/10 font-medium rounded-lg text-sm px-4 py-2.5 transition-all"
                >
                  <LogOut size={18} />
                  <span className="hidden sm:inline">Logout</span>
                </button>
            </div>
          ) : (
            // GUEST VIEW (Show Login)
            <Link 
              to="/login" 
              className="text-gray-200 hover:text-white border border-white/20 hover:border-amber-400 hover:bg-amber-400/10 focus:ring-4 focus:outline-none focus:ring-amber-300/30 font-medium rounded-lg text-sm px-4 py-2.5 text-center flex items-center gap-2 transition-all duration-300"
            >
              <User size={18} />
              <span>Login</span>
            </Link>
          )}
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* --- NAVIGATION LINKS --- */}
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block bg-slate-900 absolute top-16 left-0 right-0 p-4 border-b border-white/10 md:static md:bg-transparent md:p-0 md:border-0" : "hidden"}`}>
          <ul className="flex flex-col font-medium md:p-0 mt-4 md:space-x-6 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            
            <li><Link to="/" className={`${baseStyle} ${isActive('/') ? activeStyle : inactiveStyle}`}>Home</Link></li>
            <li><Link to="/about" className={`${baseStyle} ${isActive('/about') ? activeStyle : inactiveStyle}`}>About</Link></li>
            <li><Link to="/services" className={`${baseStyle} ${isActive('/services') ? activeStyle : inactiveStyle}`}>Services</Link></li>
            <li><Link to="/kundli" className={`${baseStyle} ${isActive('/kundli') ? activeStyle : inactiveStyle}`}>Kundli</Link></li>
            <li><Link to="/horoscope" className={`${baseStyle} ${isActive('/horoscope') ? activeStyle : inactiveStyle}`}>Horoscope</Link></li>
            <li><Link to="/palmistry" className={`${baseStyle} ${isActive('/palmistry') ? activeStyle : inactiveStyle}`}>Palmistry</Link></li>
            <li><Link to="/contact" className={`${baseStyle} ${isActive('/contact') ? activeStyle : inactiveStyle}`}>Contact</Link></li>
            
            {/* Mobile Only Extra Buttons */}
            {isOpen && (
               <li className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-3">
                  {user && (
                    <div className="text-gray-400 text-sm px-2">
                      Signed in as <span className="text-amber-400 font-bold">{user.full_name}</span>
                    </div>
                  )}
                  <Link to="/book" className="flex items-center justify-center gap-2 w-full py-3 bg-amber-500 text-slate-900 font-bold rounded-lg">
                    <CalendarCheck size={18} />
                    Book Consultation
                  </Link>
                  {user && (
                    <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full py-3 bg-red-500/10 text-red-400 font-bold rounded-lg border border-red-500/20">
                      <LogOut size={18} />
                      Logout
                    </button>
                  )}
               </li>
            )}

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
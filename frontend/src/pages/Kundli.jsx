import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, User, Sparkles, ScrollText, Loader2, Info } from 'lucide-react';

const Kundli = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    month: '',
    day: '',
    hour: '',
    minute: '',
    lat: '',
    lon: '',
    tzone: '5.5'
  });
  
  const [kundliData, setKundliData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateKundli = (e) => {
    e.preventDefault();
    
    // --- 1. AUTH CHECK ---
    const userString = localStorage.getItem("user");
    if (!userString) {
      showAlert(
        "Login Required 🔒",                     // Title
        "To chat with our premium Astrologers, you need to login first.", // Message
        "warning",                               // Type (warning/error/success)
        () => navigate("/login")                 // Action after clicking OK
      );
      navigate("/login");
      return;
    }

    const user = JSON.parse(userString);

    // --- 2. PREMIUM SUBSCRIPTION CHECK (New Feature) ---
    // Agar user ka status 'expired' hai, to access block karo
    if (user.subscriptionStatus === 'expired') {
      showAlert(
        "Access Denied:",                     // Title
        "Your Premium Subscription has ended.\nPlease renew to generate detailed Kundli.", // Message
        "warning",                               // Type (warning/error/success)
        () => navigate("/login")                 // Action after clicking OK
      );
      return; // Yahin ruk jao, aage mat badho
    }

    setLoading(true);
    setKundliData(null);

    // --- 3. HARDCODED DATA LOGIC (Database call removed temporarily) ---
    setTimeout(() => {
      const dummyData = {
        planets: {
          "Sun (सूर्य)": { rashi: "Aries (मेष)", degree: "10° 45'" },
          "Moon (चंद्र)": { rashi: "Taurus (वृषभ)", degree: "22° 10'" },
          "Mars (मंगल)": { rashi: "Leo (सिंह)", degree: "05° 30'" },
          "Mercury (बुध)": { rashi: "Gemini (मिथुन)", degree: "18° 20'" },
          "Jupiter (गुरु)": { rashi: "Pisces (मीन)", degree: "12° 15'" },
          "Venus (शुक्र)": { rashi: "Libra (तुला)", degree: "28° 05'" },
          "Saturn (शनि)": { rashi: "Capricorn (मकर)", degree: "03° 50'" },
          "Rahu (राहु)": { rashi: "Virgo (कन्या)", degree: "15° 00'" },
          "Ketu (केतु)": { rashi: "Pisces (मीन)", degree: "15° 00'" }
        }
      };
      
      setKundliData(dummyData);
      setLoading(false);
    }, 1500); // 1.5 second ka fake loading effect
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-2xl mb-4 backdrop-blur-sm border border-amber-500/20 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            <ScrollText className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-[Cinzel] mb-4 text-white">
            Janam <span className="text-amber-400">Kundli</span>
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Generate your detailed Vedic Birth Chart instantly. Enter your birth details below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* --- FORM SECTION (Glassmorphism) --- */}
          <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl"></div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-[Cinzel]">
              <Sparkles className="text-amber-400" size={24} />
              Enter Birth Details
            </h2>
            
            <form onSubmit={generateKundli} className="space-y-6 relative z-10">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                  <input 
                    name="name" type="text" placeholder="Enter Name" required
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Day</label>
                  <input name="day" type="number" placeholder="DD" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-amber-500 outline-none text-center" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Month</label>
                  <input name="month" type="number" placeholder="MM" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-amber-500 outline-none text-center" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Year</label>
                  <input name="year" type="number" placeholder="YYYY" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-amber-500 outline-none text-center" onChange={handleChange} />
                </div>
              </div>

              {/* Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Hour (0-23)</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                    <input name="hour" type="number" placeholder="HH" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-amber-500 outline-none" onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Minute</label>
                  <input name="minute" type="number" placeholder="MM" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-amber-500 outline-none text-center" onChange={handleChange} />
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Latitude</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                    <input name="lat" type="number" step="0.01" placeholder="e.g. 28.70" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-amber-500 outline-none" onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Longitude</label>
                  <input name="lon" type="number" step="0.01" placeholder="e.g. 77.10" required className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:border-amber-500 outline-none" onChange={handleChange} />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Generate Kundli"} 
                {!loading && <Sparkles size={20} />}
              </button>
            </form>
          </div>

          {/* --- RESULT SECTION (Glassmorphism) --- */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl min-h-[500px] flex flex-col relative overflow-hidden">
             <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl"></div>

            <h2 className="text-2xl font-bold text-white mb-6 font-[Cinzel]">Your Kundli Chart</h2>
            
            {kundliData ? (
              <div className="space-y-6 animate-fade-in relative z-10">
                 <div className="p-4 bg-slate-950/50 rounded-xl border border-white/10">
                    <h3 className="text-amber-400 font-bold mb-4 text-lg border-b border-white/10 pb-2">Planetary Positions</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-gray-400 text-sm">
                                    <th className="p-2">Planet</th>
                                    <th className="p-2">Rashi (Sign)</th>
                                    <th className="p-2">Degree</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(kundliData.planets || {}).map(([planet, details]) => (
                                    <tr key={planet} className="border-b border-white/5 text-gray-300 last:border-0 hover:bg-white/5 transition-colors">
                                        <td className="p-2 font-medium text-amber-200 capitalize">{planet}</td>
                                        <td className="p-2">{details.rashi}</td>
                                        <td className="p-2 text-sm text-gray-500">{details.degree}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                 </div>

                 {/* Note Message */}
                 <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 animate-pulse">
                    <Info className="text-amber-400 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-amber-200/90 text-sm font-medium">
                      Note: You will get a realistic Kundali chart in the next update.
                    </p>
                 </div>

              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-500 space-y-4">
                <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center animate-pulse">
                    <Sparkles className="w-10 h-10 text-gray-600" />
                </div>
                <p className="font-medium text-gray-400">Fill the form to reveal your destiny...</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Kundli;
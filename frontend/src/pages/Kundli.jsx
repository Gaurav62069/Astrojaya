import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Calendar, Clock, MapPin, User, Sparkles, ScrollText, Loader2 } from 'lucide-react';

const Kundli = () => {
  const navigate = useNavigate(); // Hook for redirection

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

  const generateKundli = async (e) => {
    e.preventDefault();
    
    // --- AUTHENTICATION CHECK (Ye naya code hai) ---
    const user = localStorage.getItem("user");
    if (!user) {
      // Agar user login nahi hai, to alert dikhao aur login page par bhejo
      alert("Please Login First to Generate Kundli! 🔒");
      navigate("/login");
      return; // Code yahin ruk jayega
    }
    // -----------------------------------------------

    setLoading(true);
    setKundliData(null);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/kundli", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          year: parseInt(formData.year),
          month: parseInt(formData.month),
          day: parseInt(formData.day),
          hour: parseInt(formData.hour),
          minute: parseInt(formData.minute),
          lat: parseFloat(formData.lat),
          lon: parseFloat(formData.lon),
          tzone: parseFloat(formData.tzone)
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setKundliData(data);
      } else {
        alert("Error: " + data.detail);
      }
    } catch (error) {
      console.error("Error generating Kundli:", error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-2xl mb-4 backdrop-blur-sm border border-amber-500/20">
            <ScrollText className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-[Cinzel] mb-4 text-white">
            Janam <span className="text-amber-400">Kundli</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Generate your detailed Vedic Birth Chart instantly. Enter your birth details below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* Form Section */}
          <div className="bg-slate-850/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-[Cinzel]">
              <Sparkles className="text-amber-400" size={24} />
              Enter Birth Details
            </h2>
            
            <form onSubmit={generateKundli} className="space-y-6">
              
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                  <input 
                    name="name" type="text" placeholder="Enter Name" required
                    className="w-full bg-slate-850/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all outline-none"
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Day</label>
                  <input name="day" type="number" placeholder="DD" required className="w-full bg-slate-850/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:border-amber-500 outline-none text-center" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Month</label>
                  <input name="month" type="number" placeholder="MM" required className="w-full bg-slate-850/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:border-amber-500 outline-none text-center" onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Year</label>
                  <input name="year" type="number" placeholder="YYYY" required className="w-full bg-slate-850/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:border-amber-500 outline-none text-center" onChange={handleChange} />
                </div>
              </div>

              {/* Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Hour (0-23)</label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                    <input name="hour" type="number" placeholder="HH" required className="w-full bg-slate-850/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:border-amber-500 outline-none" onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Minute</label>
                  <input name="minute" type="number" placeholder="MM" required className="w-full bg-slate-850/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:border-amber-500 outline-none text-center" onChange={handleChange} />
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Latitude</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-3.5 text-gray-500 w-5 h-5" />
                    <input name="lat" type="number" step="0.01" placeholder="e.g. 28.70" required className="w-full bg-slate-850/50 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-white focus:border-amber-500 outline-none" onChange={handleChange} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Longitude</label>
                  <input name="lon" type="number" step="0.01" placeholder="e.g. 77.10" required className="w-full bg-slate-850/50 border border-slate-700 rounded-xl py-3 px-4 text-white focus:border-amber-500 outline-none" onChange={handleChange} />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" /> : "Generate Kundli"} 
                {!loading && <Sparkles size={20} />}
              </button>
            </form>
          </div>

          {/* Result Section */}
          <div className="bg-slate-800/40 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-2xl min-h-[500px] flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-6 font-[Cinzel]">Your Kundli Chart</h2>
            
            {kundliData ? (
              <div className="space-y-6 animate-fade-in">
                 <div className="p-4 bg-slate-950/50 rounded-xl border border-white/5">
                    <h3 className="text-amber-400 font-bold mb-2 text-lg">Planetary Positions</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-700 text-gray-400 text-sm">
                                    <th className="p-2">Planet</th>
                                    <th className="p-2">Rashi (Sign)</th>
                                    <th className="p-2">Degree</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(kundliData.planets).map(([planet, details]) => (
                                    <tr key={planet} className="border-b border-gray-800 text-gray-300 last:border-0">
                                        <td className="p-2 font-medium text-amber-200 capitalize">{planet}</td>
                                        <td className="p-2">{details.rashi}</td>
                                        <td className="p-2 text-sm text-gray-500">{details.degree}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                 </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-500 space-y-4">
                <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-gray-600" />
                </div>
                <p>Fill the form to reveal your destiny...</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Kundli;
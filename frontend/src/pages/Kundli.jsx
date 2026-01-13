import React, { useState } from 'react';
import { MapPin, Calendar, Clock, Sparkles, ScrollText, Loader2 } from 'lucide-react';

const Kundli = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    lat: 28.6139, // Default Delhi
    lon: 77.2090,
    tz: 5.5
  });
  
  const [kundliData, setKundliData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateKundli = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/kundli', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: formData.date,
          time: formData.time,
          lat: parseFloat(formData.lat),
          lon: parseFloat(formData.lon),
          tz: 5.5
        })
      });
      const data = await response.json();
      setKundliData(data);
    } catch (error) {
      alert("Error connecting to server. Make sure Backend is running!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT: Input Form */}
        <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 h-fit">
          <h2 className="text-3xl font-bold text-white mb-6 font-[Cinzel] flex items-center gap-3">
            <ScrollText className="text-amber-400" /> Generate Kundli
          </h2>
          
          <form onSubmit={generateKundli} className="space-y-5">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase">Full Name</label>
              <input name="name" onChange={handleChange} type="text" className="w-full bg-slate-950 border border-slate-700 text-white p-3 rounded-lg mt-1 focus:border-amber-500 outline-none" placeholder="Enter Name" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">Birth Date</label>
                <div className="relative mt-1">
                    <Calendar className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                    <input name="date" onChange={handleChange} type="date" required className="w-full bg-slate-950 border border-slate-700 text-white pl-10 p-3 rounded-lg focus:border-amber-500 outline-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase">Birth Time</label>
                <div className="relative mt-1">
                    <Clock className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                    <input name="time" onChange={handleChange} type="time" required className="w-full bg-slate-950 border border-slate-700 text-white pl-10 p-3 rounded-lg focus:border-amber-500 outline-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Latitude</label>
                  <input name="lat" onChange={handleChange} type="number" step="0.0001" defaultValue="28.6139" className="w-full bg-slate-950 border border-slate-700 text-white p-3 rounded-lg mt-1 focus:border-amber-500 outline-none" />
               </div>
               <div>
                  <label className="text-xs font-bold text-gray-400 uppercase">Longitude</label>
                  <input name="lon" onChange={handleChange} type="number" step="0.0001" defaultValue="77.2090" className="w-full bg-slate-950 border border-slate-700 text-white p-3 rounded-lg mt-1 focus:border-amber-500 outline-none" />
               </div>
            </div>

            <button disabled={loading} type="submit" className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 font-bold rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
              {loading ? <Loader2 className="animate-spin" /> : <Sparkles />} 
              {loading ? "Calculating Positions..." : "Get Detailed Kundli"}
            </button>
          </form>
        </div>

        {/* RIGHT: Result Display */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 min-h-[500px] relative">
          {!kundliData ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 opacity-50">
                <ScrollText className="w-32 h-32 mb-4 opacity-30"/>
                <p>Enter details to view planetary positions</p>
            </div>
          ) : (
            <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-white mb-2 font-[Cinzel]">Your Planetary Chart</h3>
                <p className="text-amber-400 text-sm mb-6">Calculated using Vedic Algorithms</p>

                {/* AI Summary Box */}
                <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 rounded-xl border border-indigo-500/30 mb-8 relative overflow-hidden">
                    <Sparkles className="absolute top-4 right-4 text-indigo-400 opacity-20 w-16 h-16" />
                    <h4 className="text-indigo-300 font-bold mb-2 uppercase text-xs tracking-widest">AI Prediction Teaser</h4>
                    <p className="text-white italic leading-relaxed">"{kundliData.prediction}"</p>
                </div>

                {/* Planets Table */}
                <div className="overflow-hidden rounded-xl border border-slate-700">
                    <table className="w-full text-left text-sm text-gray-400">
                        <thead className="bg-slate-950 text-gray-200 uppercase font-bold">
                            <tr>
                                <th className="p-4">Planet</th>
                                <th className="p-4">Sign (Rashi)</th>
                                <th className="p-4">Degree</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {kundliData.chart.map((planet, idx) => (
                                <tr key={idx} className="hover:bg-slate-800/50 transition-colors">
                                    <td className="p-4 font-bold text-amber-400">{planet.name}</td>
                                    <td className="p-4 text-white">{planet.sign}</td>
                                    <td className="p-4">{planet.degree.toFixed(2)}°</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Kundli;
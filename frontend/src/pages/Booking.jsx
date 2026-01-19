import React, { useState } from 'react';
import { Send, User, Calendar, MapPin, MessageCircle, CheckCircle } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    time: '',
    place: '',
    problem: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = localStorage.getItem("user");
  
    // 1. WhatsApp Message Format Karna
    const phoneNumber = "919541371359"; // Apna WhatsApp Number yahan daal
    const message = `Namaste AstroApna! %0A%0AMy Name: ${formData.name}%0ADOB: ${formData.dob}%0ATime: ${formData.time}%0APlace: ${formData.place}%0AProblem: ${formData.problem}%0AI want to book a consultation.`;
    
    // 2. WhatsApp Open Karna
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');

    // Note: Backend save ka code hum baad me 'main.py' me jodenge
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
        
        {/* LEFT: INFO SECTION */}
        <div className="p-8 bg-gradient-to-br from-amber-500/10 to-slate-900 flex flex-col justify-center border-r border-slate-800">
          <h2 className="text-3xl font-bold text-white mb-4 font-[Cinzel]">
            Consult with <span className="text-amber-400">Experts</span>
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Get instant solutions for your life problems. Fill the details and connect directly on WhatsApp.
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="text-green-500 w-5 h-5" /> 100% Private & Confidential
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="text-green-500 w-5 h-5" /> Detailed Analysis
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <CheckCircle className="text-green-500 w-5 h-5" /> Vedic Remedies
            </li>
          </ul>
        </div>

        {/* RIGHT: FORM SECTION */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-1">Your Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                <input required name="name" onChange={handleChange} type="text" placeholder="Enter full name" className="w-full bg-slate-950 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:border-amber-500 focus:outline-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-amber-400 uppercase mb-1">Birth Date</label>
                <input required name="dob" onChange={handleChange} type="date" className="w-full bg-slate-950 border border-slate-700 text-gray-300 px-4 py-3 rounded-lg focus:border-amber-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-amber-400 uppercase mb-1">Birth Time</label>
                <input name="time" onChange={handleChange} type="time" className="w-full bg-slate-950 border border-slate-700 text-gray-300 px-4 py-3 rounded-lg focus:border-amber-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-1">Birth Place</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 text-gray-500 w-5 h-5" />
                <input required name="place" onChange={handleChange} type="text" placeholder="City, State" className="w-full bg-slate-950 border border-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:border-amber-500 focus:outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-amber-400 uppercase mb-1">Your Problem</label>
              <textarea required name="problem" onChange={handleChange} rows="3" placeholder="Describe your issue (Marriage, Career, etc.)" className="w-full bg-slate-950 border border-slate-700 text-white px-4 py-3 rounded-lg focus:border-amber-500 focus:outline-none"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] transition-all flex items-center justify-center gap-2 text-lg group">
              <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
            </button>
            
          </form>
        </div>

      </div>
    </div>
  );
};

export default Booking;
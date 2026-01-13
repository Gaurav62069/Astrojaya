import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, Sparkles } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">We are here for you</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Cinzel]">
            Get in <span className="text-amber-400">Touch</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have questions about your horoscope or need a personalized consultation? 
            Our support team and astrologers are ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* --- LEFT: CONTACT FORM --- */}
          <div className=" p-8 rounded-2xl shadow-xl bg-slate-850/50 backdrop-blur-md border border-white/10 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 font-[Cinzel] flex items-center gap-2">
              Send a Message <Send size={20} className="text-amber-400" />
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">First Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="Arjun" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Last Name</label>
                  <input type="text" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="Kapoor" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email Address</label>
                <input type="email" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="arjun@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Subject</label>
                <select className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:border-amber-500 focus:outline-none transition-colors">
                  <option>General Inquiry</option>
                  <option>Kundli Problem</option>
                  <option>Payment Issue</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea rows="4" className="w-full bg-slate-800/50 border border-slate-700 rounded-lg p-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="How can we help you today?"></textarea>
              </div>

              <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-4 rounded-lg transition-all shadow-[0_0_15px_rgba(251,191,36,0.4)] flex justify-center items-center gap-2">
                Send Message
              </button>
            </form>
          </div>

          {/* --- RIGHT: CONTACT INFO --- */}
          <div className="space-y-8">
            
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  <Phone className="text-amber-400 group-hover:text-slate-900" />
                </div>
                <h4 className="text-white font-bold mb-1">Phone</h4>
                <p className="text-gray-400 text-sm">+91 98765 43210</p>
                <p className="text-gray-500 text-xs mt-1">Mon-Fri 9am to 6pm</p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  <Mail className="text-amber-400 group-hover:text-slate-900" />
                </div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <p className="text-gray-400 text-sm">support@astrojaya.com</p>
                <p className="text-gray-500 text-xs mt-1">Online 24/7</p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  <MapPin className="text-amber-400 group-hover:text-slate-900" />
                </div>
                <h4 className="text-white font-bold mb-1">Location</h4>
                <p className="text-gray-400 text-sm">Vedic Center, Mumbai</p>
                <p className="text-gray-500 text-xs mt-1">Maharashtra, India</p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-amber-500/50 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-slate-900 transition-colors">
                  <Clock className="text-amber-400 group-hover:text-slate-900" />
                </div>
                <h4 className="text-white font-bold mb-1">Working Hours</h4>
                <p className="text-gray-400 text-sm">9 AM - 6 PM</p>
                <p className="text-gray-500 text-xs mt-1">Sunday Closed</p>
              </div>
            </div>

            {/* Visual Decoration / Map Placeholder */}
            <div className="relative h-64 w-full bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black opacity-90 z-10"></div>
               <img 
                 src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                 alt="Map Background" 
                 className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
               />
               <div className="relative z-20 text-center p-6 border border-amber-500/30 bg-black/50 backdrop-blur-sm rounded-xl">
                  <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <h4 className="text-white font-bold font-[Cinzel]">Visit Our Spiritual Center</h4>
                  <p className="text-gray-300 text-sm">Experience the divine energy in person.</p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

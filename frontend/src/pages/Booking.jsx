import React, { useState } from 'react';
import { Calendar, Clock, Star, IndianRupee, CheckCircle, User, ArrowRight } from 'lucide-react';

// Fake Data: Astrologers
const astrologers = [
  {
    id: 1,
    name: "Pandit Ravi Shastri",
    expertise: "Vedic Astrology, Vastu",
    experience: "15+ Years",
    rating: 4.9,
    price: 500,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Dr. Ananya Iyer",
    expertise: "Tarot, Numerology",
    experience: "8+ Years",
    rating: 4.8,
    price: 800,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Acharya Vishnu",
    expertise: "Kundli, Palmistry",
    experience: "20+ Years",
    rating: 5.0,
    price: 1200,
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  }
];

// Fake Data: Time Slots
const timeSlots = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM", "08:00 PM"];

const Booking = () => {
  const [selectedAstrologer, setSelectedAstrologer] = useState(astrologers[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Fake Payment Handler
  const handleBooking = (e) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Please select date and time!");
      return;
    }
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-amber-500/50 p-8 rounded-2xl text-center max-w-md w-full shadow-[0_0_50px_rgba(251,191,36,0.2)]">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 font-[Cinzel]">Booking Confirmed!</h2>
          <p className="text-gray-400 mb-6">
            Your appointment with <span className="text-amber-400 font-bold">{selectedAstrologer.name}</span> is scheduled.
          </p>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6">
            <p className="text-white flex justify-between"><span>Date:</span> <span>{selectedDate}</span></p>
            <p className="text-white flex justify-between mt-2"><span>Time:</span> <span>{selectedTime}</span></p>
          </div>
          <button onClick={() => setIsSuccess(false)} className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-colors">
            Book Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Divine Guidance</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Cinzel]">
            Book a <span className="text-amber-400">Consultation</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT: Astrologer Selection */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <User className="text-amber-400" /> Select Astrologer
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {astrologers.map((astro) => (
                <div 
                  key={astro.id}
                  onClick={() => setSelectedAstrologer(astro)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-4 ${
                    selectedAstrologer.id === astro.id 
                    ? "bg-slate-900 border-amber-500 ring-1 ring-amber-500 shadow-[0_0_15px_rgba(251,191,36,0.2)]" 
                    : "bg-slate-900 border-slate-800 hover:border-slate-600"
                  }`}
                >
                  <img src={astro.image} alt={astro.name} className="w-16 h-16 rounded-full object-cover border-2 border-slate-700" />
                  <div>
                    <h4 className="text-white font-bold">{astro.name}</h4>
                    <p className="text-xs text-gray-400">{astro.expertise}</p>
                    <div className="flex items-center gap-3 mt-1 text-sm">
                      <span className="flex items-center text-amber-400"><Star size={12} className="fill-current mr-1"/> {astro.rating}</span>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-300 flex items-center"><IndianRupee size={12}/> {astro.price}/min</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Date & Time Selection */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
                <Calendar className="text-amber-400" /> Pick Date & Time
              </h3>
              
              {/* Fake Date Tabs */}
              <div className="flex gap-3 overflow-x-auto pb-2 mb-6 scrollbar-hide">
                {["Today", "Tomorrow", "Wed, 24", "Thu, 25", "Fri, 26"].map((date, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedDate(date)}
                    className={`min-w-[100px] py-3 rounded-lg border text-sm font-bold transition-all ${
                      selectedDate === date 
                      ? "bg-amber-500 text-slate-900 border-amber-500" 
                      : "bg-slate-900 text-gray-400 border-slate-800 hover:border-white"
                    }`}
                  >
                    {date}
                  </button>
                ))}
              </div>

              {/* Time Slots */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {timeSlots.map((time, i) => (
                  <button 
                    key={i}
                    onClick={() => setSelectedTime(time)}
                    className={`py-2 rounded-lg border text-sm transition-all flex items-center justify-center gap-1 ${
                      selectedTime === time 
                      ? "bg-amber-500 text-slate-900 border-amber-500" 
                      : "bg-slate-900 text-gray-400 border-slate-800 hover:border-white"
                    }`}
                  >
                    <Clock size={14} /> {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white font-[Cinzel] mb-6 border-b border-slate-800 pb-4">
                Order Summary
              </h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>Astrologer Fee (10 min)</span>
                  <span>₹{selectedAstrologer.price * 10}</span>
                </div>
                <div className="flex justify-between text-gray-300 text-sm">
                  <span>GST (18%)</span>
                  <span>₹{(selectedAstrologer.price * 10 * 0.18).toFixed(0)}</span>
                </div>
                <div className="h-px bg-slate-800 my-2"></div>
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Total Payable</span>
                  <span className="text-amber-400">₹{(selectedAstrologer.price * 10 * 1.18).toFixed(0)}</span>
                </div>
              </div>

              {/* Selected Details Preview */}
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6 text-sm">
                 <p className="text-gray-400 mb-1">Expert:</p>
                 <p className="text-white font-bold mb-3">{selectedAstrologer.name}</p>
                 <p className="text-gray-400 mb-1">Slot:</p>
                 <p className="text-white">
                   {selectedDate ? selectedDate : "Select Date"} at {selectedTime ? selectedTime : "--:--"}
                 </p>
              </div>

              <button 
                onClick={handleBooking}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-bold rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                Proceed to Pay <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                Safe & Secure Payment. 100% Privacy Guaranteed.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Booking;
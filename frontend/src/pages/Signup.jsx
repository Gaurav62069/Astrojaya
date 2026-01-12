import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 p-4">
      
      {/* Main Container */}
      <div className="w-full max-w-5xl h-auto md:h-[650px] flex rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-slate-800 bg-slate-900">
        
        {/* LEFT SIDE - Image & Branding (Same as Login for consistency) */}
        <div className="hidden md:flex w-1/2 relative flex-col justify-between p-12 text-white bg-black">
          <img 
            src="https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=1974&auto=format&fit=crop" 
            alt="Astrology Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>

          <div className="relative z-10">
            <Link to="/" className="flex items-center space-x-2 w-fit">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-slate-900 fill-slate-900" />
              </div>
              <span className="text-2xl font-bold font-[Cinzel]">Astro<span className="text-amber-400">Jaya</span></span>
            </Link>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 font-[Cinzel]">Join Our Spiritual Community</h2>
            <p className="text-gray-300 leading-relaxed">
              Create an account to get personalized Kundli analysis, daily planetary transits, and matchmaking services tailored just for you.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Signup Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
            
            {/* Mobile Logo */}
            <div className="md:hidden flex justify-center mb-6">
                <Link to="/" className="flex items-center space-x-2">
                    <div className="bg-amber-500 p-2 rounded-lg">
                        <Sparkles className="w-5 h-5 text-slate-900 fill-slate-900" />
                    </div>
                    <span className="text-2xl font-bold text-white font-[Cinzel]">Astro<span className="text-amber-400">Jaya</span></span>
                </Link>
            </div>

            <div className="max-w-md mx-auto w-full">
                <h2 className="text-3xl font-bold text-white mb-2 font-[Cinzel]">Create Account</h2>
                <p className="text-gray-400 mb-6">Start your journey with us today.</p>

                <form className="space-y-5">
                    
                    {/* Full Name Input */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
                            <input 
                                type="text" 
                                placeholder="John Doe" 
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
                            <input 
                                type="email" 
                                placeholder="name@example.com" 
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-gray-600"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Create a strong password" 
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-12 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all placeholder:text-gray-600"
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3.5 text-gray-500 hover:text-white transition-colors"
                            >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    {/* Terms Checkbox */}
                    <div className="flex items-start space-x-2 pt-2">
                        <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-950 text-amber-500 focus:ring-amber-500/50" />
                        <span className="text-sm text-gray-400">
                            I agree to the <a href="#" className="text-amber-400 hover:underline">Terms of Service</a> and <a href="#" className="text-amber-400 hover:underline">Privacy Policy</a>.
                        </span>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 flex items-center justify-center gap-2 group mt-4">
                        Sign Up Free
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center mt-6 text-gray-400">
                    Already have an account? 
                    <Link to="/login" className="text-amber-400 font-bold hover:underline ml-1">Log in</Link>
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
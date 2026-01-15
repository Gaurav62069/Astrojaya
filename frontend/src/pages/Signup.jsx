import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import logo from '/logo.png';
const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ full_name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Success message state
  const [loading, setLoading] = useState(false);

  // Signup Handler
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // 1. Call Signup API
      const response = await fetch("http://127.0.0.1:8000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            full_name: formData.full_name,
            email: formData.email,
            password: formData.password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Signup failed");
      }

      // 2. Signup Success - Now Auto Login
      setSuccess("Account Created! Logging you in...");
      
      // 3. Call Login API immediately using the same credentials
      const loginResponse = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: formData.email,
            password: formData.password
        }),
      });

      const loginData = await loginResponse.json();

      if (loginResponse.ok) {
        // Save user to local storage
        localStorage.setItem("user", JSON.stringify(loginData));
        
        // Wait 1.5 seconds so user can read the success message, then redirect
        setTimeout(() => {
            navigate("/"); 
        }, 1500);
      } else {
        // If auto-login fails for some reason, redirect to login page
        setSuccess("Account created! Please log in manually.");
        setTimeout(() => navigate("/login"), 2000);
      }

    } catch (err) {
      setError(err.message);
      setLoading(false); // Stop loading only on error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-auto md:h-[650px] flex rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900/50">
        
        {/* Left Side */}
        <div className="hidden md:flex w-1/2 relative flex-col justify-between p-12 text-white bg-black">
          <img src="https://images.unsplash.com/photo-1515942400420-2b98fed1f515?q=80&w=1974&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
          <div className="relative z-10"><Link to="/" className="flex items-center space-x-1 w-fit"><img src={logo} alt="loading" className="w-12 h-10" />  <span className="text-2xl font-bold font-[Cinzel]">Astro<span className="text-amber-400">Apna</span></span></Link></div>
          <div className="relative z-10"><h2 className="text-3xl font-bold mb-4 font-[Cinzel]">Join Our Spiritual Community</h2><p className="text-gray-300">Create an account to get personalized Kundli analysis.</p></div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
                <h2 className="text-3xl font-bold text-white mb-2 font-[Cinzel]">Create Account</h2>
                <p className="text-gray-400 mb-6">Start your journey today.</p>

                {/* ERROR MESSAGE */}
                {error && <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg mb-4 text-sm flex items-center gap-2">⚠️ {error}</div>}
                
                {/* SUCCESS MESSAGE */}
                {success && <div className="bg-green-500/10 border border-green-500 text-green-400 p-3 rounded-lg mb-4 text-sm flex items-center gap-2"><CheckCircle size={16}/> {success}</div>}

                <form onSubmit={handleSignup} className="space-y-5">
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-4 focus:border-amber-500 focus:outline-none"
                                onChange={(e) => setFormData({...formData, full_name: e.target.value})}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
                            <input 
                                type="email" 
                                placeholder="name@example.com" 
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-4 focus:border-amber-500 focus:outline-none"
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-300">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Strong password" 
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-12 focus:border-amber-500 focus:outline-none"
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                required
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-gray-500 hover:text-white">
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button disabled={loading} className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed">
                        {loading ? <Loader2 className="animate-spin" /> : "Sign Up Free"} 
                        {!loading && <ArrowRight size={18} />}
                    </button>
                </form>

                <p className="text-center mt-6 text-gray-400">Already have an account? <Link to="/login" className="text-amber-400 font-bold hover:underline">Log in</Link></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
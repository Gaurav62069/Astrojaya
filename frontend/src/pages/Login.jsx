import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles, Loader2, CheckCircle } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Success message state
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Login failed");
      }

      // Success
      setSuccess("Login Successful! Redirecting...");
      localStorage.setItem("user", JSON.stringify(data));
      
      // Redirect after 1.5 seconds
      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-[600px] flex rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900/50">
        
        {/* Left Side */}
        <div className="hidden md:flex w-1/2 relative flex-col justify-between p-12 text-white bg-black">
          <img src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2094&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60" alt="bg" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
          <div className="relative z-10"><Link to="/" className="flex items-center space-x-2 w-fit"><Sparkles className="text-amber-500" /> <span className="text-2xl font-bold font-[Cinzel]">Astro<span className="text-amber-400">Jaya</span></span></Link></div>
          <div className="relative z-10"><h2 className="text-4xl font-bold mb-4 font-[Cinzel]">Unlock Your Cosmic Destiny</h2><p className="text-gray-300">Sign in to access personalized daily horoscopes.</p></div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
                <h2 className="text-3xl font-bold text-white mb-2 font-[Cinzel]">Welcome Back</h2>
                <p className="text-gray-400 mb-8">Please enter your details to sign in.</p>

                {/* ERROR MESSAGE */}
                {error && <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg mb-4 text-sm flex items-center gap-2">⚠️ {error}</div>}

                {/* SUCCESS MESSAGE */}
                {success && <div className="bg-green-500/10 border border-green-500 text-green-400 p-3 rounded-lg mb-4 text-sm flex items-center gap-2"><CheckCircle size={16}/> {success}</div>}

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
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

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-3.5 text-gray-500 w-5 h-5" />
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="••••••••" 
                                className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-12 focus:border-amber-500 focus:outline-none"
                                onChange={(e) => setFormData({...formData, password: e.target.value})}
                                required
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-gray-500 hover:text-white">
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                    </div>

                    <button disabled={loading} className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                        {loading ? <Loader2 className="animate-spin" /> : "Sign In"} 
                        {!loading && <ArrowRight size={18} />}
                    </button>
                </form>

                <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-700"></div></div>
                    <div className="relative flex justify-center text-sm"><span className="px-4 bg-slate-900 text-gray-500">Or continue with</span></div>
                </div>

                <button disabled className="w-full bg-slate-800 text-gray-400 cursor-not-allowed font-semibold py-3 rounded-xl flex items-center justify-center gap-2 opacity-70">
                   <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 grayscale opacity-50" alt="Google" />
                   Sign in with Google (Coming Soon)
                </button>

                <p className="text-center mt-8 text-gray-400">Don't have an account? <Link to="/signup" className="text-amber-400 font-bold hover:underline">Sign up free</Link></p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
import React, { useState } from 'react';
import { UploadCloud, Scan, BrainCircuit, Heart, Fingerprint, ArrowRight, Loader2 } from 'lucide-react';

const Palmistry = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  // Fake Scan Function
  const handleScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    
    // 3 Second baad scan khatam
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HERO HEADER --- */}
        <div className="text-center mb-16">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">Future in your Hands</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Cinzel]">
            AI Palm <span className="text-amber-400">Reading</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Upload a photo of your palm. Our advanced AI will analyze your Life Line, Heart Line, and Head Line to predict your future instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT: SCANNER INTERFACE --- */}
          <div className="relative">
            {/* Scanner Box */}
            <div className="relative w-full h-[500px] bg-slate-900 border-2 border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center overflow-hidden group hover:border-amber-500/50 transition-colors">
              
              {!isScanning && !scanComplete && (
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-10 h-10 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Upload Palm Photo</h3>
                  <p className="text-gray-400 text-sm mb-6">Supports JPG, PNG (Max 5MB)</p>
                  <button 
                    onClick={handleScan}
                    className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg transition-all shadow-[0_0_15px_rgba(251,191,36,0.4)]"
                  >
                    Start AI Scan
                  </button>
                </div>
              )}

              {/* SCANNING ANIMATION (Green Laser) */}
              {isScanning && (
                <>
                   {/* Background Image (Hand) */}
                   <img 
                     src="https://images.unsplash.com/photo-1624513686860-2979247d4c14?q=80&w=2000&auto=format&fit=crop" 
                     className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale" 
                     alt="Scanning Hand"
                   />
                   
                   {/* Moving Laser Line */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-green-400 shadow-[0_0_20px_#4ade80] animate-[scan_3s_ease-in-out_infinite]"></div>
                   
                   <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-10">
                      <div className="text-center">
                        <Loader2 className="w-12 h-12 text-green-400 animate-spin mx-auto mb-4" />
                        <p className="text-green-400 font-mono text-lg tracking-widest">ANALYZING LINES...</p>
                      </div>
                   </div>
                </>
              )}

              {/* RESULT (After Scan) */}
              {scanComplete && (
                <div className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center p-8 text-center animate-fade-in-up">
                   <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                      <Fingerprint className="w-8 h-8 text-green-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2 font-[Cinzel]">Scan Complete!</h3>
                   <p className="text-gray-400 mb-6">We have analyzed 84 points on your palm.</p>
                   
                   <div className="space-y-3 w-full max-w-xs text-left mb-6">
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>Life Line Visibility</span>
                        <span className="text-green-400">98%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[98%]"></div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-300">
                        <span>Heart Line Depth</span>
                        <span className="text-amber-400">85%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[85%]"></div>
                      </div>
                   </div>

                   <button 
                    onClick={() => setScanComplete(false)} // Reset
                    className="px-6 py-2 border border-slate-600 hover:border-white text-white rounded-lg transition-colors"
                   >
                     Scan Another Hand
                   </button>
                   <button className="mt-3 text-amber-400 text-sm font-bold hover:underline flex items-center gap-1">
                     View Full Report <ArrowRight size={14} />
                   </button>
                </div>
              )}
            </div>
            
            {/* Note */}
            <p className="text-center text-xs text-gray-500 mt-4">* For best results, ensure good lighting and a clear background.</p>
          </div>


          {/* --- RIGHT: INFORMATION --- */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white font-[Cinzel]">
              How AI Reads Your <span className="text-amber-400">Destiny</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Unlike traditional palmistry which relies on human interpretation, our AI creates a 3D topographic map of your palm to measure the depth, length, and curvature of your major lines with 99.9% precision.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                  <BrainCircuit className="text-amber-400" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Head Line Analysis</h4>
                  <p className="text-sm text-gray-500 mt-1">Reveals your intellectual curiosity, learning style, and decision-making approach.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                  <Heart className="text-pink-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Heart Line Decoding</h4>
                  <p className="text-sm text-gray-500 mt-1">Uncovers your emotional stability, romantic perspectives, and cardiac health indications.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0">
                  <Scan className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Instant Predictions</h4>
                  <p className="text-sm text-gray-500 mt-1">Get a detailed PDF report generated within seconds of scanning.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Tailwind Custom Animation for Scanning (Needs to be in index.css typically, but inline style works for simple movement) */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          50% { top: 100%; }
          90% { opacity: 1; }
          100% { top: 0%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Palmistry;
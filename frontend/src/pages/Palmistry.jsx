import React, { useState } from 'react';
import { Upload, Hand, Sparkles, Scan, Loader2, Info, CheckCircle, Camera, X } from 'lucide-react';

const Palmistry = () => {
  // 4 Angles State
  const [images, setImages] = useState({
    angle1: null,
    angle2: null,
    angle3: null,
    angle4: null
  });

  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Handle Image Upload for specific angle
  const handleImageChange = (e, angle) => {
    if (e.target.files && e.target.files[0]) {
      setImages({
        ...images,
        [angle]: URL.createObjectURL(e.target.files[0])
      });
      setShowResult(false); // Reset result on new upload
    }
  };

  // Clear specific image
  const removeImage = (angle) => {
    setImages({ ...images, [angle]: null });
  };

  const startAnalysis = () => {
    // Check if at least one image is uploaded
    const isAnyImageUploaded = Object.values(images).some(img => img !== null);
    
    if (!isAnyImageUploaded) {
     
      showAlert(
        "Required image",                     // Title
        "Please upload at least one photo of your palm! ✋", // Message
        "error",                               // Type (warning/error/success)
        () => navigate("/login")                 // Action after clicking OK
      );
      return;
    }
    
    setAnalyzing(true);
    setShowResult(false);

    // 2.5 Seconds Fake Scanning Animation
    setTimeout(() => {
      setAnalyzing(false);
      setShowResult(true);
    }, 2500);
  };

  const uploadSlots = [
    { id: 'angle1', label: 'Left Palm (Full)', icon: Hand },
    { id: 'angle2', label: 'Right Palm (Full)', icon: Hand },
    { id: 'angle3', label: 'Side View (Mounts)', icon: Camera },
    { id: 'angle4', label: 'Close Up (Lines)', icon: Scan },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-2xl mb-4 backdrop-blur-sm border border-amber-500/20 shadow-[0_0_15px_rgba(251,191,36,0.3)]">
            <Hand className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-[Cinzel] mb-4 text-white">
            AI <span className="text-amber-400">Palmistry</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Upload palm photos from different angles for a precise AI reading.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* --- UPLOAD SECTION (4 ANGLES RESTORED) --- */}
          <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-amber-500/10 blur-2xl"></div>

            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 font-[Cinzel]">
              <Scan className="text-amber-400" size={24} />
              Upload 4 Angles
            </h2>

            {/* 4 GRID LAYOUT */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {uploadSlots.map((slot) => (
                <div key={slot.id} className="relative group">
                  <div className="aspect-square bg-slate-950/30 border-2 border-dashed border-slate-700 rounded-xl flex flex-col items-center justify-center relative overflow-hidden hover:border-amber-500/50 transition-colors">
                    
                    {images[slot.id] ? (
                      <>
                        <img src={images[slot.id]} alt={slot.label} className="w-full h-full object-cover" />
                        {/* Remove Button */}
                        {!analyzing && (
                          <button 
                            onClick={() => removeImage(slot.id)}
                            className="absolute top-2 right-2 p-1 bg-red-500/80 text-white rounded-full hover:bg-red-600 transition-colors"
                          >
                            <X size={14} />
                          </button>
                        )}
                        {/* Scanning Effect Overlay */}
                        {analyzing && (
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/20 to-transparent w-full h-full animate-scan z-10"></div>
                        )}
                      </>
                    ) : (
                      <label htmlFor={`upload-${slot.id}`} className="cursor-pointer flex flex-col items-center gap-2 p-2 w-full h-full justify-center hover:bg-white/5 transition-all">
                        <slot.icon className="w-6 h-6 text-gray-500 group-hover:text-amber-400 transition-colors" />
                        <span className="text-xs font-bold text-gray-400 group-hover:text-white text-center">{slot.label}</span>
                      </label>
                    )}
                    
                    <input 
                      id={`upload-${slot.id}`} 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={(e) => handleImageChange(e, slot.id)} 
                      disabled={analyzing}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <button 
              onClick={startAnalysis}
              disabled={analyzing}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-400 hover:to-yellow-500 text-slate-900 font-bold py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]"
            >
              {analyzing ? (
                <>
                  <Loader2 className="animate-spin" /> Analyzing Patterns...
                </>
              ) : (
                <>
                  <Sparkles size={20} /> Start Analysis
                </>
              )}
            </button>
          </div>

          {/* --- RESULT / INFO SECTION --- */}
          <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl min-h-[500px] flex flex-col relative overflow-hidden">
             
             {/* Background Blob */}
             <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 rounded-full bg-purple-500/10 blur-2xl"></div>

            <h2 className="text-2xl font-bold text-white mb-6 font-[Cinzel]">Analysis Report</h2>
            
            {showResult ? (
              // --- COMING SOON MESSAGE (Ye naya feature hai) ---
              <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in p-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400/20 to-purple-500/20 border border-amber-500/30 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-amber-500/20 blur-xl rounded-full animate-pulse"></div>
                   <Sparkles className="w-10 h-10 text-amber-400 relative z-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Detailed Report Coming Soon!</h3>
                  <p className="text-amber-200/80 font-medium">Under Development</p>
                </div>

                <div className="bg-slate-950/50 p-6 rounded-2xl border border-white/10 max-w-sm">
                  <p className="text-gray-300 leading-relaxed text-sm">
                    Our AI is learning to read complex mounts and lines from <span className="text-amber-400">multiple angles</span>. 
                    The full multi-angle analysis feature will be available in the next update.
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 font-bold uppercase tracking-wider">
                    <Info size={14} /> Stay Tuned
                  </div>
                </div>
              </div>
            ) : (
              // --- DEFAULT INSTRUCTIONS ---
              <div className="flex-1 flex flex-col justify-center space-y-6">
                 <div className="space-y-4">
                    <p className="text-gray-400 text-sm mb-4">Why 4 Angles?</p>
                    {[
                      'Left Palm: Reveals inherited potential & past.',
                      'Right Palm: Shows current life & future choices.',
                      'Side View: Analyzes the mount heights (Venus/Moon).',
                      'Close Up: Detects minor lines and breaks.'
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-slate-950/30 rounded-xl border border-white/5">
                        <CheckCircle size={18} className="text-amber-500/70 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                 </div>
                 <div className="mt-auto p-4 bg-amber-500/5 rounded-xl border border-amber-500/10 text-center">
                    <p className="text-xs text-amber-200/60">
                      Note: Upload clear images in good lighting for best results.
                    </p>
                 </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Palmistry;
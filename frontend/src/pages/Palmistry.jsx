import React, { useState } from 'react';
import { UploadCloud, Scan, CheckCircle, Fingerprint, Loader2, ArrowRight } from 'lucide-react';

const Palmistry = () => {
  const [images, setImages] = useState({
    leftPalm: null,
    rightPalm: null,
    sideView: null,
    backHand: null
  });
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => ({ ...prev, [type]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScan = () => {
    // Check if all images are uploaded
    const uploadedCount = Object.values(images).filter(Boolean).length;
    if (uploadedCount < 4) {
      alert("Please upload all 4 angles for accurate reading!");
      return;
    }

    setIsScanning(true);
    setScanComplete(false);
    
    // Fake Scan Logic (3 Seconds)
    setTimeout(() => {
      setIsScanning(false);
      setScanComplete(true);
    }, 3000);
  };

  const UploadBox = ({ label, type, currentImage }) => (
    <div className="relative group">
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => handleImageUpload(e, type)}
        className="hidden" 
        id={`upload-${type}`}
        disabled={isScanning || scanComplete}
      />
      <label 
        htmlFor={`upload-${type}`}
        className={`w-full h-48 rounded-xl border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all overflow-hidden
          ${currentImage 
            ? 'border-green-500/50 bg-slate-900' 
            : 'border-slate-700 bg-slate-900/50 hover:border-amber-500/50 hover:bg-slate-800'
          }`}
      >
        {currentImage ? (
          <div className="relative w-full h-full">
            <img src={currentImage} alt={label} className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <CheckCircle className="text-green-400 w-8 h-8" />
            </div>
          </div>
        ) : (
          <>
            <UploadCloud className="w-8 h-8 text-slate-500 mb-2 group-hover:text-amber-400 transition-colors" />
            <span className="text-gray-400 text-sm font-medium">{label}</span>
          </>
        )}
      </label>
    </div>
  );

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO HEADER */}
        <div className="text-center mb-12">
          <span className="text-amber-400 font-medium tracking-widest uppercase text-sm">AI Hand Analysis</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 font-[Cinzel]">
            4-Angle <span className="text-amber-400">Palm Reading</span>
          </h1>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Upload photos from 4 different angles. Our AI constructs a 3D model of your hand for 99% accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: UPLOAD GRID */}
          <div className="relative bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            
            {/* Grid for 4 Images */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <UploadBox label="Left Palm (Main)" type="leftPalm" currentImage={images.leftPalm} />
              <UploadBox label="Right Palm" type="rightPalm" currentImage={images.rightPalm} />
              <UploadBox label="Side View (Thickness)" type="sideView" currentImage={images.sideView} />
              <UploadBox label="Back of Hand" type="backHand" currentImage={images.backHand} />
            </div>

            {/* Action Button */}
            {!isScanning && !scanComplete && (
              <button 
                onClick={handleScan}
                className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-slate-900 font-bold rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all flex items-center justify-center gap-2"
              >
                <Scan size={20} /> Start AI Analysis
              </button>
            )}

            {/* SCANNING STATE */}
            {isScanning && (
              <div className="absolute inset-0 bg-slate-950/90 z-20 flex flex-col items-center justify-center rounded-2xl">
                <div className="relative">
                  <Fingerprint className="w-16 h-16 text-slate-700 absolute" />
                  <Fingerprint className="w-16 h-16 text-amber-400 animate-pulse relative z-10" />
                </div>
                <p className="text-amber-400 mt-4 font-mono tracking-widest animate-pulse">PROCESSING 4 ANGLES...</p>
              </div>
            )}

            {/* RESULT STATE */}
            {scanComplete && (
              <div className="absolute inset-0 bg-slate-900 z-20 flex flex-col items-center justify-center p-8 text-center rounded-2xl animate-fade-in">
                 <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-2 font-[Cinzel]">Analysis Complete!</h3>
                 <p className="text-gray-400 mb-6 text-sm">AI has successfully mapped 128 points on your hands.</p>
                 
                 <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-6">
                    <div className="bg-slate-800 p-3 rounded-lg text-left">
                      <span className="text-xs text-gray-500 block">Life Line</span>
                      <span className="text-green-400 font-bold">Strong (85%)</span>
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg text-left">
                      <span className="text-xs text-gray-500 block">Luck Line</span>
                      <span className="text-amber-400 font-bold">Rising (92%)</span>
                    </div>
                 </div>

                 <button 
                  onClick={() => setScanComplete(false)} 
                  className="mb-3 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700"
                 >
                   Scan New Hand
                 </button>
                 <button className="text-amber-400 text-sm font-bold hover:underline flex items-center gap-1">
                   Download Full Report <ArrowRight size={14} />
                 </button>
              </div>
            )}
          </div>

          {/* RIGHT: INFO TEXT (Same as before but adjusted) */}
          <div className="space-y-6 pt-4">
             {/* ... (Existing Info content can remain same, or I can paste if needed) ... */}
             <h3 className="text-2xl font-bold text-white font-[Cinzel]">Why 4 Angles?</h3>
             <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 font-bold shrink-0">1</div>
                  <div>
                    <h4 className="text-white font-bold">Both Palms (Karma & Destiny)</h4>
                    <p className="text-sm text-gray-400">Left hand shows what you were born with; Right hand shows what you made of it.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400 font-bold shrink-0">2</div>
                  <div>
                    <h4 className="text-white font-bold">Side View (Mounts)</h4>
                    <p className="text-sm text-gray-400">Determines the thickness of mounts (Venus/Moon) indicating energy levels.</p>
                  </div>
                </li>
             </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Palmistry;
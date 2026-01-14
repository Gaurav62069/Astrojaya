import React, { createContext, useContext, useState } from 'react';
import { X, CheckCircle, AlertTriangle, Info, ShieldAlert } from 'lucide-react';

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({
    show: false,
    title: '',
    message: '',
    type: 'info', // success, error, warning, info
    onConfirm: null // Function to run when OK is clicked
  });

  // --- FUNCTION TO TRIGGER ALERT ---
  const showAlert = (title, message, type = 'info', onConfirm = null) => {
    setAlert({ show: true, title, message, type, onConfirm });
  };

  const closeAlert = () => {
    if (alert.onConfirm) alert.onConfirm(); // Run callback if exists (e.g., Redirect)
    setAlert({ ...alert, show: false, onConfirm: null });
  };

  // --- ICONS BASED ON TYPE ---
  const getIcon = () => {
    switch (alert.type) {
      case 'success': return <CheckCircle className="w-12 h-12 text-green-500" />;
      case 'error': return <ShieldAlert className="w-12 h-12 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-12 h-12 text-amber-500" />;
      default: return <Info className="w-12 h-12 text-blue-500" />;
    }
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      
      {/* --- CUSTOM ALERT UI --- */}
      {alert.show && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 backdrop-blur-md animate-fade-in">
          <div className="border border-amber-500/30 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-[0_0_50px_rgba(251,191,36,0.15)] bg-white/5 backdrop-blur-xl relative transform transition-all scale-100 animate-zoom-in text-center">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-3xl rounded-full -mr-10 -mt-10 pointer-events-none"></div>

            {/* Icon */}
            <div className="flex justify-center mb-4">
               <div className="p-4 bg-slate-800 rounded-full border border-white/5 shadow-inner">
                 {getIcon()}
               </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white font-[Cinzel] mb-2">
              {alert.title}
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {alert.message}
            </p>

            {/* Button */}
            <button 
              onClick={closeAlert}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 font-bold rounded-xl hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] transition-all active:scale-95 uppercase tracking-wider"
            >
              Okay, Understood
            </button>

          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
};
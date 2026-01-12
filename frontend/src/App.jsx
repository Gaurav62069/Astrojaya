import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Horoscope from './pages/Horoscope';
import Palmistry from './pages/Palmistry';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
// 1. Layout Component: Ye decide karega ki Navbar/Footer dikhana hai ya nahi
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Agar URL '/login' ya '/signup' hai, toh hum Navbar/Footer hide kar denge
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {/* Agar Auth Page nahi hai, tabhi Navbar dikhao */}
      {!isAuthPage && <Navbar />}
      
      {/* Page ka main content yahan aayega */}
      {children}
      
      {/* Agar Auth Page nahi hai, tabhi Footer dikhao */}
      {!isAuthPage && <Footer />}
    </>
  );
};

// Placeholder Component (Baaki pages ke liye jo abhi bane nahi hain)
const PagePlaceholder = ({ title }) => (
  <div className="pt-32 px-4 text-center min-h-screen flex flex-col items-center bg-slate-950 text-white">
    <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6 font-[Cinzel]">{title}</h1>
    <p className="text-gray-300 text-lg max-w-2xl">Work in progress...</p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white font-[Inter]">
        
        {/* Layout ke andar Routes wrap kiye taaki useLocation kaam kare */}
        <Layout>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}/>
            {/* Placeholder Pages */}
            <Route path="/about" element={<PagePlaceholder title="About AstroJaya" />} />
            <Route path="/services" element={<PagePlaceholder title="Our Services" />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/horoscope" element={<Horoscope />} />
            <Route path="/palmistry" element={<Palmistry />} />
            <Route path="/book" element={<Booking />} />
          </Routes>
        </Layout>
        
      </div>
    </Router>
  );
}

export default App;
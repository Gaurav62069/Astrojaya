import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages Import
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Horoscope from './pages/Horoscope';
import Palmistry from './pages/Palmistry';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import About from './pages/About';     // यह नया पेज है जो अभी बनाया
import Services from './pages/Services'; // यह भी नया पेज है

// Layout Component: यह Navbar और Footer को कंडीशनली रेंडर करता है
const Layout = ({ children }) => {
  const location = useLocation();
  
  // Login और Signup पेज पर Navbar/Footer नहीं दिखेंगे
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Navbar />}
      
      {/* Page Content */}
      {children}
      
      {!isAuthPage && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-white font-[Inter]">
        
        <Layout>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Feature Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/horoscope" element={<Horoscope />} />
            <Route path="/palmistry" element={<Palmistry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<Booking />} />
          </Routes>
        </Layout>
        
      </div>
    </Router>
  );
}

export default App;
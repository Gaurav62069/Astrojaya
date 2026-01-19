import React from 'react';
import { Link } from 'react-router-dom';
import {  Facebook, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight, Youtube } from 'lucide-react';
import logo from '/logo.png';
const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-slate-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-1 group">
              <div className="rounded-lg">
                <img src={logo} className="w-12 h-10" />
              </div>
              <span className="text-2xl font-bold text-white font-[Cinzel]">
                Astro<span className="text-amber-400">Apna</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-200">
              Guiding you through the stars. We combine ancient Vedic wisdom to provide accurate life predictions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/profile.php?id=61586677357750" className="p-2 bg-slate-800 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://youtube.com/@astroapna?si=trojcdaH-j45HoGa" className="p-2 bg-slate-800 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Youtube size={18} />
              </a>
              <a href="https://www.instagram.com/astroapna_?igsh=MWpiN2FzN255MW5uag==" className="p-2 bg-slate-800 rounded-full hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-[Cinzel]">Quick Links</h3>
            <ul className="space-y-3 ">
              <li><Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> About Us</Link></li>
              <li><Link to="/services" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Our Services</Link></li>
              <li><Link to="/blog" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Astrology Blog</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-[Cinzel]">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/horoscope" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Daily Horoscope</Link></li>
              <li><Link to="/palmistry" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Palm Reading</Link></li>
              <li><Link to="/kundli" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Kundli Matching</Link></li>
              <li><Link to="/tarot" className="hover:text-amber-400 transition-colors flex items-center gap-2"><ArrowRight size={14}/> Tarot Reading</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 font-[Cinzel]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <span>+91 95413 71359</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                <span>astrojaya@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className=" py-6 border-t border-slate-800 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 AstroApna. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
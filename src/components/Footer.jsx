import React from "react";
import { Link } from "react-router-dom";

import {
  FaWhatsapp,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaTruck,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-white mt-20 border-t border-slate-800">
      
      {/* Top Multi-Color Brand Gradient */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1: Brand Pitch & Identity */}
          <div className="space-y-5">
            <h2 className="text-3xl font-black tracking-tight">
              Laxminath Iron
            </h2>

            <p className="text-slate-400 leading-relaxed text-[16px]">
              Premium wholesale supplier of structural Polaad TMT Sariya, factory-fresh MP Birla Cement, and durable construction materials in Bassi, Chittorgarh.
            </p>

            {/* Social Icons Container */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://wa.me/918824841765"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500/10 border border-green-500/20 text-green-400 hover:bg-green-500 hover:text-white p-3 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="#"
                className="bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500 hover:text-white p-3 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-wider mb-6 text-orange-400">
              Quick Navigation
            </h3>

            <ul className="space-y-4 text-slate-400 font-medium">
              <li>
                <Link to="/" className="flex items-center gap-2 hover:text-orange-400 transition group">
                  <FiArrowRight className="group-hover:translate-x-1 transition duration-300 text-orange-500" />
                  Home Overview
                </Link>
              </li>

              <li>
                <Link to="/sariya" className="flex items-center gap-2 hover:text-orange-400 transition group">
                  <FiArrowRight className="group-hover:translate-x-1 transition duration-300 text-orange-500" />
                  Polaad TMT Sariya
                </Link>
              </li>

              <li>
                <Link to="/cement" className="flex items-center gap-2 hover:text-orange-400 transition group">
                  <FiArrowRight className="group-hover:translate-x-1 transition duration-300 text-orange-500" />
                  MP Birla Cement
                </Link>
              </li>

              <li>
                <Link to="/contact" className="flex items-center gap-2 hover:text-orange-400 transition group">
                  <FiArrowRight className="group-hover:translate-x-1 transition duration-300 text-orange-500" />
                  Contact Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info with Native Device Links */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-wider mb-6 text-orange-400">
              Contact Info
            </h3>

            <div className="space-y-5 text-slate-400 text-sm font-medium">
              
              {/* Trigger Phone Dialer */}
              <a 
                href="tel:+918824841765" 
                className="flex items-start gap-3 hover:text-orange-400 transition group group"
              >
                <FaPhoneAlt className="mt-1 text-orange-500 shrink-0 group-hover:scale-110 transition" />
                <span className="text-base font-bold text-slate-300 group-hover:text-white transition">
                  +91 88248 41765
                </span>
              </a>

              {/* Trigger Native Email Client */}
              <a 
                href="mailto:laxminathiron@gmail.com" 
                className="flex items-start gap-3 hover:text-orange-400 transition group"
              >
                <MdEmail className="mt-1 text-orange-500 shrink-0 group-hover:scale-110 transition" size={16} />
                <span className="break-all text-slate-300 group-hover:text-white transition">
                  laxminathiron@gmail.com
                </span>
              </a>

              {/* Trigger External/Native Google Maps Application */}
              <a 
                href="https://maps.google.com/?q=Laxminath+iron+Bassi+Chittorgarh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-start gap-3 hover:text-orange-400 transition group"
              >
                <FaMapMarkerAlt className="mt-1 text-orange-500 shrink-0 group-hover:scale-110 transition" />
                <span className="leading-relaxed text-slate-300 group-hover:text-white transition">
                  Bassi Highway, Near Jogniya Car Bazar, Bassi, Chittorgarh
                </span>
              </a>

            </div>
          </div>

          {/* Column 4: Premium Vehicle Fleet Showcase Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl h-fit hover:border-orange-500/40 transition duration-300">
            <h3 className="text-xl font-extrabold mb-4 text-white flex items-center gap-2">
              <FaTruck className="text-orange-500" size={18} /> Logistics Fleet
            </h3>

            {/* Fleet Badges */}
            <div className="flex flex-wrap gap-2 mb-4 text-[11px] font-bold tracking-wide uppercase">
              <span className="bg-slate-950 text-emerald-400 border border-emerald-500/10 px-3 py-1.5 rounded-xl">
                Tata CNG Auto
              </span>
              <span className="bg-slate-950 text-amber-400 border border-amber-500/10 px-3 py-1.5 rounded-xl">
                Tractor Heavy Delivery
              </span>
            </div>

            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Contact us directly on WhatsApp for live price metrics, damage-free tracking, and on-own fleet support.
            </p>

            <a
              href="https://wa.me/918824841765?text=Hello%20Laxminath%20Iron,%20I%20want%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white w-full py-3.5 rounded-2xl font-black text-sm transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-green-500/10"
            >
              <FaWhatsapp size={18} />
              Get Instant Quote
            </a>
          </div>

        </div>

        {/* Bottom Panel Copyright */}
        <div className="border-t border-slate-800 mt-14 pt-6 text-center text-slate-600 text-xs font-semibold tracking-wider uppercase">
          © {new Date().getFullYear()} Laxminath Iron. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
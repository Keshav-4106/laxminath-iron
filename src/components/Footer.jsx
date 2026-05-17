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

      {/* Top Gradient */}
      <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Laxminath Iron
            </h2>

            <p className="text-slate-400 leading-relaxed text-[17px]">
              Premium supplier of TMT Sariya, Cement, Scrap and
              Construction Materials in Bassi,Chittorgarh.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-7">

              <a
                href="https://wa.me/918824841765"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 p-3 rounded-2xl transition duration-300 hover:scale-110"
              >
                <FaWhatsapp size={20} />
              </a>

              <a
                href="#"
                className="bg-pink-500 hover:bg-pink-600 p-3 rounded-2xl transition duration-300 hover:scale-110"
              >
                <FaInstagram size={20} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-orange-400">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 hover:text-white transition group"
                >
                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/sariya"
                  className="flex items-center gap-2 hover:text-white transition group"
                >
                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                  Sariya
                </Link>
              </li>

              <li>
                <Link
                  to="/cement"
                  className="flex items-center gap-2 hover:text-white transition group"
                >
                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                  Cement
                </Link>
              </li>

              <li>
                <Link
                  to="/scrap"
                  className="flex items-center gap-2 hover:text-white transition group"
                >
                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                  Scrap
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 hover:text-white transition group"
                >
                  <FiArrowRight className="group-hover:translate-x-1 transition" />
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-5 text-orange-400">
              Contact Info
            </h3>

            <div className="space-y-5 text-slate-400">

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-orange-400" />
                <span>+91 8824841765</span>
              </div>

              <div className="flex items-start gap-3">
                <MdEmail className="mt-1 text-orange-400" />
                <span>laxminathiron@gmail.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-orange-400" />
                <span>Chittorgarh, Rajasthan</span>
              </div>

              <div className="flex items-start gap-3">
                <FaTruck className="mt-1 text-orange-400" />
                <span>Fast Delivery Across Chittorgarh</span>
              </div>

            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-7 hover:border-orange-500/40 transition duration-300 h-fit">

            <h3 className="text-2xl font-bold mb-5 text-white">
              Need Materials?
            </h3>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">

              <span className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm">
                Fast Delivery
              </span>

              <span className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm">
                Best Rates
              </span>

              <span className="bg-slate-800 text-slate-300 px-4 py-2 rounded-xl text-sm">
                Trusted Supplier
              </span>

            </div>

            <p className="text-slate-400 mb-7 leading-relaxed">
              Contact us directly on WhatsApp for fast quotation and
              delivery support.
            </p>

            <a
              href="https://wa.me/918824841765?text=Hello%20Laxminath%20Iron,%20I%20want%20a%20quotation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 w-full py-4 rounded-2xl font-bold transition duration-300 hover:scale-[1.02]"
            >
              <FaWhatsapp size={22} />
              Get Instant Quote
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-14 pt-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Laxminath Iron 
        </div>

      </div>
    </footer>
  );
};

export default Footer;
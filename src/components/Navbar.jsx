import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  HiOutlineMenuAlt3,
  HiX,
} from "react-icons/hi";

import {
  FiMoon,
  FiSun,
} from "react-icons/fi";

import { FaWhatsapp } from "react-icons/fa";

import { navLinks } from "../data/navLinks";

const Navbar = () => {

  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {

    const savedMode = localStorage.getItem("darkMode");

    if (savedMode === "true") return true;

    if (
      !savedMode &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    }

    return false;

  });

  /* SCROLL EFFECT */
  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  /* DARK MODE */
  useEffect(() => {

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [isDarkMode]);

  const toggleDarkMode = () => {

    setIsDarkMode((prev) => {

      localStorage.setItem("darkMode", !prev);

      return !prev;

    });

  };

  const isActive = (path) =>
    location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-4 group"
          >

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition duration-300">

              <span className="text-black font-black text-lg">
                LI
              </span>

            </div>

            <div className="flex flex-col">

              <span className="text-2xl font-extrabold tracking-tight text-white">

                Laxminath Iron

              </span>

              <span className="text-xs text-slate-300 dark:text-slate-400">

                Construction Material Supplier

              </span>

            </div>

          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-3">

            {navLinks.map((link) => (

              <Link
                key={link.name}
                to={link.path}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-amber-500 text-black shadow-lg"
                    : "text-slate-200 hover:bg-white/10 hover:text-orange-400"
                }`}
              >

                {link.name}

              </Link>

            ))}

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/918824841765"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl font-bold text-white transition duration-300 hover:scale-105 shadow-lg"
            >

              <FaWhatsapp size={18} />

              WhatsApp

            </a>

            {/* DARK MODE */}
            <button
              onClick={toggleDarkMode}
              className="ml-1 w-11 h-11 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md text-white hover:scale-105 transition duration-300"
            >

              {isDarkMode ? (
                <FiSun size={19} />
              ) : (
                <FiMoon size={19} />
              )}

            </button>

          </div>

          {/* MOBILE ACTIONS */}
          <div className="md:hidden flex items-center gap-3">

            {/* DARK MODE */}
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md text-white"
            >

              {isDarkMode ? (
                <FiSun size={18} />
              ) : (
                <FiMoon size={18} />
              )}

            </button>

            {/* MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 backdrop-blur-md text-white"
            >

              {isOpen ? (
                <HiX size={24} />
              ) : (
                <HiOutlineMenuAlt3 size={24} />
              )}

            </button>

          </div>

        </div>

      </div>

    {/* PREMIUM MOBILE MENU */}
<div
  className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
    isOpen
      ? "opacity-100 visible"
      : "opacity-0 invisible"
  }`}
>

  {/* BACKDROP */}
  <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl"></div>

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6">

    {/* LINKS */}
    <div className="flex flex-col items-center gap-5">

      {navLinks.map((link, index) => (

        <Link
          key={link.name}
          to={link.path}
          onClick={() => setIsOpen(false)}
          className={`text-3xl font-black transition-all duration-300 ${
            isActive(link.path)
              ? "text-orange-400"
              : "text-white hover:text-orange-400"
          }`}
          style={{
            transitionDelay: `${index * 100}ms`,
          }}
        >

          {link.name}

        </Link>

      ))}

    </div>

    {/* WHATSAPP BUTTON */}
    <a
      href="https://wa.me/918824841765"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-14 bg-green-500 hover:bg-green-600 px-8 py-5 rounded-2xl font-bold text-lg flex items-center gap-3 transition duration-300 hover:scale-105 shadow-2xl"
    >

      <FaWhatsapp size={24} />

      Chat on WhatsApp

    </a>

  </div>

</div>

    </nav>
  );
};

export default Navbar;
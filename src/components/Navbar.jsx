import React, { useState, useEffect, useSyncExternalStore } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import { navLinks } from "../data/navLinks";
import { whatsappUrl } from "../config/site";
import { subscribeTheme, getThemeSnapshot, getThemeServerSnapshot, setDarkMode } from "../lib/themeStore";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDarkMode = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  // Automatically close mobile menu on route change
  useEffect(() => {
    const closeMenuTimeout = setTimeout(() => {
      setIsOpen(false);
    }, 0);

    return () => clearTimeout(closeMenuTimeout);
  }, [location.pathname]);

  // Safe Escape Key Support to close menu
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Scroll position detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme configuration injector
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setDarkMode(!isDarkMode);

  // Route matching with nested pages support
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  // Body scroll lock tracking
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const shouldUseSolidNavbar = scrolled || location.pathname !== "/";

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        shouldUseSolidNavbar
          ? "bg-slate-950/85 dark:bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* RESPONSIVE LOGO SECTION */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 sm:gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-xl"
            aria-label="Laxminath Iron Home"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 flex items-center justify-center shadow-xl shadow-orange-500/10 group-hover:scale-105 transition-all duration-300">
              <span className="text-black font-black text-base sm:text-lg">LI</span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-white group-hover:text-orange-400 transition-colors duration-300 whitespace-nowrap">
                Laxminath Iron
              </span>
              <span className="hidden sm:block text-[11px] font-bold uppercase tracking-widest text-slate-300 dark:text-slate-400">
                Construction Material Supplier
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-orange-500/10 scale-105"
                    : "text-slate-200 hover:bg-white/10 hover:text-orange-400"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* WHATSAPP ACTION */}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 bg-green-500 hover:bg-green-600 px-5 py-3 rounded-xl font-black text-white text-sm transition-all duration-300 hover:scale-105 shadow-xl shadow-green-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>

            {/* THEME TOGGLE */}
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle Theme Mode"
              className="ml-1 w-11 h-11 rounded-xl flex items-center justify-center bg-white/10 border border-white/5 backdrop-blur-md text-white hover:bg-white/20 hover:scale-105 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <FiSun size={19} className="hidden text-amber-400 dark:block" />
              <FiMoon size={19} className="dark:hidden" />
            </button>
          </div>

          {/* RESPONSIVE MOBILE TOGGLES */}
          <div className="lg:hidden flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label="Toggle Theme Mode"
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <FiSun size={18} className="hidden text-amber-400 dark:block" />
              <FiMoon size={18} className="dark:hidden" />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label="Toggle Menu"
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/10 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <HiOutlineMenuAlt3 size={24} />
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU DRAWER */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 transform ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop background layer */}
        <div 
          className="absolute inset-0 bg-slate-950/95 backdrop-blur-3xl" 
          onClick={() => setIsOpen(false)}
        />

        {/* Sticky close button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close navigation menu"
          className="absolute top-5 right-5 z-20 w-11 h-11 rounded-xl flex items-center justify-center bg-white/10 text-white hover:bg-white/20 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
        >
          <HiX size={26} />
        </button>

        {/* Mobile menu scroll container */}
        <div 
          className="relative z-10 h-dvh w-full overflow-y-auto px-6"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex min-h-full items-center justify-center py-24">
            <div 
              className="flex w-full max-w-xs flex-col items-center gap-6"
              onClick={(event) => event.stopPropagation()}
            >
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl px-4 py-1 text-3xl font-black tracking-tight transition-all duration-300 transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 ${
                    isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  } ${
                    isActive(link.path)
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400"
                      : "text-white hover:text-orange-400"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 75}ms` : "0ms",
                  }}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className={`mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-green-500 px-8 py-4 text-lg font-black text-white shadow-2xl shadow-green-500/20 transition duration-300 hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 transform ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: isOpen ? `${navLinks.length * 75}ms` : "0ms",
                }}
              >
                <FaWhatsapp size={24} />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
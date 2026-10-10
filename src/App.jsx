import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryFab from './components/EnquiryFab';
import EnquiryProvider from './context/EnquiryProvider';

// Import Pages
import Home from './pages/Home';
import Sariya from './pages/Sariya';
import Cement from './pages/Cement';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Enquiry from './pages/Enquiry';

// Inline scroll-reset helper (no extra file needed)
const ScrollHandler = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // "instant" so the CSS smooth-scroll setting doesn't animate every page change.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    // The router is supplied by main.jsx (browser) or entry-server.jsx (prerender).
    <EnquiryProvider>
      {/* Respect the visitor's "reduce motion" setting for all animations. */}
      <MotionConfig reducedMotion="user">
      <ScrollHandler />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-orange-500 focus:px-5 focus:py-3 focus:font-black focus:text-black"
      >
        Skip to main content
      </a>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        
        <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sariya" element={<Sariya />} />
            <Route path="/cement" element={<Cement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <EnquiryFab />
      </div>
      </MotionConfig>
    </EnquiryProvider>
  );
}

export default App;
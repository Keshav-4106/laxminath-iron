import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import Sariya from './pages/Sariya';
import Cement from './pages/Cement';
import Contact from './pages/Contact';



function App() {
  return (
    <Router>
      {/* Flex container ensures the footer always pushes to the bottom 
        of the screen even if the page content is short.
      */}
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sariya" element={<Sariya />} />
            <Route path="/cement" element={<Cement />} />
            <Route path="/contact" element={<Contact />} />
          
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
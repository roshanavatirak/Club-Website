import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle, Instagram, Linkedin } from 'lucide-react';
import Home from './components/Home';
import PastEvents from './components/PastEvents';
import FutureEvents from './components/FutureEvents';
import EventDetails from './components/EventDetails';
import FutureEventDetails from './components/FutureEventDetails';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/past-events/:id" element={<EventDetails />} />
          <Route path="/future-events" element={<FutureEvents />} />
          <Route path="/future-events/:id" element={<FutureEventDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer with Social Links */}
        <footer className={`${isDark ? 'bg-gray-900 text-gray-100' : 'bg-gray-900 text-white'} py-12`}>
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
              <div className="flex justify-center space-x-6 mb-8">
                <a 
                  href="https://wa.me/+919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-green-400 transition-colors"
                  aria-label="Join our WhatsApp group"
                >
                  <MessageCircle className="w-8 h-8" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/sipna-coders-club" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a 
                  href="https://www.instagram.com/sipna_coders_club" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-pink-400 transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-8 h-8" />
                </a>
              </div>
              <p className="text-gray-400">© 2024 Sipna Coders Club. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleDarkMode: () => void;
}

function Navbar({ isDark, toggleDarkMode }: NavbarProps) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/future-events', label: 'Upcoming Events' },
    { path: '/past-events', label: 'Past Events' },
    { path: '/team', label: 'Team' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Connect Us' },
  ];

  const NavLink = ({ path, label }: { path: string; label: string }) => (
    <Link
      to={path}
      className={`relative group ${
        isActive(path)
          ? isDark
            ? 'text-blue-400'
            : 'text-blue-600'
          : isDark
          ? 'text-gray-300'
          : 'text-gray-600'
      } transition-colors duration-200 hover:text-blue-500`}
      onClick={() => setIsMenuOpen(false)}
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full ${
          isActive(path) ? 'w-full' : ''
        }`}
      />
    </Link>
  );

  return (
    <nav className={`fixed w-full z-50 ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm transition-colors duration-300 shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Club Name */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Code2 className={`relative w-8 h-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Sipna Coder's Club
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.path} {...link} />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                isDark
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors duration-200`}
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? (
                <X className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-800'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-800'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? 'max-h-96' : 'max-h-0'
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <NavLink key={link.path} {...link} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
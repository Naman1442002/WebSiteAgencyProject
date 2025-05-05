import React, { useState } from 'react';
import { cn } from '../../utils/cn';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection, isNavigating, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Local Web Solutions
        </h1>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {['home', 'services', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={cn(
                    "text-gray-300 hover:text-white transition-colors",
                    activeSection === section && 'text-white font-semibold',
                    isNavigating && 'pointer-events-none'
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(section);
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA Button */}
        <Button
          variant="outline"
          className="hidden md:flex text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 border-blue-500/30"
          onClick={() => handleNavClick('contact')}
        >
          Get a Quote
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md md:hidden">
            <nav className="px-4 py-6">
              <ul className="space-y-4">
                {['home', 'services', 'projects', 'contact'].map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      className={cn(
                        "block text-gray-300 hover:text-white transition-colors py-2",
                        activeSection === section && 'text-white font-semibold'
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(section);
                      }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
                <li>
                  <Button
                    variant="outline"
                    className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 border-blue-500/30"
                    onClick={() => handleNavClick('contact')}
                  >
                    Get a Quote
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
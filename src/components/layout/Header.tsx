import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Cpu } from 'lucide-react';
import { navLinks } from '../../data/navLinks';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Cpu size={28} className="text-primary mr-2" />
          <span className="text-xl font-bold text-primary">AI Automation</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className={`font-medium transition-colors duration-300 cursor-pointer ${
                    isScrolled ? 'text-neutral-dark hover:text-primary' : 'text-white hover:text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button 
            className="text-primary focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block text-neutral-dark hover:text-primary font-medium py-2"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}
    </header>
  );
};

export default Header;
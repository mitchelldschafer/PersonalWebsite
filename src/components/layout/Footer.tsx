import React from 'react';
import { Link } from 'react-scroll';
import { Cpu, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { navLinks } from '../../data/navLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center mb-4">
              <Cpu size={28} className="text-secondary mr-2" />
              <span className="text-xl font-bold">AI Automation</span>
            </div>
            <p className="text-primary-light mb-6">
              Transforming businesses through intelligent automation and AI-driven solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-primary-light hover:text-secondary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-primary-light hover:text-secondary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-primary-light hover:text-secondary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="text-primary-light hover:text-secondary transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-primary-light mb-4">
              Subscribe to our newsletter for the latest AI trends and insights.
            </p>
            <form className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md focus:outline-none text-neutral-dark w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded-r-md transition-colors duration-300 mt-2 sm:mt-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-primary-light/30 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-light text-sm">
            &copy; {new Date().getFullYear()} AI Automation Specialist. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-primary-light hover:text-secondary text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-light hover:text-secondary text-sm transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      
      {/* Back to top button */}
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        className="fixed bottom-6 right-6 bg-secondary p-3 rounded-full shadow-lg cursor-pointer hover:bg-secondary-dark transition-colors duration-300"
        aria-label="Back to top"
      >
        <ArrowUp size={20} className="text-white" />
      </Link>
    </footer>
  );
};

export default Footer;
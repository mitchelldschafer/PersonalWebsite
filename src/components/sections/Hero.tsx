import React from 'react';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from '../ui/ParticleBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient and particles */}
      <div className="absolute inset-0 bg-gradient-primary z-0">
        <ParticleBackground />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-3xl">
          <div className="mb-4">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary bg-opacity-20 text-secondary text-sm font-medium mb-2">
              AI Automation Specialist
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-white">
            <span className="block typing-effect">AI Automation Solutions</span>
            <span className="block mt-2">That Drive Business Results</span>
          </h1>
          
          <p className="text-xl text-primary-light mb-8 max-w-2xl">
            Transforming complex business challenges into powerful automated solutions through custom AI development, workflow optimization, and strategic implementation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-primary flex items-center justify-center sm:justify-start"
            >
              See My Work
              <ArrowRight size={20} className="ml-2" />
            </Link>
            
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-outline border-white text-white hover:bg-white hover:text-primary flex items-center justify-center sm:justify-start"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      {/* Hexagon decorations */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-secondary opacity-10 hexagon animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary opacity-10 hexagon animate-pulse"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-secondary-dark opacity-10 hexagon animate-pulse"></div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  expanded: boolean;
  toggleExpand: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, expanded, toggleExpand }) => {
  // Dynamically get the icon component
  const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons];
  
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`card hover:shadow-lg transition-all duration-300 ${
        expanded ? 'shadow-lg' : ''
      }`}
    >
      <div className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
            {IconComponent && <IconComponent size={24} className="text-primary" />}
          </div>
          <h3 className="text-xl font-bold flex-1">{service.title}</h3>
        </div>
        
        <p className="text-neutral mb-4">{service.description}</p>
        
        <button
          onClick={toggleExpand}
          className="flex items-center text-secondary hover:text-secondary-dark transition-colors duration-300"
        >
          <span className="mr-1">{expanded ? 'Read Less' : 'Learn More'}</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-neutral-light/30"
            >
              <p className="text-neutral">{service.details}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
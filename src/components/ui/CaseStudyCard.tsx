import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { CaseStudy } from '../../types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  expanded: boolean;
  toggleExpand: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, expanded, toggleExpand }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.5 }}
      className="card group overflow-hidden"
    >
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <span className="inline-block py-1 px-2 rounded-full bg-primary bg-opacity-10 text-primary text-xs font-medium mb-3">
          {caseStudy.industry}
        </span>
        
        <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
        
        <p className="text-neutral text-sm mb-4">
          {caseStudy.challenge}
        </p>
        
        <button
          onClick={toggleExpand}
          className="flex items-center text-secondary hover:text-secondary-dark transition-colors duration-300"
        >
          <span className="mr-1">{expanded ? 'View Less' : 'View Details'}</span>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-neutral-light/30 space-y-3"
            >
              <div>
                <h4 className="font-medium text-primary-dark mb-1">Solution</h4>
                <p className="text-neutral text-sm">{caseStudy.solution}</p>
              </div>
              
              <div>
                <h4 className="font-medium text-primary-dark mb-1">Outcome</h4>
                <p className="text-neutral text-sm">{caseStudy.outcome}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default CaseStudyCard;
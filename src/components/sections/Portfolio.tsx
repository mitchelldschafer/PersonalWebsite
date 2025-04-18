import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { caseStudies } from '../../data/caseStudies';
import CaseStudyCard from '../ui/CaseStudyCard';

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [filter, setFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const toggleCaseStudy = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  const categories = ['all', ...Array.from(new Set(caseStudies.map(cs => cs.category)))];
  
  const filteredCaseStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === filter);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  return (
    <section id="portfolio" className="section bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.span
            variants={headerVariants}
            className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          
          <motion.h2
            variants={headerVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Case Studies & Success Stories
          </motion.h2>
          
          <motion.p
            variants={headerVariants}
            className="max-w-2xl mx-auto text-neutral mb-8"
          >
            Explore real-world examples of how AI automation has transformed businesses and delivered measurable results.
          </motion.p>
          
          <motion.div 
            variants={headerVariants}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`py-2 px-4 rounded-full text-sm transition-colors duration-300 ${
                  filter === category
                    ? 'bg-secondary text-white'
                    : 'bg-white text-neutral hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCaseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.id}
              caseStudy={caseStudy}
              expanded={expandedId === caseStudy.id}
              toggleExpand={() => toggleCaseStudy(caseStudy.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
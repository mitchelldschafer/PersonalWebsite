import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as LucideIcons from 'lucide-react';
import { ProcessStep as ProcessStepType } from '../../types';

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
  isAlternate: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, index, isAlternate }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  // Dynamically get the icon component
  const IconComponent = LucideIcons[step.icon as keyof typeof LucideIcons];
  
  const isEven = index % 2 === 0;
  const alignment = isAlternate ? (isEven ? 'left' : 'right') : 'left';
  
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: alignment === 'left' ? -30 : 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  
  const numberVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2,
      },
    },
  };
  
  return (
    <div
      ref={ref}
      className={`md:grid md:grid-cols-12 items-center relative mb-10 md:mb-0 md:min-h-[150px]`}
    >
      {/* Left content for even items on larger screens */}
      {isAlternate && (
        <>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`${
              isEven ? 'md:col-span-5 md:text-right md:pr-12' : 'md:col-span-5 md:col-start-8 md:text-left md:pl-12'
            } md:order-1 order-2 mb-6 md:mb-0`}
          >
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-neutral">{step.description}</p>
          </motion.div>
          
          {/* Center number */}
          <motion.div
            variants={numberVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="md:col-span-2 md:flex justify-center order-1 md:order-2 hidden"
          >
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
              {index + 1}
            </div>
          </motion.div>
          
          {/* Right content for odd items on larger screens */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`${
              isEven ? 'md:col-span-5 md:col-start-8 md:text-left md:pl-12' : 'md:col-span-5 md:text-right md:pr-12'
            } order-3 hidden md:block`}
          >
            <div className="bg-white p-4 rounded-lg shadow-md inline-flex items-center justify-center">
              {IconComponent && <IconComponent size={32} className="text-primary" />}
            </div>
          </motion.div>
        </>
      )}
      
      {/* For mobile or non-alternate layout */}
      {!isAlternate && (
        <div className="flex items-start space-x-6">
          <motion.div
            variants={numberVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex-shrink-0"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
              {index + 1}
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-neutral">{step.description}</p>
          </motion.div>
        </div>
      )}
      
      {/* Mobile layout */}
      <div className="md:hidden flex items-center space-x-4 mb-6">
        <motion.div
          variants={numberVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">
            {index + 1}
          </div>
        </motion.div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          {IconComponent && <IconComponent size={24} className="text-primary" />}
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
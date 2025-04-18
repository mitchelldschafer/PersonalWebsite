import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/skills';
import SkillCard from '../ui/SkillCard';
import TerminalAnimation from '../ui/TerminalAnimation';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="section bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          {/* Left column - Photo and terminal */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="AI Automation Specialist"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-10 -right-10 w-full max-w-xs">
                <TerminalAnimation />
              </div>
            </div>
          </motion.div>

          {/* Right column - Text content */}
          <div className="order-1 lg:order-2">
            <motion.span
              variants={itemVariants}
              className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4"
            >
              About Me
            </motion.span>
            
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-6">
              Turning Complex AI Concepts Into Business Solutions
            </motion.h2>
            
            <motion.p variants={itemVariants} className="mb-4">
              With extensive experience across multiple industries, I specialize in implementing AI solutions that transform complex workflows and automate repetitive tasks. My expertise lies in identifying opportunities for automation and developing tailored solutions that deliver measurable business value.
            </motion.p>
            
            <motion.p variants={itemVariants} className="mb-6">
              By combining technical expertise with a deep understanding of business processes, I help organizations streamline their operations and achieve significant efficiency gains through strategic AI implementation and process automation.
            </motion.p>
            
            <motion.h3 variants={itemVariants} className="text-xl font-bold mb-4">
              Expertise & Technologies
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
            >
              {skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-8">
              <a 
                href="#"
                className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors duration-300"
              >
                <span className="mr-2">View my complete profile</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
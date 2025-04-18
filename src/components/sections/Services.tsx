import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
    <section id="services" className="section bg-white">
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
            Services
          </motion.span>
          
          <motion.h2
            variants={headerVariants}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            AI Solutions Tailored to Your Business
          </motion.h2>
          
          <motion.p
            variants={headerVariants}
            className="max-w-2xl mx-auto text-neutral"
          >
            From strategic planning to implementation and optimization, I provide end-to-end AI services designed to transform your business operations.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              expanded={expandedId === service.id}
              toggleExpand={() => toggleExpand(service.id)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
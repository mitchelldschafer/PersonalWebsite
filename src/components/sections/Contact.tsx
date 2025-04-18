import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="contact" className="section bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Left column - Contact form */}
          <div>
            <motion.span
              variants={itemVariants}
              className="inline-block py-1 px-3 rounded-full bg-primary bg-opacity-10 text-primary text-sm font-medium mb-4"
            >
              Get In Touch
            </motion.span>
            
            <motion.h2 
              variants={itemVariants} 
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Let's Discuss Your AI Project
            </motion.h2>
            
            <motion.p 
              variants={itemVariants} 
              className="text-neutral mb-8 max-w-lg"
            >
              Whether you're looking to automate processes, implement AI solutions, or simply explore the possibilities, I'm here to help. Let's connect and discuss how we can transform your business.
            </motion.p>
            
            <motion.form variants={containerVariants} className="space-y-6">
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border border-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your email"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-md border border-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What's this about?"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-neutral-light focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell me about your project..."
                ></textarea>
              </motion.div>
              
              <motion.button
                variants={itemVariants}
                type="submit"
                className="btn btn-primary flex items-center justify-center"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </motion.button>
            </motion.form>
          </div>
          
          {/* Right column - Contact info and map */}
          <div>
            <motion.div
              variants={containerVariants}
              className="bg-white rounded-lg shadow-lg p-8 mb-8"
            >
              <motion.h3 
                variants={itemVariants} 
                className="text-xl font-bold mb-6 border-b border-neutral-light pb-4"
              >
                Contact Information
              </motion.h3>
              
              <motion.div variants={containerVariants} className="space-y-6">
                <motion.div variants={itemVariants} className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-dark">Email</p>
                    <a href="mailto:contact@aiautomation.com" className="text-primary hover:text-primary-dark transition-colors duration-300">
                      contact@aiautomation.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-dark">Phone</p>
                    <a href="tel:+11234567890" className="text-primary hover:text-primary-dark transition-colors duration-300">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-dark">Location</p>
                    <p className="text-neutral">San Francisco, California</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mt-8">
                <h4 className="font-medium text-neutral-dark mb-3">Availability</h4>
                <p className="text-neutral mb-2">
                  <span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM PST
                </p>
                <p className="text-sm text-neutral">
                  I typically respond to inquiries within 24 hours during business days.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201215.6952407419!2d-122.5130414706332!3d37.757582093695896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1644286841497!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Map"
              ></iframe>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
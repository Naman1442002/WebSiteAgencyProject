import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 px-4"
        >
          Empowering Local Businesses Online
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed px-4"
        >
          We specialize in creating affordable, professional websites for small businesses in our community.
          Let us help you connect with more customers and grow your business.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.6 }}
          className="px-4"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600
                       shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Get a Website
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
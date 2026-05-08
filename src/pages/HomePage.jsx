import React from 'react';
import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import Features from '../components/Features.jsx';
import Statistics from '../components/Statistics.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { motion } from 'motion/react';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="page-transition"
    >
      <main>
        <Hero />
        <Services />
        <Features />
        <Statistics />
        <ContactForm />
      </main>
    </motion.div>
  );
};
export default HomePage;

import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const CallToAction = ({ onOpenContact, onOpenAudit }) => {
  return (
    <>
      {/* Free Audit */}
      <section className="py-24 px-6">
        <Reveal>
          <div className="max-w-5xl mx-auto bg-surface-container rounded-[2rem] p-12 text-center relative overflow-hidden">
            <motion.div 
              initial={{ rotate: -15, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 0.1 }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 p-8"
            >
              <span className="material-symbols-outlined text-9xl">assessment</span>
            </motion.div>
            <h2 className="font-headline font-bold text-4xl mb-4 text-primary relative z-10">Get a Free Website & Growth Audit</h2>
            <p className="text-lg text-on-surface-variant mb-8 max-w-2xl mx-auto relative z-10">We analyze your website, SEO, and digital presence and deliver a clear report within 24 hours. No cost. No commitment.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenAudit}
              className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-primary text-on-primary rounded-xl font-bold text-lg hover:bg-primary-container transition-all shadow-lg relative z-10"
            >
              Request Free Audit
            </motion.button>

          </div>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <Reveal>
          <div className="max-w-4xl mx-auto">
            <h2 className="font-headline font-black text-5xl mb-6 text-primary leading-tight">Let’s Build, Grow, and Automate Your Business</h2>
            <p className="text-xl text-on-surface-variant mb-12">Stop struggling with slow growth and missed opportunities. Let’s create a system that actually supports your business.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 bg-primary-container text-on-primary rounded-xl font-bold text-lg shadow-xl"
              >
                Get Started
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-5 border-2 border-primary-container text-primary-container rounded-xl font-bold text-lg hover:bg-surface-container transition-all"
              >
                Contact Us
              </motion.button>
            </div>

          </div>
        </Reveal>
      </section>
    </>
  );
};

export default CallToAction;

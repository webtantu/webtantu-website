import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Process = () => {
  return (
    <section className="py-24 px-6 bg-surface-container-low" id="process">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="font-headline font-bold text-4xl mb-4 text-primary">The WebTantu Process</h2>
            <p className="text-lg text-on-surface-variant">A simple and effective approach to building and growing your business online.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-outline-variant/30 origin-left"
          ></motion.div>
          
          {[
            { num: '01', title: 'Discover', desc: 'Modernizing platforms that no longer represent your brand.' },
            { num: '02', title: 'Plan', desc: 'Visionaries who want automated growth mechanisms.' },
            { num: '03', title: 'Build', desc: 'Agile development with constant feedback loops.' },
            { num: '04', title: 'Optimize', desc: 'Continuous testing and scaling for maximum ROI.' }
          ].map((item, idx) => (
            <Reveal key={idx} delay={0.2 + (idx * 0.15)}>
              <div className="relative z-10 text-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-primary"
                >
                  <span className="font-headline font-black text-primary">{item.num}</span>
                </motion.div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;

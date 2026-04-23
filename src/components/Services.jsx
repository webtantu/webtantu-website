import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Services = () => {
  return (
    <section className="py-24 px-6 bg-surface" id="services">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-headline font-bold text-4xl mb-4 text-primary">Core Services</h2>
            <p className="text-lg text-on-surface-variant">A complete solution to build, grow, and automate your business.</p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: 'language', title: 'Website Development', desc: 'Scalable, secure, and lightning-fast websites built with modern frameworks.' },
            { icon: 'trending_up', title: 'SEO & Digital Growth', desc: 'Performance SEO that brings organic traffic that actually converts.' },
            { icon: 'edit_note', title: 'Content & Social', desc: 'Strategic content pipelines designed to build your brand authority.' },
            { icon: 'psychology', title: 'AI Automation', desc: 'Intelligent chatbots and automated lead nurture workflows.' }
          ].map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="p-8 bg-surface-container-lowest rounded-2xl shadow-[0px_8px_16_rgba(0,52,43,0.04)] h-full"
              >
                <span className="material-symbols-outlined text-primary mb-6 text-3xl">{item.icon}</span>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-on-surface-variant text-sm">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-primary text-on-primary px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <p className="text-center text-on-primary-container font-bold uppercase tracking-widest mb-16">We solve real business problems — not just build websites.</p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-on-primary-container/20"></div>
          
          <Reveal delay={0.1} y={0}>
            <div>
              <h3 className="text-3xl font-headline font-bold mb-10">The Challenges</h3>
              <ul className="space-y-8">
                {[
                  { icon: 'cancel', title: 'Slow websites', desc: 'Losing customers before they even see your offer.' },
                  { icon: 'cancel', title: 'Low visibility', desc: 'Hidden on page 10 of Google while competitors dominate.' },
                  { icon: 'cancel', title: 'Poor engagement', desc: 'Users arriving but leaving instantly without taking action.' },
                  { icon: 'cancel', title: 'Manual work', desc: 'Repetitive tasks eating up your time and focus.' }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="material-symbols-outlined text-error mt-1">{item.icon}</span>
                    <div>
                      <h5 className="font-bold text-xl">{item.title}</h5>
                      <p className="text-on-primary-container/80">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
          
          <Reveal delay={0.3} y={0}>
            <div>
              <h3 className="text-3xl font-headline font-bold mb-10">How WebTantu Solves Them</h3>
              <ul className="space-y-8">
                {[
                  { icon: 'check_circle', title: 'High-performance websites', desc: 'Optimized for speed and high conversion rates.' },
                  { icon: 'check_circle', title: 'SEO strategies', desc: 'Data-driven ranking growth to get you noticed.' },
                  { icon: 'check_circle', title: 'Content growth systems', desc: 'Strategic messaging that builds trust and authority.' },
                  { icon: 'check_circle', title: 'AI-powered tools', desc: 'Smart automation that handles operations and leads.' }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-start gap-4"
                  >
                    <span className="material-symbols-outlined text-secondary-container mt-1">{item.icon}</span>
                    <div>
                      <h5 className="font-bold text-xl">{item.title}</h5>
                      <p className="text-secondary-fixed-dim">{item.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;

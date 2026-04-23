import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';

const Features = () => {
  return (
    <>
      {/* Who This Is For */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-headline font-bold text-3xl mb-16 text-center text-primary">Who This Is For</h2>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delay={0.1}>
              <motion.div whileHover={{ y: -8 }} className="bg-surface-container-lowest p-10 rounded-2xl shadow-[0px_8px_16_rgba(0,52,43,0.04)] h-full">
                <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-white mb-6">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h3 className="font-bold text-xl mb-4">Startups launching fast</h3>
                <p className="text-on-surface-variant">Needing a strong digital foundation to scale from zero to one with speed and efficiency.</p>
              </motion.div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <motion.div whileHover={{ y: -8 }} className="bg-surface-container-lowest p-10 rounded-2xl shadow-[0px_8px_16_rgba(0,52,43,0.04)] h-full">
                <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-white mb-6">
                  <span className="material-symbols-outlined">visibility_off</span>
                </div>
                <h3 className="font-bold text-xl mb-4">Businesses struggling with low visibility</h3>
                <p className="text-on-surface-variant">Modernizing platforms that no longer represent your brand or capture your market potential.</p>
              </motion.div>
            </Reveal>
            
            <Reveal delay={0.3}>
              <motion.div whileHover={{ y: -8 }} className="bg-surface-container-lowest p-10 rounded-2xl shadow-[0px_8px_16_rgba(0,52,43,0.04)] h-full">
                <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-white mb-6">
                  <span className="material-symbols-outlined">auto_awesome</span>
                </div>
                <h3 className="font-bold text-xl mb-4">Founders building scalable businesses</h3>
                <p className="text-on-surface-variant">Visionaries who want automated growth mechanisms and high-performance technical architecture.</p>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="mb-16">
              <h2 className="font-headline font-bold text-4xl mb-4 text-primary">What You Get</h2>
              <p className="text-lg text-on-surface-variant">Everything we build is focused on real business growth.</p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Reveal delay={0.1}>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-primary p-8 rounded-2xl text-on-primary flex flex-col justify-between h-full">
                  <span className="material-symbols-outlined text-4xl mb-6">speed</span>
                  <h3 className="text-2xl font-bold">Faster website performance</h3>
                </motion.div>
              </Reveal>
              <Reveal delay={0.2}>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-secondary-container p-8 rounded-2xl text-on-secondary-container flex flex-col justify-between h-full">
                  <span className="material-symbols-outlined text-4xl mb-6">touch_app</span>
                  <h3 className="text-2xl font-bold">Better user experience</h3>
                </motion.div>
              </Reveal>
              <Reveal delay={0.3}>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-surface-container-high p-8 rounded-2xl flex flex-col justify-between h-full">
                  <span className="material-symbols-outlined text-4xl mb-6 text-primary">search_insights</span>
                  <h3 className="text-2xl font-bold">Increased visibility on Google</h3>
                </motion.div>
              </Reveal>
              <Reveal delay={0.4}>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-tertiary-container p-8 rounded-2xl text-on-tertiary flex flex-col justify-between h-full">
                  <span className="material-symbols-outlined text-4xl mb-6">hub</span>
                  <h3 className="text-2xl font-bold">Stronger social presence</h3>
                </motion.div>
              </Reveal>
            </div>
            
            <div className="lg:col-span-4 flex">
              <Reveal delay={0.5}>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-primary-container p-8 rounded-2xl text-on-primary flex flex-col justify-center text-center h-full w-full">
                  <span className="material-symbols-outlined text-6xl mb-6">smart_toy</span>
                  <h3 className="text-3xl font-bold mb-4">AI Agents and Automation</h3>
                  <p className="text-on-primary-container">Workflows that work while you sleep, capturing and nurturing every opportunity.</p>
                </motion.div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

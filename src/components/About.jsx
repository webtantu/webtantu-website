'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Reveal from './Reveal';
import aboutImg from '../assets/Gemini_Generated_Image_g2lor1g2lor1g2lo.png';

const About = () => {
  return (
    <>
      {/* Why Choose Us */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl shadow-2xl w-full overflow-hidden"
            >
              <Image 
                src={aboutImg} 
                alt="Abstract 3D digital engineering visualization showing complex network connections, neural pathways, and technological nodes in a clean architectural style" 
                className="w-full h-auto"
                priority
              />
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="font-headline font-bold text-4xl mb-8 text-primary">Why Choose WebTantu</h2>
            </Reveal>
            <div className="space-y-6">
              {[
                { icon: 'insights', title: 'Focused on real business growth', desc: 'We don\'t just build, we ensure your tech drives revenue.' },
                { icon: 'inventory_2', title: 'Complete solution', desc: 'From code to content to automation, we handle it all.' },
                { icon: 'architecture', title: 'Modern tools', desc: 'Always building with future-proof tech like React and AI.' },
                { icon: 'speed', title: 'Fast execution', desc: 'Quick turnaround times without compromising architectural quality.' }
              ].map((item, idx) => (
                <Reveal key={idx} delay={0.2 + (idx * 0.1)} y={20}>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-secondary text-3xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      <p className="text-on-surface-variant">{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.6}>
              <p className="mt-10 font-medium italic text-on-surface-variant border-l-4 border-primary pl-4">
                "We work closely with you to ensure everything aligns with your business goals."
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-primary text-on-primary text-center px-6 overflow-hidden" id="about">
        <div className="max-w-3xl mx-auto">
          <Reveal delay={0.1}>
            <h2 className="font-headline font-bold text-4xl mb-8">About WebTantu</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-xl leading-relaxed text-on-primary-container">
              WebTantu is a premier digital solutions company dedicated to the architectural precision of web engineering. We specialize in helping modern businesses build their foundation, grow their audience, and automate their operations through innovative design and intelligent systems.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;

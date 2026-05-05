'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useModal } from '@/contexts/ModalContext';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const { openConsultation, openAudit } = useModal();
  const router = useRouter();

  return (
    <header id="home" className="relative pt-40 pb-24 px-6 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6"
          >
            Websites. Growth. AI Automation.
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-headline font-extrabold text-5xl lg:text-7xl leading-[1.1] text-primary tracking-tight mb-6"
          >
            Build, Grow & Automate Your Digital Presence
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-on-surface-variant max-w-2xl mb-8 leading-relaxed"
          >
            WebTantu helps businesses build high-performing websites, grow with SEO-led systems, and automate operations using AI-powered workflows designed for scalable digital growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={openConsultation}
              className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-primary-container text-on-primary rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Get Free Consultation
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={openAudit}
              className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-primary-container text-primary-container rounded-xl font-bold hover:bg-surface-container transition-all"
            >
              Request Free Audit
            </motion.button>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center gap-4 text-sm font-medium text-on-surface-variant/80"
          >
          </motion.div>
        </div>
        
        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
          >
            <img className="w-full h-auto" alt="Dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKhJHEOrxZ4bxsmE_Yjhdf20ORyCCmGhPycxXbbsheKSHLv-OKXUxe8nM8jB_f-PlawSVxx7E2LTM5Wfy_9s0wOFa8XjVMIpaQUiG8_DEAFx6di8rgyZNMf4FzaZQXhVlP3JYpPysa0WbNzZpMhlhAkwHjG4-cMzUiDvfDiMGZSqICLlcrx5tllayF7hxI5IEZ-zvl_EjBOe-Gmu_5-LN-G-ULKfkVGrnVEC8VpyYr9ujA4GXCHcaLcTKmGEs5HMChdP3_mGIDbhSN" />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
            transition={{ 
              opacity: { duration: 0.6, delay: 0.8 },
              x: { duration: 0.6, delay: 0.8 },
              y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.4 }
            }}
            className="absolute -bottom-6 -left-6 z-20 glass-panel p-6 rounded-2xl shadow-xl max-w-[240px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 bg-secondary-fixed rounded-lg text-on-secondary-fixed">
                <span className="material-symbols-outlined">bolt</span>
              </span>
              <span className="font-bold text-sm">Performance Up</span>
            </div>
            <div className="text-2xl font-black text-primary">+124%</div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

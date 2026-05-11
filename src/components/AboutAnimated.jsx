'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    y: -10,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export default function AboutAnimated({ values }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isMounted) return <div className="opacity-0">Loading...</div>;

  return (
    <div className="overflow-hidden">
      {/* Immersive Hero Section */}
      <section className="relative min-h-[80vh] flex items-center px-6 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/about-hero.png" 
            alt="Abstract digital growth" 
            fill 
            className="object-cover opacity-40 brightness-[0.4]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/0 via-surface/50 to-surface" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md border border-primary/20">
              Our Story & Mission
            </p>
            <h1 className="font-headline font-black text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-primary tracking-tight mb-8 max-w-4xl">
              WebTantu exists to <span className="text-secondary">bridge the gap</span> between code and growth.
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant/80 max-w-2xl leading-relaxed mb-10">
              We don't just build websites; we build the full digital engine that powers your business's next decade of growth.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-10 py-5 bg-primary text-on-primary rounded-2xl font-bold text-lg shadow-2xl hover:bg-primary-container hover:scale-105 transition-all group"
            >
              Partner with us
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-6 bg-surface relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="lg:col-span-7">
              <motion.h2 variants={itemVariants} className="font-headline font-bold text-4xl md:text-5xl text-primary mb-8 tracking-tight">
                Why WebTantu was built
              </motion.h2>
              <motion.div variants={itemVariants} className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>
                  WebTantu was created for businesses that are tired of digital work that looks busy but does not move the numbers. Many companies have a website, post content, and collect leads, but the pieces do not work together.
                </p>
                <p>
                  We help turn those disconnected parts into a single, cohesive system. When design, development, SEO, and automation work in harmony, growth becomes predictable instead of accidental.
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div 
                variants={itemVariants}
                className="aspect-square relative rounded-[40px] overflow-hidden shadow-2xl group"
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10" />
                <Image 
                  src="/logo.png" 
                  alt="WebTantu Logo" 
                  fill 
                  className="object-contain p-20 scale-150 grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                />
              </motion.div>
              {/* Floating accent elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section - Glassmorphism Grid */}
      <section className="py-32 px-6 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -ml-64 -mb-64" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
            >
              Our DNA
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-headline font-bold text-4xl md:text-5xl text-primary"
            >
              What we stand for
            </motion.h2>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover="hover"
                className="p-10 rounded-[32px] bg-surface-container-low border border-outline-variant/10 shadow-xl backdrop-blur-xl relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="font-headline font-bold text-2xl text-primary mb-4">{value.title}</h3>
                  <p className="text-on-surface-variant/80 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

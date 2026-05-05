'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TermsOfServiceModal = ({ isOpen, onClose }) => {
  // Lock body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const overlayVariants = {
    hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
    visible: { opacity: 1, backdropFilter: 'blur(12px)', transition: { duration: 0.4 } },
    exit: { opacity: 0, backdropFilter: 'blur(0px)', transition: { duration: 0.4 } }
  };

  const modalVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.98 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', damping: 25, stiffness: 120 } 
    },
    exit: { 
      y: 40, 
      opacity: 0, 
      scale: 0.98,
      transition: { duration: 0.3, ease: 'easeIn' } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="absolute inset-0 bg-on-surface/40" onClick={onClose}></div>

          <motion.div 
            className="relative bg-surface w-full max-w-4xl max-h-[85vh] rounded-3xl sm:rounded-[2.5rem] shadow-2xl flex flex-col z-10 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="bg-primary/95 px-8 md:px-12 py-8 text-on-primary relative shrink-0">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center rounded-full text-white hover:bg-white/20 transition-colors z-20"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
              
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-secondary-container/20 text-secondary-container rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Legal</span>
                <h2 className="font-headline font-black text-3xl mb-2">Terms of Service</h2>
                <p className="text-on-primary-container text-sm opacity-90">Effective Date: April 2026. Last updated: April 2026</p>
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-8 md:p-12 overflow-y-auto space-y-8 text-on-surface-variant font-body text-sm leading-relaxed scrollbar-thin scrollbar-thumb-outline-variant/30 scrollbar-track-surface">
              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">1. Agreement to Terms</h3>
                <p>Welcome to WebTantu ("we," "our," or "us"). These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and WebTantu, concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.</p>
                <p className="mt-2">By accessing the site, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the site and you must discontinue use immediately.</p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">2. Intellectual Property Rights</h3>
                <p>Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws.</p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">3. User Representations</h3>
                <p className="mb-2">By using the website, you represent and warrant that:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>All information you submit will be true, accurate, current, and complete.</li>
                  <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                  <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                  <li>You will not access the website through automated or non-human means, whether through a bot, script or otherwise.</li>
                  <li>You will not use the website for any illegal or unauthorized purpose.</li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">4. Limitation of Liability</h3>
                <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the website, even if we have been advised of the possibility of such damages.</p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">5. Governing Law</h3>
                <p>These terms and conditions and your use of the website are governed by and construed in accordance with the laws applicable to WebTantu, and any disputes will be subject to the exclusive jurisdiction of the relevant legal authorities governing our corporate registration.</p>
              </motion.section>

              <motion.div variants={itemVariants} className="pt-6 border-t border-outline-variant/30 mt-8 flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
                <span className="font-bold text-on-surface">WebTantu Legal Department</span>
                <a href="mailto:connect@webtantu.com" className="text-primary hover:text-primary-container font-semibold transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">mail</span> Contact Legal Team
                </a>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TermsOfServiceModal;

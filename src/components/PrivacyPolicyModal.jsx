import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
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
                <h2 className="font-headline font-black text-3xl mb-2">Privacy Policy</h2>
                <p className="text-on-primary-container text-sm opacity-90">Effective Date: April 2026. Last updated: April 2026</p>
              </div>
            </div>

            {/* Scrollable Content Area */}
            <div className="p-8 md:p-12 overflow-y-auto space-y-8 text-on-surface-variant font-body text-sm leading-relaxed scrollbar-thin scrollbar-thumb-outline-variant/30 scrollbar-track-surface">
              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">1. Introduction</h3>
                <p>Welcome to WebTantu ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">2. The Data We Collect About You</h3>
                <p className="mb-2">Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                  <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system and platform.</li>
                  <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">3. How Is Your Personal Data Collected?</h3>
                <p className="mb-2">We use different methods to collect data from and about you including through:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Direct interactions.</strong> You may give us your Identity and Contact by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you apply for our products or services, request marketing to be sent to you, or give us feedback.</li>
                  <li><strong>Automated technologies or interactions.</strong> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies, server logs and other similar technologies.</li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">4. How We Use Your Personal Data</h3>
                <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                  <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">5. Data Security</h3>
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h3 className="text-lg font-headline font-bold text-on-surface mb-3">6. Your Legal Rights</h3>
                <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data. This may include the right to request access to your personal data, request correction, request erasure, object to processing, or request restriction of processing. If you wish to exercise any of the rights set out above, please contact us.</p>
              </motion.section>

              <motion.div variants={itemVariants} className="pt-6 border-t border-outline-variant/30 mt-8 flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
                <span className="font-bold text-on-surface">WebTantu Legal Department</span>
                <a href="mailto:connect@webtantu.com" className="text-primary hover:text-primary-container font-semibold transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">mail</span> Contact Privacy Team
                </a>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;

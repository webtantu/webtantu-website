'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '@/contexts/ModalContext';

export default function ContactPageHeroButtons() {
  const { openConsultation } = useModal();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <button 
        onClick={openConsultation}
        className="w-full sm:w-auto inline-flex justify-center px-8 py-4 bg-primary text-on-primary rounded-xl font-bold shadow-lg hover:shadow-xl transition-all"
      >
        Get Free Consultation
      </button>

      <div className="relative w-full sm:w-auto">
        <button 
          onClick={() => setShowOptions(!showOptions)}
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-surface-container-high text-on-surface rounded-xl font-bold hover:bg-surface-container-highest transition-all"
        >
          Contact Method
          <span className="material-symbols-outlined text-sm">{showOptions ? 'expand_less' : 'expand_more'}</span>
        </button>

        <AnimatePresence>
          {showOptions && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full mt-2 left-0 w-full sm:w-48 bg-surface rounded-xl shadow-xl border border-outline-variant/30 overflow-hidden z-50"
            >
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@webtantu.com&su=Project%20Inquiry%20-%20WebTantu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-surface-container-low transition-colors text-on-surface">
                <span className="material-symbols-outlined text-lg text-primary">mail</span>
                Gmail
              </a>
              <a href="https://wa.me/919214520086?text=Hi%20WebTantu%20Team%2C%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-surface-container-low transition-colors text-on-surface">
                <span className="material-symbols-outlined text-lg text-green-600">chat</span>
                WhatsApp
              </a>
              <a href="https://www.linkedin.com/company/webtantu/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 text-sm font-medium hover:bg-surface-container-low transition-colors text-on-surface">
                <span className="material-symbols-outlined text-lg text-blue-600">link</span>
                LinkedIn
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

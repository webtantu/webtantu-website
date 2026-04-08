import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Use Vite environment variables for security
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const AuditModal = ({ isOpen, type = 'audit', onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    serviceNeeded: '',
    requirement: '',
    currentSituation: '',
    contactMethod: 'Email'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare data using FormData as requested
    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });
    // Add the required security field from environment variables
    formPayload.append("secret", import.meta.env.VITE_FORM_SECRET);
    // Add the source button type for tracking in Google Sheets
    formPayload.append("sourceButton", type);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formPayload
      });

      // no-cors means opaque response, if network succeeds we assume success
      setSubmitStatus('success');
      setFormData({
        fullName: '', email: '', phone: '', company: '', website: '',
        serviceNeeded: '', requirement: '', currentSituation: '', contactMethod: 'Email'
      });
    } catch (error) {
      console.error("Fetch Error:", error);
      setSubmitStatus('error');
      setErrorMsg("Unable to connect to server.");
    } finally {
      setIsSubmitting(false);
      // Auto close after 3 seconds on success
      if (submitStatus === 'success' || !isSubmitting) {
         setTimeout(() => {
           if (isOpen) onClose();
         }, 3000);
      }
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    if (!isOpen) {
      setTimeout(() => setSubmitStatus(null), 300);
    }
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
          className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-4 sm:p-6 overflow-y-auto scrollbar-hide"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >

          <div className="absolute inset-0 bg-on-surface/40" onClick={onClose}></div>

          <motion.div 
            className="relative bg-surface w-full max-w-5xl my-auto rounded-3xl sm:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row z-10 overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >


            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-5 right-5 md:top-6 md:right-6 w-10 h-10 bg-surface-container-low/50 backdrop-blur-sm flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant hover:text-primary transition-colors z-20"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>

            {/* Left Side Content */}
            <div className="bg-primary/95 p-8 md:p-10 lg:p-12 md:w-5/12 text-on-primary flex flex-col justify-between relative overflow-hidden shrink-0">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-container/40 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <motion.div variants={itemVariants}>
                  <span className="inline-block px-3 py-1 bg-secondary-container/20 text-secondary-container rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Discovery</span>
                  <h2 className="font-headline font-black text-3xl lg:text-4xl mb-4 leading-tight">
                    {type === 'consultation' ? 'Book Free Consultation' : 'Request Free Audit'}
                  </h2>
                  <p className="text-on-primary-container text-sm leading-relaxed opacity-90 mb-8">Tell us about your business goals and current setup. We'll analyze your digital presence and provide actionable recommendations.</p>
                </motion.div>
                
                <div className="space-y-4">
                  <motion.div variants={itemVariants} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary-container text-sm">schedule</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-white">We'll review your request and get back within 24 hours.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="p-8 md:p-10 lg:p-12 md:w-7/12 bg-surface flex flex-col justify-start scrollbar-thin scrollbar-thumb-outline-variant/30 scrollbar-track-surface">


              
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center px-4 my-auto h-full flex flex-col justify-center"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-primary mb-3">Thank you!</h3>
                  <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                    We'll contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto w-full my-auto">
                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-medium border border-red-200 mb-4"
                    >
                      Error: {errorMsg}
                    </motion.div>
                  )}

                  {/* Name Row */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Full Name *</label>
                    <input 
                      type="text" name="fullName" required
                      value={formData.fullName} onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      placeholder="Jane Doe"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Email Address *</label>
                      <input 
                        type="email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Phone / WhatsApp *</label>
                      <input 
                        type="tel" name="phone" required
                        value={formData.phone} onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Business Name *</label>
                      <input 
                        type="text" name="company" required
                        value={formData.company} onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="Your Company Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Website URL <span className="font-normal opacity-70 normal-case">(Optional)</span></label>
                      <input 
                        type="url" name="website"
                        value={formData.website} onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="https://example.com"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Service Needed *</label>
                    <select 
                      name="serviceNeeded" required
                      value={formData.serviceNeeded} onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 appearance-none"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="Website Development">Website Development</option>
                      <option value="SEO & Digital Growth">SEO & Digital Growth</option>
                      <option value="Social Media & Content">Social Media & Content</option>
                      <option value="AI Automation / Chatbots">AI Automation / Chatbots</option>
                      <option value="Not sure">Not sure (need guidance)</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Current Situation <span className="font-normal opacity-70 normal-case">(Optional)</span></label>
                    <select 
                      name="currentSituation"
                      value={formData.currentSituation} onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 appearance-none"
                    >
                      <option value="">Select your reality</option>
                      <option value="No website">No website</option>
                      <option value="Website needs improvement">Website needs improvement</option>
                      <option value="Need more traffic/leads">Need more traffic/leads</option>
                      <option value="Need automation">Need automation</option>
                    </select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Describe your requirement *</label>
                    <textarea 
                      rows="3" name="requirement" required
                      value={formData.requirement} onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                      placeholder="What are the biggest challenges you're facing right now?"
                    ></textarea>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-2">Preferred Contact Method *</label>
                    <div className="flex flex-wrap gap-4">
                      {['WhatsApp', 'Email', 'Call'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer text-sm font-medium text-on-surface">
                          <input 
                            type="radio" name="contactMethod" value={method} required
                            checked={formData.contactMethod === method} onChange={handleChange}
                            className="w-4 h-4 text-emerald-600 bg-surface-container border-outline-variant/40 focus:ring-emerald-500/40 focus:ring-2"
                          />
                          {method}
                        </label>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-2">
                    <motion.button 
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      type="submit" disabled={isSubmitting}
                      className="w-full px-8 py-3.5 bg-primary text-on-primary rounded-xl font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full mr-2"></span>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>{type === 'consultation' ? 'Book Free Consultation' : 'Request Free Audit'}</span>
                          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
              )}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuditModal;

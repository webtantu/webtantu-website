import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { countries } from '../utils/countries';

const CONTACT_SCRIPT_URL = import.meta.env.VITE_CONTACT_SCRIPT_URL;

const ContactModal = ({ isOpen, onClose }) => {
  
  // -- Form State --
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [errorMsg, setErrorMsg] = useState("");
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dialCode: '+1',
    phoneNumber: '',
    socialHandle: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formPayload = new FormData();
    formPayload.append("fullName", `${formData.firstName} ${formData.lastName}`.trim());
    formPayload.append("email", formData.email);
    formPayload.append("phone", `${formData.dialCode} ${formData.phoneNumber}`);
    formPayload.append("socialHandle", formData.socialHandle || "Not Provided");
    formPayload.append("message", formData.message);
    formPayload.append("sourceButton", "General Contact");
    formPayload.append("secret", import.meta.env.VITE_FORM_SECRET); // Using the same secret

    try {
      await fetch(CONTACT_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formPayload
      });

      // no-cors means opaque response, if network succeeds we assume success
      setSubmitStatus('success');
      setFormData({
        firstName: '', lastName: '', email: '', dialCode: '+1', phoneNumber: '', socialHandle: '', message: ''
      });
    } catch (error) {
      console.error("Fetch Error:", error);
      setSubmitStatus('error');
      setErrorMsg("Unable to connect to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Lock body scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    // Clear status when modal closes
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
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="absolute inset-0 bg-on-surface/40" onClick={onClose}></div>

          <motion.div 
            className="relative bg-surface w-full max-w-5xl rounded-3xl sm:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row z-10 overflow-hidden"
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
            <div className="bg-primary/95 p-8 md:p-10 lg:p-12 md:w-5/12 text-on-primary flex flex-col justify-between relative">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-container/40 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <motion.div variants={itemVariants}>
                  <span className="inline-block px-3 py-1 bg-secondary-container/20 text-secondary-container rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Get in touch</span>
                  <h2 className="font-headline font-black text-3xl lg:text-4xl mb-4 leading-tight">Let's talk about your project.</h2>
                  <p className="text-on-primary-container text-sm leading-relaxed opacity-90 mb-8">Drop us a line to discuss your requirements, and our engineering team will provide a comprehensive response within 24 hours.</p>
                </motion.div>
                
                <div className="space-y-4">
                  <motion.div variants={itemVariants} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary-container text-sm">mail</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-white">connect@webtantu.com</p>
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-secondary-container text-sm">calendar_month</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-white">Mon-Fri, 9am - 6pm</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Side Form */}
            <div className="p-8 md:p-10 lg:p-12 md:w-7/12 bg-surface flex flex-col justify-center">
              
              {submitStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center px-4"
                >
                  <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-3xl">mark_email_read</span>
                  </div>
                  <h3 className="text-2xl font-headline font-bold text-primary mb-3">Message Sent Successfully!</h3>
                  <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                    Thank you for reaching out to WebTantu. Your project inquiry has been securely routed to our engineering team's inbox.
                  </p>
                  <button 
                    onClick={() => setSubmitStatus(null)}
                    className="text-sm font-bold text-primary hover:text-primary-container underline transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto w-full">
                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-red-50 text-red-600 rounded-xl text-xs font-medium border border-red-200 mb-4"
                    >
                      API Error: {errorMsg}
                    </motion.div>
                  )}

                  {/* Name Row */}
                  <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">First Name</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Last Name</label>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="Doe"
                      />
                    </div>
                  </motion.div>

                  {/* Email & Social Handle Row */}
                  <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">
                        Social Handle <span className="font-normal opacity-70 normal-case tracking-normal">(Opt)</span>
                      </label>
                      <input 
                        type="text" 
                        name="socialHandle"
                        value={formData.socialHandle}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                        placeholder="@handle"
                      />
                    </div>
                  </motion.div>

                  {/* Contact Number Row - Full Width */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Contact Number</label>
                    <div className="flex w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all duration-300 overflow-hidden">
                      <div className="bg-surface-container-low/50 border-r border-outline-variant/30 flex-shrink-0 flex items-center relative min-w-[120px] max-w-[45%]">
                        <select 
                          name="dialCode"
                          value={formData.dialCode}
                          onChange={handleChange}
                          className="bg-transparent border-none py-2.5 pl-3 pr-6 w-full text-sm text-on-surface font-medium outline-none cursor-pointer truncate"
                        >
                          {countries.map((c, idx) => (
                            <option key={idx} value={c.dial_code}>
                              {c.name} ({c.dial_code})
                            </option>
                          ))}
                        </select>
                      </div>
                      <input 
                        type="tel" 
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full bg-transparent border-none px-3 py-2.5 text-sm text-on-surface focus:outline-none"
                        placeholder="(555) 000-0000"
                      />
                    </div>
                  </motion.div>

                  {/* Message Row */}
                  <motion.div variants={itemVariants}>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">How can we help?</label>
                    <textarea 
                      rows="3" 
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-xl px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-2">
                    <motion.button 
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-8 py-3.5 bg-primary text-on-primary rounded-xl font-bold text-sm tracking-wide shadow-md hover:shadow-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin w-4 h-4 border-2 border-on-primary border-t-transparent rounded-full mr-2"></span>
                          <span>Sending Route...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
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

export default ContactModal;

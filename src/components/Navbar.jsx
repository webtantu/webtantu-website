import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ active, onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", href: "#home", id: "home" },
    { title: "Services", href: "#services", id: "services" },
    { title: "Process", href: "#process", id: "process" },
    { title: "About", href: "#about", id: "about" },
    { title: "Contact", href: "#contact", id: "contact" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-8 py-3.5 bg-surface-container-lowest/85 backdrop-blur-lg rounded-full mt-4 mx-4 md:mx-auto max-w-7xl shadow-[0px_8px_16px_rgba(0,52,43,0.04)] font-headline font-medium text-sm tracking-tight"
      >
        <div className="flex items-center gap-3">
          <img src={logo} alt="WebTantu Logo" className="h-8 md:h-10 w-auto object-contain scale-[1.3] transform origin-left" />
          <span className="text-lg md:text-xl font-bold tracking-tighter text-primary">WebTantu</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              className={active === link.id 
                ? "text-primary border-b-2 border-primary pb-1" 
                : "text-on-surface-variant hover:text-primary transition-colors"}
              href={link.href}
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Get Started Button - Desktop & Mobile */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenContact}
            className="hidden sm:block bg-primary text-on-primary px-5 py-2.5 rounded-full font-semibold duration-200 ease-in-out hover:bg-primary-container transition-all"
          >
            Get Started
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-variant transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-[50] bg-on-surface/20 backdrop-blur-sm md:hidden"
            />
            
            {/* Menu Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-24 left-4 right-4 z-[55] bg-surface rounded-3xl p-6 shadow-2xl md:hidden border border-outline-variant/30"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <motion.a 
                    key={link.id}
                    href={link.href}
                    onClick={toggleMenu}
                    className={`block px-4 py-3 rounded-xl font-headline font-bold text-lg transition-all ${
                      active === link.id 
                      ? "bg-primary/10 text-primary" 
                      : "text-on-surface-variant hover:bg-surface-variant"
                    }`}
                  >
                    {link.title}
                  </motion.a>
                ))}
                
                <hr className="my-2 border-outline-variant/30" />
                
                <motion.button 
                  onClick={() => { onOpenContact(); toggleMenu(); }}
                  className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg shadow-lg"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


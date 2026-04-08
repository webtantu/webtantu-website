import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ active, onOpenContact }) => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 bg-surface-container-lowest/85 backdrop-blur-lg rounded-full mt-4 mx-auto max-w-7xl shadow-[0px_8px_16px_rgba(0,52,43,0.04)] font-headline font-medium text-sm tracking-tight"
    >
      <div className="flex items-center gap-3">
        <img src={logo} alt="WebTantu Logo" className="h-10 w-auto object-contain scale-[1.3] transform origin-left" />
        <span className="text-xl font-bold tracking-tighter text-primary">WebTantu</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a 
          className={active === "home" 
            ? "text-primary border-b-2 border-primary pb-1" 
            : "text-on-surface-variant hover:text-primary"}
          href="#home"
        >
          Home
        </a>
        <a 
          className={active === "services" 
            ? "text-primary border-b-2 border-primary pb-1" 
            : "text-on-surface-variant hover:text-primary"}
          href="#services"
        >
          Services
        </a>
        <a 
          className={active === "process" 
            ? "text-primary border-b-2 border-primary pb-1" 
            : "text-on-surface-variant hover:text-primary"}
          href="#process"
        >
          Process
        </a>
        <a 
          className={active === "about" 
            ? "text-primary border-b-2 border-primary pb-1" 
            : "text-on-surface-variant hover:text-primary"}
          href="#about"
        >
          About
        </a>
        <a 
          className={active === "contact" 
            ? "text-primary border-b-2 border-primary pb-1" 
            : "text-on-surface-variant hover:text-primary"}
          href="#contact"
        >
          Contact
        </a>
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onOpenContact}
        className="bg-primary text-on-primary px-5 py-2.5 rounded-full font-semibold duration-200 ease-in-out hover:bg-primary-container transition-all"
      >
        Get Started
      </motion.button>
    </motion.nav>
  );
};

export default Navbar;

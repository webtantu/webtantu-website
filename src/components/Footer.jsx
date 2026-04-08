import React from 'react';
import logo from '../assets/logo.png';

const Footer = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <section className="bg-emerald-950 dark:bg-black w-full py-12 px-6 sm:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-emerald-50 font-['Inter'] text-sm tracking-wide" id="contact">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="WebTantu Logo" className="h-12 w-auto object-contain scale-[1.3] transform origin-left" />
          <span className="text-2xl font-black text-white">WebTantu</span>
        </div>
        <p className="text-emerald-200/60 max-w-sm">Architectural Digital Solutions for the modern age. Building the future, one byte at a time.</p>
        <div className="flex flex-wrap gap-x-6 gap-y-4">
          <a className="text-emerald-200/60 hover:text-emerald-400 transition-all flex items-center gap-2" href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@webtantu.com" target="_blank" rel="noopener noreferrer">
            <span className="material-symbols-outlined text-sm">mail</span> connect@webtantu.com
          </a>
          <a className="text-emerald-200/60 hover:text-emerald-400 transition-all flex items-center gap-2" href="https://www.linkedin.com/company/webtantu/">
            <span className="material-symbols-outlined text-sm">link</span> LinkedIn
          </a>
          <a className="text-emerald-200/60 hover:text-emerald-400 transition-all flex items-center gap-2" href="#">
            <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
          </a>
        </div>
      </div>
      <div className="flex flex-col md:items-end gap-8 pt-4 md:pt-0 border-t border-emerald-900/30 md:border-t-0">
        <div className="flex flex-wrap md:justify-end gap-x-8 gap-y-4">
          <button onClick={onOpenPrivacy} className="text-emerald-200/60 hover:text-emerald-400 transition-all cursor-pointer">Privacy Policy</button>
          <button onClick={onOpenTerms} className="text-emerald-200/60 hover:text-emerald-400 transition-all cursor-pointer">Terms of Service</button>
          <a className="text-emerald-200/60 hover:text-emerald-400 transition-all" href="#">Clutch</a>
        </div>
        <p className="text-emerald-200/60 md:text-right">© 2024 WebTantu. Architectural Digital Solutions.</p>
      </div>
    </section>
  );
};

export default Footer;

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo.png';

const Footer = ({ onOpenPrivacy, onOpenTerms, onOpenContact }) => {
  const pages = [
    ['Home', '/'],
    ['Services', '/services'],
    ['Case Studies', '/case-studies'],
    ['Blog', '/blog'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ];

  const services = [
    ['Website Development', '/website-development'],
    ['SEO Services', '/seo-services'],
    ['AI Automation', '/ai-automation'],
    ['Growth Systems', '/growth-systems'],
  ];

  return (
    <footer className="bg-emerald-950 dark:bg-black w-full py-12 px-6 sm:px-12 text-emerald-50 font-['Inter'] text-sm tracking-wide">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
        <div className="space-y-6 lg:col-span-2">
          <Link href="/" className="flex items-center gap-3" aria-label="WebTantu home">
            <Image src={logo} alt="WebTantu Logo" className="h-12 w-auto object-contain scale-[1.3] transform origin-left" />
            <span className="text-2xl font-black text-white">WebTantu</span>
          </Link>
          <p className="text-emerald-200/60 max-w-sm">
            Architectural Digital Solutions for the modern age. Building high-performance websites, SEO systems, AI automation, and growth engines.
          </p>
          <button
            onClick={onOpenContact}
            className="px-5 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold hover:bg-secondary-fixed transition-colors"
          >
            Get Free Consultation
          </button>
          <div className="flex flex-wrap gap-x-6 gap-y-4">
            <a className="text-emerald-200/60 hover:text-emerald-400 transition-all flex items-center gap-2" href="mailto:connect@webtantu.com?subject=Project%20Inquiry%20-%20WebTantu&body=Hi%20WebTantu%20Team,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project%20with%20you.">
              <span className="material-symbols-outlined text-sm">mail</span> connect@webtantu.com
            </a>
            <a className="text-emerald-200/60 hover:text-emerald-400 transition-all flex items-center gap-2" href="https://www.linkedin.com/company/webtantu/" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-sm">link</span> LinkedIn
            </a>
            <a className="text-emerald-200/60 hover:text-emerald-400 transition-all flex items-center gap-2" href="https://wa.me/919214520086?text=Hi%20WebTantu%20Team,%20I'm%20interested%20in%20discussing%20a%20project%20with%20you." target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
            </a>
          </div>
        </div>
        <nav aria-label="Footer pages">
          <h2 className="font-headline font-bold text-white text-base mb-4">Pages</h2>
          <div className="grid gap-3">
            {pages.map(([title, href]) => (
              <Link key={href} className="text-emerald-200/60 hover:text-emerald-400 transition-all" href={href}>{title}</Link>
            ))}
          </div>
        </nav>
        <nav aria-label="Footer services">
          <h2 className="font-headline font-bold text-white text-base mb-4">Services</h2>
          <div className="grid gap-3">
            {services.map(([title, href]) => (
              <Link key={href} className="text-emerald-200/60 hover:text-emerald-400 transition-all" href={href}>{title}</Link>
            ))}
          </div>
        </nav>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-emerald-900/40 flex flex-col md:flex-row md:justify-between gap-6">
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          <button onClick={onOpenPrivacy} className="text-emerald-200/60 hover:text-emerald-400 transition-all cursor-pointer">Privacy Policy</button>
          <button onClick={onOpenTerms} className="text-emerald-200/60 hover:text-emerald-400 transition-all cursor-pointer">Terms of Service</button>
          <a className="text-emerald-200/60 hover:text-emerald-400 transition-all" href="#">Clutch</a>
        </div>
        <p className="text-emerald-200/60 md:text-right">© 2026 WebTantu. Architectural Digital Solutions.</p>
      </div>
    </footer>
  );
};

export default Footer;

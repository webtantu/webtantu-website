'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = ({ onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const leftNavLinks = [
    { title: "Home", href: "/", id: "/" }
  ];

  const rightNavLinks = [
    { title: "Case Studies", href: "/case-studies", id: "/case-studies" },
    { title: "Blog", href: "/blog", id: "/blog" },
    { title: "About", href: "/about", id: "/about" },
    { title: "Contact", href: "/contact", id: "/contact" }
  ];

  const services = [
    { title: "Website Development", href: "/website-development" },
    { title: "SEO Services", href: "/seo-services" },
    { title: "AI Automation", href: "/ai-automation" },
    { title: "Growth Systems", href: "/growth-systems" }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const isActive = (href) => pathname === href || (href !== '/' && pathname?.startsWith(href));
  const isServiceActive = pathname === '/services' || services.some((service) => isActive(service.href));

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 md:px-8 py-3.5 bg-surface-container-lowest/85 backdrop-blur-lg rounded-full mt-4 mx-4 md:mx-auto max-w-7xl shadow-[0px_8px_16px_rgba(0,52,43,0.04)] font-headline font-medium text-sm tracking-tight"
      >
        <Link href="/" className="flex items-center gap-3" aria-label="WebTantu home">
          <Image src={logo} alt="WebTantu Logo" className="h-8 md:h-10 w-auto object-contain scale-[1.3] transform origin-left" priority />
          <span className="text-lg md:text-xl font-bold tracking-tighter text-primary">WebTantu</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {leftNavLinks.map((link) => (
            <Link
              key={link.id}
              className={isActive(link.href)
                ? "text-primary border-b-2 border-primary pb-1"
                : "text-on-surface-variant hover:text-primary transition-colors"}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              className={isServiceActive
                ? "text-primary border-b-2 border-primary pb-1 inline-flex items-center gap-1"
                : "text-on-surface-variant hover:text-primary transition-colors inline-flex items-center gap-1"}
              href="/services"
              onClick={() => setServicesOpen((open) => !open)}
              aria-haspopup="menu"
              aria-expanded={isServicesOpen}
            >
              Services
              <span className="material-symbols-outlined text-base leading-none">expand_more</span>
            </Link>
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute left-1/2 top-9 w-64 -translate-x-1/2 bg-surface-container-lowest rounded-2xl p-3 shadow-2xl border border-outline-variant/30"
                  role="menu"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      role="menuitem"
                      className="block px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-primary transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {rightNavLinks.map((link) => (
            <Link
              key={link.id}
              className={isActive(link.href)
                ? "text-primary border-b-2 border-primary pb-1" 
                : "text-on-surface-variant hover:text-primary transition-colors"}
              href={link.href}
            >
              {link.title}
            </Link>
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
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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
                {leftNavLinks.map((link) => (
                  <motion.a 
                    key={link.id}
                  href={link.href}
                  onClick={toggleMenu}
                  className={`block px-4 py-3 rounded-xl font-headline font-bold text-lg transition-all ${
                      isActive(link.href)
                      ? "bg-primary/10 text-primary" 
                      : "text-on-surface-variant hover:bg-surface-variant"
                    }`}
                  >
                    {link.title}
                  </motion.a>
                ))}

                <div className={`rounded-2xl ${isServiceActive ? 'bg-primary/10' : 'bg-surface-container-low/60'}`}>
                  <button
                    type="button"
                    onClick={() => setServicesOpen((open) => !open)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-headline font-bold text-lg transition-all ${
                      isServiceActive
                        ? "text-primary"
                        : "text-on-surface-variant hover:bg-surface-variant"
                    }`}
                    aria-expanded={isServicesOpen}
                    aria-controls="mobile-services-menu"
                  >
                    <span>Services</span>
                    <span className="material-symbols-outlined text-xl">
                      {isServicesOpen ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        id="mobile-services-menu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-2 pb-2">
                          {services.map((link) => (
                            <motion.a
                              key={link.href}
                              href={link.href}
                              onClick={toggleMenu}
                              className={`block px-4 py-3 rounded-xl font-headline font-semibold text-base transition-all ${
                                isActive(link.href)
                                  ? "bg-surface-container-lowest text-primary"
                                  : "text-on-surface-variant hover:bg-surface-variant"
                              }`}
                            >
                              {link.title}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {rightNavLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={toggleMenu}
                    className={`block px-4 py-3 rounded-xl font-headline font-bold text-lg transition-all ${
                      isActive(link.href)
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

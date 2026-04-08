import React, { useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsOfServiceModal from './components/TermsOfServiceModal';
import AuditModal from './components/AuditModal';

function App() {
  const [active, setActive] = useState("home");
  const [isContactOpen, setContactOpen] = useState(false);
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);
  const [isAuditOpen, setAuditOpen] = useState(false);
  const [auditType, setAuditType] = useState('audit');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[id]");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = sectionId;
        }
      });

    
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
      ) {
        current = "contact";
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar active={active} onOpenContact={() => setContactOpen(true)} />
      <Hero 
        onOpenContact={() => setContactOpen(true)} 
        onOpenAudit={() => { setAuditType('consultation'); setAuditOpen(true); }} 
      />
      <Features />
      <ProblemSolution />
      <Services />
      <Process />
      <About />
      <CallToAction 
        onOpenContact={() => setContactOpen(true)} 
        onOpenAudit={() => { setAuditType('audit'); setAuditOpen(true); }}
      />
      <Footer 
        onOpenPrivacy={() => setPrivacyOpen(true)} 
        onOpenTerms={() => setTermsOpen(true)} 
      />
      
      <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsOfServiceModal isOpen={isTermsOpen} onClose={() => setTermsOpen(false)} />
      <AuditModal isOpen={isAuditOpen} type={auditType} onClose={() => setAuditOpen(false)} />
    </>
  );
}

export default App;

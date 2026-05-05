'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import ContactModal from './ContactModal';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfServiceModal from './TermsOfServiceModal';
import AuditModal from './AuditModal';
import { useModal } from '@/contexts/ModalContext';

export default function SiteLayoutClient({ children }) {
  const {
    isContactOpen, setContactOpen,
    isPrivacyOpen, setPrivacyOpen,
    isTermsOpen, setTermsOpen,
    isAuditOpen, setAuditOpen,
    auditType, openConsultation
  } = useModal();

  return (
    <>
      <Navbar onOpenContact={openConsultation} />
      {children}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onOpenContact={openConsultation}
      />
      <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsOfServiceModal isOpen={isTermsOpen} onClose={() => setTermsOpen(false)} />
      <AuditModal isOpen={isAuditOpen} type={auditType} onClose={() => setAuditOpen(false)} />
    </>
  );
}

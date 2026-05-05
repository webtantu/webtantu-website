'use client';

import { createContext, useContext, useState } from 'react';

const ModalContext = createContext({});

export function ModalProvider({ children }) {
  const [isContactOpen, setContactOpen] = useState(false);
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);
  const [isAuditOpen, setAuditOpen] = useState(false);
  const [auditType, setAuditType] = useState('consultation');

  const openConsultation = () => {
    setAuditType('consultation');
    setAuditOpen(true);
  };

  const openAudit = () => {
    setAuditType('audit');
    setAuditOpen(true);
  };

  return (
    <ModalContext.Provider value={{
      isContactOpen, setContactOpen,
      isPrivacyOpen, setPrivacyOpen,
      isTermsOpen, setTermsOpen,
      isAuditOpen, setAuditOpen,
      auditType, setAuditType,
      openConsultation, openAudit
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedArticle({ children }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isMounted) return <div className="opacity-0">{children}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

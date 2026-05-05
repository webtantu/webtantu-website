'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface-container-lowest">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        <div className="relative w-16 h-16 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 bg-primary/10 rounded-2xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.img 
            src="/logo.png" 
            alt="WebTantu Logo" 
            className="w-10 h-10 object-contain relative z-10"
            animate={{ scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-primary font-headline font-bold tracking-[0.2em] uppercase text-sm">
            WebTantu
          </h2>
          <div className="w-32 h-0.5 bg-surface-variant overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%", x: "-100%" }}
              animate={{ width: "100%", x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

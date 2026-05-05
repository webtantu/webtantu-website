'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CaseStudyCard({ study, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group flex flex-col bg-surface border border-outline-variant/30 rounded-3xl overflow-hidden shadow-[0px_4px_24px_rgba(0,52,43,0.04)] hover:shadow-[0px_12px_40px_rgba(0,52,43,0.12)] transition-shadow duration-300 cursor-pointer"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <Image
          src={study.image}
          alt={study.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h2 className="font-headline font-bold text-2xl text-primary mb-4 leading-tight">
          {study.title}
        </h2>
        
        <div className="space-y-6 mb-8 flex-grow">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">The Challenge</h3>
            <p className="text-on-surface-variant line-clamp-3 text-sm leading-relaxed">
              {study.problem}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Our Solution</h3>
            <p className="text-on-surface-variant line-clamp-3 text-sm leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-outline-variant/30">
          <h3 className="text-xs font-bold uppercase tracking-wider text-secondary mb-4">Key Results</h3>
          <ul className="space-y-3">
            {study.results.map((result) => (
              <li key={result} className="flex items-center gap-3 text-sm font-medium text-on-surface">
                <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                {result}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}

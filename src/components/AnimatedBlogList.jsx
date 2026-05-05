'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

import { useEffect, useState } from 'react';

export default function BlogList({ posts }) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true); // eslint-disable-line react-hooks/set-state-in-effect
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!isMounted) return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{posts.map((_, i) => <div key={i} className="h-96 bg-surface-container rounded-2xl animate-pulse" />)}</div>;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {posts.map((post) => {
        const image = post.mainImage ? urlFor(post.mainImage)?.width(900).height(520).url() : null;
        return (
          <motion.article 
            key={post.slug}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-outline-variant/10"
          >
            <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10" aria-label={`Read ${post.title}`}>
              <span className="sr-only">Read article</span>
            </Link>
            
            <div className="relative aspect-[16/9] overflow-hidden">
              {image ? (
                <Image 
                  src={image} 
                  alt={post.mainImage?.alt || post.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-primary-container/20 flex items-center justify-center">
                  <span className="text-primary/40 font-bold">WebTantu</span>
                </div>
              )}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm">
                  Article
                </span>
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <time className="text-xs font-medium text-on-surface-variant/70 mb-3 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/40" />
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently Published'}
              </time>
              
              <h2 className="font-headline font-bold text-2xl text-primary mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                {post.title}
              </h2>
              
              <p className="text-on-surface-variant line-clamp-3 text-sm leading-relaxed mb-6">
                {post.description}
              </p>
              
              <div className="mt-auto flex items-center text-primary font-bold text-sm">
                <span>Read full article</span>
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    quote: 'The new website made our offer clearer and faster to act on. We saw a noticeable jump in lead quality within weeks.',
    author: 'Sarah Miller',
    role: 'Director of Operations, GrowthPath Consulting',
    image: '/testimonials/sarah.png',
  },
  {
    quote: 'WebTantu helped us connect SEO, content, and lead capture into one system. We finally have a predictable way to grow.',
    author: 'James Chen',
    role: 'Founder, Nexus Tech Solutions',
    image: '/testimonials/james.png',
  },
  {
    quote: 'The automation workflow saved hours every week and improved follow-up speed. Our conversion rate has never been higher.',
    author: 'Elena Rodriguez',
    role: 'Marketing Head, Stellar Services',
    image: '/testimonials/elena.png',
  },
  {
    quote: 'Working with WebTantu was a game-changer for our digital presence. Professional, timely, and results-driven.',
    author: 'Michael Scott',
    role: 'Regional Manager, Dunder Mifflin',
    image: '/testimonials/michael.png',
  },
  {
    quote: 'Their attention to detail and understanding of our business goals made the entire process seamless.',
    author: 'Pam Beesly',
    role: 'Office Administrator, Scranton Realty',
    image: '/testimonials/pam.png',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="font-headline font-bold text-4xl mb-4 text-primary">What Clients Can Expect</h2>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          Results-focused execution with clear communication and practical growth thinking.
        </p>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-hidden py-4">
          <motion.div
            className="flex gap-6 whitespace-nowrap"
            animate={{
              x: [0, -2120],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.author}-${index}`}
                className="inline-block w-[400px] bg-surface-container-lowest p-8 rounded-3xl shadow-[0px_8px_16px_rgba(0,52,43,0.06)] border border-outline-variant/30 flex-shrink-0"
              >
                <div className="flex flex-col h-full justify-between">
                  <p className="text-on-surface-variant mb-8 whitespace-normal text-lg italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-container relative">
                      <Image src={testimonial.image} alt={testimonial.author} fill sizes="48px" className="object-cover" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-primary">{testimonial.author}</span>
                      <span className="text-sm text-on-surface-variant">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Gradient overlays for smooth fading at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-low to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-low to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

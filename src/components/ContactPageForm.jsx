'use client';

import { useState } from 'react';
import { countries } from '../utils/countries';

export default function ContactPageForm() {
  const [status, setStatus] = useState(null);
  const [dialCode, setDialCode] = useState('+1');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    const formData = new FormData(event.currentTarget);
    
    // Combine dial code and phone number into a single phone field
    const phone = formData.get('phoneNumber');
    formData.delete('phoneNumber');
    formData.delete('dialCode');
    formData.append('phone', `${dialCode} ${phone}`);
    formData.append('sourceButton', 'Contact Page');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Unable to submit contact form.');
      }
      event.currentTarget.reset();
      setStatus('success');
      setDialCode('+1');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_8px_16_rgba(0,52,43,0.04)]">
      {/* Honeypot field - hidden from users */}
      <input 
        type="text" name="website_url" tabIndex="-1" autoComplete="off" 
        className="hidden" 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Full Name</label>
          <input name="fullName" required className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Email Address</label>
          <input name="email" type="email" required className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300" placeholder="you@company.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Phone</label>
          <div className="flex w-full bg-surface-container-low border border-outline-variant/40 rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all duration-300 overflow-hidden">
            <div className="bg-surface-container-lowest/50 border-r border-outline-variant/30 flex-shrink-0 flex items-center relative min-w-[100px] max-w-[40%]">
              <select 
                name="dialCode"
                value={dialCode}
                onChange={(e) => setDialCode(e.target.value)}
                className="bg-transparent border-none py-3 pl-3 pr-6 w-full text-sm text-on-surface font-medium outline-none cursor-pointer truncate appearance-none"
              >
                {countries.map((c, idx) => (
                  <option key={idx} value={c.dial_code}>
                    {c.name} ({c.dial_code})
                  </option>
                ))}
              </select>
            </div>
            <input 
              type="tel" 
              name="phoneNumber"
              required
              className="w-full bg-transparent border-none px-3 py-3 text-sm text-on-surface focus:outline-none"
              placeholder="(555) 000-0000"
            />
          </div>
        </div>
        <div>
          <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Service Needed</label>
          <select name="serviceNeeded" required className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300">
            <option value="">Select a service</option>
            <option>Website Development</option>
            <option>SEO Services</option>
            <option>AI Automation</option>
            <option>Growth Systems</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/70 mb-1.5">Message</label>
        <textarea name="message" required rows="5" className="w-full bg-surface-container-low border border-outline-variant/40 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300" placeholder="What do you want to improve, and what is getting in the way?" />
      </div>
      <button disabled={status === 'sending'} className="w-full px-8 py-4 bg-primary text-on-primary rounded-xl font-bold shadow-md disabled:opacity-70 hover:bg-primary-container transition-all">
        {status === 'sending' ? 'Sending...' : 'Contact'}
      </button>
      {status === 'success' && <p className="text-primary font-bold">Thank you. WebTantu will review your message and contact you shortly.</p>}
      {status === 'error' && <p className="text-error font-bold">Unable to send right now. Please email connect@webtantu.com.</p>}
    </form>
  );
}

'use client';

import { useState } from 'react';
import { profile } from '@/lib/content';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name || 'someone'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const field =
    'w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-paper placeholder:text-muted transition focus:border-violet-400 focus:outline-none focus:ring-1 focus:ring-violet-400/50';

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-7">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-paper/80">
          Your name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={field}
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-paper/80">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={field}
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-paper/80">
          Your message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${field} resize-none`}
          placeholder="Tell me about your project or inquiry"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-gradient-to-r from-violet-500 to-accent px-7 py-3.5 font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        Send message
      </button>
      <p className="text-center text-xs text-muted">Opens in your email app, pre-filled and ready to send.</p>
    </form>
  );
}

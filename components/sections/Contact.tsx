'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { config } from '@/data/config';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GradientText from '@/components/ui/GradientText';
import GlowButton from '@/components/ui/GlowButton';
import { staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';
import { FiMail, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: form.subject || 'Portfolio Enquiry',
          from_name: form.name,
          replyto: form.email,
          message: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error('Failed');
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <SectionWrapper id="contact">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm text-purple-400 font-medium mb-3 tracking-[0.2em] uppercase">
          Get In Touch
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <GradientText>Let&apos;s Work Together</GradientText>
        </h2>
        <p className="text-white/45 max-w-lg mx-auto leading-relaxed">
          Have a project in mind or just want to say hello? I&apos;d love to hear from you.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto"
      >
        {/* ── Left: info ────────────────────────────────────────────────── */}
        <motion.div variants={slideInLeft} className="flex flex-col gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">Say hello 👋</h3>
            <p className="text-white/45 leading-relaxed">
              Whether you have a project, a question, or just want to connect — my
              inbox is always open. I&apos;ll do my best to get back to you!
            </p>
          </div>

          {/* Email card */}
          <a
            href={`mailto:${config.email}`}
            className="inline-flex items-center gap-4 group"
          >
            <div className="p-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-all">
              <FiMail size={20} />
            </div>
            <div>
              <p className="text-xs text-white/35 mb-0.5 uppercase tracking-wider">Email</p>
              <p className="text-white/80 font-medium group-hover:text-white transition-colors">
                {config.email}
              </p>
            </div>
          </a>

          {/* Social links */}
          <div>
            <p className="text-white/35 text-xs uppercase tracking-wider mb-4">Find me on</p>
            <div className="flex flex-wrap gap-3">
              {config.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass-card glass-card-hover text-white/50 hover:text-white text-sm"
                  >
                    <Icon size={15} />
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Right: form ───────────────────────────────────────────────── */}
        <motion.div variants={slideInRight} className="glass-card p-7 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name + Email row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1.5">
                <span className="text-white/40 text-xs uppercase tracking-wider">Name</span>
                <input
                  type="text"
                  name="name"
                  className="glass-input w-full px-4 py-3 text-sm"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="flex flex-col gap-1.5">
                <span className="text-white/40 text-xs uppercase tracking-wider">Email</span>
                <input
                  type="email"
                  name="email"
                  className="glass-input w-full px-4 py-3 text-sm"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            {/* Subject */}
            <label className="flex flex-col gap-1.5">
              <span className="text-white/40 text-xs uppercase tracking-wider">Subject</span>
              <input
                type="text"
                name="subject"
                className="glass-input w-full px-4 py-3 text-sm"
                placeholder="Project enquiry"
                value={form.subject}
                onChange={handleChange}
              />
            </label>

            {/* Message */}
            <label className="flex flex-col gap-1.5">
              <span className="text-white/40 text-xs uppercase tracking-wider">Message</span>
              <textarea
                name="message"
                className="glass-input w-full px-4 py-3 text-sm resize-none"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            {status === 'error' && (
              <p className="flex items-center gap-2 text-red-400 text-sm">
                <FiAlertCircle size={14} />
                Something went wrong. Please try again.
              </p>
            )}

            <GlowButton
              type="submit"
              variant="primary"
              className="w-full justify-center py-3.5"
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'sent' ? (
                <>
                  <FiCheck size={15} />
                  Message Sent!
                </>
              ) : status === 'sending' ? (
                <>
                  <FiSend size={15} />
                  Sending…
                </>
              ) : (
                <>
                  <FiSend size={15} />
                  Send Message
                </>
              )}
            </GlowButton>
          </form>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

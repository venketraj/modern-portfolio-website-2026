'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '@/data/config';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GradientText from '@/components/ui/GradientText';
import { staggerContainer, cardVariants, skillBarVariants } from '@/lib/animations';

const CATEGORIES = ['All', 'Language', 'Framework', 'Tool', 'Cloud'] as const;
type Category = (typeof CATEGORIES)[number];

export default function Skills() {
  const [active, setActive] = useState<Category>('All');

  const filtered = config.skills.filter(
    (s) => active === 'All' || s.category === active,
  );

  return (
    /* overflow-hidden so the marquee doesn't cause horizontal scroll */
    <div className="overflow-hidden">
      <SectionWrapper id="skills">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-purple-400 font-medium mb-3 tracking-[0.2em] uppercase">
            Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GradientText>Skills &amp; Tech Stack</GradientText>
          </h2>
          <p className="text-white/45 max-w-lg mx-auto leading-relaxed">
            Technologies I work with and my current proficiency levels.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-purple-600/30 border border-purple-500/50 text-purple-300 shadow-[0_0_15px_rgba(124,58,237,.2)]'
                  : 'bg-white/[0.04] border border-white/[0.08] text-white/45 hover:bg-white/[0.08] hover:text-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16"
          >
            {filtered.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  className="glass-card glass-card-hover p-5 flex flex-col gap-3"
                >
                  {/* Icon + Name row */}
                  <div className="flex items-center gap-3">
                    <div className={`shrink-0 ${skill.color}`}>
                      <Icon size={26} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-medium truncate">{skill.name}</p>
                      <p className="text-white/30 text-xs">{skill.category}</p>
                    </div>
                    <span className="ml-auto text-white/35 text-xs font-mono shrink-0">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Animated progress bar */}
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      variants={skillBarVariants(skill.level)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #7c3aed 0%, #2563eb 100%)',
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Marquee ─────────────────────────────────────────────────────── */}
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#050508] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#050508] to-transparent pointer-events-none" />

          <div className="overflow-hidden py-3">
            {/* Two copies = seamless loop when translateX(-50%) */}
            <div className="marquee-track">
              {[...config.skills, ...config.skills].map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <span
                    key={`${skill.name}-${i}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40 text-sm whitespace-nowrap shrink-0"
                  >
                    <span className={skill.color}>
                      <Icon size={15} />
                    </span>
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

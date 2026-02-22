'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { config } from '@/data/config';
import GradientText from '@/components/ui/GradientText';
import GlowButton from '@/components/ui/GlowButton';
import { staggerContainer, slideInLeft, slideInRight } from '@/lib/animations';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import {
  SiPython,
  SiSnowflake,
  SiMysql,
  SiInformatica,
  SiDatabricks,
} from 'react-icons/si';
import { TbBrandAzure } from 'react-icons/tb';

/* ── Floating tech badge data ─────────────────────────────────────────────── */
const floatingBadges = [
  { icon: SiPython,       label: 'Python',       color: '#3776AB',  style: { top: '6%',     right: '-6%'  } },
  { icon: SiSnowflake,    label: 'Snowflake',    color: '#29B5E8',  style: { top: '32%',    right: '-14%' } },
  { icon: SiMysql,        label: 'SQL',          color: '#F29111',  style: { bottom: '28%', right: '-8%'  } },
  { icon: SiInformatica,  label: 'Informatica',  color: '#FF4D00',  style: { bottom: '4%',  right: '12%'  } },
  { icon: SiDatabricks,   label: 'Databricks',   color: '#FF3621',  style: { top: '8%',     left: '-2%'   } },
  { icon: TbBrandAzure,   label: 'Azure',        color: '#0078D4',  style: { bottom: '22%', left: '-8%'   } },
];

/* ── Typewriter hook ──────────────────────────────────────────────────────── */
function useTypewriter(
  texts: readonly string[],
  speed = 70,
  deleteSpeed = 35,
  pause = 2200,
) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting'>('typing');

  useEffect(() => {
    const current = texts[idx];
    let t: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
      } else {
        t = setTimeout(() => setPhase('pausing'), pause);
      }
    } else if (phase === 'pausing') {
      t = setTimeout(() => setPhase('deleting'), 200);
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), deleteSpeed);
      } else {
        setIdx((i) => (i + 1) % texts.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(t);
  }, [displayed, phase, idx, texts, speed, deleteSpeed, pause]);

  return displayed;
}

/* ── Component ────────────────────────────────────────────────────────────── */
export default function Hero() {
  const typewritten = useTypewriter(config.taglines);
  const hasRealAvatar = config.avatar && config.avatar.trim() !== '';

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* ── Left col ──────────────────────────────────────────────────── */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Available badge */}
            {config.availableForWork && (
              <motion.div variants={slideInLeft}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Available for work
                </span>
              </motion.div>
            )}

            {/* Name + title */}
            <motion.div variants={slideInLeft} className="flex flex-col gap-2">
              <p className="text-white/45 text-lg font-light">Hi there, I&apos;m</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
                <GradientText>{config.name}</GradientText>
              </h1>
              <p className="text-xl text-white/55 font-light mt-1">{config.title}</p>
            </motion.div>

            {/* Typewriter */}
            <motion.div variants={slideInLeft} className="h-8 flex items-center">
              <span className="text-lg text-white/75 font-light">
                {typewritten}
                <span className="inline-block w-[2px] h-[1.1em] bg-purple-400 ml-0.5 align-middle animate-pulse" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p variants={slideInLeft} className="text-white/45 leading-relaxed max-w-lg">
              {config.bio}
            </motion.p>

            {/* Location */}
            <motion.div variants={slideInLeft} className="flex items-center gap-2 text-white/35 text-sm">
              <FiMapPin size={13} />
              <span>{config.location}</span>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={slideInLeft} className="flex flex-wrap gap-3">
              <GlowButton href="#projects" variant="primary">
                View My Work
                <FiArrowRight size={15} />
              </GlowButton>
              <GlowButton href="#contact" variant="outline">
                Get In Touch
              </GlowButton>
            </motion.div>

            {/* Socials */}
            <motion.div variants={slideInLeft} className="flex items-center gap-3">
              {config.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl glass-card glass-card-hover text-white/55 hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* ── Right col — Avatar ─────────────────────────────────────────── */}
          <motion.div
            variants={slideInRight}
            className="relative flex items-center justify-center order-1 lg:order-2"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Pulse glow ring */}
              <div className="absolute inset-0 rounded-full animate-[pulse-glow_3s_ease-in-out_infinite]" />

              {/* Spinning conic ring */}
              <div
                className="absolute inset-3 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #7c3aed, #2563eb, #a78bfa, #60a5fa, #7c3aed)',
                  padding: '2px',
                  animation: 'spin-slow 8s linear infinite',
                }}
              >
                <div className="w-full h-full rounded-full bg-[#050508]" />
              </div>

              {/* Avatar container */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-5 rounded-full overflow-hidden glass-card"
              >
                {hasRealAvatar ? (
                  <Image
                    src={config.avatar}
                    alt={config.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 flex items-center justify-center select-none">
                    <span className="text-6xl lg:text-8xl font-bold gradient-text">
                      {config.name.charAt(0)}
                    </span>
                  </div>
                )}
              </motion.div>

              {/* Floating tech badges */}
              {floatingBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.label}
                    className="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-card text-xs font-medium whitespace-nowrap z-10"
                    style={badge.style}
                    animate={{ y: [0, -7, 0] }}
                    transition={{
                      duration: 3 + i * 0.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: i * 0.45,
                    }}
                  >
                    <Icon size={13} style={{ color: badge.color }} />
                    <span className="text-white/65">{badge.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/25 text-[11px] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-white/35" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

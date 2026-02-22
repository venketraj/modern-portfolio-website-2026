'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { config } from '@/data/config';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GradientText from '@/components/ui/GradientText';
import { staggerContainer, cardVariants } from '@/lib/animations';
import { FiBriefcase } from 'react-icons/fi';

/* ── Company logo with Clearbit fallback ─────────────────────────────────── */
function CompanyLogo({ logo, companyUrl, company }: { logo?: string; companyUrl?: string; company: string }) {
  const [errored, setErrored] = useState(false);

  // 1️⃣ Local image
  if (logo && !errored) {
    return (
      <Image
        src={logo}
        alt={company}
        fill
        className="object-contain p-1.5"
        onError={() => setErrored(true)}
      />
    );
  }

  // 2️⃣ Clearbit logo by domain
  if (companyUrl && !errored) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://logo.clearbit.com/${companyUrl}`}
        alt={company}
        className="w-full h-full object-contain p-1.5 rounded-full"
        onError={() => setErrored(true)}
      />
    );
  }

  // 3️⃣ Fallback briefcase icon
  return <FiBriefcase size={18} className="text-purple-400" />;
}

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm text-purple-400 font-medium mb-3 tracking-[0.2em] uppercase">
          Career
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <GradientText>Experience</GradientText>
        </h2>
        <p className="text-white/45 max-w-lg mx-auto leading-relaxed">
          My professional journey and the roles that shaped my skills.
        </p>
      </div>

      {/* Timeline */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="relative max-w-3xl mx-auto"
      >
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/40 via-blue-500/20 to-transparent hidden sm:block" />

        <div className="flex flex-col gap-8">
          {config.experience.map((job, i) => (
            <motion.div
              key={`${job.company}-${i}`}
              variants={cardVariants}
              className="flex gap-6 items-start group"
            >
              {/* Timeline dot */}
              <div className="relative shrink-0 hidden sm:flex items-center justify-center w-12 h-12 rounded-full glass-card border border-purple-500/30 group-hover:border-purple-400/60 transition-colors duration-300 z-10 overflow-hidden">
                <CompanyLogo
                  logo={job.logo}
                  companyUrl={job.companyUrl}
                  company={job.company}
                />
              </div>

              {/* Card */}
              <div className="flex-1 glass-card glass-card-hover p-6 sm:p-7">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                      {job.role}
                    </h3>
                    <p className="text-purple-400/80 text-sm font-medium mt-0.5">
                      {job.company}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/35 text-xs font-mono whitespace-nowrap shrink-0">
                    {job.period}
                  </span>
                </div>

                <p className="text-white/45 text-sm leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300/70 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

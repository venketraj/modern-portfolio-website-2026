'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { config } from '@/data/config';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GradientText from '@/components/ui/GradientText';
import GlowButton from '@/components/ui/GlowButton';
import { staggerContainer, cardVariants } from '@/lib/animations';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm text-purple-400 font-medium mb-3 tracking-[0.2em] uppercase">
          Portfolio
        </p>
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          <GradientText>Featured Projects</GradientText>
        </h2>
        <p className="text-white/45 max-w-lg mx-auto leading-relaxed">
          A selection of things I&apos;ve built — from SaaS platforms to developer tools.
        </p>
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {config.projects.map((project, i) => (
          <motion.article
            key={project.title}
            variants={cardVariants}
            className={`group glass-card glass-card-hover overflow-hidden flex flex-col ${
              project.featured && i === 0 ? 'md:col-span-2' : ''
            }`}
          >
            {/* Image area */}
            <div
              className={`relative overflow-hidden bg-gradient-to-br from-purple-950/60 to-blue-950/60 ${
                project.featured && i === 0 ? 'h-56 sm:h-64' : 'h-48'
              }`}
            >
              {/* Letter placeholder */}
              <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
                <span className="text-[8rem] font-black text-white/[0.04]">
                  {project.title.charAt(0)}
                </span>
              </div>

              {/* Real image (if exists) */}
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Featured star */}
              {project.featured && (
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-300 text-xs font-medium backdrop-blur-sm">
                  <FiStar size={11} />
                  Featured
                </span>
              )}

              {/* Tag pills */}
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 text-white/65 text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm border border-white/10 text-white/40 text-xs">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-3 flex-1">
              <h3 className="text-base font-semibold text-white group-hover:text-purple-300 transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-3 pt-2">
                {'githubUrl' in project && project.githubUrl && (
                  <GlowButton href={project.githubUrl} variant="outline" className="py-2 px-4 text-xs">
                    <FiGithub size={13} />
                    Code
                  </GlowButton>
                )}
                {'liveUrl' in project && project.liveUrl && (
                  <GlowButton href={project.liveUrl} variant="primary" className="py-2 px-4 text-xs">
                    <FiExternalLink size={13} />
                    Live Demo
                  </GlowButton>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

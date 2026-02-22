'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeUpVariants } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={cn('py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto', className)}
    >
      {children}
    </motion.section>
  );
}

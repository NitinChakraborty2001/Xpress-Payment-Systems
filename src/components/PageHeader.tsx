"use client";
import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const PageHeader = ({ title, subtitle, align = 'center' }: PageHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
  >
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF3300] to-[#EE7926]">
      {title}
    </h1>
    {subtitle && (
      <p className={`text-base sm:text-lg md:text-xl text-white/60 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    )}
  </motion.div>
);

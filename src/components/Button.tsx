"use client";
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button = ({ children, variant = 'primary', onClick, className = '', type = 'button' }: ButtonProps) => {
  if (variant === 'primary') {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        className={`relative group px-8 py-3 rounded-full font-medium overflow-hidden transition-all ${className}`}
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-orange-600 blur-lg opacity-20 group-hover:opacity-60 transition-opacity -z-10" />
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF3300] to-[#EE7926] -z-10" />
        
        {/* Inner Stroke */}
        <div className="absolute inset-0 border-[1.5px] border-white/20 rounded-full pointer-events-none" />
        
        <span className="flex items-center justify-center gap-2 w-full">
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            className="hidden group-hover:inline-block"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.span>
          {children}
        </span>
      </motion.button>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      className={`relative px-8 py-3 rounded-full font-medium bg-white/90 backdrop-blur hover:bg-white text-black transition-all flex items-center justify-center ${className}`}
    >
      {/* Inner Stroke */}
      <div className="absolute inset-0 border-[1.5px] border-black/5 rounded-full pointer-events-none" />
      {children}
    </motion.button>
  );
};

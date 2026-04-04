"use client";
import React from 'react';

const logos = [
  { name: 'Inc.', font: 'font-serif font-bold text-4xl tracking-tighter', color: 'group-hover:text-white' },
  { name: 'CNET', font: 'font-sans font-black text-4xl tracking-tighter', color: 'group-hover:text-red-500' },
  { name: 'Forbes', font: 'font-serif font-bold text-4xl tracking-widest', color: 'group-hover:text-white' },
  { name: 'TechCrunch', font: 'font-sans font-bold text-3xl tracking-tight', color: 'group-hover:text-green-500' },
  { name: 'Bloomberg', font: 'font-sans font-bold text-3xl', color: 'group-hover:text-blue-500' },
  { name: 'WIRED', font: 'font-sans font-black text-3xl tracking-widest', color: 'group-hover:text-white' },
  { name: 'Fast Company', font: 'font-sans font-bold text-3xl tracking-tighter italic', color: 'group-hover:text-yellow-400' },
  { name: 'WSJ', font: 'font-serif font-bold text-4xl', color: 'group-hover:text-white' },
];

export const LogoMarquee = () => {
  return (
    <section className="py-12 border-y border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden relative z-10">
      {/* Gradient masks for smooth fade in/out at edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* We duplicate the logos array to create a seamless loop */}
        {[...logos, ...logos].map((logo, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-center px-12 md:px-16 group cursor-pointer"
          >
            <span className={`${logo.font} text-white/30 transition-colors duration-300 ${logo.color}`}>
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

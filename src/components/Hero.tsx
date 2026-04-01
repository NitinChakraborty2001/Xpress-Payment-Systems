"use client";
import { motion } from 'motion/react';
import { Button } from './Button';
import { SocialProof } from './SocialProof';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-6"
          >
            Payments That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3300] to-[#EE7926]">
              Amplify Sales!
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 font-light mb-10 max-w-xl"
          >
            We provide unique, customized payment solutions for specific industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto"
          >
            <Button className="w-full sm:w-auto justify-center">Get Started Now</Button>
            <Button variant="secondary" className="w-full sm:w-auto justify-center">View Solutions</Button>
          </motion.div>

          <SocialProof />
        </div>
      </div>
    </section>
  );
};

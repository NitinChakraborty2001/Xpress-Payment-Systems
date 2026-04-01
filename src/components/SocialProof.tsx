"use client";
import { motion } from 'motion/react';
import Image from 'next/image';

const avatars = [
  'https://i.pravatar.cc/150?u=1',
  'https://i.pravatar.cc/150?u=2',
  'https://i.pravatar.cc/150?u=3',
  'https://i.pravatar.cc/150?u=4',
  'https://i.pravatar.cc/150?u=5',
];

export const SocialProof = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
    >
      <div className="flex -space-x-3">
        {avatars.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt="User"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 border-black object-cover"
            referrerPolicy="no-referrer"
          />
        ))}
      </div>
      <p className="text-sm font-medium text-white/60">
        Trusted By <span className="text-white">1000+ Businesses!</span>
      </p>
    </motion.div>
  );
};

"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Smartphone, ShieldCheck, Receipt } from 'lucide-react';

const features = [
  {
    id: 'tap-to-pay',
    title: 'Tap-to-Pay Anywhere',
    description: 'Transform your smartphone or tablet into a secure payment terminal. Accept Apple Pay, Google Pay, and contactless cards instantly without extra hardware.',
    icon: Smartphone,
    image: 'https://picsum.photos/seed/mobile-tap/600/1200'
  },
  {
    id: 'secure-handling',
    title: 'Bank-Grade Security',
    description: 'Every transaction is protected by end-to-end encryption and advanced tokenization, ensuring sensitive card data never touches your device.',
    icon: ShieldCheck,
    image: 'https://picsum.photos/seed/mobile-secure/600/1200'
  },
  {
    id: 'instant-receipts',
    title: 'Instant Digital Receipts',
    description: 'Go paperless. Send customized, branded receipts directly to your customers via SMS or email the moment the payment is approved.',
    icon: Receipt,
    image: 'https://picsum.photos/seed/mobile-receipt/600/1200'
  }
];

export const MobilePaymentsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative mt-12 border-t border-white/10 bg-black/20">
      <div className="text-center pt-16 pb-8 md:pb-0 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mobile Payment Capabilities</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg px-4">
          Turn any mobile device into a powerful point of sale. Scroll to explore our mobile-first features.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start relative">
          
          {/* Sticky Phone Mockup */}
          <div className="w-full md:w-1/2 sticky top-24 md:top-0 h-[45vh] md:h-screen flex items-center justify-center z-0 md:z-10 overflow-hidden md:overflow-visible pt-4 md:pt-0">
            <div className="relative w-[220px] h-[440px] md:w-[300px] md:h-[600px] bg-black rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] border-gray-800 shadow-2xl overflow-hidden flex-shrink-0">
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-5 md:h-6 bg-gray-800 rounded-b-2xl w-1/2 mx-auto z-20"></div>
              
              {/* Screen Content */}
              <div className="relative w-full h-full bg-gray-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={features[activeIndex].image}
                      alt={features[activeIndex].title}
                      fill
                      className="object-cover opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Scrolling Text Blocks */}
          <div className="w-full md:w-1/2 pb-[10vh] md:py-[30vh] relative z-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  className="min-h-[50vh] md:min-h-[80vh] flex flex-col justify-center py-10"
                  onViewportEnter={() => setActiveIndex(index)}
                  viewport={{ margin: "-40% 0px -40% 0px" }}
                >
                  <div 
                    className={`p-8 rounded-3xl transition-all duration-500 border backdrop-blur-xl ${
                      activeIndex === index 
                        ? 'bg-[#1a1a1a]/90 border-orange-500/50 shadow-2xl shadow-orange-500/10 scale-100' 
                        : 'bg-[#1a1a1a]/50 border-white/10 opacity-40 scale-95'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-500 ${
                      activeIndex === index ? 'bg-orange-500 text-white' : 'bg-white/10 text-white/50'
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors duration-500 ${
                      activeIndex === index ? 'text-white' : 'text-white/70'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                      activeIndex === index ? 'text-white/80' : 'text-white/50'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

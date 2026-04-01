"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const hotspots = [
  {
    id: 'real-time-reporting',
    x: 22,
    y: 35,
    title: 'Real-time Reporting',
    description: 'Monitor sales, track inventory, and analyze trends instantly from your centralized dashboard.'
  },
  {
    id: 'tableside-transactions',
    x: 78,
    y: 45,
    title: 'Tableside Transactions',
    description: 'Process payments directly at the table with our mobile POS integration, speeding up table turns.'
  },
  {
    id: 'inventory-management',
    x: 45,
    y: 65,
    title: 'Smart Inventory',
    description: 'Automated low-stock alerts and seamless syncing across all your physical and online stores.'
  },
  {
    id: 'customer-loyalty',
    x: 82,
    y: 75,
    title: 'Integrated Loyalty',
    description: 'Reward repeat customers automatically at checkout without needing third-party apps.'
  },
  {
    id: 'one-tap-checkout',
    x: 50,
    y: 20,
    title: 'One-Tap Checkout',
    description: 'Frictionless payment experience supporting all major digital wallets and NFC cards.'
  }
];

export const InteractiveShowcase = () => {
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  return (
    <section className="py-20 mt-12 border-t border-white/10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interactive Dashboard Preview</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          Explore the powerful tools and features built directly into the Xpress Payment Systems terminal.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto rounded-3xl border border-white/10 bg-white/5 p-2 md:p-4 shadow-2xl">
        <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden bg-gray-900">
          <Image
            src="https://picsum.photos/seed/dashboard-pos/1600/900"
            alt="POS Dashboard Interface"
            fill
            className="object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          
          {/* Overlay to make hotspots pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

          {/* Hotspots */}
          {hotspots.map((hotspot) => {
            const isActive = activeHotspot === hotspot.id;
            
            // Determine positioning classes to keep tooltip in viewport
            let horizontalClass = '-translate-x-1/2 left-1/2';
            if (hotspot.x < 35) horizontalClass = 'left-0';
            else if (hotspot.x > 65) horizontalClass = 'right-0';

            let verticalClass = 'top-full mt-3 md:mt-4';
            if (hotspot.y > 50) verticalClass = 'bottom-full mb-3 md:mb-4';

            return (
              <div 
                key={hotspot.id}
                className="absolute z-20"
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                onMouseEnter={() => setActiveHotspot(hotspot.id)}
                onMouseLeave={() => setActiveHotspot(null)}
                onClick={() => setActiveHotspot(isActive ? null : hotspot.id)}
              >
                {/* Pulsing Dot */}
                <button className="relative w-8 h-8 md:w-10 md:h-10 -ml-4 -mt-4 md:-ml-5 md:-mt-5 flex items-center justify-center focus:outline-none group cursor-pointer">
                  <span className={`absolute inset-1 rounded-full bg-orange-500 transition-opacity duration-300 ${isActive ? 'opacity-100 animate-none' : 'opacity-60 animate-ping group-hover:opacity-100'}`}></span>
                  <span className="relative w-3 h-3 md:w-4 md:h-4 rounded-full bg-white shadow-sm"></span>
                </button>

                {/* Tooltip */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: hotspot.y > 50 ? 10 : -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: hotspot.y > 50 ? 10 : -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className={`absolute ${horizontalClass} ${verticalClass} w-[calc(100vw-3rem)] max-w-[280px] sm:max-w-[320px] p-5 bg-[#1A1A1A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-50 pointer-events-none`}
                    >
                      <h4 className="text-lg font-bold text-white mb-2">{hotspot.title}</h4>
                      <p className="text-sm text-white/70 leading-relaxed">{hotspot.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const hardwareList = [
  {
    id: 1,
    name: "Xpress Terminal Pro",
    description: "Our most powerful countertop POS system designed for high-volume retail and fast-paced restaurants.",
    image: "https://picsum.photos/seed/pos-terminal-pro/800/800",
    specs: [
      "15-inch HD Touchscreen Display",
      "Built-in High-Speed Receipt Printer",
      "WiFi, Ethernet & 4G LTE Backup",
      "Customer-facing Display Screen",
      "NFC, EMV Chip, and Magstripe Reader"
    ]
  },
  {
    id: 2,
    name: "Xpress Mobile Flex",
    description: "A lightweight, portable terminal perfect for tableside ordering, events, or on-the-go businesses.",
    image: "https://picsum.photos/seed/pos-mobile-flex/800/800",
    specs: [
      "5.5-inch Gorilla Glass Touchscreen",
      "4G LTE & WiFi Enabled",
      "All-day Battery Life (12+ hours)",
      "Built-in Barcode & QR Scanner",
      "Digital Receipt Capabilities (Email/SMS)"
    ]
  },
  {
    id: 3,
    name: "Xpress Mini Reader",
    description: "Compact, pocket-sized card reader that pairs seamlessly with your existing smartphone or tablet.",
    image: "https://picsum.photos/seed/pos-mini-reader/800/800",
    specs: [
      "Bluetooth Low Energy (BLE) Connection",
      "Accepts EMV Chip & PIN",
      "Apple Pay & Google Pay Ready",
      "Pocket-sized, Ergonomic Design",
      "USB-C Fast Charging"
    ]
  }
];

export const HardwareCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === hardwareList.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? hardwareList.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 mt-12 border-t border-white/10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry-Leading Hardware</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          Choose from our range of robust, reliable POS terminals designed to fit any business environment.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Carousel Container */}
        <div className="relative bg-white/5 border border-white/10 rounded-3xl p-6 md:p-12 overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
            >
              {/* Image Side */}
              <div className="relative aspect-square md:aspect-[4/3] w-full max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 flex items-center justify-center p-8">
                {/* Using a standard image with object-contain to simulate a transparent background product shot */}
                <Image
                  src={hardwareList[currentIndex].image}
                  alt={hardwareList[currentIndex].name}
                  fill
                  className="object-contain p-4 drop-shadow-2xl mix-blend-screen opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Content Side */}
              <div className="flex flex-col justify-center">
                <span className="text-orange-500 font-semibold tracking-wider uppercase text-sm mb-2">
                  Hardware Model
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {hardwareList[currentIndex].name}
                </h3>
                <p className="text-white/70 text-lg mb-8 leading-relaxed">
                  {hardwareList[currentIndex].description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-white font-semibold text-lg border-b border-white/10 pb-2 mb-4">
                    Key Specifications
                  </h4>
                  <ul className="space-y-3">
                    {hardwareList[currentIndex].specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/80">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors z-10 focus:outline-none backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border border-white/10 text-white flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-colors z-10 focus:outline-none backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-8">
          {hardwareList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                currentIndex === idx
                  ? "w-8 h-2.5 bg-orange-500"
                  : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

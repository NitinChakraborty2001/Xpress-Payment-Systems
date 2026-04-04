"use client";
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight } from 'lucide-react';

export const SavingsCalculator = () => {
  const [volume, setVolume] = useState(50000);

  // Assuming an average savings of 1.2% per transaction compared to competitors
  const savingsRate = 0.012;
  const annualSavings = volume * savingsRate * 12;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-24 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 mb-6">
              <Calculator className="w-8 h-8 text-orange-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ROI & Savings Calculator
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              See how much you could save annually by switching to Xpress Payment Systems transparent pricing model.
            </p>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <label className="text-white/80 font-medium text-lg">
                  Monthly Processing Volume
                </label>
                <span className="text-3xl font-bold text-white">
                  {formatCurrency(volume)}
                </span>
              </div>
              
              <div className="relative pt-1">
                <input
                  type="range"
                  min="10000"
                  max="1000000"
                  step="10000"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-white/50 text-sm mt-3 font-medium">
                  <span>$10k</span>
                  <span>$1M+</span>
                </div>
              </div>
            </div>

            <div className="bg-black/20 rounded-3xl p-8 border border-white/10 text-center mb-8 backdrop-blur-sm">
              <p className="text-white/70 font-medium mb-2 uppercase tracking-wider text-sm">
                Estimated Annual Savings
              </p>
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {formatCurrency(annualSavings)}
              </div>
            </div>

            <div className="text-center">
              <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                Claim Your Custom Rate
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

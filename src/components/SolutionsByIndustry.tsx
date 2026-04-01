"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Button } from './Button';
import { ShoppingBag, Utensils, Stethoscope, ShoppingCart } from 'lucide-react';

const industries = [
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingBag,
    title: 'Transform Your Retail Experience',
    description: 'Streamline checkout, manage inventory in real-time, and offer flexible payment options to keep your customers coming back. Our POS solutions are built to scale with your growing retail business.',
    image: 'https://picsum.photos/seed/retail/800/600',
    cta: 'Explore Retail Solutions'
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: Utensils,
    title: 'Elevate Guest Satisfaction',
    description: 'From tableside ordering to seamless bill splitting, our hospitality payment systems ensure fast, secure transactions so your staff can focus on delivering exceptional service.',
    image: 'https://picsum.photos/seed/hospitality/800/600',
    cta: 'Explore Hospitality Solutions'
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: Stethoscope,
    title: 'Secure Healthcare Payments',
    description: 'Protect sensitive patient data with our HIPAA-compliant payment processing. Offer convenient online billing and flexible payment plans to improve patient collection rates.',
    image: 'https://picsum.photos/seed/healthcare/800/600',
    cta: 'Explore Healthcare Solutions'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    icon: ShoppingCart,
    title: 'Power Your Online Store',
    description: 'Integrate our robust payment gateway seamlessly into your e-commerce platform. Accept global payments securely, reduce cart abandonment, and boost your online sales.',
    image: 'https://picsum.photos/seed/ecommerce/800/600',
    cta: 'Explore E-Commerce Solutions'
  }
];

export const SolutionsByIndustry = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);

  const activeIndustry = industries.find(ind => ind.id === activeTab) || industries[0];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions By Industry</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          Tailored payment processing solutions designed to meet the unique challenges of your industry.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Tabs */}
        <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-2 lg:w-1/3 shrink-0 no-scrollbar">
          {industries.map((industry) => {
            const Icon = industry.icon;
            const isActive = activeTab === industry.id;
            return (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 text-left whitespace-nowrap lg:whitespace-normal ${
                  isActive 
                    ? 'bg-[#EE7926] text-white shadow-lg' 
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-white/5'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-semibold text-lg">{industry.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="lg:w-2/3 bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10 overflow-hidden relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8 items-center h-full"
            >
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {activeIndustry.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {activeIndustry.description}
                </p>
                <Button className="w-fit">
                  {activeIndustry.cta}
                </Button>
              </div>
              
              <div className="relative aspect-square md:aspect-auto md:h-full min-h-[300px] rounded-2xl overflow-hidden">
                <Image
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

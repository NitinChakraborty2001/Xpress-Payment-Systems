"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'payment-processing',
    title: 'Payment Processing',
    description: 'Secure, lightning-fast payment processing solutions designed to handle high volumes with minimal downtime.',
    benefits: [
      'Next-day funding available',
      'End-to-end encryption',
      'Support for all major credit cards'
    ],
    link: '/services/payment-processing'
  },
  {
    id: 'pos',
    title: 'POS Solutions',
    description: 'Modern, scalable Point of Sale systems that streamline your checkout experience and manage inventory effortlessly.',
    benefits: [
      'Intuitive touchscreen interface',
      'Real-time inventory tracking',
      'Seamless hardware integration'
    ],
    link: '/services/pos-solutions'
  },
  {
    id: 'mobile',
    title: 'Mobile Payments',
    description: 'Accept payments anywhere, anytime with our robust mobile payment solutions and portable card readers.',
    benefits: [
      'Accept tap-to-pay and digital wallets',
      'Bluetooth card reader support',
      'Offline mode capabilities'
    ],
    link: '/services/mobile-payments'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    description: 'Powerful online payment gateways that integrate perfectly with your existing website or online store.',
    benefits: [
      'Easy shopping cart integration',
      'Customizable checkout pages',
      'Automated recurring billing'
    ],
    link: '/services/e-commerce-solutions'
  },
  {
    id: 'fraud',
    title: 'Fraud Prevention',
    description: 'Advanced machine learning tools that detect and prevent fraudulent transactions before they happen.',
    benefits: [
      'Real-time risk scoring',
      'Customizable fraud rules',
      'Chargeback management'
    ],
    link: '/services/fraud-prevention'
  },
  {
    id: 'loyalty',
    title: 'Customer Loyalty Programs',
    description: 'Built-in rewards and loyalty programs to keep your customers engaged and coming back for more.',
    benefits: [
      'Points-based reward systems',
      'Digital gift card support',
      'Customer behavior analytics'
    ],
    link: '/services/customer-loyalty-programs'
  }
];

export const ServicesAccordion = () => {
  const [openId, setOpenId] = useState<string | null>(services[0].id);

  return (
    <div className="max-w-4xl mx-auto w-full space-y-4">
      {services.map((service) => {
        const isOpen = openId === service.id;

        return (
          <div 
            key={service.id}
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
              isOpen ? 'border-orange-500 bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'
            }`}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : service.id)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <h3 className={`text-xl md:text-2xl font-semibold transition-colors ${isOpen ? 'text-orange-500' : 'text-white'}`}>
                {service.title}
              </h3>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 ml-4 ${isOpen ? 'text-orange-500' : 'text-white/50'}`}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="text-white/70 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-white/80">
                            <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href={service.link}
                      className="inline-flex items-center text-orange-500 font-medium hover:text-orange-400 transition-colors group"
                    >
                      View Details
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

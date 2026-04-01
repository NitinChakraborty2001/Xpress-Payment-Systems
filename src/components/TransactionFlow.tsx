"use client";
import React from 'react';
import { motion } from 'motion/react';
import { CreditCard, ShieldCheck, Server, Landmark } from 'lucide-react';

const steps = [
  {
    id: 'customer',
    title: 'Customer Checkout',
    description: 'Card is swiped, dipped, or tapped by the customer.',
    icon: CreditCard,
  },
  {
    id: 'gateway',
    title: 'Secure Gateway',
    description: 'Data is encrypted and routed (PCI DSS compliant).',
    icon: ShieldCheck,
  },
  {
    id: 'processor',
    title: 'Payment Processor',
    description: 'Transaction is verified with card networks.',
    icon: Server,
  },
  {
    id: 'bank',
    title: 'Merchant Bank',
    description: 'Approved funds deposited into your account.',
    icon: Landmark,
  }
];

export const TransactionFlow = () => {
  return (
    <section className="py-16 mt-12 border-t border-white/10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          Experience the journey of a secure, lightning-fast transaction from checkout to your bank account.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.id}>
                {/* Node */}
                <div className="flex flex-col items-center text-center w-full md:w-56 relative z-10 shrink-0">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Icon className="w-10 h-10 text-orange-500 relative z-10" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <>
                    {/* Desktop Connector */}
                    <div className="hidden md:block h-0.5 flex-1 mx-4 bg-white/10 relative overflow-hidden rounded-full min-w-[40px]">
                      <motion.div
                        className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
                      />
                    </div>
                    {/* Mobile Connector */}
                    <div className="md:hidden w-0.5 h-16 my-4 bg-white/10 relative overflow-hidden rounded-full">
                      <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-orange-500 to-transparent"
                        animate={{ y: ['-100%', '200%'] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: index * 0.4 }}
                      />
                    </div>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

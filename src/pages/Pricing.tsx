"use client";
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from '../components/Button';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';

const plans = [
  {
    name: "Starter",
    price: "2.6% + 10¢",
    description: "Perfect for small businesses starting out.",
    features: ["Basic POS App", "Email Support", "Standard Security", "Next-day Deposits"]
  },
  {
    name: "Professional",
    price: "2.4% + 10¢",
    description: "Ideal for growing retail and hospitality.",
    features: ["Advanced POS Hardware", "24/7 Priority Support", "Fraud Prevention Tools", "Custom Analytics"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large-scale operations.",
    features: ["Dedicated Account Manager", "Custom Integration", "Volume Discounts", "Multi-location Management"]
  }
];

export const Pricing = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Transparent Pricing" 
        subtitle="No hidden fees. No surprises. Just simple, scalable pricing." 
      />

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border transition-all ${
                plan.popular 
                ? 'bg-gradient-to-b from-orange-500/10 to-transparent border-orange-500 shadow-2xl shadow-orange-500/10' 
                : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.popular && (
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold mb-4">{plan.price}</div>
              <p className="text-white/60 mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant={plan.popular ? 'primary' : 'secondary'} className="w-full">
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </Button>
            </motion.div>
          ))}
        </div>
    </PageLayout>
  );
};

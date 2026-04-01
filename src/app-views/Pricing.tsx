"use client";
import { motion } from 'motion/react';
import { Check, Percent, Layers, CircleDollarSign, Banknote, ShieldAlert } from 'lucide-react';
import { Button } from '../components/Button';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';

const pricingModels = [
  {
    name: "Interchange Plus Pricing",
    icon: Percent,
    description: "The most transparent pricing model. You pay the exact interchange fee set by the card networks, plus a small, fixed markup.",
    features: ["True cost transparency", "Lower rates for debit cards", "Ideal for most businesses", "Detailed monthly statements"],
    popular: true
  },
  {
    name: "Tiered Pricing",
    icon: Layers,
    description: "Transactions are categorized into Qualified, Mid-Qualified, and Non-Qualified tiers, making your statement easier to read.",
    features: ["Simplified statement", "Predictable base rates", "Easy to understand", "Good for consistent transaction types"]
  },
  {
    name: "Flat Rate Pricing",
    icon: CircleDollarSign,
    description: "One simple, predictable rate for every transaction, regardless of the card type used by your customer.",
    features: ["No hidden fees", "Predictable monthly costs", "Perfect for small businesses", "Simple reconciliation"]
  },
  {
    name: "Cash Discount Pricing",
    icon: Banknote,
    description: "Offset your processing fees by offering a discount to customers who pay with cash, passing the card fee to the cardholder.",
    features: ["Eliminate up to 100% of fees", "Incentivize cash payments", "Fully compliant solution", "Automated terminal calculation"]
  },
  {
    name: "High Risk Pricing",
    icon: ShieldAlert,
    description: "Specialized processing solutions for businesses in high-risk industries, ensuring stable and reliable payment acceptance.",
    features: ["Industry-specific underwriting", "Chargeback mitigation tools", "Secure payment gateways", "Dedicated risk support"]
  }
];

export const Pricing = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Flexible Pricing Models" 
        subtitle="Choose the pricing structure that best fits your business model and transaction volume." 
      />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingModels.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-3xl border flex flex-col transition-all ${
                  model.popular 
                  ? 'bg-gradient-to-b from-orange-500/10 to-transparent border-orange-500 shadow-2xl shadow-orange-500/10' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {model.popular && (
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 self-start">
                    MOST POPULAR
                  </span>
                )}
                
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${model.popular ? 'bg-orange-500/20 text-orange-500' : 'bg-white/10 text-white'}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                <p className="text-white/60 mb-8 flex-grow">{model.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {model.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/80">
                      <Check className="w-5 h-5 text-orange-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={model.popular ? 'primary' : 'secondary'} className="w-full mt-auto">
                  Learn More
                </Button>
              </motion.div>
            );
          })}
        </div>
    </PageLayout>
  );
};

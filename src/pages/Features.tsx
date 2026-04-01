"use client";
import { motion } from 'motion/react';
import { Shield, Zap, Smartphone, BarChart3, Globe, Users } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';

const features = [
  {
    icon: Shield,
    title: "Advanced Security",
    description: "PCI-compliant processing with end-to-end encryption and fraud protection."
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description: "Lightning-fast transaction speeds to keep your checkout lines moving."
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description: "Accept payments anywhere with our mobile-first terminal solutions."
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Real-time reporting and insights to help you make data-driven decisions."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Support for multiple currencies and international payment methods."
  },
  {
    icon: Users,
    title: "Loyalty Programs",
    description: "Built-in tools to reward your customers and keep them coming back."
  }
];

export const Features = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Powerful Features" 
        subtitle="Everything you need to manage and grow your business payments in one place." 
      />

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors group"
            >
              <feature.icon className="w-12 h-12 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
    </PageLayout>
  );
};

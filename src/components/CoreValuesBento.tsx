"use client";
import { motion } from 'motion/react';
import { Lightbulb, Award, Headset, HeartHandshake } from 'lucide-react';

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of payment technology to bring you faster, more secure, and smarter solutions tailored for the modern economy.",
    icon: Lightbulb,
    className: "md:col-span-2 bg-gradient-to-br from-white/10 to-white/5",
    iconColor: "text-orange-500"
  },
  {
    title: "Excellence",
    description: "Delivering top-tier performance and unyielding reliability in every single transaction.",
    icon: Award,
    className: "md:col-span-1 bg-white/5",
    iconColor: "text-blue-400"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated team is always here to help your business succeed, day or night, without exception.",
    icon: Headset,
    className: "md:col-span-1 bg-white/5",
    iconColor: "text-green-400"
  },
  {
    title: "Customer Satisfaction",
    description: "Your success is our priority. We build intuitive tools that make your customers happy and your life significantly easier.",
    icon: HeartHandshake,
    className: "md:col-span-2 bg-gradient-to-tr from-white/5 to-white/10",
    iconColor: "text-pink-400"
  }
];

export const CoreValuesBento = () => {
  return (
    <section className="py-16 mt-16 border-t border-white/10">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Values & Mission</h2>
        <p className="text-white/70 max-w-2xl text-lg">
          Our mission is to empower businesses of all sizes with seamless, secure, and innovative payment solutions that drive growth and foster trust.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(220px,auto)]">
        {values.map((value, i) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl border border-white/10 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 ${value.className}`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 ${value.iconColor}`}>
                <Icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{value.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

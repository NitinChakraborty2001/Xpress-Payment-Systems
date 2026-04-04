"use client";
import React from 'react';
import { motion } from 'motion/react';
import { Star, Gift, Coffee, ShoppingBag, ChevronRight, Trophy, Sparkles } from 'lucide-react';

const rewards = [
  { id: 1, title: 'Free Artisan Coffee', points: 200, icon: Coffee, available: true },
  { id: 2, title: '$10 Off Next Purchase', points: 1500, icon: ShoppingBag, available: false, progress: 96 },
  { id: 3, title: 'Exclusive VIP Merch', points: 5000, icon: Gift, available: false, progress: 29 },
];

export const LoyaltyRewardsShowcase = () => {
  return (
    <section className="py-16 mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Features */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Gamified Experiences
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Turn Buyers into Brand Advocates
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Launch a fully customizable loyalty program in minutes. Reward your customers for every purchase, encourage repeat visits, and build lasting relationships with engaging, app-like experiences.
            </p>
            
            <ul className="space-y-6">
              {[
                { title: 'Custom Reward Tiers', desc: 'Create Bronze, Silver, and Gold tiers to incentivize higher spending.' },
                { title: 'Automated Point Tracking', desc: 'Points are automatically added to customer accounts at checkout.' },
                { title: 'Omnichannel Redemption', desc: 'Customers can redeem rewards in-store, online, or via mobile app.' }
              ].map((feature, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-1">
                    <Star className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{feature.title}</h4>
                    <p className="text-white/60">{feature.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Column: App Mockup */}
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[340px] bg-[#0d1117] rounded-[2.5rem] border-[8px] border-gray-800 shadow-2xl overflow-hidden"
            >
              {/* Phone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-3xl w-1/2 mx-auto z-20"></div>

              {/* App Header / Points Area */}
              <div className="relative bg-gradient-to-br from-orange-500 to-pink-600 p-8 pt-12 text-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4"></div>
                
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <div>
                    <p className="text-white/80 text-sm font-medium">Welcome back,</p>
                    <h3 className="text-xl font-bold">Alex Johnson</h3>
                  </div>
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <Trophy className="w-5 h-5 text-yellow-300" />
                  </div>
                </div>

                <div className="text-center relative z-10 mb-6">
                  <p className="text-white/80 text-sm font-medium mb-1">Current Balance</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold tracking-tight">1,450</span>
                    <span className="text-lg font-medium text-white/80">pts</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative z-10 bg-black/20 rounded-2xl p-4 backdrop-blur-md border border-white/10">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span>Gold Tier</span>
                    <span>1,500 pts</span>
                  </div>
                  <div className="h-2.5 w-full bg-black/30 rounded-full overflow-hidden mb-2">
                    <motion.div 
                      className="h-full bg-white rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '96%' }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                    />
                  </div>
                  <p className="text-xs text-center text-white/90 font-medium">
                    🎉 Only <span className="font-bold text-white">50 points</span> away from $10 off!
                  </p>
                </div>
              </div>

              {/* Rewards List */}
              <div className="p-6 bg-[#0d1117] h-full min-h-[300px]">
                <h4 className="text-white font-semibold mb-4 flex items-center justify-between">
                  Available Rewards
                  <span className="text-xs text-orange-500 cursor-pointer hover:underline">View All</span>
                </h4>
                
                <div className="space-y-4">
                  {rewards.map((reward, idx) => {
                    const Icon = reward.icon;
                    return (
                      <motion.div 
                        key={reward.id}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + (idx * 0.1) }}
                        className={`p-4 rounded-2xl border flex items-center gap-4 transition-all ${
                          reward.available 
                            ? 'bg-white/5 border-orange-500/30 hover:border-orange-500/60 cursor-pointer' 
                            : 'bg-white/5 border-white/5 opacity-70 grayscale-[0.5]'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                          reward.available ? 'bg-orange-500/20 text-orange-500' : 'bg-white/10 text-white/40'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        
                        <div className="flex-1">
                          <h5 className="text-sm font-bold text-white mb-0.5">{reward.title}</h5>
                          <p className="text-xs text-white/50">{reward.points} pts</p>
                        </div>

                        {reward.available ? (
                          <button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <div className="w-12 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-white/30 rounded-full" 
                              style={{ width: `${reward.progress}%` }}
                            />
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

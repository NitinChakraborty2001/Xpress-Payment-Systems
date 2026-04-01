"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Lock, Fingerprint, CheckCircle } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer, Tooltip, YAxis } from 'recharts';

const data = [
  { time: '00:00', attempts: 12 },
  { time: '04:00', attempts: 8 },
  { time: '08:00', attempts: 45 },
  { time: '12:00', attempts: 30 },
  { time: '16:00', attempts: 65 },
  { time: '20:00', attempts: 20 },
  { time: '24:00', attempts: 15 },
];

export const FraudPreventionDashboard = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(99.9), 500);
    return () => clearTimeout(timer);
  }, []);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="py-16 mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise-Grade Fraud Prevention</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Protect your business and your customers with advanced machine learning, tokenization, and real-time monitoring.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Overlays */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">End-to-End Encryption</h3>
                <p className="text-white/70 leading-relaxed">
                  Every transaction is encrypted from the moment of capture, ensuring sensitive data is never exposed during transmission.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <Fingerprint className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Advanced Tokenization</h3>
                <p className="text-white/70 leading-relaxed">
                  We replace actual card details with unique, randomly generated tokens, rendering stolen data useless to hackers.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Total Peace of Mind</h3>
                <p className="text-white/70 leading-relaxed">
                  Our AI-driven risk engine analyzes thousands of data points in milliseconds to block fraudulent attempts before they happen.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Mock Security Dashboard */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#0d1117] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-orange-500" />
                Security Overview
              </h3>
              <span className="flex items-center gap-1 text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                System Secure
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* Radial Progress */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center relative">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    {/* Background Circle */}
                    <circle
                      cx="64"
                      cy="64"
                      r={radius}
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-white/10"
                    />
                    {/* Progress Circle */}
                    <motion.circle
                      cx="64"
                      cy="64"
                      r={radius}
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      strokeLinecap="round"
                      className="text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {progress.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <p className="text-sm text-white/60 mt-4 font-medium text-center">Threats Blocked</p>
              </div>

              {/* Mini Line Chart */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col">
                <p className="text-sm text-white/60 font-medium mb-4">Fraud Attempts Prevented</p>
                <div className="flex-1 min-h-[100px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                        itemStyle={{ color: '#f97316' }}
                        labelStyle={{ display: 'none' }}
                        cursor={{ stroke: 'rgba(255,255,255,0.1)' }}
                      />
                      <YAxis hide domain={['dataMin - 10', 'dataMax + 10']} />
                      <Line 
                        type="monotone" 
                        dataKey="attempts" 
                        stroke="#f97316" 
                        strokeWidth={3}
                        dot={false}
                        activeDot={{ r: 6, fill: '#f97316', stroke: '#fff', strokeWidth: 2 }}
                        animationDuration={2000}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-white/40">
                  <span>00:00</span>
                  <span>24:00</span>
                </div>
              </div>

            </div>

            {/* Recent Activity Feed */}
            <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="text-sm font-medium text-white/60 mb-3">Recent Activity</h4>
              <div className="space-y-3">
                {[
                  { action: 'Suspicious IP blocked', time: '2 mins ago', status: 'success' },
                  { action: 'Card tokenized successfully', time: '15 mins ago', status: 'success' },
                  { action: 'Velocity check triggered', time: '1 hour ago', status: 'warning' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      {item.status === 'success' ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <ShieldAlert className="w-4 h-4 text-orange-500" />
                      )}
                      <span className="text-white/80">{item.action}</span>
                    </div>
                    <span className="text-white/40 text-xs">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

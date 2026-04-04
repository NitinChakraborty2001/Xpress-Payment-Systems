"use client";
import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, Store, Box, Globe, Code2, Zap } from 'lucide-react';

const platforms = [
  { name: 'Shopify', icon: ShoppingCart, color: 'text-[#95BF47]', bg: 'bg-[#95BF47]/10' },
  { name: 'WooCommerce', icon: Store, color: 'text-[#96588A]', bg: 'bg-[#96588A]/10' },
  { name: 'Magento', icon: Box, color: 'text-[#EE672F]', bg: 'bg-[#EE672F]/10' },
  { name: 'BigCommerce', icon: Globe, color: 'text-[#121118]', bg: 'bg-white/10' }, // Adjusted for dark theme visibility
];

export const EcommerceSolutions = () => {
  return (
    <section className="py-16 mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Integrations */}
          <div>
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-4">
                <Zap className="w-4 h-4" />
                Plug & Play Integrations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Connects with your favorite platforms
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Seamlessly integrate Xpress Payment Systems into your existing online store. We provide native plugins and extensions for the world&apos;s leading e-commerce platforms, getting you up and running in minutes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                  >
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${platform.bg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${platform.color === 'text-[#121118]' ? 'text-white' : platform.color}`} />
                    </div>
                    <span className="text-white font-medium">{platform.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Developer API Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl blur opacity-20"></div>
            <div className="relative rounded-2xl bg-[#0d1117] border border-white/10 overflow-hidden shadow-2xl">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/50 font-mono">
                  <Code2 className="w-3 h-3" />
                  checkout.ts
                </div>
                <div className="w-12"></div> {/* Spacer for centering */}
              </div>

              {/* Code Content */}
              <div className="p-6 overflow-x-auto text-sm md:text-base font-mono leading-loose">
                <pre>
                  <span className="text-[#ff7b72]">import</span> {'{'} Xpress {'}'} <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">&apos;@xpress/node&apos;</span>;
                  <br/><br/>
                  <span className="text-[#8b949e]">{'// Initialize with your secret key'}</span>
                  <br/>
                  <span className="text-[#ff7b72]">const</span> xpress = <span className="text-[#ff7b72]">new</span> <span className="text-[#d2a8ff]">Xpress</span>(<span className="text-[#a5d6ff]">&apos;sk_live_12345&apos;</span>);
                  <br/><br/>
                  <span className="text-[#ff7b72]">export const</span> <span className="text-[#d2a8ff]">createCheckout</span> = <span className="text-[#ff7b72]">async</span> (cart) =&gt; {'{'}
                  <br/>
                  {'  '}<span className="text-[#ff7b72]">const</span> session = <span className="text-[#ff7b72]">await</span> xpress.checkout.sessions.<span className="text-[#d2a8ff]">create</span>({'{'}
                  <br/>
                  {'    '}payment_method_types: [<span className="text-[#a5d6ff]">&apos;card&apos;</span>, <span className="text-[#a5d6ff]">&apos;wallet&apos;</span>],
                  <br/>
                  {'    '}line_items: cart.items,
                  <br/>
                  {'    '}mode: <span className="text-[#a5d6ff]">&apos;payment&apos;</span>,
                  <br/>
                  {'    '}success_url: <span className="text-[#a5d6ff]">&apos;https://yoursite.com/success&apos;</span>,
                  <br/>
                  {'    '}cancel_url: <span className="text-[#a5d6ff]">&apos;https://yoursite.com/cancel&apos;</span>,
                  <br/>
                  {'  }'});
                  <br/><br/>
                  {'  '}<span className="text-[#ff7b72]">return</span> session.url;
                  <br/>
                  {'}'};
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

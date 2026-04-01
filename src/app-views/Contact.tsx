"use client";
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';
import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';

export const Contact = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Get In Touch" 
        subtitle="Have questions? Our team is here to help you find the perfect payment solution." 
      />

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Call Us</h4>
                <p className="text-white/60">24/7 Support Available</p>
                <p className="text-white font-medium">+1 (800) XPRESS-PAY</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email Us</h4>
                <p className="text-white/60">General Inquiries</p>
                <p className="text-white font-medium">hello@xpresspaymentsystems.com</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                <p className="text-white/60">Headquarters</p>
                <p className="text-white font-medium">123 Payment Plaza, Tech City</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="grid md:grid-cols-2 gap-6 bg-white/5 p-6 sm:p-8 rounded-3xl border border-white/10">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/60">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-white/60">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-white/60">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us more about your business..."
                />
              </div>
              <div className="md:col-span-2">
                <Button className="w-full flex items-center justify-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
    </PageLayout>
  );
};

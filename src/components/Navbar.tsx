"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from './Button';
import { PartnerModal } from './PartnerModal';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'About', 
    path: '/about',
    dropdown: [
      { name: 'Features', path: '/features' },
      { name: 'Reviews', path: '/reviews' },
    ]
  },
  { 
    name: 'Services', 
    path: '/services',
    dropdown: [
      { name: 'Payment Processing', path: '/services/payment-processing' },
      { name: 'POS Solutions', path: '/services/pos-solutions' },
      { name: 'Mobile Payments', path: '/services/mobile-payments' },
      { name: 'E-Commerce Solutions', path: '/services/e-commerce-solutions' },
      { name: 'Fraud Prevention', path: '/services/fraud-prevention' },
      { name: 'Customer Loyalty Programs', path: '/services/customer-loyalty-programs' },
    ]
  },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar */}
      <div className="h-[5px] w-full bg-gradient-to-r from-[#ccf] via-[#e7d04c] to-[#31fb78]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between bg-black/20 backdrop-blur-md rounded-b-2xl">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#FF3300] to-[#EE7926] rounded-lg" />
          <span>Xpress</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.path}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-3 h-3" />}
              </Link>

              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 pt-4">
                  <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 min-w-[240px] shadow-2xl">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="secondary" className="py-2 px-6 text-sm" onClick={() => setIsPartnerModalOpen(true)}>
            Become A Partner
          </Button>
          <Button onClick={() => router.push('/contact')} className="py-2 px-6 text-sm">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8 flex flex-col gap-6 lg:hidden max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-4">
                <Link
                  href={link.path}
                  onClick={() => !link.dropdown && setIsOpen(false)}
                  className="text-xl font-medium text-white/70 hover:text-white transition-colors flex items-center justify-between"
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 flex flex-col gap-3 border-l border-white/10">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-base text-white/50 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-4 pt-4">
              <Button variant="secondary" onClick={() => {
                setIsOpen(false);
                setIsPartnerModalOpen(true);
              }}>
                Become A Partner
              </Button>
              <Button onClick={() => {
                setIsOpen(false);
                router.push('/contact');
              }}>Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    <PartnerModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
    </>
  );
};

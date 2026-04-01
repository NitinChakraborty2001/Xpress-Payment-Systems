import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';
import { TransactionFlow } from '../components/TransactionFlow';
import { HardwareCarousel } from '../components/HardwareCarousel';
import { MobilePaymentsShowcase } from '../components/MobilePaymentsShowcase';
import { EcommerceSolutions } from '../components/EcommerceSolutions';
import { FraudPreventionDashboard } from '../components/FraudPreventionDashboard';

export const ServicePage = ({ slug }: { slug: string }) => {
  const title = slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <PageLayout>
      <PageHeader title={title || 'Service'} align="left" />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-xl text-white/80 leading-relaxed">
              Xpress Payment Systems delivers secure, efficient {title} solutions tailored for your business needs.
            </p>
            <p className="text-white/60">
              Enjoy transparent pricing with no hidden fees, advanced security for all transactions, and scalable systems that grow with you.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Advanced Security & Encryption
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Scalable POS Systems
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                24/7 Customer Support
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                Transparent Pricing
              </li>
            </ul>
          </div>
        </div>

        {slug === 'payment-processing' && <TransactionFlow />}
        {slug === 'pos-solutions' && <HardwareCarousel />}
        {slug === 'mobile-payments' && <MobilePaymentsShowcase />}
        {slug === 'e-commerce-solutions' && <EcommerceSolutions />}
        {slug === 'fraud-prevention' && <FraudPreventionDashboard />}
    </PageLayout>
  );
};

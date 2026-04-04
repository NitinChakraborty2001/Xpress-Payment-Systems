import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';
import { CoreValuesBento } from '../components/CoreValuesBento';
import Image from 'next/image';

export const About = () => {
  return (
    <PageLayout>
      <PageHeader title="About Xpress Payment Systems" align="center" />
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              Xpress Payment Systems delivers secure, efficient online and mobile payment processing and point-of-sale (POS) solutions tailored for retail, hospitality, healthcare, education, and e-commerce businesses.
            </p>
            <p>
              Enjoy transparent pricing with no hidden fees, advanced security for credit card, debit, and digital transactions, scalable POS systems, and round-the-clock customer support to keep your payments flowing smoothly.
            </p>
            <p>
              Our systems streamline checkout, support mobile and terminal payments, and adapt as your business grows with reliable, innovative solutions designed around your needs.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
            <Image 
              src="https://picsum.photos/seed/business/800/600" 
              alt="Our Office" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
        
        <CoreValuesBento />
    </PageLayout>
  );
};

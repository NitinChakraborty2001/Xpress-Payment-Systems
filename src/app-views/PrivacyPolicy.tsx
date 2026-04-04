import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';

export const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Privacy Policy" 
        subtitle="How we handle and protect your data."
      />
      <div className="max-w-4xl mx-auto text-white/80 space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, and other information you choose to provide.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
          <p>We may use the information we collect about you to provide, maintain, and improve our services, including, for example, to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users and Drivers, develop safety features, authenticate users, and send product updates and administrative messages.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Sharing of Information</h2>
          <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including as follows: with third parties to provide you a service you requested through a partnership or promotional offering made by a third party or us.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Security</h2>
          <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
          <p>If you have any questions about this Privacy Statement, please contact us at privacy@xpresspaymentsystems.com.</p>
        </section>
      </div>
    </PageLayout>
  );
};

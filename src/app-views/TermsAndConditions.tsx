import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';

export const TermsAndConditions = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Terms & Conditions" 
        subtitle="The rules and guidelines for using Xpress Payment Systems."
      />
      <div className="max-w-4xl mx-auto text-white/80 space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Provision of Services</h2>
          <p>Xpress Payment Systems is constantly innovating in order to provide the best possible experience for its users. You acknowledge and agree that the form and nature of the services which Xpress Payment Systems provides may change from time to time without prior notice to you.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Use of the Services</h2>
          <p>You agree to use the services only for purposes that are permitted by (a) the Terms and (b) any applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
          <p>You expressly understand and agree that Xpress Payment Systems shall not be liable to you for any direct, indirect, incidental, special, consequential or exemplary damages which may be incurred by you, however caused and under any theory of liability.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Changes to the Terms</h2>
          <p>Xpress Payment Systems reserves the right to make changes to the Terms from time to time. When these changes are made, Xpress Payment Systems will make a new copy of the Terms available at this location.</p>
        </section>
      </div>
    </PageLayout>
  );
};

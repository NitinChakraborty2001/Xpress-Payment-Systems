import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';
import { ServicesAccordion } from '../components/ServicesAccordion';

export const Services = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive payment solutions designed to streamline your operations and accelerate growth." 
      />
      
      <div className="py-12">
        <ServicesAccordion />
      </div>
    </PageLayout>
  );
};

import { PageLayout } from '../components/PageLayout';
import { PageHeader } from '../components/PageHeader';

export const CookiePolicy = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Cookie Policy" 
        subtitle="Understanding how we use cookies to improve your experience."
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-white/80 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
          <p>Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. How Xpress Uses Cookies</h2>
          <p>When you use and access the Service, we may place a number of cookies files in your web browser. We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, to store your preferences, to enable advertisements delivery, including behavioral advertising.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Cookies</h2>
          <p>In addition to our own cookies, we may also use various third-parties cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. What Are Your Choices Regarding Cookies</h2>
          <p>If you&apos;d like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.</p>
        </section>
      </div>
    </PageLayout>
  );
};

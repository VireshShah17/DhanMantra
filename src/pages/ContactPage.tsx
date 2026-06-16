import { SEOHead } from '@/components/shared/SEOHead';
import { PageHero } from '@/components/shared/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactInfo } from '@/components/sections/ContactInfo';
import { MapSection } from '@/components/sections/MapSection';
// import { DisclaimerSection } from '@/components/sections/DisclaimerSection';
import { pageSEO } from '@/data/seo';
import { ROUTES } from '@/constants/routes';

export function ContactPage() {
  return (
    <>
      <SEOHead config={pageSEO[ROUTES.CONTACT]} />
      <PageHero
        title="Contact Us"
        subtitle="Book a free consultation and take the first step toward smarter investing."
      />
      <section className="section-padding pt-0" aria-labelledby="contact-form-heading">
        <div className="container-narrow">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <ContactInfo showLogo />
            </div>
            <div className="lg:col-span-3">
              <h2 id="contact-form-heading" className="mb-6 text-2xl font-bold text-text-primary">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <MapSection />
      {/* <DisclaimerSection variant="prominent" className="container-narrow mx-auto mb-16 px-4 sm:px-6 lg:px-8" /> */}
    </>
  );
}

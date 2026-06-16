import { SEOHead } from '@/components/shared/SEOHead';
import { PageHero } from '@/components/shared/PageHero';
import { EducationSection } from '@/components/sections/EducationSection';
import { ConsultationCTA } from '@/components/sections/ConsultationCTA';
// import { DisclaimerSection } from '@/components/sections/DisclaimerSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { pageSEO } from '@/data/seo';
import { ROUTES } from '@/constants/routes';

export function EducationPage() {
  return (
    <>
      <SEOHead config={pageSEO[ROUTES.EDUCATION]} />
      <PageHero
        title="Financial Education"
        subtitle="Empower yourself with knowledge to make informed investment decisions."
      />
      <EducationSection />
      {/* <DisclaimerSection variant="prominent" className="container-narrow mx-auto mb-16 px-4 sm:px-6 lg:px-8" /> */}
      <NewsletterSection />
      <ConsultationCTA />
    </>
  );
}

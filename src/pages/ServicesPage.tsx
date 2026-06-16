import { SEOHead } from '@/components/shared/SEOHead';
import { PageHero } from '@/components/shared/PageHero';
import { ServicesGrid } from '@/components/cards/ServicesGrid';
import { FinancialPlanningSection } from '@/components/sections/FinancialPlanningSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ConsultationCTA } from '@/components/sections/ConsultationCTA';
import { FAQSection } from '@/components/sections/FAQSection';
import { services } from '@/data/services';
import { pageSEO } from '@/data/seo';
import { ROUTES } from '@/constants/routes';

export function ServicesPage() {
  return (
    <>
      <SEOHead config={pageSEO[ROUTES.SERVICES]} />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive financial advisory solutions designed to help you achieve your investment goals."
      />
      <ServicesGrid
        services={services}
        showHeading={false}
      />
      <FinancialPlanningSection />
      <WhyChooseUsSection />
      <FAQSection />
      <ConsultationCTA />
    </>
  );
}

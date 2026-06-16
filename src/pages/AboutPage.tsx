import { SEOHead } from '@/components/shared/SEOHead';
import { PageHero } from '@/components/shared/PageHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { MissionVisionSection } from '@/components/sections/MissionVisionSection';
import { TrustSection } from '@/components/sections/TrustSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ConsultationCTA } from '@/components/sections/ConsultationCTA';
// import { DisclaimerSection } from '@/components/sections/DisclaimerSection';
import { companyInfo } from '@/data/company';
import { pageSEO } from '@/data/seo';
import { ROUTES } from '@/constants/routes';

export function AboutPage() {
  return (
    <>
      <SEOHead config={pageSEO[ROUTES.ABOUT]} />
      <PageHero
        title="About Dhan Mantra"
        subtitle={companyInfo.tagline}
      />
      <AboutSection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <TimelineSection />
      <TrustSection />
      {/* <DisclaimerSection variant="prominent" className="container-narrow mx-auto mb-16 px-4 sm:px-6 lg:px-8" /> */}
      <ConsultationCTA />
    </>
  );
}

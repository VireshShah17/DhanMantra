import { SEOHead } from '@/components/shared/SEOHead';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { MissionVisionSection } from '@/components/sections/MissionVisionSection';
import { ServicesGrid } from '@/components/cards/ServicesGrid';
import { ProductsGrid } from '@/components/cards/ProductsGrid';
import { FinancialPlanningSection } from '@/components/sections/FinancialPlanningSection';
import { TimelineSection } from '@/components/sections/TimelineSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
// import { TrustSection } from '@/components/sections/TrustSection';
// import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel';
// import { FAQSection } from '@/components/sections/FAQSection';
import { ConsultationCTA } from '@/components/sections/ConsultationCTA';
// import { DisclaimerSection } from '@/components/sections/DisclaimerSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { services } from '@/data/services';
import { products } from '@/data/products';
import { pageSEO } from '@/data/seo';
import { ROUTES } from '@/constants/routes';

export function HomePage() {
  return (
    <>
      <SEOHead config={pageSEO[ROUTES.HOME]} />
      <HeroSection />
      <AboutSection />
      <MissionVisionSection />
      <ServicesGrid services={services} />
      <ProductsGrid products={products} />
      <FinancialPlanningSection />
      <TimelineSection />
      <WhyChooseUsSection />
      {/* <TrustSection /> */}
      {/* <TestimonialCarousel /> */}
      {/* <FAQSection /> */}
      <ConsultationCTA />
      {/* <DisclaimerSection variant="prominent" className="container-narrow mx-auto mb-16 px-4 sm:px-6 lg:px-8" /> */}
      <NewsletterSection />
    </>
  );
}

import { SEOHead } from '@/components/shared/SEOHead';
import { PageHero } from '@/components/shared/PageHero';
import { ProductsGrid } from '@/components/cards/ProductsGrid';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { ConsultationCTA } from '@/components/sections/ConsultationCTA';
// import { DisclaimerSection } from '@/components/sections/DisclaimerSection';
import { products } from '@/data/products';
import { pageSEO } from '@/data/seo';
import { ROUTES } from '@/constants/routes';

export function ProductsPage() {
  return (
    <>
      <SEOHead config={pageSEO[ROUTES.PRODUCTS]} />
      <PageHero
        title="Investment Products"
        subtitle="Premium investment solutions curated through rigorous research and risk assessment."
      />
      <ProductsGrid products={products} showHeading={false} />
      <WhyChooseUsSection />
      {/* <DisclaimerSection variant="prominent" className="container-narrow mx-auto mb-16 px-4 sm:px-6 lg:px-8" /> */}
      <ConsultationCTA />
    </>
  );
}

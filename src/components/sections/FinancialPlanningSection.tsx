import { financialPlanningBenefits } from '@/data/features';
import { financialPlanningSectionContent } from '@/data/content';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function FinancialPlanningSection() {
  return (
    <section className="section-padding" aria-labelledby="financial-planning-heading">
      <div className="container-narrow">
        <SectionHeading
          title={financialPlanningSectionContent.title}
          subtitle={financialPlanningSectionContent.subtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {financialPlanningBenefits.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { whyChooseUsFeatures } from '@/data/features';
import { whyChooseUsContent } from '@/data/content';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function WhyChooseUsSection() {
  return (
    <section className="section-padding" aria-labelledby="why-choose-heading">
      <div className="container-narrow">
        <SectionHeading
          title={whyChooseUsContent.title}
          subtitle={whyChooseUsContent.subtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsFeatures.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Service } from '@/types';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { SectionHeading } from '@/components/shared/SectionHeading';

interface ServicesGridProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  showHeading?: boolean;
}

export function ServicesGrid({
  services,
  title = 'Our Services',
  subtitle = 'Comprehensive financial solutions tailored to your unique goals and aspirations.',
  showHeading = true,
}: ServicesGridProps) {
  return (
    <section className="section-padding" aria-labelledby={showHeading ? 'services-heading' : undefined}>
      <div className="container-narrow">
        {showHeading ? (
          <SectionHeading
            title={title}
            subtitle={subtitle}
          />
        ) : (
          <h2 id="services-heading" className="sr-only">
            {title}
          </h2>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

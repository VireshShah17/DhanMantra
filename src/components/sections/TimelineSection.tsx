import { motion } from 'framer-motion';
import type { TimelineItem } from '@/types';
import { financialJourneyTimeline } from '@/data/timeline';
import { SectionHeading } from '@/components/shared/SectionHeading';

interface TimelineSectionProps {
  items?: TimelineItem[];
  title?: string;
  subtitle?: string;
}

export function TimelineSection({
  items = financialJourneyTimeline,
  title = 'Your Financial Journey',
  subtitle = 'A structured approach to building lasting wealth, step by step.',
}: TimelineSectionProps) {
  return (
    <section className="bg-bg-alt section-padding" aria-labelledby="timeline-heading">
      <div className="container-narrow">
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-6 top-0 h-full w-0.5 bg-brand-primary/30 md:left-1/2 md:-translate-x-px"
            aria-hidden="true"
          />
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-8 flex items-start gap-6 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="hidden flex-1 md:block" aria-hidden="true" />
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-primary bg-white font-serif text-lg font-bold text-brand-secondary shadow-soft">
                {item.step}
              </div>
              <div className="flex-1 rounded-xl border border-border bg-white p-6 shadow-soft">
                <h3 className="mb-2 text-lg font-semibold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

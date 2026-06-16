import { motion } from 'framer-motion';
import { trustIndicators } from '@/data/features';
import { IconRenderer } from '@/components/shared/IconRenderer';
import { SectionHeading } from '@/components/shared/SectionHeading';

export function TrustSection() {
  return (
    <section className="section-padding" aria-labelledby="trust-heading">
      <div className="container-narrow">
        <SectionHeading
          title="Built on Trust & Integrity"
          subtitle="Regulatory compliance and client-first values at the core of everything we do."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-primary/30 bg-bg-alt text-brand-secondary">
                <IconRenderer name={item.icon} size={28} />
              </div>
              <h3 className="mb-2 font-semibold text-text-primary">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

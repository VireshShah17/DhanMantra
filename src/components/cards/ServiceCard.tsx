import { motion } from 'framer-motion';
import type { Service } from '@/types';
import { IconRenderer } from '@/components/shared/IconRenderer';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-soft transition-shadow hover:shadow-gold"
    >
      <div
        className="absolute inset-x-0 top-0 h-1 gold-border-gradient opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-bg-alt text-brand-secondary transition-colors group-hover:bg-brand-primary/10">
        <IconRenderer name={service.icon} size={28} />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-text-primary">{service.title}</h3>
      <p className="leading-relaxed text-text-secondary">{service.description}</p>
    </motion.article>
  );
}

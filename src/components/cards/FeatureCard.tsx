import { motion } from 'framer-motion';
import type { Feature } from '@/types';
import { IconRenderer } from '@/components/shared/IconRenderer';

interface FeatureCardProps {
  feature: Feature;
  index?: number;
  variant?: 'default' | 'compact';
}

export function FeatureCard({ feature, index = 0, variant = 'default' }: FeatureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={
        variant === 'compact'
          ? 'flex gap-4 rounded-xl border border-border bg-white p-5'
          : 'rounded-2xl border border-border bg-white p-6 shadow-soft transition-shadow hover:shadow-gold'
      }
    >
      <div
        className={
          variant === 'compact'
            ? 'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-secondary'
            : 'mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bg-alt text-brand-secondary'
        }
      >
        <IconRenderer name={feature.icon} size={variant === 'compact' ? 20 : 24} />
      </div>
      <div>
        <h3
          className={
            variant === 'compact'
              ? 'font-semibold text-text-primary'
              : 'mb-2 text-lg font-semibold text-text-primary'
          }
        >
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary">{feature.description}</p>
      </div>
    </motion.article>
  );
}

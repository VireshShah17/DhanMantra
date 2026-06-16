import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Product } from '@/types';
import { IconRenderer } from '@/components/shared/IconRenderer';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-shadow hover:shadow-gold"
    >
      <div className="border-b border-border bg-bg-alt p-8">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white text-brand-secondary shadow-soft">
          <IconRenderer name={product.icon} size={28} />
        </div>
        <h3 className="text-xl font-semibold text-text-primary">{product.title}</h3>
        <p className="mt-2 leading-relaxed text-text-secondary">{product.description}</p>
      </div>
      <ul className="flex flex-1 flex-col gap-3 p-8" role="list">
        {product.highlights.map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-sm text-text-secondary">
            <Check
              size={16}
              className="mt-0.5 shrink-0 text-brand-primary"
              aria-hidden="true"
            />
            {highlight}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

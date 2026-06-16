import type { Product } from '@/types';
import { ProductCard } from '@/components/cards/ProductCard';
import { SectionHeading } from '@/components/shared/SectionHeading';

interface ProductsGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  showHeading?: boolean;
}

export function ProductsGrid({
  products,
  title = 'Investment Products',
  subtitle = 'Premium investment solutions designed for every stage of your wealth journey.',
  showHeading = true,
}: ProductsGridProps) {
  return (
    <section className="bg-bg-alt section-padding" aria-labelledby={showHeading ? 'products-heading' : undefined}>
      <div className="container-narrow">
        {showHeading ? (
          <SectionHeading title={title} subtitle={subtitle} />
        ) : (
          <h2 id="products-heading" className="sr-only">
            {title}
          </h2>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

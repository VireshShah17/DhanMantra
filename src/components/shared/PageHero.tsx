import { cn } from '@/utils/cn';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageHero({ title, subtitle, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-bg-alt section-padding',
        className,
      )}
      aria-labelledby="page-hero-title"
    >
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-accent/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-brand-primary/20 blur-3xl" />
      </div>
      <div className="container-narrow relative">
        <h1
          id="page-hero-title"
          className="text-balance text-4xl font-bold text-text-primary sm:text-5xl lg:text-6xl"
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">{subtitle}</p>
        )}
        <div className="mt-6 h-1 w-20 gold-border-gradient rounded-full" aria-hidden="true" />
      </div>
    </section>
  );
}

import { cn } from '@/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      <div
        className={cn(
          'mb-4 flex items-center gap-3',
          align === 'center' && 'justify-center',
        )}
      >
        <span className="h-px w-8 bg-brand-primary" aria-hidden="true" />
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-secondary">
          Dhan Mantra
        </span>
        <span className="h-px w-8 bg-brand-primary" aria-hidden="true" />
      </div>
      <h2 className="text-balance text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}

import { companyInfo } from '@/data/company';
import { cn } from '@/utils/cn';

interface DisclaimerSectionProps {
  variant?: 'default' | 'footer' | 'prominent';
  className?: string;
}

export function DisclaimerSection({
  variant = 'default',
  className,
}: DisclaimerSectionProps) {
  return (
    <aside
      className={cn(
        'rounded-xl border p-6',
        variant === 'footer'
          ? 'border-white/10 bg-white/5 text-white/60'
          : variant === 'prominent'
            ? 'border-brand-primary/30 bg-brand-primary/5'
            : 'border-border bg-bg-alt',
        className,
      )}
      aria-label="Regulatory disclaimer"
    >
      <p
        className={cn(
          'text-sm font-semibold',
          variant === 'footer' ? 'text-brand-accent' : 'text-brand-secondary',
        )}
      >
        {companyInfo.apDisclaimer}
      </p>
      <p
        className={cn(
          'mt-1 text-sm',
          variant === 'footer' ? 'text-white/50' : 'text-text-secondary',
        )}
      >
        {companyInfo.sebiRegistration}
      </p>
      <ul className="mt-3 space-y-1" role="list">
        {companyInfo.complianceNotes.map((note) => (
          <li
            key={note}
            className={cn(
              'text-xs leading-relaxed',
              variant === 'footer' ? 'text-white/40' : 'text-text-secondary',
            )}
          >
            {note}
          </li>
        ))}
      </ul>
    </aside>
  );
}

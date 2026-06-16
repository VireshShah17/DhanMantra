import { MapPin } from 'lucide-react';
import { contactInfo } from '@/data/contact';

export function MapSection() {
  return (
    <section className="section-padding pt-0" aria-label="Office location map">
      <div className="container-narrow">
        <div className="overflow-hidden rounded-2xl border border-border bg-bg-alt">
          <div className="relative flex aspect-[21/9] min-h-[280px] items-center justify-center bg-gradient-to-br from-brand-primary/5 via-bg-alt to-brand-accent/10">
            <div className="text-center">
              <MapPin size={40} className="mx-auto mb-3 text-brand-secondary" aria-hidden="true" />
              <p className="font-semibold text-text-primary">Our Office Location</p>
              <p className="mt-1 max-w-md px-4 text-sm text-text-secondary">
                {contactInfo.address}
              </p>
              <p className="mt-4 text-xs text-text-secondary/70">
                {/* TODO: Replace with embedded Google Maps iframe when office location is confirmed */}
                Interactive map integration placeholder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

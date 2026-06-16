import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { CTAContent } from '@/types';
import { consultationCTA } from '@/data/content';
import { Button } from '@/components/shared/Button';

interface ConsultationCTAProps {
  content?: CTAContent;
}

export function ConsultationCTA({ content = consultationCTA }: ConsultationCTAProps) {
  return (
    <section className="section-padding" aria-labelledby="cta-heading">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-text-primary px-8 py-16 text-center sm:px-16"
        >
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-primary blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-accent blur-3xl" />
          </div>
          <div className="relative">
            <h2
              id="cta-heading"
              className="text-balance text-3xl font-bold text-white sm:text-4xl"
            >
              {content.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              {content.description}
            </p>
            <div className="mt-8">
              <Button to={content.buttonHref} size="lg">
                {content.buttonLabel}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import type { HeroContent } from '@/types';
import { Button } from '@/components/shared/Button';
import { homeHero } from '@/data/content';

interface HeroSectionProps {
  content?: HeroContent;
}

export function HeroSection({ content = homeHero }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[90vh] overflow-hidden bg-bg-alt"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-brand-accent/10 to-transparent" />
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-brand-secondary/10 blur-3xl" />
      </div>

      <div className="container-narrow relative flex min-h-[90vh] items-center section-padding">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-secondary">
              Financial Advisory & Investment Guidance
            </p>
            <h1
              id="hero-heading"
              className="text-balance text-4xl font-bold leading-tight text-text-primary sm:text-5xl lg:text-6xl"
            >
              {content.headline.split(' ').slice(0, 2).join(' ')}{' '}
              <span className="gold-gradient-text">
                {content.headline.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className="mt-4 text-xl font-medium text-brand-secondary">
              {content.subheadline}
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-text-secondary">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to={content.primaryCta.href} size="lg">
                {content.primaryCta.label}
                <ArrowRight size={18} aria-hidden="true" />
              </Button>
              <Button to={content.secondaryCta.href} variant="outline" size="lg">
                {content.secondaryCta.label}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
            aria-hidden="true"
          >
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-3xl border border-border bg-white shadow-gold" />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-brand-primary/20 via-bg-alt to-brand-accent/30" />
              <div className="absolute inset-8 flex flex-col items-center justify-center rounded-xl border border-border/50 bg-white/80 p-8 backdrop-blur-sm">
                <TrendingUp size={48} className="mb-4 text-brand-primary" />
                <p className="text-center font-serif text-2xl font-bold text-text-primary">
                  Long-Term Growth
                </p>
                <p className="mt-2 text-center text-sm text-text-secondary">
                  Disciplined investing for sustainable wealth creation
                </p>
                <div className="mt-6 flex w-full items-end justify-between gap-2">
                  {(
                    [
                      'h-[40px]',
                      'h-[55px]',
                      'h-[45px]',
                      'h-[70px]',
                      'h-[60px]',
                      'h-[85px]',
                      'h-[75px]',
                      'h-[95px]',
                    ] as const
                  ).map((heightClass, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-t bg-gradient-to-t from-brand-secondary to-brand-accent ${heightClass}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

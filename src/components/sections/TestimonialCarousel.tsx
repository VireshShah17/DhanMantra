import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import type { Testimonial } from '@/types';
import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/shared/SectionHeading';

interface TestimonialCarouselProps {
  items?: Testimonial[];
}

export function TestimonialCarousel({ items = testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () => setCurrent((prev) => (prev - 1 + items.length) % items.length);

  const testimonial = items[current];

  return (
    <section className="bg-bg-alt section-padding" aria-labelledby="testimonials-heading">
      <div className="container-narrow">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real stories from investors who trust Dhan Mantra with their financial journey."
        />

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border bg-white p-8 shadow-soft sm:p-12"
            >
              <Quote
                size={32}
                className="mb-4 text-brand-primary/40"
                aria-hidden="true"
              />
              <p className="text-lg leading-relaxed text-text-primary italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <footer className="mt-6 flex items-center justify-between">
                <div>
                  <cite className="not-italic">
                    <p className="font-semibold text-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </cite>
                </div>
                <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-brand-primary text-brand-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-primary transition-colors hover:border-brand-primary hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={index === current}
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === current
                      ? 'w-8 bg-brand-primary'
                      : 'w-2 bg-border hover:bg-brand-accent'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-text-primary transition-colors hover:border-brand-primary hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

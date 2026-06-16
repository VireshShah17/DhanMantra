import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@/types';
import { faqs } from '@/data/faqs';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { cn } from '@/utils/cn';

interface FAQSectionProps {
  items?: FAQ[];
}

export function FAQSection({ items = faqs }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section-padding" aria-labelledby="faq-heading">
      <div className="container-narrow max-w-3xl">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services and investment approach."
        />
        <div className="space-y-3">
          {items.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-xl border border-border bg-white"
              >
                <button
                  type="button"
                  id={`faq-trigger-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => toggle(faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-bg-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-primary"
                >
                  <span className="font-semibold text-text-primary">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={cn(
                      'shrink-0 text-brand-secondary transition-transform duration-300',
                      isOpen && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${faq.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="border-t border-border px-6 py-4 leading-relaxed text-text-secondary">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

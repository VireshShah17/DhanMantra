import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText } from 'lucide-react';
import type { EducationItem } from '@/types';
import { educationItems, educationCategories } from '@/data/education';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { cn } from '@/utils/cn';

const typeIcons = {
  guide: BookOpen,
  webinar: Video,
  article: FileText,
};

interface EducationSectionProps {
  items?: EducationItem[];
  showFilter?: boolean;
}

export function EducationSection({
  items = educationItems,
  showFilter = true,
}: EducationSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filtered =
    activeCategory === 'all'
      ? items
      : items.filter((item) => item.type === activeCategory);

  return (
    <section className="section-padding" aria-labelledby="education-heading">
      <div className="container-narrow">
        <SectionHeading
          title="Financial Education"
          subtitle="Empower yourself with knowledge through our guides, articles, and expert-led webinars."
        />

        {showFilter && (
          <div
            className="mb-8 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Filter education resources"
          >
            {educationCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary',
                  activeCategory === category.id
                    ? 'bg-brand-primary text-text-primary'
                    : 'border border-border bg-white text-text-secondary hover:border-brand-primary',
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => {
            const Icon = typeIcons[item.type];
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-soft transition-shadow hover:shadow-gold"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-alt text-brand-secondary group-hover:bg-brand-primary/10">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-bg-alt px-3 py-1 text-xs font-medium capitalize text-text-secondary">
                    {item.type}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold text-text-primary">{item.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
                  {item.description}
                </p>
                <p className="text-xs font-medium text-brand-secondary">{item.duration}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

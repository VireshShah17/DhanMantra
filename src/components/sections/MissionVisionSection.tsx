import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { companyInfo } from '@/data/company';

export function MissionVisionSection() {
  const items = [
    {
      icon: Target,
      title: 'Our Mission',
      content: companyInfo.mission,
    },
    {
      icon: Eye,
      title: 'Our Vision',
      content: companyInfo.vision,
    },
  ];

  return (
    <section className="bg-bg-alt section-padding" aria-labelledby="mission-vision-heading">
      <div className="container-narrow">
        <h2 id="mission-vision-heading" className="sr-only">
          Mission and Vision
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-border bg-white p-8 shadow-soft"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-secondary">
                <item.icon size={24} aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-text-primary">{item.title}</h3>
              <p className="leading-relaxed text-text-secondary">{item.content}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

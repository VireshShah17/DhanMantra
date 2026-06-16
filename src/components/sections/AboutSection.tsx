import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { aboutSectionContent } from '@/data/content';
// import { companyInfo } from '@/data/company';

export function AboutSection() {
  return (
    <section className="section-padding" aria-labelledby="about-heading">
      <div className="container-narrow">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title={aboutSectionContent.title}
              align="left"
              className="mb-6"
            />
            <p className="text-lg leading-relaxed text-text-secondary">
              {aboutSectionContent.content}
            </p>
            {/* <div className="mt-8 rounded-xl border border-border bg-bg-alt p-6">
              <p className="text-sm font-semibold text-brand-secondary">
                {companyInfo.apDisclaimer}
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                {companyInfo.sebiRegistration}
              </p>
            </div> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            aria-hidden="true"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand-primary/10 via-bg-alt to-brand-accent/20 shadow-soft">
              <div className="flex h-full flex-col items-center justify-center p-8">
                <div className="mb-6 h-24 w-24 rounded-full border-4 border-brand-primary/30 bg-white shadow-gold" />
                <p className="font-serif text-3xl font-bold text-text-primary">
                  Trust & Growth
                </p>
                <p className="mt-2 text-center text-text-secondary">
                  Bridging professional strategies with everyday investors
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

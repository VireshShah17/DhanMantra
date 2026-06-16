import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
// import { DisclaimerSection } from '@/components/sections/DisclaimerSection';
import { navigationLinks } from '@/data/navigation';
import { contactInfo } from '@/data/contact';
import { companyInfo } from '@/data/company';
import { BRAND } from '@/constants/brand';
import { ROUTES } from '@/constants/routes';

export function Footer() {
  // const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-text-primary text-white" role="contentinfo">
      <div className="container-narrow section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" aria-label="Dhan Mantra - Home">
              <span className="font-serif text-2xl font-bold text-white">
                Dhan <span className="text-brand-accent">Mantra</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/70">{BRAND.tagline}</p>
            <p className="text-xs leading-relaxed text-white/50">
              {companyInfo.apDisclaimer}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-brand-accent">
              Quick Links
            </h3>
            <ul className="space-y-2" role="list">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-brand-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-brand-accent">
              Contact
            </h3>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand-primary" aria-hidden="true" />
                <span>{contactInfo.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-accent"
                >
                  <Phone size={16} className="shrink-0 text-brand-primary" aria-hidden="true" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-brand-accent"
                >
                  <Mail size={16} className="shrink-0 text-brand-primary" aria-hidden="true" />
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-brand-accent">
              Get Started
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/70">
              Take the first step toward smarter investing with a free consultation.
            </p>
            <Link
              to={ROUTES.CONTACT}
              className="inline-flex items-center rounded-lg bg-brand-primary px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:bg-brand-accent"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>

        {/* <div className="mt-12 border-t border-white/10 pt-8">
          <DisclaimerSection variant="footer" />
          <p className="mt-6 text-center text-xs text-white/40">
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
}

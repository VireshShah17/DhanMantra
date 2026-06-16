import type { HeroContent, CTAContent } from '@/types';
import { ROUTES } from '@/constants/routes';

export const homeHero: HeroContent = {
  headline: 'Smart Investing Made Simple',
  subheadline: 'Welcome to Dhan Mantra — Your Partner in Smart Investing.',
  description:
    'At Dhan Mantra, we believe true financial success comes from knowledge, discipline, and consistent guidance.',
  primaryCta: { label: 'Book Free Consultation', href: ROUTES.CONTACT },
  secondaryCta: { label: 'Start Your Financial Journey', href: ROUTES.SERVICES },
};

export const consultationCTA: CTAContent = {
  headline: 'Ready to Start Your Financial Journey?',
  description:
    'Partner with Dhan Mantra and take the first step toward smarter investing and long-term wealth creation.',
  buttonLabel: 'Book Free Consultation',
  buttonHref: ROUTES.CONTACT,
};

export const aboutSectionContent = {
  title: 'Who We Are',
  content:
    'Dhan Mantra is a modern financial advisory brand committed to making investing more approachable, personalized, and effective. We are an Authorized Person (AP) with Arihant Capital. We bridge the gap between professional market strategies and everyday investors through disciplined, research-backed financial guidance.',
};

export const financialPlanningSectionContent = {
  title: 'Why Financial Planning Matters',
  subtitle:
    'A structured financial plan is the foundation of lasting wealth. Here is how we help you build yours.',
};

export const whyChooseUsContent = {
  title: 'Why Choose Dhan Mantra',
  subtitle:
    'We combine expertise, transparency, and a client-first approach to deliver exceptional financial guidance.',
};

export const newsletterContent = {
  title: 'Stay Informed',
  subtitle:
    'Subscribe to receive market insights, investment tips, and updates on upcoming webinars.',
  buttonLabel: 'Subscribe',
};

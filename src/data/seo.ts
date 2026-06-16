import type { SEOConfig } from '@/types';
import { ROUTES } from '@/constants/routes';

export const defaultSEO: SEOConfig = {
  title: 'Dhan Mantra | Your Growth Brings Our Growth',
  description:
    'Dhan Mantra is a premium financial advisory and investment guidance company. Authorized Person (AP) with Arihant Capital. Smart investing made simple.',
  path: ROUTES.HOME,
  keywords: [
    'financial advisory',
    'investment guidance',
    'mutual funds',
    'SIP',
    'portfolio management',
    'Dhan Mantra',
  ],
};

export const pageSEO: Record<string, SEOConfig> = {
  [ROUTES.HOME]: {
    title: 'Dhan Mantra | Smart Investing Made Simple',
    description:
      'Partner with Dhan Mantra for personalized financial planning, investment advisory, and wealth creation strategies. Your Growth Brings Our Growth.',
    path: ROUTES.HOME,
  },
  [ROUTES.ABOUT]: {
    title: 'About Us | Dhan Mantra',
    description:
      'Learn about Dhan Mantra — a trusted financial advisory brand and Authorized Person with Arihant Capital, committed to your long-term financial growth.',
    path: ROUTES.ABOUT,
  },
  [ROUTES.SERVICES]: {
    title: 'Our Services | Dhan Mantra',
    description:
      'Explore Dhan Mantra financial services including financial planning, investment advisory, portfolio management, and personal advisory.',
    path: ROUTES.SERVICES,
  },
  [ROUTES.PRODUCTS]: {
    title: 'Investment Products | Dhan Mantra',
    description:
      'Discover Dhan Mantra investment products — Mutual Funds, SIP, Portfolio solutions, Stock Baskets, and Financial Education.',
    path: ROUTES.PRODUCTS,
  },
  [ROUTES.CONTACT]: {
    title: 'Contact Us | Dhan Mantra',
    description:
      'Get in touch with Dhan Mantra for a free consultation. Start your financial journey with expert investment guidance.',
    path: ROUTES.CONTACT,
  },
};

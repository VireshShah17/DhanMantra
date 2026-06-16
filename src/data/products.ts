import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'mutual-funds',
    title: 'Mutual Funds',
    description:
      'Access curated mutual fund solutions across categories, selected through rigorous research and risk assessment.',
    icon: 'PieChart',
    slug: 'mutual-funds',
    highlights: ['Diversified portfolios', 'Expert fund selection', 'Regular performance reviews'],
  },
  {
    id: 'sip',
    title: 'SIP',
    description:
      'Systematic Investment Plans designed to build wealth gradually through disciplined, automated investing.',
    icon: 'CalendarClock',
    slug: 'sip',
    highlights: ['Rupee cost averaging', 'Flexible amounts', 'Long-term compounding'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'Custom-built investment portfolios aligned with your goals, risk tolerance, and investment horizon.',
    icon: 'Layers',
    slug: 'portfolio',
    highlights: ['Goal-aligned allocation', 'Risk-managed approach', 'Transparent reporting'],
  },
  {
    id: 'stock-baskets',
    title: 'Stock Baskets',
    description:
      'Thematic and sector-based stock baskets crafted by research teams for strategic equity exposure.',
    icon: 'ShoppingBasket',
    slug: 'stock-baskets',
    highlights: ['Thematic investing', 'Research-backed picks', 'Balanced diversification'],
  },
  {
    id: 'financial-education',
    title: 'Financial Education & Webinars',
    description:
      'Educational resources and live webinars to empower you with the knowledge to make informed decisions.',
    icon: 'GraduationCap',
    slug: 'financial-education',
    highlights: ['Live webinars', 'Expert-led sessions', 'Beginner-friendly content'],
  },
];

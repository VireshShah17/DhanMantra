import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    description:
      'Comprehensive goal-based planning tailored to your life stage, income, and aspirations for sustainable wealth creation.',
    icon: 'Target',
    slug: 'financial-planning',
  },
  {
    id: 'investment-advisory',
    title: 'Investment Advisory',
    description:
      'Research-driven investment recommendations aligned with your risk profile and long-term financial objectives.',
    icon: 'TrendingUp',
    slug: 'investment-advisory',
  },
  {
    id: 'personal-advisory',
    title: 'Personal Advisory',
    description:
      'Dedicated one-on-one guidance from experienced advisors who prioritize your financial well-being above all.',
    icon: 'UserCheck',
    slug: 'personal-advisory',
  },
  {
    id: 'portfolio-rebalancing',
    title: 'Portfolio Rebalancing',
    description:
      'Periodic portfolio reviews and strategic rebalancing to maintain optimal asset allocation and manage risk.',
    icon: 'Scale',
    slug: 'portfolio-rebalancing',
  },
  {
    id: 'portfolio-management',
    title: 'Portfolio Management',
    description:
      'End-to-end portfolio oversight with disciplined monitoring, performance tracking, and proactive adjustments.',
    icon: 'Briefcase',
    slug: 'portfolio-management',
  },
];

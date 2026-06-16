import type { TimelineItem } from '@/types';

export const financialJourneyTimeline: TimelineItem[] = [
  {
    id: 'assessment',
    step: 1,
    title: 'Financial Assessment',
    description:
      'We evaluate your current financial situation, income, expenses, and existing investments.',
  },
  {
    id: 'goal-setting',
    step: 2,
    title: 'Goal Setting',
    description:
      'Define short-term and long-term financial goals with clear timelines and target amounts.',
  },
  {
    id: 'strategy',
    step: 3,
    title: 'Strategy Design',
    description:
      'Create a personalized investment strategy aligned with your risk profile and objectives.',
  },
  {
    id: 'implementation',
    step: 4,
    title: 'Implementation',
    description:
      'Execute your financial plan with carefully selected products and disciplined allocation.',
  },
  {
    id: 'monitoring',
    step: 5,
    title: 'Review & Rebalance',
    description:
      'Regular portfolio reviews and strategic adjustments to keep you on track toward your goals.',
  },
];

import type { EducationItem } from '@/types';

export const educationItems: EducationItem[] = [
  {
    id: 'investing-basics',
    title: 'Investing Basics: A Beginner\'s Guide',
    description:
      'Learn the fundamentals of investing, from understanding asset classes to building your first portfolio.',
    type: 'guide',
    duration: '15 min read',
  },
  {
    id: 'sip-masterclass',
    title: 'SIP Masterclass: Power of Compounding',
    description:
      'Discover how Systematic Investment Plans can help you build wealth through disciplined, regular investing.',
    type: 'webinar',
    duration: '45 min session',
  },
  {
    id: 'retirement-planning',
    title: 'Retirement Planning Essentials',
    description:
      'Plan for a secure retirement with strategic asset allocation and long-term investment approaches.',
    type: 'article',
    duration: '10 min read',
  },
  {
    id: 'tax-efficient',
    title: 'Tax-Efficient Investing Strategies',
    description:
      'Understand how to optimize your investments for tax efficiency while maximizing returns.',
    type: 'guide',
    duration: '12 min read',
  },
  {
    id: 'market-volatility',
    title: 'Navigating Market Volatility',
    description:
      'Learn how to stay calm during market downturns and make rational investment decisions.',
    type: 'webinar',
    duration: '60 min session',
  },
  {
    id: 'portfolio-diversification',
    title: 'The Art of Portfolio Diversification',
    description:
      'Master the principles of diversification to reduce risk and enhance long-term portfolio performance.',
    type: 'article',
    duration: '8 min read',
  },
];

export const educationCategories = [
  { id: 'all', label: 'All Resources' },
  { id: 'guide', label: 'Guides' },
  { id: 'webinar', label: 'Webinars' },
  { id: 'article', label: 'Articles' },
] as const;

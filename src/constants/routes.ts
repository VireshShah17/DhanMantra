export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  PRODUCTS: '/products',
  CONTACT: '/contact',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

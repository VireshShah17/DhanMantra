import type { NavLink } from '@/types';
import { ROUTES } from '@/constants/routes';

export const navigationLinks: NavLink[] = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'About', href: ROUTES.ABOUT },
  { label: 'Services', href: ROUTES.SERVICES },
  { label: 'Products', href: ROUTES.PRODUCTS },
  { label: 'Contact', href: ROUTES.CONTACT },
];

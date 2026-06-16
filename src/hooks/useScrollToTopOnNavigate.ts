import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '@/utils/scroll';

export function useScrollToTopOnNavigate(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop('instant');
  }, [pathname]);
}

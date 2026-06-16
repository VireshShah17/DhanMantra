import type { SEOConfig } from '@/types';
import { usePageSEO } from '@/hooks/usePageSEO';

interface SEOHeadProps {
  config: SEOConfig;
}

export function SEOHead({ config }: SEOHeadProps) {
  usePageSEO(config);
  return null;
}

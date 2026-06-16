import { useEffect } from 'react';
import type { SEOConfig } from '@/types';
import { defaultSEO } from '@/data/seo';
import { SITE_URL, BRAND } from '@/constants/brand';

function setMetaTag(name: string, content: string, isProperty = false): void {
  const attr = isProperty ? 'property' : 'name';
  let element = document.querySelector(`meta[${attr}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string): void {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

export function usePageSEO(config?: SEOConfig): void {
  useEffect(() => {
    const seo = config ?? defaultSEO;
    const canonicalUrl = `${SITE_URL}${seo.path}`;
    const ogImage = `${SITE_URL}/og-image.png`;

    document.title = seo.title;

    setMetaTag('description', seo.description);
    if (seo.keywords?.length) {
      setMetaTag('keywords', seo.keywords.join(', '));
    }

    setMetaTag('og:title', seo.title, true);
    setMetaTag('og:description', seo.description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', BRAND.name, true);

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', seo.title);
    setMetaTag('twitter:description', seo.description);
    setMetaTag('twitter:image', ogImage);

    setLinkTag('canonical', canonicalUrl);
  }, [config]);
}

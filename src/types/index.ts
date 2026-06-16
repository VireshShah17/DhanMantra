export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
  highlights: string[];
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactInformation {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TimelineItem {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface EducationItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'webinar' | 'guide';
  duration: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  investmentGoal: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  industry: string;
  about: string;
  mission: string;
  vision: string;
  apDisclaimer: string;
  sebiRegistration: string;
  complianceNotes: string[];
}

export interface HeroContent {
  headline: string;
  subheadline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface CTAContent {
  headline: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
}

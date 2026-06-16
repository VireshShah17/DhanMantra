import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number must be less than 15 digits')
    .regex(/^[+]?[\d\s-]+$/, 'Please enter a valid phone number'),
  investmentGoal: z
    .string()
    .min(3, 'Please describe your investment goal')
    .max(200, 'Investment goal must be less than 200 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

export const newsletterFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
export type NewsletterFormSchema = z.infer<typeof newsletterFormSchema>;

import type { ContactFormData, NewsletterFormData, ApiResponse } from '@/types';

const MOCK_DELAY = 1500;

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Submit contact form data to the backend API.
 *
 * TODO: Replace mock implementation with actual API call.
 * Example integration:
 *
 * const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify(data),
 * });
 * if (!response.ok) throw new Error('Failed to submit form');
 * return response.json();
 */
export async function submitContactForm(
  data: ContactFormData,
): Promise<ApiResponse> {
  await delay(MOCK_DELAY);

  console.info('[Mock API] Contact form submitted:', data);

  return {
    success: true,
    message:
      'Thank you for reaching out! Our team will contact you within 24 hours.',
    data,
  };
}

/**
 * Subscribe to newsletter.
 *
 * TODO: Replace mock implementation with actual API call.
 * Example integration:
 *
 * const response = await fetch(`${import.meta.env.VITE_API_URL}/newsletter`, {
 *   method: 'POST',
 *   headers: { 'Content-Type': 'application/json' },
 *   body: JSON.stringify(data),
 * });
 */
export async function subscribeNewsletter(
  data: NewsletterFormData,
): Promise<ApiResponse> {
  await delay(MOCK_DELAY);

  console.info('[Mock API] Newsletter subscription:', data);

  return {
    success: true,
    message: 'Successfully subscribed! Check your inbox for confirmation.',
    data,
  };
}

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { subscribeNewsletter } from '@/services/contact';
import { newsletterFormSchema, type NewsletterFormSchema } from '@/utils/validation';
import { newsletterContent } from '@/data/content';

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormSchema>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: { email: '' },
  });

  const onSubmit = async (data: NewsletterFormSchema) => {
    setLoading(true);
    try {
      const response = await subscribeNewsletter(data);
      if (response.success) {
        setSubmitted(true);
        reset();
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="border-y border-border bg-bg-alt section-padding" aria-labelledby="newsletter-heading">
      <div className="container-narrow mx-auto max-w-2xl text-center">
        <Mail size={32} className="mx-auto mb-4 text-brand-secondary" aria-hidden="true" />
        <h2 id="newsletter-heading" className="text-2xl font-bold text-text-primary sm:text-3xl">
          {newsletterContent.title}
        </h2>
        <p className="mt-2 text-text-secondary">{newsletterContent.subtitle}</p>

        {submitted ? (
          <div
            className="mt-6 flex items-center justify-center gap-2 text-brand-secondary"
            role="status"
            aria-live="polite"
          >
            <CheckCircle size={20} aria-hidden="true" />
            <span>Successfully subscribed!</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start"
            noValidate
            aria-label="Newsletter subscription"
          >
            <div className="flex-1">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'newsletter-email-error' : undefined}
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                {...register('email')}
              />
              {errors.email && (
                <p id="newsletter-email-error" className="mt-1 text-left text-sm text-red-600" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button type="submit" loading={loading}>
              {newsletterContent.buttonLabel}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}

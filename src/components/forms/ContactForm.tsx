import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/shared/Button';
import { submitContactForm } from '@/services/contact';
import { contactFormSchema, type ContactFormSchema } from '@/utils/validation';
import { cn } from '@/utils/cn';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      investmentGoal: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormSchema) => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await submitContactForm(data);
      if (response.success) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
        setErrorMessage(response.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Unable to submit the form. Please try again later.');
    }
  };

  const inputClasses = (hasError: boolean) =>
    cn(
      'w-full rounded-lg border bg-white px-4 py-3 text-text-primary transition-colors placeholder:text-text-secondary/50 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20',
      hasError ? 'border-red-400' : 'border-border',
    );

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center rounded-2xl border border-brand-primary/30 bg-brand-primary/5 p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle size={48} className="mb-4 text-brand-secondary" aria-hidden="true" />
        <h3 className="text-xl font-semibold text-text-primary">Message Sent Successfully</h3>
        <p className="mt-2 text-text-secondary">
          Thank you for reaching out! Our team will contact you within 24 hours.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setStatus('idle')}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
      aria-label="Contact form"
    >
      {status === 'error' && (
        <div
          className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700"
          role="alert"
        >
          <AlertCircle size={20} className="mt-0.5 shrink-0" aria-hidden="true" />
          <p className="text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-text-primary">
            Full Name <span className="text-brand-secondary">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            className={inputClasses(!!errors.fullName)}
            {...register('fullName')}
          />
          {errors.fullName && (
            <p id="fullName-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-text-primary">
            Email <span className="text-brand-secondary">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputClasses(!!errors.email)}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-text-primary">
            Phone Number <span className="text-brand-secondary">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={inputClasses(!!errors.phone)}
            {...register('phone')}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="investmentGoal"
            className="mb-1.5 block text-sm font-medium text-text-primary"
          >
            Investment Goal <span className="text-brand-secondary">*</span>
          </label>
          <input
            id="investmentGoal"
            type="text"
            aria-invalid={!!errors.investmentGoal}
            aria-describedby={errors.investmentGoal ? 'investmentGoal-error' : undefined}
            className={inputClasses(!!errors.investmentGoal)}
            placeholder="e.g. Retirement planning, SIP"
            {...register('investmentGoal')}
          />
          {errors.investmentGoal && (
            <p id="investmentGoal-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.investmentGoal.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
          Message <span className="text-brand-secondary">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={inputClasses(!!errors.message)}
          placeholder="Tell us about your financial goals..."
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button type="submit" loading={status === 'loading'} className="w-full sm:w-auto">
        <Send size={18} aria-hidden="true" />
        Send Message
      </Button>
    </form>
  );
}

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import type { ContactInformation } from '@/types';
import { contactInfo } from '@/data/contact';
import { Logo } from '@/components/shared/Logo';

interface ContactInfoProps {
  info?: ContactInformation;
  showLogo?: boolean;
}

export function ContactInfo({ info = contactInfo, showLogo = false }: ContactInfoProps) {
  const items = [
    { icon: MapPin, label: 'Address', value: info.address, href: undefined },
    {
      icon: Phone,
      label: 'Phone',
      value: info.phone,
      href: `tel:${info.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email',
      value: info.email,
      href: `mailto:${info.email}`,
    },
    { icon: Clock, label: 'Working Hours', value: info.workingHours, href: undefined },
  ];

  return (
    <div className="space-y-6">
      {showLogo && (
        <div className="mb-8">
          <Logo />
        </div>
      )}
      <h2 className="text-2xl font-bold text-text-primary">Get In Touch</h2>
      <p className="text-text-secondary">
        Ready to start your financial journey? Reach out to us for a free consultation.
      </p>
      <ul className="space-y-5" role="list">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-secondary">
              <item.icon size={18} aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-text-secondary transition-colors hover:text-brand-secondary"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-text-secondary">{item.value}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import type { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export function IconRenderer({ name, className, size = 24 }: IconRendererProps) {
  const Icon = (Icons as Record<string, LucideIcon>)[name];

  if (!Icon) {
    return <Icons.Circle className={className} size={size} aria-hidden="true" />;
  }

  return <Icon className={className} size={size} aria-hidden="true" />;
}

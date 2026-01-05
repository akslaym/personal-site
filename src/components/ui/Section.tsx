import { type ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  title?: string;
  subtitle?: string;
}

export function Section({ id, className, children, title, subtitle }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto", className)}>
      {(title || subtitle) && (
        <div className="mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="h-1 w-20 bg-primary-700 mt-6 rounded-full" />
        </div>
      )}
      {children}
    </section>
  );
}

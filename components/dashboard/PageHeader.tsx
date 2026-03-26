import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  className?: string;
};

export function PageHeader({
  title,
  description,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 md:flex-row md:items-center md:justify-between',
        className
      )}
    >
      <div className='space-y-1'>
        <h1 className='font-heading text-2xl font-semibold tracking-tight md:text-3xl'>
          {title}
        </h1>

        {description ? (
          <p className='text-muted-foreground text-sm md:text-base'>
            {description}
          </p>
        ) : null}
      </div>

      {actions ? (
        <div className='flex items-center gap-2'>{actions}</div>
      ) : null}
    </div>
  );
}

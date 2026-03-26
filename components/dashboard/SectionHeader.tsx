import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between',
        className
      )}
    >
      <div className='space-y-1'>
        <h2 className='font-heading text-lg font-semibold tracking-tight'>
          {title}
        </h2>

        {description ? (
          <p className='text-muted-foreground text-sm'>{description}</p>
        ) : null}
      </div>

      {action ? <div className='flex items-center gap-2'>{action}</div> : null}
    </div>
  );
}

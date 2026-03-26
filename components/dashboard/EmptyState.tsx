import { ReactNode } from 'react';

import type { LucideIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type EmptyStateProps = {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  action?: ReactNode;
  className?: string;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'bg-card flex min-h-[260px] flex-col items-center justify-center rounded-xl border border-dashed px-6 py-10 text-center',
        className
      )}
    >
      {Icon ? (
        <div className='bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-xl'>
          <Icon className='h-5 w-5' />
        </div>
      ) : null}

      <div className='max-w-md space-y-2'>
        <h3 className='font-heading text-lg font-semibold tracking-tight'>
          {title}
        </h3>

        {description ? (
          <p className='text-muted-foreground text-sm'>{description}</p>
        ) : null}
      </div>

      {action ? (
        <div className='mt-6'>{action}</div>
      ) : actionLabel && onAction ? (
        <Button
          className='mt-6'
          onClick={onAction}
        >
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}

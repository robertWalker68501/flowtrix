import type { LucideIcon } from 'lucide-react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type StatTrend = {
  value: string;
  direction: 'up' | 'down' | 'neutral';
  label?: string;
};

type StatCardProps = {
  title: string;
  value: string;
  icon?: LucideIcon;
  description?: string;
  trend?: StatTrend;
  className?: string;
};

export function StatCard({
  title,
  value,
  icon: Icon,
  description,
  trend,
  className,
}: StatCardProps) {
  const isUp = trend?.direction === 'up';
  const isDown = trend?.direction === 'down';

  return (
    <Card className={cn('rounded-xl border shadow-none', className)}>
      <CardHeader className='flex flex-row items-start justify-between space-y-0 pb-3'>
        <div className='space-y-1'>
          <CardTitle className='text-muted-foreground text-sm font-medium'>
            {title}
          </CardTitle>
        </div>

        {Icon ? (
          <div className='bg-primary/10 text-primary flex h-9 w-9 items-center justify-center rounded-lg'>
            <Icon className='h-4 w-4' />
          </div>
        ) : null}
      </CardHeader>

      <CardContent className='space-y-3'>
        <div className='text-2xl font-semibold tracking-tight md:text-3xl'>
          {value}
        </div>

        {trend ? (
          <div className='text-muted-foreground flex items-center gap-2 text-xs'>
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-md px-2 py-1 font-medium',
                isUp &&
                  'bg-[color:var(--success)]/15 text-[color:var(--success)]',
                isDown && 'bg-destructive/15 text-destructive',
                trend.direction === 'neutral' &&
                  'bg-muted text-muted-foreground'
              )}
            >
              {isUp ? <ArrowUpRight className='h-3.5 w-3.5' /> : null}
              {isDown ? <ArrowDownRight className='h-3.5 w-3.5' /> : null}
              {trend.value}
            </span>

            {trend.label ? <span>{trend.label}</span> : null}
          </div>
        ) : null}

        {description ? (
          <p className='text-muted-foreground text-sm'>{description}</p>
        ) : null}
      </CardContent>
    </Card>
  );
}

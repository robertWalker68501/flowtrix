import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type StatusBadgeVariant =
  | 'success'
  | 'warning'
  | 'destructive'
  | 'info'
  | 'neutral';

type StatusBadgeProps = {
  children: React.ReactNode;
  variant?: StatusBadgeVariant;
  className?: string;
};

const variantStyles: Record<StatusBadgeVariant, string> = {
  success:
    'border-transparent bg-[color:var(--success)]/15 text-[color:var(--success)]',
  warning:
    'border-transparent bg-[color:var(--warning)]/15 text-[color:var(--warning)]',
  destructive: 'border-transparent bg-destructive/15 text-destructive',
  info: 'border-transparent bg-primary/15 text-primary',
  neutral: 'border-transparent bg-muted text-muted-foreground',
};

export function StatusBadge({
  children,
  variant = 'neutral',
  className,
}: StatusBadgeProps) {
  return (
    <Badge
      className={cn(
        'rounded-md px-2.5 py-0.5 font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Badge>
  );
}

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { styles } from './Badge.styles';
import { VariantProps } from 'tailwind-variants';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof styles> {
  asChild?: boolean;
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, asChild = false, art, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return <Comp ref={ref} className={styles({ className, art })} {...props} />;
  },
);

Badge.displayName = 'Badge';

export { Badge };

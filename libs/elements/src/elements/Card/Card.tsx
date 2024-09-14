import { forwardRef } from 'react';
import { styles } from './Card.styles';
import { Slot } from '@radix-ui/react-slot';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';
    return <Comp ref={ref} className={styles({ className })} {...props} />;
  }
);

Card.displayName = 'Card';

export { Card };

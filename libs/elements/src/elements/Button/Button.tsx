import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { styles } from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} className={styles({ className })} {...props} />;
  }
);

Button.displayName = 'Button';

export { Button };

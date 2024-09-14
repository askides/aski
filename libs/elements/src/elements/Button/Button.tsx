import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';
import { styles } from './Button.styles';
import { VariantProps } from 'tailwind-variants';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof styles> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, art, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp ref={ref} className={styles({ className, art })} {...props} />;
  }
);

Button.displayName = 'Button';

export { Button };

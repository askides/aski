import { forwardRef } from 'react';
import { styles } from './Input.styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={styles({ className })}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };

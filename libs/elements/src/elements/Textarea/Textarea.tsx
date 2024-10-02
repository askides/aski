import { forwardRef } from 'react';
import { styles } from './Textarea.styles';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 5, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={styles({ className })}
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };

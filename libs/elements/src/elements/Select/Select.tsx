import { forwardRef } from 'react';
import { styles } from './Select.styles';

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => {
    return <select ref={ref} className={styles({ className })} {...props} />;
  },
);

Select.displayName = 'Select';

export { Select };

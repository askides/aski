import { ElementRef, forwardRef } from 'react';
import { styles } from './Label.styles';
import * as LabelPrimitives from '@radix-ui/react-label';

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitives.Root> {}

const Label = forwardRef<ElementRef<typeof LabelPrimitives.Root>, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <LabelPrimitives.Root
        ref={ref}
        className={styles({ className })}
        {...props}
      />
    );
  },
);

Label.displayName = 'Label';

export { Label };

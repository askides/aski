import * as AvatarRadix from '@radix-ui/react-avatar';
import { forwardRef } from 'react';
import { styles } from './Avatar.styles';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {}

const { root, fallback } = styles();

const AvatarBase = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <AvatarRadix.Root ref={ref} {...props} className={root({ className })}>
        {children}
      </AvatarRadix.Root>
    );
  },
);

AvatarBase.displayName = 'Avatar';

export interface AvatarFallbackProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span ref={ref} className={fallback({ className })} {...props}>
        {children}
      </span>
    );
  },
);

AvatarFallback.displayName = 'AvatarFallback';

export const Avatar = Object.assign(AvatarBase, {
  Fallback: AvatarFallback,
  Image: AvatarRadix.Image,
});

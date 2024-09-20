import { forwardRef } from 'react';
import { styles } from './Pattern.styles';

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {}

const { wrapper, vector } = styles();

const Pattern = forwardRef<HTMLDivElement, ShellProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={wrapper({ className })}>
        <svg className={vector()} fill="none">
          <defs>
            <pattern
              id="lines"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
            </pattern>
          </defs>
          <rect stroke="none" fill="url(#lines)" width="100%" height="100%" />
        </svg>
      </div>
    );
  },
);

Pattern.displayName = 'Pattern';

export { Pattern };

import { forwardRef, ReactElement } from 'react';
import { styles } from './Shell.styles';

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  Navbar?: ReactElement;
  Sidebar?: ReactElement;
}

const { shell, navbar, container, aside, main } = styles();

const Shell = forwardRef<HTMLDivElement, ShellProps>(
  ({ className, Navbar, Sidebar, children, ...props }, ref) => {
    return (
      <div ref={ref} className={shell({ className })} {...props}>
        {Navbar && <div className={navbar()}>{Navbar}</div>}

        <div className={container()}>
          {Sidebar && <div className={aside()}>{Sidebar}</div>}
          <div className={main()}>{children}</div>
        </div>
      </div>
    );
  },
);

Shell.displayName = 'Shell';

export { Shell };

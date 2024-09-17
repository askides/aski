import { forwardRef } from 'react';
import { styles } from './Navbar.styles';
import { Slot } from '@radix-ui/react-slot';

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {}

const { header, nav, items, item } = styles();

// Navbar
export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
}

const NavbarBase = forwardRef<HTMLDivElement, NavbarProps>(
  ({ className, logo, children, ...props }, ref) => {
    return (
      <header ref={ref} className={header()} {...props}>
        <nav className={nav()}>
          <a className="flex-none font-semibold text-lg tracking-tight text-zinc-900 focus:outline-none focus:opacity-80">
            {logo}
          </a>
          <div className={items()}>{children}</div>
        </nav>
      </header>
    );
  },
);

NavbarBase.displayName = 'NavbarBase';

export interface NavbarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const NavbarItem = forwardRef<HTMLDivElement, NavbarItemProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp ref={ref} className={item({ className })} {...props}>
        {children}
      </Comp>
    );
  },
);

NavbarItem.displayName = 'NavbarItem';

export const Navbar = Object.assign(NavbarBase, { Item: NavbarItem });

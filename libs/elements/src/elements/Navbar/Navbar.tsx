import { forwardRef } from 'react';
import { styles } from './Navbar.styles';
import { Slot } from '@radix-ui/react-slot';

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {}

const { header, logo, nav, items, item } = styles();

// Navbar
export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarBase = forwardRef<HTMLDivElement, NavbarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <header ref={ref} className={header()} {...props}>
        <nav className={nav()}>{children}</nav>
      </header>
    );
  },
);

NavbarBase.displayName = 'NavbarBase';

export interface NavbarLogoProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarLogo = forwardRef<HTMLDivElement, NavbarLogoProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={logo({ className })} {...props}>
        {children}
      </div>
    );
  },
);

NavbarLogo.displayName = 'NavbarLogo';

export interface NavbarItemsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarItems = forwardRef<HTMLDivElement, NavbarItemsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <nav ref={ref} className={items({ className })} {...props}>
        {children}
      </nav>
    );
  },
);

NavbarItems.displayName = 'NavbarItems';

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

export const Navbar = Object.assign(NavbarBase, {
  Logo: NavbarLogo,
  Items: NavbarItems,
  Item: NavbarItem,
});

import { forwardRef } from 'react';
import { styles } from './Sidebar.styles';
import { Slot } from '@radix-ui/react-slot';

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {}

const { aside, header, logo, nav, groupItems, groupItem, group, groupTitle } =
  styles();

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarBase = forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <aside ref={ref} className={aside()} {...props}>
        <nav className={nav()}>{children}</nav>
      </aside>
    );
  },
);

SidebarBase.displayName = 'SidebarBase';

export interface SidebarHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarHeader = forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <header ref={ref} className={header({ className })} {...props}>
        {children}
      </header>
    );
  },
);

SidebarHeader.displayName = 'SidebarHeader';

export interface SidebarLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const SidebarLogo = forwardRef<HTMLDivElement, SidebarLogoProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp ref={ref} className={logo({ className })} {...props}>
        {children}
      </Comp>
    );
  },
);

SidebarLogo.displayName = 'SidebarLogo';

export interface SidebarItemGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarGroup = forwardRef<HTMLDivElement, SidebarItemGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={group({ className })} {...props}>
        {children}
      </div>
    );
  },
);

SidebarGroup.displayName = 'SidebarGroup';

// SidebarItemGroupHeader
export interface SidebarItemGroupTitleProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarGroupTitle = forwardRef<
  HTMLDivElement,
  SidebarItemGroupTitleProps
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={groupTitle({ className })} {...props}>
      {children}
    </div>
  );
});

SidebarGroupTitle.displayName = 'SidebarGroupTitle';

// SidebarGroupItems
export interface SidebarGroupItemsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarGroupItems = forwardRef<HTMLDivElement, SidebarGroupItemsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={groupItems({ className })} {...props}>
        {children}
      </div>
    );
  },
);

SidebarGroupItems.displayName = 'SidebarGroupItems';

export interface SidebarItemProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const SidebarGroupItem = forwardRef<HTMLDivElement, SidebarItemProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp ref={ref} className={groupItem({ className })} {...props}>
        {children}
      </Comp>
    );
  },
);

SidebarGroupItem.displayName = 'SidebarGroupItem';

export const Sidebar = Object.assign(SidebarBase, {
  Header: SidebarHeader,
  Logo: SidebarLogo,
  Group: SidebarGroup,
  GroupTitle: SidebarGroupTitle,
  GroupItems: SidebarGroupItems,
  GroupItem: SidebarGroupItem,
});

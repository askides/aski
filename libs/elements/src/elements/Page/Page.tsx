import { forwardRef, ReactElement } from 'react';
import { styles } from './Page.styles';

const { page, header, title, description, content } = styles();

export interface PageProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageBase = forwardRef<HTMLDivElement, PageProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={page({ className })} {...props}>
        {children}
      </div>
    );
  },
);

PageBase.displayName = 'Page';

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={header({ className })} {...props}>
        {children}
      </div>
    );
  },
);

PageHeader.displayName = 'PageHeader';

export interface PageTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const PageTitle = forwardRef<HTMLDivElement, PageTitleProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1 ref={ref} className={title({ className })} {...props}>
        {children}
      </h1>
    );
  },
);

PageTitle.displayName = 'PageTitle';

export interface PageDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const PageDescription = forwardRef<HTMLDivElement, PageDescriptionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} className={description({ className })} {...props}>
        {children}
      </p>
    );
  },
);

PageDescription.displayName = 'PageDescription';

export interface PageContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const PageContent = forwardRef<HTMLDivElement, PageContentProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={content({ className })} {...props}>
        {children}
      </div>
    );
  },
);

PageContent.displayName = 'PageContent';

export const Page = Object.assign(PageBase, {
  Header: PageHeader,
  Title: PageTitle,
  Description: PageDescription,
  Content: PageContent,
});

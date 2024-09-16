import { forwardRef } from 'react';
import { styles } from './Card.styles';
import { Slot } from '@radix-ui/react-slot';

const { card, header, title, description, body, actions } = styles();

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const CardBase = forwardRef<HTMLDivElement, CardProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    return <Comp ref={ref} className={card({ className })} {...props} />;
  },
);

CardBase.displayName = 'CardBase';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={header({ className })} {...props} />;
  },
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => {
    return <h2 ref={ref} className={title({ className })} {...props} />;
  },
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return <p ref={ref} className={description({ className })} {...props} />;
  },
);

CardDescription.displayName = 'CardDescription';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={body({ className })} {...props} />;
  },
);

CardBody.displayName = 'CardBody';

export interface CardActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={actions({ className })} {...props} />;
  },
);

CardActions.displayName = 'CardActions';

export const Card = Object.assign(CardBase, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Body: CardBody,
  Actions: CardActions,
});

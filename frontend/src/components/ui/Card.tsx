import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cardVariants = cva(
  'rounded-xl bg-white overflow-hidden transition-all duration-300',
  {
    variants: {
      variant: {
        default: 'border border-gray-200',
        elevated: 'shadow-md border border-gray-100 hover:shadow-lg',
        outlined: 'border-2 border-gray-100 hover:border-gray-200',
        interactive: 'border border-gray-200 hover:shadow-xl hover:border-gray-300 cursor-pointer',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
          VariantProps<typeof cardVariants> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, header, footer, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, className }))}
        {...props}
      >
        {header && <div className="border-b border-gray-200 px-6 py-4">{header}</div>}
        <div className="p-6">{children}</div>
        {footer && <div className="border-t border-gray-200 px-6 py-4">{footer}</div>}
      </div>
    );
  }
);

Card.displayName = 'Card';

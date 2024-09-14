import { tv } from 'tailwind-variants';

export const styles = tv({
  base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
  variants: {
    art: {
      primary: 'bg-blue-500 text-white',
      secondary: 'bg-green-500 text-white',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg',
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1',
    },
  ],
  defaultVariants: {
    size: 'md',
    art: 'primary',
  },
});

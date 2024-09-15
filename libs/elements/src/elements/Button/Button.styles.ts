import { tv } from 'tailwind-variants';

export const styles = tv({
  base: 'inline-flex items-center gap-x-2 font-medium rounded-lg border focus:outline-none disabled:opacity-50 disabled:pointer-events-none',
  variants: {
    art: {
      ichi: 'border-transparent bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 focus:bg-emerald-600 active:shadow-inner',
      ni: 'border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50 active:shadow-inner',
    },
    mass: {
      sm: 'px-2 py-1 text-xs',
      md: 'py-2 px-3 text-sm',
      lg: 'py-2.5 px-4 text-base',
    },
  },
  defaultVariants: {
    mass: 'md',
    art: 'ichi',
  },
});

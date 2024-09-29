import { tv } from 'tailwind-variants';

export const styles = tv({
  base: 'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset',
  variants: {
    art: {
      ichi: 'bg-blue-50 text-blue-700 ring-blue-700/10',
      ni: 'bg-red-50 text-red-700 ring-red-700/10',
      san: 'bg-green-50 text-green-700 ring-green-700/10',
    },
  },
  defaultVariants: {
    art: 'ichi',
  },
});

import { tv } from 'tailwind-variants';

export const styles = tv({
  base: 'inline-flex items-center gap-x-2 font-medium rounded-lg border focus:outline-none disabled:opacity-50 disabled:pointer-events-none focus:ring-2 focus:ring-offset-2',
  variants: {
    art: {
      ichi: 'border-transparent bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 active:shadow-inner',
      ni: 'border-gray-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-100 active:shadow-inner',
      // Ghost Variant
      san: 'border-transparent bg-transparent text-zinc-800 shadow-none hover:bg-zinc-100',
    },
    mass: {
      sm: 'h-8 px-2 text-xs',
      md: 'h-10 px-3 text-sm',
      lg: 'h-12 px-4 text-base',
    },
  },
  defaultVariants: {
    mass: 'md',
    art: 'ichi',
  },
});

import { tv } from 'tailwind-variants';

export const styles = tv({
  base: 'inline-flex items-center gap-x-2 font-medium border focus:outline-none disabled:opacity-50 disabled:pointer-events-none focus:ring-2 focus:ring-offset-2',
  variants: {
    art: {
      ichi: 'border-transparent bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 active:shadow-inner',
      ni: 'border-gray-200 bg-white text-zinc-800 shadow-sm hover:bg-zinc-100 active:shadow-inner',
      san: 'border-transparent bg-transparent text-zinc-800 shadow-none hover:bg-zinc-100',
    },
    mass: {
      xs: 'h-6 px-2 text-xs rounded-md',
      sm: 'h-8 px-3 text-xs rounded-md',
      md: 'h-10 px-4 text-sm rounded-lg',
      lg: 'h-12 px-5 text-base rounded-lg',
    },
    icon: {
      true: 'px-0',
    },
  },
  compoundVariants: [
    {
      mass: 'xs',
      icon: true,
      class: 'w-6',
    },
    {
      mass: 'sm',
      icon: true,
      class: 'w-8',
    },
    {
      mass: 'md',
      icon: true,
      class: 'w-10',
    },
    {
      mass: 'lg',
      icon: true,
      class: 'w-12',
    },
  ],
  defaultVariants: {
    mass: 'md',
    art: 'ichi',
  },
});

import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    root: 'h-9 w-9 flex items-center justify-center rounded-md bg-zinc-100 border border-zinc-200 overflow-hidden',
    fallback: 'text-sm font-semibold text-zinc-700',
  },
});

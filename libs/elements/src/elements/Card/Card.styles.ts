import { tv } from 'tailwind-variants';

// shadow shadow-black/5 ring-2 ring-zinc-900/5 ring-inset
export const styles = tv({
  slots: {
    card: 'rounded-lg bg-white p-6 border',
    header: 'space-y-1',
    body: 'mt-4',
    title: 'text-lg font-medium text-zinc-900',
    description: 'text-sm leading-relaxed text-zinc-500',
    actions: 'mt-4 flex items-center gap-4',
  },
});

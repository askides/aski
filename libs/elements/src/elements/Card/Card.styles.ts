import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    card: 'rounded-xl bg-white p-6 shadow-2xl shadow-black/5 ring-1 ring-zinc-900/5 ring-2 ring-inset ring-zinc-200/50',
    header: 'space-y-1',
    title: 'text-lg font-medium text-zinc-900',
    description: 'text-sm leading-relaxed text-zinc-500',
    actions: 'mt-4 flex items-center gap-4',
  },
});

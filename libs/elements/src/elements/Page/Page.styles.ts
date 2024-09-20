import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    page: 'px-6 py-5',
    header: 'space-y-1 mb-6',
    title: 'text-lg font-medium text-zinc-900',
    description: 'text-sm leading-relaxed text-zinc-500',
    content: '',
  },
});

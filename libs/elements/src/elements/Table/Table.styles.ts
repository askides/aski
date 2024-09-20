import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    table: 'w-full caption-bottom text-sm',
    header: '',
    body: '',
    footer: 'border-t bg-zinc-100/50 font-medium',
    row: 'border-b hover:bg-zinc-50 transition-colors border-zinc-200/60',
    head: 'h-12 px-4 text-left align-middle font-medium text-zinc-900',
    cell: 'h-12 px-4 align-middle text-zinc-700',
    caption: 'mt-4 text-sm text-zinc-500',
  },
});

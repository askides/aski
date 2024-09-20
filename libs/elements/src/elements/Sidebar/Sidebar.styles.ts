import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    aside: 'p-6 w-60 bg-white border-r flex',
    header: 'h-16 flex items-center -my-6',
    logo: 'font-semibold text-lg tracking-tight text-zinc-900',
    nav: 'text-sm flex flex-1 flex-col gap-y-8',
    group: 'space-y-2',
    groupTitle: 'text-xs font-semibold uppercase text-zinc-500',
    groupItems: 'flex flex-col',
    groupItem: '-mx-3 px-3 h-8 text-zinc-800 flex items-center gap-x-2 rounded-md font-medium transition-colors duration-200 cursor-pointer hover:bg-zinc-100',
  },
});

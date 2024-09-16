import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    aside: 'p-6 w-60 bg-white',
    nav: 'space-y-8 text-sm',
    group: 'space-y-2',
    groupTitle: 'text-xs font-semibold uppercase text-zinc-500',
    groupItems: 'flex flex-col',
    groupItem: '-mx-3 px-3 h-8 text-zinc-800 flex items-center gap-x-2 rounded-md font-medium transition-colors duration-200 cursor-pointer hover:bg-zinc-100',
  },
});

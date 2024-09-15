import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    aside: 'p-6 w-60 bg-white',
    nav: 'space-y-8 text-sm',
    group: 'space-y-2',
    groupTitle: 'text-sm font-semibold tracking-widest uppercase dark:text-gray-600',
    groupItems: 'flex flex-col space-y-1',
    groupItem: '',
  },
});

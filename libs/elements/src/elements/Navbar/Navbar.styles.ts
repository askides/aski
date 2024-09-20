import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    header: 'flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm h-16 isolate border-b',
    nav: ' w-full px-6 flex items-center gap-x-6',
    logo: 'font-semibold text-lg tracking-tight text-zinc-900',
    items: 'flex items-center gap-x-0.5',
    item: 'font-medium text-zinc-900 transition-colors duration-200 hover:bg-zinc-100 px-3 cursor-pointer py-2 rounded-md',
  },
});

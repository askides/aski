import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    shell: 'flex min-h-screen flex-col',
    navbar: 'inset-0 z-2 border-b sticky',
    container: 'z-1 flex flex-1 w-full bg-zinc-50/90',
    aside: 'shrink-0 flex',
    main: 'flex-1 min-w-0',
  },
});

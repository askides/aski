import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    shell: 'flex min-h-screen flex-col',
    navbar: 'inset-0 z-2',
    container: 'z-1 flex flex-1 w-full bg-zinc-50/90',
    aside: 'shrink-0 flex sticky top-0 h-screen bg-zinc-50/90',
    main: 'flex-1 min-w-0',
  },
});

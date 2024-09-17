import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    shell: 'flex min-h-screen flex-col',
    navbar: 'inset-0 z-2 border-b sticky',
    container: 'z-1 flex flex-1 w-full',
    aside: 'shrink-0 flex border-r',
    main: 'flex-1 min-w-0',
  },
});

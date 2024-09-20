import { tv } from 'tailwind-variants';

export const styles = tv({
  slots: {
    wrapper: 'relative h-96 overflow-hidden rounded-lg border border-dashed bg-white border-zinc-300',
    vector: 'absolute inset-0 h-full w-full stroke-zinc-900/15',
  },
});

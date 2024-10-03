import { InvoicesPage } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';

const opts = {
  title: 'Chunks/InvoicesPage',
  component: InvoicesPage,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
} satisfies Meta;

type Story = StoryObj<typeof opts>;

export const Example: Story = {};

export default opts;

import { InvoicesExample } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';

const opts = {
  title: 'Examples/Invoices',
  component: InvoicesExample,
  parameters: { layout: 'fullscreen' },
  tags: ['!autodocs'],
} satisfies Meta;

type Story = StoryObj<typeof opts>;

export const Example: Story = {};

export default opts;

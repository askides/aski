import { SignUpCard } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';

const opts = {
  title: 'Chunks/SignUpCard',
  component: SignUpCard,
  parameters: { layout: 'centered' },
  tags: ['!autodocs'],
} satisfies Meta;

type Story = StoryObj<typeof opts>;

export const Example: Story = {};

export default opts;

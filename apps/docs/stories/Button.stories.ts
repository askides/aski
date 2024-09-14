import { Button } from '@aski/elements';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const opts = {
  title: 'Example/Button',
  component: Button,
  parameters: { layout: 'centered' },
  args: {
    onClick: fn(),
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof opts>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export default opts;

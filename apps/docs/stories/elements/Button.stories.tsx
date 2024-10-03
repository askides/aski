import { Button } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { BluetoothSearching } from 'lucide-react';
import React from 'react';

const opts = {
  title: 'Elements/Button',
  component: Button,
  parameters: { layout: 'centered' },
  args: {
    onClick: fn(),
    children: 'Button',
  },
  argTypes: {
    art: {
      control: 'select',
      options: ['ichi', 'ni', 'san'],
      description: 'The art style of the button',
    },
    mass: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The mass of the button',
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof opts>;

export const Ichi: Story = {
  args: { art: 'ichi' },
};

export const Ni: Story = {
  args: { art: 'ni' },
};

export const San: Story = {
  args: { art: 'san' },
};

export const Icon = {
  render: ({ children, ...rest }) => (
    <Button {...rest} art="ni">
      <BluetoothSearching size={16} />
      <span>{children}</span>
    </Button>
  ),
};

export default opts;

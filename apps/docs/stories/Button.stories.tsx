import { Button } from '@askides/elements';
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
  argTypes: {
    art: {
      control: 'select',
      options: ['ichi', 'ni', 'san'],
      description: 'The art style of the button',
    },
    mass: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
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

export default opts;

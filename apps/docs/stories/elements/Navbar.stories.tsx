import { Navbar } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const opts = {
  title: 'Elements/Navbar',
  component: Navbar,
  parameters: { layout: 'fullscreen' },
  args: {},
} satisfies Meta<typeof Navbar>;

type Story = StoryObj<typeof opts>;

export const Base: Story = {
  render: (args) => (
    <Navbar {...args} logo="Example">
      <Navbar.Item>Item 1</Navbar.Item>
      <Navbar.Item>Item 2</Navbar.Item>
      <Navbar.Item>Item 3</Navbar.Item>
    </Navbar>
  ),
};

export default opts;

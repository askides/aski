import { Sidebar } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const opts = {
  title: 'Example/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
  args: {},
} satisfies Meta<typeof Sidebar>;

type Story = StoryObj<typeof opts>;

export const Base: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <Sidebar.Group>
        <Sidebar.GroupTitle>Group Title</Sidebar.GroupTitle>
        <Sidebar.GroupItems>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </Sidebar.GroupItems>
      </Sidebar.Group>
    </Sidebar>
  ),
};

export default opts;

import { Sidebar } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const opts = {
  title: 'Elements/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
  args: {},
} satisfies Meta<typeof Sidebar>;

type Story = StoryObj<typeof opts>;

export const Base: Story = {
  render: (args) => (
    <Sidebar {...args}>
      <Sidebar.Group>
        <Sidebar.GroupTitle>Informations</Sidebar.GroupTitle>
        <Sidebar.GroupItems>
          <Sidebar.GroupItem>Item 1</Sidebar.GroupItem>
          <Sidebar.GroupItem>Item 2</Sidebar.GroupItem>
          <Sidebar.GroupItem>Item 3</Sidebar.GroupItem>
        </Sidebar.GroupItems>
      </Sidebar.Group>
      <Sidebar.Group>
        <Sidebar.GroupTitle>Reports</Sidebar.GroupTitle>
        <Sidebar.GroupItems>
          <Sidebar.GroupItem>Item 1</Sidebar.GroupItem>
          <Sidebar.GroupItem>Item 2</Sidebar.GroupItem>
          <Sidebar.GroupItem>Item 3</Sidebar.GroupItem>
        </Sidebar.GroupItems>
      </Sidebar.Group>
    </Sidebar>
  ),
};

export default opts;

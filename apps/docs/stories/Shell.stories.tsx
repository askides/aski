import { Navbar, Shell, Sidebar } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const opts = {
  title: 'Example/Shell',
  component: Shell,
  parameters: { layout: 'fullscreen' },
  args: {},
} satisfies Meta<typeof Shell>;

type Story = StoryObj<typeof opts>;

export const Full: Story = {
  render: (args) => (
    <Shell
      {...args}
      Navbar={
        <Navbar logo="Example">
          <Navbar.Item>Item 1</Navbar.Item>
          <Navbar.Item>Item 2</Navbar.Item>
          <Navbar.Item>Item 3</Navbar.Item>
        </Navbar>
      }
      Sidebar={
        <Sidebar>
          <Sidebar.Group>
            <Sidebar.GroupTitle>Group Title</Sidebar.GroupTitle>
            <Sidebar.GroupItems>
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
            </Sidebar.GroupItems>
          </Sidebar.Group>
        </Sidebar>
      }
    >
      <div className="p-6">Content</div>
    </Shell>
  ),
};

export const JustNavbar: Story = {
  render: (args) => (
    <Shell
      {...args}
      Navbar={
        <Navbar logo="Example">
          <Navbar.Item>Item 1</Navbar.Item>
          <Navbar.Item>Item 2</Navbar.Item>
          <Navbar.Item>Item 3</Navbar.Item>
        </Navbar>
      }
    >
      <div className="p-6">Content</div>
    </Shell>
  ),
};

export const JustSidebar: Story = {
  render: (args) => (
    <Shell
      {...args}
      Sidebar={
        <Sidebar>
          <Sidebar.Group>
            <Sidebar.GroupTitle>Group Title</Sidebar.GroupTitle>
            <Sidebar.GroupItems>
              <div>Item 1</div>
              <div>Item 2</div>
              <div>Item 3</div>
            </Sidebar.GroupItems>
          </Sidebar.Group>
        </Sidebar>
      }
    >
      <div className="p-6">Content</div>
    </Shell>
  ),
};

export default opts;

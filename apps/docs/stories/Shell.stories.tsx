import { Navbar, Shell, Sidebar } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import {
  ChartNoAxesCombined,
  FileWarning,
  LayoutDashboard,
  PackageSearch,
  Users,
} from 'lucide-react';

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
            <Sidebar.GroupTitle>Informations</Sidebar.GroupTitle>
            <Sidebar.GroupItems>
              <Sidebar.GroupItem>
                <LayoutDashboard size={16} />
                <span>Dashboard</span>
              </Sidebar.GroupItem>
              <Sidebar.GroupItem>
                <Users size={16} />
                <span>Customers</span>
              </Sidebar.GroupItem>
              <Sidebar.GroupItem>
                <PackageSearch size={16} />
                <span>Products</span>
              </Sidebar.GroupItem>
            </Sidebar.GroupItems>
          </Sidebar.Group>
          <Sidebar.Group>
            <Sidebar.GroupTitle>Reports</Sidebar.GroupTitle>
            <Sidebar.GroupItems>
              <Sidebar.GroupItem>
                <ChartNoAxesCombined size={16} />
                <span>Orders</span>
              </Sidebar.GroupItem>
              <Sidebar.GroupItem>
                <FileWarning size={16} />
                <span>Complains</span>
              </Sidebar.GroupItem>
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
              <Sidebar.GroupItem>Dashboard</Sidebar.GroupItem>
              <Sidebar.GroupItem>Customers</Sidebar.GroupItem>
              <Sidebar.GroupItem>Products</Sidebar.GroupItem>
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

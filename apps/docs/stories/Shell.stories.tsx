import {
  Avatar,
  Card,
  Navbar,
  Page,
  Pattern,
  Shell,
  Sidebar,
} from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import {
  ChartNoAxesCombined,
  FileWarning,
  LayoutDashboard,
  PackageSearch,
  Users,
} from 'lucide-react';
import * as React from 'react';

const opts = {
  title: 'Example/Shell',
  component: Shell,
  parameters: { layout: 'fullscreen' },
  args: {
    children: (
      <Page>
        <Page.Header>
          <Page.Title>Dashboard</Page.Title>
          <Page.Description>
            Welcome to your dashboard. Here you can find all the information you
            need.
          </Page.Description>
        </Page.Header>
        <Page.Content>
          <div className="space-y-5">
            <Card>
              <Pattern className="h-48" />
            </Card>
            <Card>
              <Pattern className="h-64" />
            </Card>
            <Card>
              <Pattern className="h-48" />
            </Card>
          </div>
        </Page.Content>
      </Page>
    ),
  },
  argTypes: {
    className: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Shell>;

type Story = StoryObj<typeof opts>;

export const Full: Story = {
  render: ({ children, ...args }) => (
    <Shell
      {...args}
      Navbar={
        <Navbar>
          <Navbar.Logo>Statistics</Navbar.Logo>
          <Navbar.Items className="ml-auto">
            <Navbar.Item>Settings</Navbar.Item>
            <Navbar.Item>Subscription</Navbar.Item>
          </Navbar.Items>
          <Avatar>
            <Avatar.Fallback>AD</Avatar.Fallback>
          </Avatar>
        </Navbar>
      }
      Sidebar={
        <Sidebar>
          <Sidebar.Header>
            <Sidebar.Logo>Askides</Sidebar.Logo>
          </Sidebar.Header>
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
      {children}
    </Shell>
  ),
};

export const JustNavbar: Story = {
  render: ({ children, ...args }) => (
    <Shell
      {...args}
      Navbar={
        <Navbar>
          <Navbar.Logo>Statistics</Navbar.Logo>
          <Navbar.Items className="ml-auto">
            <Navbar.Item>Settings</Navbar.Item>
            <Navbar.Item>Subscription</Navbar.Item>
          </Navbar.Items>
          <Avatar>
            <Avatar.Fallback>AD</Avatar.Fallback>
          </Avatar>
        </Navbar>
      }
    >
      {children}
    </Shell>
  ),
};

export const JustSidebar: Story = {
  render: ({ children, ...args }) => (
    <Shell
      {...args}
      Sidebar={
        <Sidebar>
          <Sidebar.Header>
            <Sidebar.Logo>Askides</Sidebar.Logo>
          </Sidebar.Header>
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
      {children}
    </Shell>
  ),
};

export default opts;

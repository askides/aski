import {
  Button,
  Card,
  Navbar,
  Page,
  Shell,
  Sidebar,
  Table,
} from '@askides/elements';
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
  argTypes: {
    className: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Shell>;

type Story = StoryObj<typeof opts>;

export const Full: Story = {
  render: (args) => (
    <Shell
      {...args}
      Navbar={
        <Navbar logo="Example">
          <Navbar.Item>Settings</Navbar.Item>
          <Navbar.Item asChild>
            <div className="h-9 w-9 flex items-center justify-center rounded-full shadow-sm bg-zinc-100 border border-zinc-200">
              <span className="text-xs font-semibold text-zinc-700">AD</span>
            </div>
          </Navbar.Item>
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
      <Page>
        <Page.Header>
          <Page.Title>Dashboard</Page.Title>
          <Page.Description>
            Welcome to your dashboard. Here you can find all the information you
            need.
          </Page.Description>
        </Page.Header>
        <Page.Content>
          <Table className="border border-zinc-100">
            <Table.Caption>A list of your recent invoices.</Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.Head className="w-[100px]">Invoice</Table.Head>
                <Table.Head>Status</Table.Head>
                <Table.Head>Method</Table.Head>
                <Table.Head className="text-right">Amount</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell className="font-medium">INV001</Table.Cell>
                <Table.Cell>Paid</Table.Cell>
                <Table.Cell>Credit Card</Table.Cell>
                <Table.Cell className="text-right">
                  <Button mass="sm" art="ni">
                    Add Invoice
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium">INV002</Table.Cell>
                <Table.Cell>Paid</Table.Cell>
                <Table.Cell>Paypal</Table.Cell>
                <Table.Cell className="text-right">$150.00</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium">INV003</Table.Cell>
                <Table.Cell>Paid</Table.Cell>
                <Table.Cell>Credit Card</Table.Cell>
                <Table.Cell className="text-right">$350.00</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell className="font-medium">INV004</Table.Cell>
                <Table.Cell>Paid</Table.Cell>
                <Table.Cell>Paypal</Table.Cell>
                <Table.Cell className="text-right">$450.00</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Page.Content>
      </Page>
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

export default opts;

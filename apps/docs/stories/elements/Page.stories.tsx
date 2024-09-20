import { Page, Table } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const opts = {
  title: 'Elements/Page',
  component: Page,
  parameters: { layout: 'fullscreen' },
  args: {},
} satisfies Meta<typeof Page>;

type Story = StoryObj<typeof opts>;

export const Full: Story = {
  render: (args) => (
    <Page {...args}>
      <Page.Header>
        <Page.Title>Dashboard</Page.Title>
        <Page.Description>
          Welcome to your dashboard. Here you can find all the information you
          need.
        </Page.Description>
      </Page.Header>
      <Page.Content>
        <Table>
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
              <Table.Cell className="text-right">$250.00</Table.Cell>
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
  ),
};

export default opts;

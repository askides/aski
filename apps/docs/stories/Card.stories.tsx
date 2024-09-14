import { Button, Card } from '@aski/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const opts = {
  title: 'Example/Card',
  component: Card,
  parameters: { layout: 'centered' },
  args: {
    children: 'This is a card.',
  },
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof opts>;

export const Basic: Story = {};

export const WithActions: Story = {
  render: (args) => (
    <Card {...args}>
      <p>This is a card with actions.</p>
      <Button>Confirm</Button>
      <Button>Undo</Button>
    </Card>
  ),
};

export default opts;

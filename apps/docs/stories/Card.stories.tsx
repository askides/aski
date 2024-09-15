import { Button, Card } from '@askides/elements';
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

export const Full: Story = {
  render: (args) => (
    <Card {...args} className="max-w-lg">
      <Card.Header>
        <Card.Title>Tokyo - The city that never sleeps.</Card.Title>
        <Card.Description>
          Tokyo, Japan’s busy capital, mixes the ultramodern and the
          traditional, from neon-lit skyscrapers to historic temples.
        </Card.Description>
      </Card.Header>
      <Card.Actions>
        <Button art="ichi">Confirm</Button>
        <Button art="ni">Undo</Button>
      </Card.Actions>
    </Card>
  ),
};

export const NoActions: Story = {
  render: (args) => (
    <Card {...args} className="max-w-lg">
      <Card.Header>
        <Card.Title>Tokyo - The city that never sleeps.</Card.Title>
        <Card.Description>
          Tokyo, Japan’s busy capital, mixes the ultramodern and the
          traditional, from neon-lit skyscrapers to historic temples.
        </Card.Description>
      </Card.Header>
    </Card>
  ),
};

export default opts;

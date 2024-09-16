import { Button, Card, Input, Label } from '@askides/elements';
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

export const WithForm: Story = {
  render: (args) => (
    <Card {...args} className="max-w-lg">
      <Card.Header>
        <Card.Title>Tokyo - The city that never sleeps.</Card.Title>
        <Card.Description>
          Tokyo, Japan’s busy capital, mixes the ultramodern and the
          traditional, from neon-lit skyscrapers to historic temples.
        </Card.Description>
      </Card.Header>
      <Card.Body>
        <div className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="block">Favorite Block?</Label>
            <Input id="block" placeholder="Akihabara" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="food">Best Food?</Label>
            <Input id="food" placeholder="Sushi" />
          </div>
        </div>
      </Card.Body>
      <Card.Actions className="mt-6">
        <Button art="ichi">Confirm</Button>
        <Button art="ni">Undo</Button>
      </Card.Actions>
    </Card>
  ),
};

export default opts;

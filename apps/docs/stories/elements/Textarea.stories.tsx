import { Button, Textarea, Label } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const opts = {
  title: 'Elements/Textarea',
  component: Textarea,
  parameters: { layout: 'centered' },
  args: {
    placeholder: 'Your favorite color?',
  },
} satisfies Meta<typeof Textarea>;

type Story = StoryObj<typeof opts>;

export const Basic: Story = {
  render: (props) => (
    <div className="w-96">
      <Textarea {...props} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: (props) => (
    <div className="w-96">
      <div className="space-y-1">
        <Label htmlFor="color">Color</Label>
        <Textarea id="color" {...props} />
      </div>
    </div>
  ),
};

export default opts;

import { Button, Input, Label } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const opts = {
  title: 'Elements/Input',
  component: Input,
  parameters: { layout: 'centered' },
  args: {
    placeholder: 'Your favorite color?',
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof opts>;

export const Basic: Story = {
  render: (props) => (
    <div className="w-96">
      <Input {...props} />
    </div>
  ),
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="w-96">
      <div className="space-y-1">
        <Label htmlFor="color">Color</Label>
        <Input id="color" {...args} />
      </div>
    </div>
  ),
};

export default opts;

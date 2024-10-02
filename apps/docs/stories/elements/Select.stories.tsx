import { Label, Select } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const opts = {
  title: 'Elements/Select',
  component: Select,
  parameters: { layout: 'centered' },
  args: {},
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof opts>;

export const Basic: Story = {
  render: ({ children, ...rest }) => (
    <div className="w-96">
      <Select {...rest}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </Select>
    </div>
  ),
};

export const WithLabel: Story = {
  render: ({ children, ...rest }) => (
    <div className="w-96">
      <div className="space-y-1">
        <Label htmlFor="color">Color</Label>
        <Select id="color" {...rest}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Select>
      </div>
    </div>
  ),
};

export default opts;

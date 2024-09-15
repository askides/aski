import { Button, Input } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

const opts = {
  title: 'Example/Input',
  component: Input,
  parameters: { layout: 'centered' },
  args: {
    placeholder: 'Your favorite color?',
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof opts>;

export const Basic: Story = {};

export default opts;

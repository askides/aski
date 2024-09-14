import { Input } from '@askides/elements';
import type { Meta, StoryObj } from '@storybook/react';

const opts = {
  title: 'Example/Input',
  component: Input,
  parameters: { layout: 'centered' },
  args: {},
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof opts>;

export const Basic: Story = {};

export default opts;

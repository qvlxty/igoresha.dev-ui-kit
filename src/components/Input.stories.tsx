import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './Input';

const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
  args: {
    placeholder: 'Input Text',
  },
};

export const InputWithError: Story = {
  args: {
    placeholder: 'Input Text',
    errorText: 'Wrong input',
    hasError: true
  },
};

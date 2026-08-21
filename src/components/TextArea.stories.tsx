import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextArea } from './TextArea';


const meta = {
  title: 'components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
    args: {
        rows: 6,
        cols: 48,
        placeholder: 'Some text'
    }
};

export const Error: Story = {
    args: {
        rows: 4,
        cols: 48,
        defaultValue: 'Invalid value',
        $hasError: true,
        $errorText: 'Please check this value',
    }
};

export const Disabled: Story = {
    args: {
        rows: 4,
        cols: 48,
        defaultValue: 'Disabled value',
        disabled: true,
    }
};

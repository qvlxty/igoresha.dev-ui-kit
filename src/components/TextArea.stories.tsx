import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { TextArea } from './TextArea';


const meta = {
  title: 'TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
    args: {
        rows: 20,
        cols: 100
    }
};

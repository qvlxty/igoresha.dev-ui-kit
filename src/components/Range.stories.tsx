import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Range } from './Range';


const meta = {
  title: 'components/Range',
  component: Range,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
    args: {
        min: 0,
        max: 100,
        value: 66.6
    }
};

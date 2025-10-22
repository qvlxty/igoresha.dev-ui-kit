import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';



const meta = {
  title: 'Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
};

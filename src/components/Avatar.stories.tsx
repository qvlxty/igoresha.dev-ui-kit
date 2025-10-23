import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';


const meta = {
  title: 'components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
    args: {
        url: './github-logo.jpg',
        $size: 40
    }
};

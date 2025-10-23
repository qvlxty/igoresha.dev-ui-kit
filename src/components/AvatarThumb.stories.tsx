import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { AvatarThumb } from './AvatarThumb';


const meta = {
  title: 'components/AvatarThumb',
  component: AvatarThumb,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
    args: {
        nickname: 'Admin'
    }
};

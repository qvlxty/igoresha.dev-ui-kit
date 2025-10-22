import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';



const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: <><h1>Hello</h1></>
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
  args: {
    visible: true,
    loading: false
  }
};

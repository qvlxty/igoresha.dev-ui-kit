import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiOutlineOrderedList, AiOutlineAccountBook } from 'react-icons/ai'
import { Dropdown } from './Dropdown';


const meta = {
  title: 'components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  argTypes: {
    options: {
      control: false
    },
    headerIcon: {
      control: false
    }
  },
  args: {
    placeholder: 'Dropdown',
    selected: 0,
    options: [
        { value: 0, text: 'one', icon: <AiOutlineAccountBook /> },
        { value: 1, text: 'two' },
        { value: 2, text: 'three' },
    ],
    headerIcon: <AiOutlineOrderedList />
  },
};

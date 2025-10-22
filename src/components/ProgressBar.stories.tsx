import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiOutlineOrderedList, AiOutlineAccountBook } from 'react-icons/ai'
import { Dropdown } from './Dropdown';
import { ProgressBar } from './ProgressBar';


const meta = {
  title: 'ProgreeBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: function Component (args) {
    return <div style={{width: '200px'}}><ProgressBar {...args} /></div>
  },
  args: {
    completed: 50
  },
};

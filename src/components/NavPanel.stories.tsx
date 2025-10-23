import type { Meta, StoryObj } from '@storybook/react-vite';

import { NavPanel } from './NavPanel';
import { AiOutlineOrderedList, AiOutlineAccountBook } from 'react-icons/ai'

const meta = {
  title: 'NavPanel',
  component: NavPanel,
  tags: ['autodocs'],
} satisfies Meta<typeof NavPanel>;

export default meta;
type Story = StoryObj<typeof meta>;


const TestLink = (props: {
    className: string, to: string, children: React.ReactNode
    }) => <a {...props} />

export const Elemenet: Story = {
  args: {
    LinkElement: TestLink,
    links: [
        { to: '/root', icon: <AiOutlineOrderedList /> },
        'Separator',
        { to: '/root', icon: <AiOutlineAccountBook /> },
        'Separator',
        { to: '/root', icon: <AiOutlineAccountBook /> },
    ]
  },
};


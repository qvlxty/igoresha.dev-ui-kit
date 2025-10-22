import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TabBar } from './TabBar';

import { AiOutlineOrderedList, AiOutlineAccountBook } from 'react-icons/ai'
import React from 'react';
import { useArgs } from 'storybook/internal/preview-api';


const meta = {
  title: 'TabBar',
  component: TabBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
  render: function Component(args) {
    const [, setArgs] = useArgs()

    const onChange = (value) => {
      setArgs({ selected: value })
    }

    return <TabBar {...args} onSet={onChange} />
  },
  args: {
     options: [
      { value: 1, title: <><AiOutlineOrderedList /> State 1</> },
      { value: 2, title: <><AiOutlineAccountBook /> State 2</> }
    ]
  },
};

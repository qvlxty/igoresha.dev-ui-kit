import type { Meta, StoryObj } from '@storybook/react-vite';

import { AiOutlineOrderedList, AiOutlineAccountBook } from 'react-icons/ai'
import { Dropdown } from './Dropdown';
import React from 'react';
import { fn } from 'storybook/test';


const meta = {
  title: 'components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onOptionChange: fn()
  }
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

export const LongScrollable: Story = {
  render: function Component(args) {
    const [selected, setSelected] = React.useState<number | undefined>(4)
    return (
      <Dropdown
        {...args}
        selected={selected}
        onOptionChange={(value) => setSelected(value as number)}
      />
    )
  },
  args: {
    placeholder: 'Choose a workspace',
    width: 280,
    maxMenuHeight: 280,
    options: Array.from({ length: 30 }, (_, index) => ({
      value: index,
      text: index === 12
        ? 'A workspace with a deliberately very long name'
        : `Workspace ${index + 1}`,
      icon: index % 4 === 0 ? <AiOutlineAccountBook /> : undefined,
      disabled: index === 8,
    })),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Unavailable',
    options: [{ value: 1, text: 'One' }],
  },
};

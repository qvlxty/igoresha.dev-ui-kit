import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { AiOutlineCalendar } from 'react-icons/ai'

import { Button } from './Button';

const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    $primary: true,
    children: 'Button'
  },
};

export const Secondary: Story = {
  args: {
    $secondary: true,
    children: 'Button'
  },
};

export const Danger: Story = {
  args: {
    $danger: true,
    children: 'Button'
  },
};

export const HaveIcon: Story = {
  args: {
    $haveIcon: true,
    children: <><AiOutlineCalendar />Button</>
  },
};

export const Dashed: Story = {
  args: {
    $dashed: true,
    $haveIcon: true,
    children: <><AiOutlineCalendar />Button</>
  },
};

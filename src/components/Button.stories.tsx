import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';
import { AiOutlineCalendar } from 'react-icons/ai'

import { Button } from './Button';
import styled from 'styled-components';
import { themeVar } from '../theming';

const meta = {
  title: 'components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    $dashed: {
      control: 'boolean'
    },
    $variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'danger']
    },
    $size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    children: {
      control: false
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    $variant: 'primary',
    children: 'Button'
  },
};

export const Secondary: Story = {
  args: {
    $variant: 'secondary',
    children: 'Button'
  },
};

export const Danger: Story = {
  args: {
    $variant: 'danger',
    children: 'Button'
  },
};

export const HaveIcon: Story = {
  args: {
    children: <><AiOutlineCalendar />Button</>
  },
};

export const Dashed: Story = {
  args: {
    $dashed: true,
    children: <><AiOutlineCalendar />Button</>
  },
};

export const Disabled: Story = {
  args: {
    $variant: 'primary',
    disabled: true,
    children: 'Disabled'
  },
};

const StateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(120px, auto));
  gap: 16px;
  align-items: center;
  padding: 24px;
  color: ${themeVar('textPrimary')};
  background: ${themeVar('surfacePage')};
`;

export const AllStates: Story = {
  render: () => (
    <StateGrid>
      {(['default', 'primary', 'secondary', 'danger'] as const).map((variant) => (
        <Button key={variant} $variant={variant}>{variant}</Button>
      ))}
      {(['default', 'primary', 'secondary', 'danger'] as const).map((variant) => (
        <Button key={`${variant}-disabled`} $variant={variant} disabled>{variant}</Button>
      ))}
      <Button $size="small">Small</Button>
      <Button $size="medium">Medium</Button>
      <Button $size="large">Large</Button>
      <Button $iconOnly aria-label="Calendar"><AiOutlineCalendar /></Button>
    </StateGrid>
  )
};

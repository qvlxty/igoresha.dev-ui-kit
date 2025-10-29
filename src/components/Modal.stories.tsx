import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { useArgs } from 'storybook/internal/preview-api';
import { Button } from './Button';
import styled from 'styled-components';


const meta = {
  title: 'components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
     docs: {
      story: {
        iframeHeight: 700,
      },
    },
  },
  argTypes: {
    children: {
      control: false
    }
  },
  args: {
    children: <h1>Hello</h1>
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Element: Story = {
  render: function Component(args) {
    const [, setArgs] = useArgs()

    const onChange = () => {
      setArgs({ visible: !args.visible })
    }

    return (
      <>
        <Button onClick={() => setArgs({ visible: true })} >Modal open</Button>
        <Modal {...args} onClose={onChange} />
      </>
    )
  },
  args: {
    visible: true,
    loading: false
  }
};

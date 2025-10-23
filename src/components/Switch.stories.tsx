import { Loader } from './Loader';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';
import { useArgs } from 'storybook/internal/preview-api';



const meta = {
  title: 'components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Element: Story = {
  render: function Component(args) {
    const [, setArgs] = useArgs()

    const onChange = () => {
      setArgs({ checked: !args.checked })
    }

    return <Switch {...args} onChange={onChange} />
  },
};

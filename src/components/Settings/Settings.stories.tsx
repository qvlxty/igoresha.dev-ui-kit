import type { Meta, StoryObj } from '@storybook/react-vite';
import { AiFillCalendar, AiFillSetting, AiFillMoon } from 'react-icons/ai'

import { Settings } from './Settings';
import styled from 'styled-components';
import { themeVar } from '../../theming';
import React from 'react';
import { TabBar } from '../TabBar';
import { SettingRow } from './SettingRow';
import { Switch } from '../Switch';

const meta = {
  title: 'layout/Settings',
  component: Settings,
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const Container = styled.div`
  width: 900px;
  padding-top: 30px;
  background-color: ${themeVar('backgroundColor')};
`

Container.displayName = 'Container'

export const Element: Story = {
  render: function C(args) {
    const [s, setS] = React.useState<'basic' | 'advanced'>('basic')
    return (
      <Container>
        <Settings {...args}>
          <TabBar
            options={[
              { value: 'basic', title: <>General</> },
              { value: 'advanced', title: <>Advanced</> },
            ]}
            selected={s}
            onSet={setS}
          />
          {s === 'basic' && (
            <>
              <SettingRow 
                  icon={<AiFillMoon />}
                  title='Enable Dark Theme'
                  option={<Switch checked />}
              />
              <SettingRow 
                  icon={<AiFillCalendar />}
                  title='Birthday'
                  description='Remind your birthday'
                  option={<Switch checked />}
              />
              <SettingRow 
                  icon={<AiFillCalendar />}
                  title='Birthday'
                  description='Date of your birthday'
                  option={<Switch checked />}
              />
            </>
          )}
          {s === 'advanced' && (
            <>
             <SettingRow 
                  icon={<AiFillCalendar />}
                  title='Not Birthday'
                  option={<Switch checked />}
              />
              <SettingRow 
                  icon={<AiFillCalendar />}
                  title='Not Birthday'
                  description='we are on the second tab'
                  option={<Switch checked />}
              />
              <SettingRow 
                  icon={<AiFillCalendar />}
                  title='Shhh'
                  option={<Switch checked />}
              />
            </>
          )}
        </Settings>
      </Container>
    )
  },
  args: {
    title: "Settings",
    titleIcon: <AiFillSetting />,
  }
};

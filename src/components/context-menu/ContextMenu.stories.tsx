import type { Meta, StoryObj } from '@storybook/react-vite';
import React from "react";
import { createContextMenu } from "./create-context-menu";
import { AiFillCalendar, AiFillSetting, AiFillMoon } from 'react-icons/ai'
import { Button } from '../Button';

export const {
    ContextMenu,
    openMenu
} = createContextMenu<string>()


export const ExampleComponent = () => {
    return (
        <>
            <p>
                <Button onContextMenu={(e) => {
                    e.preventDefault()
                    openMenu({ e, payload: 'firstButton' })
                }}>Нажмите сюда правой кнопкой мыши</Button>
            </p>
            <p>
                <Button $danger onContextMenu={(e) => {
                    e.preventDefault()
                    openMenu({ e, payload: 'secondButton' })
                }}>Нажмите сюда правой кнопкой мыши</Button>
            </p>
            <ContextMenu items={[
                { icon: <AiFillCalendar />, name: 'Calendar', action: (p) => alert(p) },
                { icon: <AiFillSetting />, name: 'Settings', action: () => alert('second') },
                { icon: <AiFillMoon />, name: 'Theme', action: () => alert('third') },
            ]} />
        </>
    )
}

const meta = {
    title: 'factories/ContextMenu',
    component: ContextMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;
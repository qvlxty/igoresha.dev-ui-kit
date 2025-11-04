import type { Meta, StoryObj } from '@storybook/react-vite';
import React from "react";
import { createContextMenu } from "./create-context-menu";
import { AiFillCalendar, AiFillSetting, AiFillMoon } from 'react-icons/ai'
import { Button } from '../Button';

export const {
    ContextMenu,
    useContextMenu
} = createContextMenu()


export const ExampleComponent = () => {
    const ref = React.useRef<HTMLButtonElement>(null)
    useContextMenu(ref)
    return (
        <>
            <Button ref={ref} style={{color: 'black'}}>Нажмите сюда правой кнопкой мыши</Button>
            <ContextMenu items={[
                { icon: <AiFillCalendar />, name: 'Calendar', action: () => alert('first') },
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
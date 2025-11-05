import React from "react"
import { useUnit } from "effector-react"
import { createEffect, createEvent, createStore, sample } from "effector"
import styled, { css } from "styled-components"

import { useArrowKeys } from "./context-menu/useArrowKeys"
import { useContextMenuBase } from "./context-menu/useContextMenuBase"
import { themeVar } from "../../theming"

export const createContextMenu = () => {
    const $visible = createStore(false)
    const $top = createStore(0)
    const $left = createStore(0)
    const $height = createStore(0)
    const setHeight = createEvent<number>()

    const openMenuFx = createEffect<{
        e: PointerEvent,
        height: number
    }, { left: number, top: number }, Error>()
    const openMenu = createEvent<PointerEvent>()
    const closeMenu = createEvent()

    $visible.on(openMenuFx.done, () => true).reset(closeMenu)
    $top.on(openMenuFx.doneData, (_, s) => s.top)
    $left.on(openMenuFx.doneData, (_, s) => s.left)
    $height.on(setHeight, (_, s) => s)

    sample({
        clock: openMenu,
        source: $height,
        fn: (a,b) => ({
            e: b,
            height: a
        }),
        target: openMenuFx 
    })

    openMenuFx.use(({ e, height }) => {
        let left = 0
        let top = 0
        if (window.innerHeight / 2 < e.clientY) {
            top = e.clientY - height
        } else {
            top = e.clientY
        }
        if (window.innerWidth / 2 < e.clientX) {
            left = e.clientX - height
        } else {
            left = e.clientX
        }
        return { left, top }
    })

    const ContextMenu: React.FunctionComponent<Props> = ({ items }) => {
        const [left, top, visible] = useUnit([$left, $top, $visible])
        const clearContextMenu = React.useCallback(() => {
            closeMenu()
        }, [])

        React.useEffect(() => {
            setHeight(items.length * MENU_ITEM_HEIGHT_PX)
        }, [items])

        React.useEffect(() => {
            document.addEventListener('click', clearContextMenu)
            return () => {
                document.removeEventListener('click', clearContextMenu)
            }
        }, [])

        const [selectedIdx, setSelectedIdx] = useArrowKeys(items.length, (id) => {
            items[id].action()
        }, closeMenu)

        if (!visible) {
            return null
        }
        return (
            <Motion
                onContextMenuCapture={(e) => e.preventDefault()}
                style={{ left, top }}
            >
                <MenuWrapper>
                    {items.map((item, index) => {
                        return (
                            <MenuItem
                                onMouseEnter={() => setSelectedIdx(index)}
                                $active={index === selectedIdx}
                                key={index}
                                onClick={item.action}
                            >
                                <IconWrapper>{item.icon}</IconWrapper>
                                <div>{item.name}</div>
                            </MenuItem>
                        )
                    })}
                </MenuWrapper>
            </Motion>
        )
    }

    return {
        ContextMenu,
        useContextMenu: (
            ref: React.RefObject<HTMLElement | null>,
            arrDeps: React.DependencyList = []
        ) => useContextMenuBase(ref, arrDeps, openMenu)
    }
}

const MENU_ITEM_HEIGHT_PX = 10

type Props = {
    items: { icon: React.ReactNode, action: () => void, name: string }[]
}


const Motion = styled.div`
    position: fixed;
    width: 0;
    height: 0;
    left:0;
    z-index: 990;
    overflow: visible;
    &::-webkit-scrollbar {
        width: 0px;
    }
    `

const MenuWrapper = styled.div`
    border: 2px solid ${themeVar('default700')};
    background-color: ${themeVar('default800')};
    color: white;
    position: relative;
    border-radius: 6px;
    max-width: 220px;
    width: 220px;
    padding: 4px;
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
`

const MenuItem = styled.button<{ $active: boolean }>`
    padding: 6px;
    display: flex;
    height: ${MENU_ITEM_HEIGHT_PX};
    flex-direction: row;
    align-items: center;
    font-size: 13px;
    color: ${themeVar('fontColor')};
    background: none;
    outline: none;
    border: 0;
    width: 100%;
    cursor: pointer;
    ${({ $active }) => $active && css`
        background-color: ${themeVar('default700')};
        color: ${themeVar('default300')};
    `}
`

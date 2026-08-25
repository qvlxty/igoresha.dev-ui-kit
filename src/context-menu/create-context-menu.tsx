import React from "react"
import { useUnit } from "effector-react"
import { createEffect, createEvent, createStore, sample } from "effector"
import styled, { css } from "styled-components"

import { useArrowKeys } from "../lib/useArrowKeys"
import { themeVar } from "../theming"
import { BORDER_RADIUS_PX, SPACING_PX } from "../const"

const CONTEXT_MENU_WIDTH_PX = 220
const CONTEXT_MENU_ITEM_HEIGHT_PX = 26
const CONTEXT_MENU_VIEWPORT_PADDING_PX = SPACING_PX.sm
const CONTEXT_MENU_Z_INDEX = 990
const CONTEXT_MENU_BORDER_WIDTH_PX = 1
const CONTEXT_MENU_FONT_SIZE_PX = 13

export const createContextMenu = <T = unknown,>() => {
    const $payload = createStore<T | null>(null)
    const $top = createStore(0)
    const $left = createStore(0)
    const $height = createStore(0)
    const setHeight = createEvent<number>()

    const openMenuFx = createEffect<{
        e: React.MouseEvent,
        height: number,
        payload?: T
    }, { left: number, top: number, payload?: T }, Error>()
    const openMenu = createEvent<{
        e: React.MouseEvent,
        payload?: T
    }>()
    const closeMenu = createEvent()

    $payload.on(openMenuFx.doneData, (_,d) => {
        if (typeof d.payload === 'undefined') {
            return true as unknown as T
        }
        return d.payload
    }).reset(closeMenu)
    $top.on(openMenuFx.doneData, (_, s) => s.top)
    $left.on(openMenuFx.doneData, (_, s) => s.left)
    $height.on(setHeight, (_, s) => s)

    sample({
        clock: openMenu,
        source: $height,
        fn: (a,{e, payload}) => ({
            e,
            payload,
            height: a
        }),
        target: openMenuFx 
    })

    openMenuFx.use(({ e, height, payload }) => {
        let left = 0
        let top = 0
        if (window.innerHeight / 2 < e.clientY) {
            top = e.clientY - height - CONTEXT_MENU_VIEWPORT_PADDING_PX
        } else {
            top = e.clientY
        }
        if (window.innerWidth / 2 < e.clientX) {
            left = e.clientX - CONTEXT_MENU_WIDTH_PX
        } else {
            left = e.clientX
        }
        return { left, top, payload }
    })

    const ContextMenu: React.FunctionComponent<Props<T>> = ({ items, title }) => {
        const [left, top, payload] = useUnit([$left, $top, $payload])
        const menuRef = React.useRef<HTMLDivElement>(null)
        const clearContextMenu = React.useCallback(() => {
            closeMenu()
        }, [])

        const itemsToRender = React.useMemo(() => {
            return items.filter((v) => v.filter ? v.filter(payload!) : true)
        },[items, payload])

        React.useEffect(() => {
            setHeight(itemsToRender.length * CONTEXT_MENU_ITEM_HEIGHT_PX)
        }, [itemsToRender])

        React.useEffect(() => {
            if (payload === null) return
            const handleOutsidePointerDown = (event: PointerEvent) => {
                if (!menuRef.current?.contains(event.target as Node)) {
                    clearContextMenu()
                }
            }
            window.addEventListener('pointerdown', handleOutsidePointerDown, true)
            return () => {
                window.removeEventListener('pointerdown', handleOutsidePointerDown, true)
            }
        }, [clearContextMenu, payload])

        const [selectedIdx, setSelectedIdx] = useArrowKeys({
            visible: payload !== null,
            length: itemsToRender.length,
            onSelect: (id) => itemsToRender[id].action(payload!),
            onClose: closeMenu,
        })

        if (payload === null) {
            return null
        }
        return (
            <Motion
                ref={menuRef}
                onContextMenuCapture={(e) => e.preventDefault()}
                style={{ left, top }}
            >
                {title && <TitleWrapper>{title}</TitleWrapper>}
                <MenuWrapper>
                    {itemsToRender.map((item, index) => {
                        return (
                            <MenuItem
                                onMouseEnter={() => setSelectedIdx(index)}
                                $active={index === selectedIdx}
                                key={index}
                                onClick={() => item.action(payload)}
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
        openMenu,
        $payload,
        closeMenu
    }
}


type Props<T> = {
    items: { icon?: React.ReactNode, action: (v: T) => void, name: string, filter?: (v: T) => boolean }[],
    title?: React.ReactNode
}


const Motion = styled.div`
    position: fixed;
    width: 0;
    height: 0;
    left:0;
    z-index: ${CONTEXT_MENU_Z_INDEX};
    overflow: visible;
    &::-webkit-scrollbar {
        width: 0px;
    }
    `

const MenuWrapper = styled.div`
    border: ${CONTEXT_MENU_BORDER_WIDTH_PX}px solid ${themeVar('borderSubtle')};
    background-color: ${themeVar('surfaceElevated')};
    color: ${themeVar('textPrimary')};
    position: relative;
    border-radius: ${BORDER_RADIUS_PX.medium}px;
    max-width: ${CONTEXT_MENU_WIDTH_PX}px;
    width: ${CONTEXT_MENU_WIDTH_PX}px;
    padding: ${SPACING_PX.xxs}px;
`

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: ${SPACING_PX.xs}px;
    padding-right: ${SPACING_PX.xs}px;
`

const TitleWrapper = styled.div`
    padding: ${BORDER_RADIUS_PX.medium}px;
`

const MenuItem = styled.button<{ $active: boolean }>`
    padding: ${BORDER_RADIUS_PX.medium}px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: ${CONTEXT_MENU_FONT_SIZE_PX}px;
    color: ${themeVar('textPrimary')};
    background: none;
    outline: none;
    height: ${CONTEXT_MENU_ITEM_HEIGHT_PX}px;
    border: 0;
    width: 100%;
    cursor: pointer;
    ${({ $active }) => $active && css`
        background-color: ${themeVar('surfaceHover')};
        color: ${themeVar('actionPrimary')};
    `}
`

import React from 'react'
import { AiOutlineCheck, AiOutlineDown } from 'react-icons/ai'
import styled, { css } from 'styled-components'
import { themeVar } from '../theming'
import {
    BORDER_RADIUS_PX,
    CONTROL_HEIGHT_PX,
    FOCUS_RING,
    MOTION_DURATION_MS,
    onSmWidth,
    SPACING_PX,
} from '../const'
import { getNextEnabledIndex, useArrowKeys } from '../lib/useArrowKeys'

const DEFAULT_DROPDOWN_WIDTH_PX = 240
const DEFAULT_MENU_MAX_HEIGHT_PX = 320
const MENU_MIN_HEIGHT_PX = 96
const MENU_PLACEMENT_THRESHOLD_PX = 180
const MENU_VIEWPORT_MARGIN_PX = SPACING_PX.sm
const MENU_OFFSET_PX = BORDER_RADIUS_PX.medium
const MENU_Z_INDEX = 20
const MENU_ITEM_HORIZONTAL_PADDING_PX = 10
const MENU_SHADOW_Y_PX = SPACING_PX.sm
const MENU_SHADOW_BLUR_PX = SPACING_PX.xxl
const SCROLLBAR_WIDTH_PX = SPACING_PX.xs
const SCROLLBAR_THUMB_BORDER_PX = 2
const CHEVRON_OPEN_ROTATION_DEG = 180
const CONTROL_BORDER_WIDTH_PX = 1

export type DropdownItem<T> = {
    value: T
    text: string
    icon?: React.ReactNode
    disabled?: boolean
}

type Props<T> = {
    options: DropdownItem<T>[]
    placeholder?: string
    selected?: T
    headerIcon?: React.ReactNode
    onOptionChange: (optionValue: T) => void
    disabled?: boolean
    maxMenuHeight?: number
    width?: number | string
    'aria-label'?: string
}

export const Dropdown = <T extends number | string | null>({
    options,
    onOptionChange,
    selected,
    placeholder = 'Empty',
    headerIcon,
    disabled = false,
    maxMenuHeight = DEFAULT_MENU_MAX_HEIGHT_PX,
    width = DEFAULT_DROPDOWN_WIDTH_PX,
    'aria-label': ariaLabel,
}: Props<T>) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [placement, setPlacement] = React.useState<'top' | 'bottom'>('bottom')
    const [availableHeight, setAvailableHeight] = React.useState(maxMenuHeight)
    const containerRef = React.useRef<HTMLDivElement>(null)
    const itemRefs = React.useRef<Array<HTMLButtonElement | null>>([])
    const listId = React.useId()
    const selectedIdx = options.findIndex((item) => item.value === selected)
    const selectedOption = selectedIdx >= 0 ? options[selectedIdx] : undefined

    const closeMenu = React.useCallback(() => {
        setIsOpen(false)
    }, [])

    const selectOption = React.useCallback((item: DropdownItem<T>) => {
        if (item.disabled) return
        onOptionChange(item.value)
        closeMenu()
    }, [closeMenu, onOptionChange])

    const isItemDisabled = React.useCallback(
        (index: number) => Boolean(options[index]?.disabled),
        [options],
    )
    const selectByIndex = React.useCallback(
        (index: number) => selectOption(options[index]),
        [options, selectOption],
    )
    const [highlightedIdx, setHighlightedIdx] = useArrowKeys({
        visible: isOpen,
        length: options.length,
        onSelect: selectByIndex,
        onClose: closeMenu,
        isItemDisabled,
    })

    const openMenu = React.useCallback((preferredIdx?: number | null) => {
        if (disabled || !options.length) return
        const fallbackIdx = selectedIdx >= 0 && !options[selectedIdx].disabled
            ? selectedIdx
            : getNextEnabledIndex(options.length, -1, 1, isItemDisabled)
        setHighlightedIdx(preferredIdx ?? fallbackIdx)
        setIsOpen(true)
    }, [disabled, isItemDisabled, options, selectedIdx, setHighlightedIdx])

    React.useLayoutEffect(() => {
        if (!isOpen || !containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const below = window.innerHeight - rect.bottom - MENU_VIEWPORT_MARGIN_PX
        const above = rect.top - MENU_VIEWPORT_MARGIN_PX
        const nextPlacement = below < Math.min(MENU_PLACEMENT_THRESHOLD_PX, maxMenuHeight) && above > below
            ? 'top'
            : 'bottom'
        setPlacement(nextPlacement)
        setAvailableHeight(Math.max(
            MENU_MIN_HEIGHT_PX,
            Math.min(maxMenuHeight, nextPlacement === 'top' ? above : below),
        ))
    }, [isOpen, maxMenuHeight])

    React.useEffect(() => {
        if (!isOpen) return
        const handlePointerDown = (event: PointerEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) closeMenu()
        }
        const handleResize = () => closeMenu()
        document.addEventListener('pointerdown', handlePointerDown)
        window.addEventListener('resize', handleResize)
        return () => {
            document.removeEventListener('pointerdown', handlePointerDown)
            window.removeEventListener('resize', handleResize)
        }
    }, [closeMenu, isOpen])

    React.useEffect(() => {
        if (isOpen && highlightedIdx !== null) {
            itemRefs.current[highlightedIdx]?.scrollIntoView({ block: 'nearest' })
        }
    }, [highlightedIdx, isOpen])

    const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (!disabled && !isOpen && (event.key === 'ArrowDown' || event.key === 'ArrowUp')) {
            event.preventDefault()
            const direction = event.key === 'ArrowDown' ? 1 : -1
            const edge = direction === 1 ? -1 : 0
            openMenu(getNextEnabledIndex(options.length, edge, direction, isItemDisabled))
        }
    }

    return (
        <Container ref={containerRef} $width={width}>
            <Header
                type="button"
                disabled={disabled}
                aria-label={ariaLabel}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                aria-controls={isOpen ? listId : undefined}
                aria-activedescendant={isOpen && highlightedIdx !== null ? `${listId}-${highlightedIdx}` : undefined}
                onClick={() => isOpen ? closeMenu() : openMenu()}
                onKeyDown={onKeyDown}
            >
                <HeaderContent>
                    {selectedOption?.icon && <HeaderLeading>{selectedOption.icon}</HeaderLeading>}
                    <HeaderText $placeholder={!selectedOption}>{selectedOption?.text ?? placeholder}</HeaderText>
                </HeaderContent>
                <HeaderTrailing $open={isOpen}>
                    {headerIcon ?? <AiOutlineDown aria-hidden />}
                </HeaderTrailing>
            </Header>
            {isOpen && (
                <List
                    id={listId}
                    role="listbox"
                    aria-label={ariaLabel}
                    $placement={placement}
                    $maxHeight={availableHeight}
                >
                    {options.map((item, index) => {
                        const isSelected = item.value === selected
                        return (
                            <li role="presentation" key={`${String(item.value)}-${index}`}>
                                <ListItem
                                    ref={(element) => { itemRefs.current[index] = element }}
                                    id={`${listId}-${index}`}
                                    type="button"
                                    role="option"
                                    aria-selected={isSelected}
                                    disabled={item.disabled}
                                    $selected={isSelected}
                                    $highlighted={highlightedIdx === index}
                                    onPointerMove={() => !item.disabled && setHighlightedIdx(index)}
                                    onClick={() => selectOption(item)}
                                >
                                    <ItemContent>
                                        {item.icon && <ItemIcon>{item.icon}</ItemIcon>}
                                        <ItemText>{item.text}</ItemText>
                                    </ItemContent>
                                    {isSelected && <AiOutlineCheck aria-hidden />}
                                </ListItem>
                            </li>
                        )
                    })}
                </List>
            )}
        </Container>
    )
}

const Container = styled.div<{ $width: number | string }>`
    position: relative;
    width: ${({ $width }) => typeof $width === 'number' ? `${$width}px` : $width};
    ${onSmWidth} { max-width: 100%; }
`

const Header = styled.button`
    width: 100%;
    min-height: ${CONTROL_HEIGHT_PX.medium}px;
    padding: 0 ${SPACING_PX.sm}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${SPACING_PX.sm}px;
    color: ${themeVar('textSecondary')};
    background: ${themeVar('surfaceBase')};
    border: ${CONTROL_BORDER_WIDTH_PX}px solid ${themeVar('borderDefault')};
    border-radius: ${BORDER_RADIUS_PX.large}px;
    cursor: pointer;
    text-align: left;
    transition: border-color ${MOTION_DURATION_MS.standard}ms ease,
        box-shadow ${MOTION_DURATION_MS.standard}ms ease,
        background ${MOTION_DURATION_MS.standard}ms ease;

    &:hover:not(:disabled) { border-color: ${themeVar('borderStrong')}; }
    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar('focusRing')} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${FOCUS_RING.offsetPx}px;
    }
    &:disabled {
        color: ${themeVar('textDisabled')};
        background: ${themeVar('actionDisabled')};
        border-color: ${themeVar('borderDisabled')};
        cursor: not-allowed;
    }
`

const HeaderContent = styled.span`
    min-width: 0;
    display: flex;
    align-items: center;
    gap: ${SPACING_PX.xs}px;
`
const HeaderLeading = styled.span`display: flex; flex: 0 0 auto;`
const HeaderText = styled.span<{ $placeholder: boolean }>`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    ${({ $placeholder }) => $placeholder && css`color: ${themeVar('textMuted')};`}
`
const HeaderTrailing = styled.span<{ $open: boolean }>`
    display: flex;
    flex: 0 0 auto;
    transform: rotate(${({ $open }) => $open ? CHEVRON_OPEN_ROTATION_DEG : 0}deg);
    transition: transform ${MOTION_DURATION_MS.standard}ms ease;
`

const List = styled.ul<{ $placement: 'top' | 'bottom', $maxHeight: number }>`
    position: absolute;
    ${({ $placement }) => $placement === 'top'
        ? `bottom: calc(100% + ${MENU_OFFSET_PX}px);`
        : `top: calc(100% + ${MENU_OFFSET_PX}px);`}
    left: 0;
    z-index: ${MENU_Z_INDEX};
    width: 100%;
    max-height: ${({ $maxHeight }) => $maxHeight}px;
    padding: ${SPACING_PX.xxs}px;
    margin: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    scrollbar-width: thin;
    scrollbar-color: ${themeVar('scrollbarThumb')} transparent;
    list-style: none;
    color: ${themeVar('textSecondary')};
    background: ${themeVar('surfaceElevated')};
    border: ${CONTROL_BORDER_WIDTH_PX}px solid ${themeVar('borderSubtle')};
    border-radius: ${BORDER_RADIUS_PX.large}px;
    box-shadow: 0 ${MENU_SHADOW_Y_PX}px ${MENU_SHADOW_BLUR_PX}px ${themeVar('shadowColor')};

    display: flex;
    flex-direction: column;
    gap: ${SPACING_PX.xxs}px;

    &::-webkit-scrollbar { width: ${SCROLLBAR_WIDTH_PX}px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb {
        background: ${themeVar('scrollbarThumb')};
        border: ${SCROLLBAR_THUMB_BORDER_PX}px solid ${themeVar('surfaceElevated')};
        border-radius: ${BORDER_RADIUS_PX.pill}px;
    }
    &::-webkit-scrollbar-thumb:hover { background: ${themeVar('scrollbarThumbHover')}; }
`

const ListItem = styled.button<{ $selected: boolean, $highlighted: boolean }>`
    width: 100%;
    min-height: ${CONTROL_HEIGHT_PX.medium}px;
    padding: ${SPACING_PX.xs}px ${MENU_ITEM_HORIZONTAL_PADDING_PX}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${SPACING_PX.sm}px;
    color: ${({ $selected, theme }) => $selected ? theme.actionPrimary : theme.textSecondary};
    background: ${({ $selected, $highlighted, theme }) =>
        $selected ? theme.surfaceSelected : $highlighted ? theme.surfaceHover : 'transparent'};
    border: 0;
    border-radius: ${BORDER_RADIUS_PX.medium}px;
    cursor: pointer;
    text-align: left;

    &:focus { outline: none; }
    &:disabled {
        color: ${themeVar('textDisabled')};
        cursor: not-allowed;
    }
`
const ItemContent = styled.span`
    min-width: 0;
    display: flex;
    align-items: center;
    gap: ${SPACING_PX.xs}px;
`
const ItemIcon = styled.span`display: flex; flex: 0 0 auto;`
const ItemText = styled.span`overflow: hidden; text-overflow: ellipsis; white-space: nowrap;`

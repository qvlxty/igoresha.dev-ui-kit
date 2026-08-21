import styled, { css } from 'styled-components'
import { themeVar } from '../theming'
import {
    BORDER_RADIUS_PX,
    CONTROL_HEIGHT_PX,
    FOCUS_RING,
    FONT_SIZE_PX,
    onSmWidth,
    SPACING_PX,
} from '../const'

const TAB_HORIZONTAL_PADDING_PX = SPACING_PX.md
const TAB_MOBILE_VERTICAL_PADDING_PX = 10
const TAB_LIST_PADDING_PX = 3
const TAB_FOCUS_OFFSET_PX = 1
const TAB_LIST_BORDER_WIDTH_PX = 1


type Props<T> = {
    options: {
        value: T,
        title?: React.ReactNode,
    }[],
    selected: T,
    onSet?: (v: T) => void
}

export const TabBar = <T,>({ options, selected, onSet }: Props<T>) => {
    return (
        <Container>
            {options.map((item, index) => (
                <Item
                    key={index}
                    type="button"
                    $active={item.value === selected}
                    onClick={() => onSet?.(item.value)}
                >
                    {item.title}
                </Item>
            ))}
        </Container>
    )
}

type ItemProps = {
    $active: boolean
}
const Item = styled.button<ItemProps>`
    min-height: ${CONTROL_HEIGHT_PX.medium}px;
    white-space: nowrap;
    padding: ${SPACING_PX.xs}px ${TAB_HORIZONTAL_PADDING_PX}px;
    border-radius: ${BORDER_RADIUS_PX.large}px;
    border: 0;
    background: transparent;
    font-size: ${FONT_SIZE_PX.medium}px;
    gap: ${SPACING_PX.sm}px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${themeVar('textMuted')};
    ${({ $active }) => $active && css`
        color: ${themeVar('actionPrimary')};
        background: ${themeVar('surfaceSelected')};
    `}
    &:hover {
        color: ${themeVar('actionPrimary')};
        background: ${themeVar('surfaceHover')};
    }
    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar('focusRing')} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${TAB_FOCUS_OFFSET_PX}px;
    }
    cursor: pointer;

    ${onSmWidth} {
        padding: ${TAB_MOBILE_VERTICAL_PADDING_PX}px ${SPACING_PX.sm}px;
        font-size: ${FONT_SIZE_PX.small}px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${SPACING_PX.xxs}px;
    box-sizing: border-box;
    overflow-x: auto;
    padding: ${TAB_LIST_PADDING_PX}px;
    border: ${TAB_LIST_BORDER_WIDTH_PX}px solid ${themeVar('borderSubtle')};
    border-radius: ${BORDER_RADIUS_PX.xlarge}px;
    background: ${themeVar('surfacePage')};
`

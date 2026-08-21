import styled, { css } from "styled-components"
import { themeVar } from "../../theming"
import React, { JSX } from "react"
import { FOCUS_RING, SPACING_PX } from "../../const"

const NAV_PANEL_WIDTH_PX = 60
const NAV_PANEL_Z_INDEX = 11
const NAV_ITEM_BORDER_WIDTH_PX = 1

type NavPanelItem = 'Separator' | {
    to: string,
    icon: React.ReactNode
} | {
    onClick: () => void,
    icon: React.ReactNode
}

type Props = {
    links: NavPanelItem[],
    LinkElement: React.FC<{
        className: string
        to: string,
        style?: React.CSSProperties,
        children: React.ReactNode
    }>
}


export const NavPanel = ({
    links, LinkElement
}: Props) => {
    return (
        <Container>
            <Wrapper>
                {links.map((v, idx) => (
                    <>
                        {v === 'Separator' && (
                            <Separator key={idx} />
                        )}
                        {v !== 'Separator' && (
                            <>
                                {'to' in v && (<LinkElement
                                    className={'link-element'}
                                    to={v.to}
                                    key={idx}
                                >
                                    {v.icon}
                                </LinkElement>)}
                                {'onClick' in v && (<button
                                    className={'link-element'}
                                    onClick={v.onClick}
                                    key={idx}
                                >
                                    {v.icon}
                                </button>)}
                            </>
                        )}
                    </>
                ))}
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: ${NAV_PANEL_WIDTH_PX}px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    border-right: ${NAV_ITEM_BORDER_WIDTH_PX}px solid ${themeVar('borderSubtle')};
    background: ${themeVar('surfaceBase')};
    background-size: cover;
    z-index: ${NAV_PANEL_Z_INDEX};
  
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${SPACING_PX.md}px;
    padding-top: ${SPACING_PX.sm}px;
    padding-bottom: ${SPACING_PX.sm}px;
    box-sizing: border-box;


    .link-element {
        display: flex;
        align-items: center;
        border: ${NAV_ITEM_BORDER_WIDTH_PX}px solid transparent;
        justify-content: center;
        outline: none;
        border-radius: 50%;
        padding: ${SPACING_PX.xs}px;
        cursor: pointer;
        color: ${themeVar('textMuted')};
        background: ${themeVar('surfaceBase')};
        & * {
            color: currentColor;
        }
        &:hover {
            color: ${themeVar('actionPrimary')};
            background-color: ${themeVar('surfaceHover')};
            border: ${NAV_ITEM_BORDER_WIDTH_PX}px solid ${themeVar('borderDefault')};
            svg {
                fill: currentColor;
                stroke: currentColor;
            }
        }
        &:focus-visible {
            outline: ${FOCUS_RING.widthPx}px solid color-mix(
                in srgb,
                ${themeVar('focusRing')} ${FOCUS_RING.opacityPercent}%,
                transparent
            );
            outline-offset: ${FOCUS_RING.offsetPx}px;
        }
    }
`


const Separator = styled.div`
    flex-shrink: 1;
    flex-grow: 1;
`

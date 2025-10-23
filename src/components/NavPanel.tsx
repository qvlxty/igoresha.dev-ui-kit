import styled, { css } from "styled-components"
import { themeVar } from "../theming"
import React, { JSX } from "react"

type NavPanelItem = 'Separator' | {
    to: string,
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
}:Props) => {
    return (
        <Container>
            <Wrapper>
                {links.map((v, idx) => (
                    <>
                        {v === 'Separator' && (
                            <Separator key={idx} />
                        )} 
                        {v !== 'Separator' && (
                            <LinkElement 
                                className={'link-element'}
                                to={v.to} 
                                key={idx} 
                            >
                                {v.icon}
                            </LinkElement>
                        )} 
                    </>
                ))}
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 60px;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    border-right: 1px solid ${themeVar('default700')};
    background: ${themeVar('default800')};
    background-size: cover;
    z-index: 11;
  
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 12px;
    padding-bottom: 12px;
    box-sizing: border-box;


    .link-element {
        display: flex;
        align-items: center;
        border: 1px solid #00000000;
        justify-content: center;

        border-radius: 50%;
        padding: 8px;
        cursor: pointer;
        & * {
            color: ${themeVar('default500')};
        }
        &:hover {
            background-color: ${themeVar('default800')};
            border: 1px solid ${themeVar('default700')};
            svg {
                fill: ${themeVar('default600')};
                stroke: ${themeVar('default600')};
            }
        }
    }
`


const Separator = styled.div`
    flex-shrink: 1;
    flex-grow: 1;
`

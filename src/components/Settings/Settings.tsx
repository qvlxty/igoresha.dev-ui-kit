import styled from "styled-components"
import React, { PropsWithChildren } from "react"
import { SPACING_PX } from "../../const"

const SETTINGS_BOTTOM_PADDING_PX = 86


type Props = {
    containerStyle?: React.CSSProperties,
    title: React.ReactNode,
    titleIcon?: React.ReactNode,
}

export const Settings = ({
    children,
    containerStyle,
    title,
    titleIcon,
}: PropsWithChildren<Props>) => {
    return (
        <Container
            style={containerStyle}
        >
            <Header>
            {titleIcon}
                <h1>{title}</h1>
            </Header>
            {children}
        </Container>
    )
}


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: ${SPACING_PX.xl}px;
  padding-right: ${SPACING_PX.xl}px;
  padding-bottom: ${SETTINGS_BOTTOM_PADDING_PX}px;
  box-sizing: border-box;
  gap: ${SPACING_PX.sm}px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: ${SPACING_PX.sm}px;
`

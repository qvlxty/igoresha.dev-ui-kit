import styled from "styled-components"
import React, { PropsWithChildren } from "react"


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
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 86px;
  box-sizing: border-box;
  gap: 12px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 12px;
`
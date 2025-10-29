import React from 'react'
import styled from 'styled-components'
import { themeVar } from '../../theming'

type Props = {
    icon?: React.ReactNode
    title: string,
    description?: string
    option: React.ReactElement,
    containerStyle?: React.CSSProperties
}
export const SettingRow = ({ title, icon, option, description, containerStyle }: Props) => {
    return (
        <Container style={containerStyle}>
            <Title>
                {icon}
                {title}
                {description && (
                    <Description>
                        {description}
                    </Description>
                )}
            </Title>
            {option}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 12px;
    width: 100%;
    box-sizing: border-box;
    gap: 10px;
    align-items: center;
    border-top: 1px solid ${themeVar('default700')};
    &:first-child {
        border-top: 1px solid #00000000;
    }
`

const Title = styled.div`
    font-size: 16px;
    flex: 1;
    svg {
        margin-right: 8px;
        margin-bottom: -2px;
    }    
`

const Description = styled.div`
    font-size: 14px;
    background-color: ${themeVar('default400')}09;
    margin-top: 6px;
    max-width: 360px;
    padding: 8px;
    border-radius: 12px;

`
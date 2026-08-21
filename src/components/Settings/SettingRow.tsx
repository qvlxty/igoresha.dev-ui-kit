import React from 'react'
import styled from 'styled-components'
import { themeVar } from '../../theming'
import { BORDER_RADIUS_PX, FONT_SIZE_PX, SPACING_PX } from '../../const'

const SETTING_ROW_GAP_PX = 10
const SETTING_ROW_BORDER_WIDTH_PX = 1
const SETTING_DESCRIPTION_MAX_WIDTH_PX = 360
const SETTING_ICON_BASELINE_OFFSET_PX = -2

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
    padding: ${SPACING_PX.sm}px;
    width: 100%;
    box-sizing: border-box;
    gap: ${SETTING_ROW_GAP_PX}px;
    align-items: center;
    border-top: ${SETTING_ROW_BORDER_WIDTH_PX}px solid ${themeVar('borderSubtle')};
    &:first-child {
        border-top: ${SETTING_ROW_BORDER_WIDTH_PX}px solid transparent;
    }
`

const Title = styled.div`
    font-size: ${FONT_SIZE_PX.medium}px;
    flex: 1;
    svg {
        margin-right: ${SPACING_PX.xs}px;
        margin-bottom: ${SETTING_ICON_BASELINE_OFFSET_PX}px;
    }    
`

const Description = styled.div`
    font-size: ${FONT_SIZE_PX.small}px;
    color: ${themeVar('textMuted')};
    background-color: ${themeVar('surfaceHover')};
    margin-top: ${BORDER_RADIUS_PX.medium}px;
    max-width: ${SETTING_DESCRIPTION_MAX_WIDTH_PX}px;
    padding: ${SPACING_PX.xs}px;
    border-radius: ${BORDER_RADIUS_PX.xlarge}px;

`

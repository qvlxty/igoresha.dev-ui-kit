import React from 'react'
import styled, { css } from 'styled-components'
import { themeVar } from '../theming'

type Props = {
    color?: 'accent' | 'default',
    size?: number,
    style?: React.CSSProperties
}

export const Badge = (
    { children, color = 'accent', size, style }: React.PropsWithChildren<Props>) => {
    return (
        <StatusWrapper 
            size={size} 
            color={color} 
            style={style}
        >
            {children}
        </StatusWrapper>
    )
}


type StatusWrapperProps = {
    color: Props['color'],
    size?: number,
}
const StatusWrapper = styled.div<StatusWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${themeVar('fontColor')};
  border: 3px solid ${({ color = 'accent', theme }) => theme[`${color}500`]};
  background-color: ${({ color = 'accent', theme }) => theme[`${color}400`]};
  border-radius: 4px;
  padding: 6px;
  padding-left: 15px;
  padding-right: 15px;
  
  ${({ size }) => size && css`
      font-size: ${size}px;
  `}
`

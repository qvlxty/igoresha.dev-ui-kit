import styled, { css } from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'

type ButtonProps = {
    $haveIcon?: boolean
    $primary?: boolean
    $secondary?: boolean
    $danger?: boolean
}

const ButtonCss = css<ButtonProps & ThemedStyledProps>`
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px dashed ${themeVar('default500')};
    background: ${themeVar('default800')};
    color: ${themeVar('default400')};
    display: flex;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    ${({ $haveIcon }) => $haveIcon && css`
        svg {
            margin-right: 8px;
        }
    `}
    &:hover {
        color: ${themeVar('default800')};
        background: ${themeVar('default500')};
        transition: 0.2s;
    }
    ${({ $primary }) => $primary && css`
        background: ${themeVar('accent500')};
        color: #fff;
        border: none;
        &:hover {
            color: #fff;
            background: ${themeVar('accent400')};
        }
    `}
    ${({ $secondary }) => $secondary && css`
        background: ${themeVar('secondary500')};
        color: #fff;
        border: none;
        &:hover {
            background: ${themeVar('secondary400')};
            color: #fff;
        }
    `}
    ${({ $danger }) => $danger && css`
        background: ${themeVar('error500')};
        color: #fff;
        border: none;
        &:hover {
            background: ${themeVar('error400')};
            color: #fff;
        }
    `}
`

export const Button = styled.button<ButtonProps & ThemedStyledProps>`
    ${ButtonCss}
`

export const LinkButton = styled.a<ButtonProps & ThemedStyledProps>`
    ${ButtonCss}
    text-decoration: none;
`
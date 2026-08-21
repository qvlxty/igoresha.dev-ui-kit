import styled, { css } from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'
import {
    BORDER_RADIUS_PX,
    CONTROL_HEIGHT_PX,
    FOCUS_RING,
    FONT_SIZE_PX,
    MOTION_DURATION_MS,
    SPACING_PX,
} from '../const'

export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'danger'
export type ButtonSize = 'small' | 'medium' | 'large'

const BUTTON_HORIZONTAL_PADDING_PX: Record<ButtonSize, number> = {
    small: SPACING_PX.sm,
    medium: SPACING_PX.md,
    large: SPACING_PX.lg,
}
const BUTTON_FONT_SIZE_PX: Record<ButtonSize, number> = {
    small: FONT_SIZE_PX.small,
    medium: FONT_SIZE_PX.medium,
    large: FONT_SIZE_PX.medium,
}
const BUTTON_BORDER_WIDTH_PX = 1

type ButtonProps = {
    $dashed?: boolean
    $variant?: ButtonVariant
    $size?: ButtonSize
    $fullWidth?: boolean
    $iconOnly?: boolean
}

const variantStyles = ({ theme, $variant = 'default' }: ButtonProps & ThemedStyledProps) => {
    const variant = $variant
    if (variant === 'primary') return css`
        color: ${theme.actionPrimaryText};
        background: ${theme.actionPrimary};
        border-color: transparent;
        &:hover:not(:disabled):not([aria-disabled='true']) { background: ${theme.actionPrimaryHover}; }
        &:active:not(:disabled):not([aria-disabled='true']) { background: ${theme.actionPrimaryActive}; }
    `
    if (variant === 'secondary') return css`
        color: ${theme.actionSecondaryText};
        background: ${theme.actionSecondary};
        border-color: transparent;
        &:hover:not(:disabled):not([aria-disabled='true']) { background: ${theme.actionSecondaryHover}; }
        &:active:not(:disabled):not([aria-disabled='true']) { background: ${theme.actionSecondaryActive}; }
    `
    if (variant === 'danger') return css`
        color: ${theme.actionDangerText};
        background: ${theme.actionDanger};
        border-color: transparent;
        &:hover:not(:disabled):not([aria-disabled='true']) { background: ${theme.actionDangerHover}; }
        &:active:not(:disabled):not([aria-disabled='true']) { background: ${theme.actionDangerActive}; }
    `
    return css`
        color: ${theme.textSecondary};
        background: ${theme.surfaceBase};
        &:hover:not(:disabled):not([aria-disabled='true']) {
            color: ${theme.textPrimary};
            background: ${theme.surfaceHover};
            border-color: ${theme.borderStrong};
        }
        &:active:not(:disabled):not([aria-disabled='true']) { background: ${theme.surfaceSelected}; }
    `
}

const sizeStyles = ({ $size = 'medium', $iconOnly }: ButtonProps) => {
    const height = CONTROL_HEIGHT_PX[$size]
    const horizontalPadding = BUTTON_HORIZONTAL_PADDING_PX[$size]
    return css`
        min-height: ${height}px;
        min-width: ${$iconOnly ? height : 0}px;
        padding: ${$iconOnly ? 0 : `0 ${horizontalPadding}px`};
        font-size: ${BUTTON_FONT_SIZE_PX[$size]}px;
    `
}

const ButtonCss = css<ButtonProps & ThemedStyledProps>`
    ${sizeStyles}
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${SPACING_PX.xs}px;
    width: ${({ $fullWidth }) => $fullWidth ? '100%' : 'auto'};
    border: ${BUTTON_BORDER_WIDTH_PX}px ${({ $dashed }) => $dashed ? 'dashed' : 'solid'} ${themeVar('borderDefault')};
    border-radius: ${BORDER_RADIUS_PX.large}px;
    cursor: pointer;
    line-height: 1;
    text-decoration: none;
    user-select: none;
    transition: background-color ${MOTION_DURATION_MS.standard}ms ease,
        border-color ${MOTION_DURATION_MS.standard}ms ease,
        color ${MOTION_DURATION_MS.standard}ms ease,
        box-shadow ${MOTION_DURATION_MS.standard}ms ease,
        transform ${MOTION_DURATION_MS.press}ms ease;

    svg { flex: 0 0 auto; }
    ${variantStyles}

    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar('focusRing')} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${FOCUS_RING.offsetPx}px;
    }

    &:disabled,
    &[aria-disabled='true'] {
        color: ${themeVar('textDisabled')};
        background: ${themeVar('actionDisabled')};
        border-color: ${themeVar('borderDisabled')};
        box-shadow: none;
        cursor: not-allowed;
    }
`

const Button = styled.button.attrs({ type: 'button' })<ButtonProps & ThemedStyledProps>`
    ${ButtonCss}
`

const LinkButton = styled.a<ButtonProps & ThemedStyledProps>`
    ${ButtonCss}
    &[aria-disabled='true'] { pointer-events: none; }
`

Button.displayName = 'Button'
LinkButton.displayName = 'LinkButton'

export { Button, LinkButton }

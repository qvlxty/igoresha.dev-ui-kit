import styled, { css } from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'
import React from 'react'
import {
    BORDER_RADIUS_PX,
    FOCUS_RING,
    FONT_SIZE_PX,
    MOTION_DURATION_MS,
    SPACING_PX,
} from '../const'

const TEXT_AREA_BORDER_WIDTH_PX = 1

type Props = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
    onChange?: (text: string) => void,
    $errorText?: string,
    $hasError?: boolean,
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((
    {
        onChange,
        $errorText,
        $hasError,
        ...props
    }
    , ref) => (
    <>
        <Wrapper
            ref={ref}
            $hasError={$hasError}
            onChange={(e) => onChange?.(e.target.value)}
            {...props}
        />
        {$errorText && (<ErrorText>
            {$errorText}
        </ErrorText>)}
    </>
))

const Wrapper = styled.textarea<Omit<Props, 'onChange'>>`
    font-size: ${FONT_SIZE_PX.medium}px;
    padding: ${SPACING_PX.sm}px;
    border-radius: ${BORDER_RADIUS_PX.large}px;
    background: ${themeVar('surfaceBase')};
    color: ${themeVar('textPrimary')};
    width: 100%;
    border: ${TEXT_AREA_BORDER_WIDTH_PX}px solid ${themeVar('borderDefault')};
    resize: vertical;
    transition: border-color ${MOTION_DURATION_MS.standard}ms ease,
        box-shadow ${MOTION_DURATION_MS.standard}ms ease;

    &:focus-visible {
        outline: ${FOCUS_RING.widthPx}px solid color-mix(
            in srgb,
            ${themeVar('focusRing')} ${FOCUS_RING.opacityPercent}%,
            transparent
        );
        outline-offset: ${FOCUS_RING.offsetPx}px;
        border-color: ${themeVar('focusRing')};
    }
    ${({ $hasError }) => $hasError && css`
        border-color: ${themeVar('actionDanger')};
    `}
    &::placeholder { color: ${themeVar('textMuted')}; }
    &:disabled {
        color: ${themeVar('textDisabled')};
        background: ${themeVar('actionDisabled')};
        border-color: ${themeVar('borderDisabled')};
        cursor: not-allowed;
    }
`

const ErrorText = styled.div`
    color: ${themeVar('actionDanger')};
    font-size: ${FONT_SIZE_PX.small}px;
    margin-top: ${SPACING_PX.xxs}px;
`

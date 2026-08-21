import React from 'react'
import styled, { css } from 'styled-components'
import { themeVar } from '../theming'
import {
    BORDER_RADIUS_PX,
    CONTROL_HEIGHT_PX,
    FOCUS_RING,
    FONT_SIZE_PX,
    MOTION_DURATION_MS,
    SPACING_PX,
} from '../const'

const INPUT_BORDER_WIDTH_PX = 1

type Props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    onChange?: (text: string) => void,
    errorText?: string,
    hasError?: boolean,
    style?: React.CSSProperties
}

export const Input = React.forwardRef<HTMLInputElement, Props>((
    {
        onChange,
        errorText,
        hasError,
        ...props
    }
    , ref) => {
    return (
        <>
            <InputWrapper
                onChange={(e) => onChange?.(e.target.value)}
                ref={ref}
                $hasError={hasError}
                {...props}
            />
            {errorText && (<ErrorText>
                {errorText}
            </ErrorText>)}
        </>
    )
})

type InputWrapperProps = {
    $hasError?: boolean
}

const InputWrapper = styled.input<InputWrapperProps>`
    min-height: ${CONTROL_HEIGHT_PX.medium}px;
    width: 100%;
    font-size: ${FONT_SIZE_PX.medium}px;
    padding: ${SPACING_PX.xs}px ${SPACING_PX.sm}px;
    border-radius: ${BORDER_RADIUS_PX.large}px;
    background: ${themeVar('surfaceBase')};
    border: ${INPUT_BORDER_WIDTH_PX}px solid ${themeVar('borderDefault')};
    color: ${themeVar('textPrimary')};
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
    &::placeholder {
        color: ${themeVar('textMuted')};
    }
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

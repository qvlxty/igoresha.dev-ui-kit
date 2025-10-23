import styled, { css } from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'
import React from 'react'

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
    font-size: 16px;
    font-family: 'roboto';
    padding: 10px;
    border-radius: 4px;
    background: ${themeVar('contentBg')};
    color: ${themeVar('fontColor')};
    width: 100%;
    border: 1px solid ${themeVar('default800')};

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #${themeVar('accent600')};
    }
    ${({ $hasError }) => $hasError && css`
        border-color: ${themeVar('error500')};
    `}
`

const ErrorText = styled.div`
    color: ${themeVar('error500')};
    font-size: 14px;
    margin-top: 4px;
`
import styled from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'
import React from 'react'

type Props = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
    onChange?: (text: string) => void,
    errorText?: string,
    hasError?: boolean,
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>((
    {
        onChange,
        errorText,
        hasError,
        ...props
    }
    , ref) => (
    <Wrapper
        ref={ref}
        onChange={(e) => onChange?.(e.target.value)}
        {...props}
    />
)
)

const Wrapper = styled.textarea<ThemedStyledProps>`
  font-size: 16px;
  font-family: 'roboto';
  padding: 10px;
  border-radius: 4px;
  background: ${themeVar('backgroundColor')};
  border: 1px solid ${themeVar('default500')};
  color: ${themeVar('fontColor')};
  width: 100%;

  &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #${themeVar('accent600')};
    }
`

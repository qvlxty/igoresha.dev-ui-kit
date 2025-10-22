import React from 'react'
import { ThemeContext } from 'styled-components'
import { Theme } from './themes'
import { ThemedStyledProps } from './types'


export const useTheme = () => {
  const theme = React.useContext(ThemeContext)
  return theme as Theme
}


export function themeVar(varName: keyof Theme) {
  return function s({ theme }: ThemedStyledProps) {
    return theme[varName]
  }
}

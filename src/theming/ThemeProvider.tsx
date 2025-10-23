import React from 'react'
import {
  ThemeProvider as Provider,
} from 'styled-components'
import { useUnit } from 'effector-react'
import { $currentTheme } from './model'
import { availableThemes, Theme } from './themes'

type Props = {
  overrideTheme?: typeof availableThemes
}

export const ThemeProvider = ({ children, overrideTheme = availableThemes }: React.PropsWithChildren<Props>) => {
  const theme = useUnit($currentTheme)
  return (
    <Provider theme={overrideTheme[theme]}>
      {children}
    </Provider>
  )
}

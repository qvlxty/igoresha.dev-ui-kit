import { darkTheme } from './dark'
import { lightTheme } from './light'

export type Theme = typeof lightTheme

export const availableThemes = {
    dark: darkTheme as Theme,
    light: lightTheme as Theme
}
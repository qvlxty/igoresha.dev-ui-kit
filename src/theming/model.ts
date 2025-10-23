import { createThemeStore } from '../lib/create-theme-store'

export const THEME_KEY = 'THEME'

export type ThemeItem = 'dark' | 'light'


const theme = createThemeStore({ defaultValue: 'light', key: THEME_KEY })
export const $currentTheme = theme.$store
export const loadThemeFx = theme.loadFx
export const toggleTheme = theme.toggleEvent


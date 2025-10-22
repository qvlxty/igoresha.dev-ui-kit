import type { Preview, ReactRenderer } from '@storybook/react-vite'
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { availableThemes } from '../src/theming/themes'
import { ThemeProvider } from '../src/theming'
import { GlobalStyled } from '../src/theming/global.styled'

const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light: availableThemes.light,
        dark: availableThemes.dark,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyled
    }),
  ]
};

export default preview;
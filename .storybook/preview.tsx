import type { Preview, ReactRenderer } from '@storybook/react-vite'
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { availableThemes } from '../src/theming/themes'
import { GlobalStyled } from '../src/theming/global.styled'
import { ThemeProvider } from 'styled-components';


const preview: Preview = {
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light: availableThemes.light,
        dark: availableThemes.dark,
      },
      Provider: ThemeProvider,
      GlobalStyles: GlobalStyled
    }),
  ],
  parameters: {
    docs: {
    }
  },
  tags: ['autodocs']
};

export default preview;
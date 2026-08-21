import { createGlobalStyle } from 'styled-components'

import { themeVar } from './helpers'

export const GlobalStyled = createGlobalStyle`
    :root {
        color-scheme: light dark;
    }

    body {
        margin: 0;
        padding: 0;
        color: ${themeVar('textPrimary')};
        background-color: ${themeVar('surfacePage')};
    }

    body,
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.5;
    }

    button,
    input,
    textarea,
    select {
        font: inherit;
    }

    button,
    a,
    input,
    textarea,
    select {
        -webkit-tap-highlight-color: transparent;
    }


    @keyframes fadeout
    { 
        from { opacity: 0;}
        to { opacity: 1}
    }

    @-webkit-keyframes fadeout 
    {
        from { opacity: 0;}
        to {opacity: 1;}
    }

    a {
        color: ${themeVar('actionPrimary')};
        text-decoration: none;
    }

    h1, h2, h3 {
        padding: 0;
        margin: 0;
    }

    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
        }
    }
`

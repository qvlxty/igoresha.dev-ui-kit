import { createGlobalStyle } from 'styled-components'

import { themeVar } from './helpers'
import { Typography } from '../Typography'

export const GlobalStyled = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: Roboto;
        color: ${themeVar('fontColor')};
        background-color: ${themeVar('backgroundColor')};
    }

    body,
    * {
        font-family: 'Roboto';
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: #111;
    }

    label {
        font-weight: 300;
        font-size: 14px;
        margin-left: 4px;
    }

    body {
        background: ${themeVar('backgroundColor')};
        font-family: 'Roboto';
        margin: 0;
        color: ${themeVar('fontColor')};
        padding: 0;
    }

    @font-face {
        font-family: Roboto mono;
        src: url('/fonts/RobotoMono-Regular.ttf');
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
        color: ${themeVar('accent500')};
    }

    h1,h2,h3 {
        padding: 0;
        margin: 0;
    }
    ${Typography};
`
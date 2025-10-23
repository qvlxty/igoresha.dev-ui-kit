import { css } from "styled-components";
import { themeVar } from "./theming";

export const Typography = css`
    h1 {
        font-size: 24px;
        gap: 12px;
        background-color: ${themeVar('backgroundColor')};
    }
`
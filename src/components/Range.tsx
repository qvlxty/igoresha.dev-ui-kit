import styled from 'styled-components'
import { themeVar } from '../theming'

export const Range = styled.input.attrs({ type: 'range' })`
  &[type='range'] {
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    border: 1px solid ${themeVar('default700')};
    background-color: ${themeVar('default800')};
    box-sizing: border-box;
    width: 100%;
    height: 8px;
    border-radius: 4px;
    cursor: pointer;
  }
  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 16px;
  }
  &[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 120px;
    width: 10px;
    background: ${themeVar('accent500')};
    cursor: pointer;
    margin-top: -8px; /* Половина разницы между высотой бегунка и трека */
  }
  overflow: hidden;
`

import styled from 'styled-components'
import { themeVar } from '../theming'

export const Range = styled.input.attrs({ type: 'range' })`
   &[type='range'] {
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    width: 100%;
    height: 10px; 
    cursor: pointer;
  }

  &[type='range']::-webkit-slider-runnable-track {
    height: 2px; /* тонкая линия */
    background: ${themeVar('default600')};
    border-radius: 2px;
  }

  &[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 4px;
    height: 10px;
    width: 10px;
    background: ${themeVar('default500')};
    cursor: pointer;
    margin-top: -4px; 
  }
`

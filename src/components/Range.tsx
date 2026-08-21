import styled from 'styled-components'
import { themeVar } from '../theming'
import { BORDER_RADIUS_PX, FOCUS_RING } from '../const'

const RANGE_HIT_AREA_HEIGHT_PX = 10
const RANGE_TRACK_HEIGHT_PX = 2
const RANGE_THUMB_SIZE_PX = 10
const RANGE_FIREFOX_THUMB_SIZE_PX = 12
const RANGE_THUMB_TRACK_OFFSET_PX = -4
const RANGE_FOCUS_OFFSET_PX = 4
const RANGE_DISABLED_OPACITY = 0.55

export const Range = styled.input.attrs({ type: 'range' })`
   &[type='range'] {
    outline: none;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    width: 100%;
    height: ${RANGE_HIT_AREA_HEIGHT_PX}px;
    cursor: pointer;
  }

  &[type='range']::-webkit-slider-runnable-track {
    height: ${RANGE_TRACK_HEIGHT_PX}px;
    background: ${themeVar('borderDefault')};
    border-radius: ${RANGE_TRACK_HEIGHT_PX}px;
  }

  &[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    border-radius: ${BORDER_RADIUS_PX.small}px;
    height: ${RANGE_THUMB_SIZE_PX}px;
    width: ${RANGE_THUMB_SIZE_PX}px;
    background: ${themeVar('actionPrimary')};
    cursor: pointer;
    margin-top: ${RANGE_THUMB_TRACK_OFFSET_PX}px;
  }

  &[type='range']::-moz-range-track {
    height: ${RANGE_TRACK_HEIGHT_PX}px;
    background: ${themeVar('borderDefault')};
    border-radius: ${RANGE_TRACK_HEIGHT_PX}px;
  }

  &[type='range']::-moz-range-thumb {
    width: ${RANGE_FIREFOX_THUMB_SIZE_PX}px;
    height: ${RANGE_FIREFOX_THUMB_SIZE_PX}px;
    border: 0;
    border-radius: ${BORDER_RADIUS_PX.small}px;
    background: ${themeVar('actionPrimary')};
  }

  &[type='range']:focus-visible {
    outline: ${FOCUS_RING.widthPx}px solid color-mix(
      in srgb,
      ${themeVar('focusRing')} ${FOCUS_RING.opacityPercent}%,
      transparent
    );
    outline-offset: ${RANGE_FOCUS_OFFSET_PX}px;
    border-radius: ${BORDER_RADIUS_PX.small}px;
  }

  &[type='range']:disabled { cursor: not-allowed; opacity: ${RANGE_DISABLED_OPACITY}; }
`

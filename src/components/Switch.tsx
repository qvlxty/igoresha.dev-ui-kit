import styled from 'styled-components'
import { themeVar } from '../theming'
import { BORDER_RADIUS_PX, FOCUS_RING, MOTION_DURATION_MS } from '../const'

const SWITCH_WIDTH_PX = 40
const SWITCH_HEIGHT_PX = 18
const SWITCH_THUMB_SIZE_PX = 12
const SWITCH_THUMB_LEFT_PX = 4
const SWITCH_THUMB_BOTTOM_PX = 3
const SWITCH_THUMB_TRANSLATE_X_PX = 20
const VISUALLY_HIDDEN_SIZE_PX = 1

type Props = {
  checked?: boolean
  onChange?: () => void
  disabled?: boolean
}

export const Switch = (
  { checked, onChange, disabled }: Props
) => (
  <Container>
    <Label className="switch">
      <Input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
      <span className="slider round"></span>
    </Label>
  </Container>
)

const Label = styled.label`
    position: relative;
    display: block;
    width: ${SWITCH_WIDTH_PX}px;
    height: ${SWITCH_HEIGHT_PX}px;
    margin-left: 0;
    cursor: pointer;
    &:has(input:disabled) { cursor: not-allowed; }
`

const Input = styled.input`
    opacity: 0;
    position: absolute;
    width: ${VISUALLY_HIDDEN_SIZE_PX}px;
    height: ${VISUALLY_HIDDEN_SIZE_PX}px;
`

const Container = styled.div`
& {
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${themeVar('borderStrong')};
    transition: background-color ${MOTION_DURATION_MS.standard}ms ease,
      box-shadow ${MOTION_DURATION_MS.standard}ms ease;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: ${SWITCH_THUMB_SIZE_PX}px;
    width: ${SWITCH_THUMB_SIZE_PX}px;
    left: ${SWITCH_THUMB_LEFT_PX}px;
    bottom: ${SWITCH_THUMB_BOTTOM_PX}px;
    background-color: white;
    transition: transform ${MOTION_DURATION_MS.standard}ms ease;
  }

  
  input:checked + .slider {
    background-color: ${themeVar('actionPrimary')};
  }
  
  input:focus-visible + .slider {
    box-shadow: 0 0 0 ${FOCUS_RING.widthPx}px color-mix(
      in srgb,
      ${themeVar('focusRing')} ${FOCUS_RING.opacityPercent}%,
      transparent
    );
  }
  input:disabled + .slider { 
    background-color: ${themeVar('actionDisabled')};
    cursor: not-allowed;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(${SWITCH_THUMB_TRANSLATE_X_PX}px);
    -ms-transform: translateX(${SWITCH_THUMB_TRANSLATE_X_PX}px);
    transform: translateX(${SWITCH_THUMB_TRANSLATE_X_PX}px);
  }

  .slider.round {
    border-radius: ${BORDER_RADIUS_PX.pill}px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
`

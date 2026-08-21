import styled from 'styled-components'
import { themeVar } from '../theming'

const LOADER_SIZE_PX = 36
const LOADER_BORDER_WIDTH_PX = 2
const LOADER_ROTATION_DURATION_MS = 500
const FULL_ROTATION_DEG = 360

const Loader = styled.div`
  border: ${LOADER_BORDER_WIDTH_PX}px solid ${themeVar('borderDefault')};
  border-top-color: ${themeVar('actionPrimary')};
  border-radius: 50%;
  width: ${LOADER_SIZE_PX}px;
  height: ${LOADER_SIZE_PX}px;
  animation: spin ${LOADER_ROTATION_DURATION_MS}ms linear infinite;
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(${FULL_ROTATION_DEG}deg); }
  }
`

Loader.displayName = 'Loader'

export { Loader }

import styled from 'styled-components'
import { themeVar } from '../theming'
import { BORDER_RADIUS_PX, SPACING_PX } from '../const'

const PROGRESS_MIN_VISIBLE_PERCENT = 15

type Props = {
  completed: number,
  style?: React.CSSProperties
}

export const ProgressBar = ({ completed, style }: Props) => (
  <Container style={style}>
    {completed > 0 && (<Filter completed={completed} />)}
  </Container>
)

const Container = styled.div`
    border-radius: ${BORDER_RADIUS_PX.pill}px;
    background-color: ${themeVar('borderSubtle')};
    text-align: center;
    flex-shrink: 1;
    flex-grow: 1;
    height: ${SPACING_PX.xs}px;
`


const Filter = styled.div<Props>`
    height: 100%;
    width: ${({ completed }) => completed}%;
    max-width: 100%;
    min-width: ${PROGRESS_MIN_VISIBLE_PERCENT}%;
    border-radius: inherit;
    background-color: ${themeVar('actionPrimary')};
`

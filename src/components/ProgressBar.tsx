import styled, { css } from 'styled-components'
import { themeVar, useTheme } from '../theming'

type Props = {
  completed: number,
  style?: React.CSSProperties
}

export const ProgressBar = ({ completed, style }: Props) => (
  <Container style={style}>
    <Filter completed={completed} />
  </Container>
)

const Container = styled.div`
    border-radius: 50px;
    background-color: ${themeVar('default400')};
    text-align: center;
    flex-shrink: 1;
    flex-grow: 1;
    height: 40px;
`


const Filter = styled.div<Props>`
    height: 40px;
    width: ${({ completed }) => completed}%;
    max-width: 100%;
    min-width: 15%;
    border-radius: inherit;
    background-color: ${themeVar('default700')};
`

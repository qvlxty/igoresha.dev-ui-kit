import styled, { css } from 'styled-components'
import { themeVar, useTheme } from '../theming'

type Props = {
  completed: number
}

export const ProgressBar = ({ completed }: Props) => {
  const completedClamped = Math.min(Math.max(completed, 15), 100)
  return (
    <Container>
      <Filter completed={completedClamped} />
    </Container>
  )
}

const Container = styled.div`
    border-radius: 50px;
    background-color: ${themeVar('default400')};
    text-align: center;
    flex-shrink: 1;
    flex-grow: 1;
    height: 40px;
`


type FilterProps = {
  completed: number
  color?: string
}

const Filter = styled.div<FilterProps>`
    height: 40px;
    width: ${({ completed }) => completed}%;
    border-radius: inherit;
    background-color: ${themeVar('default700')};
`

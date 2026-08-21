import type { Meta, StoryObj } from '@storybook/react-vite'
import styled from 'styled-components'
import { useTheme } from './helpers'
import type { Theme } from './themes'

const meta = {
  title: 'Theming/Семантические параметры темы',
  parameters: { layout: 'fullscreen' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const tokenGroups: Record<string, Array<keyof Theme>> = {
  Surfaces: [
    'surfacePage', 'surfaceBase', 'surfaceElevated', 'surfaceHover',
    'surfaceSelected', 'overlayBackdrop',
  ],
  Text: ['textPrimary', 'textSecondary', 'textMuted', 'textDisabled', 'textOnAccent'],
  Borders: ['borderSubtle', 'borderDefault', 'borderStrong', 'borderDisabled', 'focusRing'],
  Actions: [
    'actionPrimary', 'actionPrimaryHover', 'actionPrimaryActive',
    'actionSecondary', 'actionSecondaryHover', 'actionSecondaryActive',
    'actionDanger', 'actionDangerHover', 'actionDangerActive', 'actionDisabled',
  ],
  Status: ['success', 'warning'],
}

const TokenGallery = () => {
  const theme = useTheme()
  return (
    <Page>
      <h1>Семантические параметры темы</h1>
      {Object.entries(tokenGroups).map(([group, tokens]) => (
        <section key={group}>
          <h2>{group}</h2>
          <Grid>
            {tokens.map((token) => (
              <Card key={token}>
                <Swatch style={{ background: theme[token] }} />
                <Name>{token}</Name>
                <Value>{theme[token]}</Value>
              </Card>
            ))}
          </Grid>
        </section>
      ))}
    </Page>
  )
}

export const Palette: Story = { render: () => <TokenGallery /> }

const Page = styled.main`
  min-height: 100vh;
  padding: 32px;
  color: ${({ theme }) => theme.textPrimary};
  background: ${({ theme }) => theme.surfacePage};
  h1 { font-size: 28px; }
  h2 { margin: 32px 0 12px; font-size: 18px; }
`
const Intro = styled.p`margin: 4px 0 0; color: ${({ theme }) => theme.textMuted};`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
`
const Card = styled.div`
  overflow: hidden;
  padding-bottom: 12px;
  background: ${({ theme }) => theme.surfaceBase};
  border: 1px solid ${({ theme }) => theme.borderSubtle};
  border-radius: 8px;
`
const Swatch = styled.div`height: 72px; border-bottom: 1px solid ${({ theme }) => theme.borderSubtle};`
const Name = styled.div`padding: 10px 12px 0; font-size: 13px; font-weight: 700;`
const Value = styled.div`padding: 2px 12px 0; color: ${({ theme }) => theme.textMuted}; font-size: 12px;`

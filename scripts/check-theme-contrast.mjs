import { readFile } from 'node:fs/promises'

const MINIMUM_TEXT_CONTRAST = 4.5
const THEME_TOKEN_PATTERN = /^\s+(\w+):\s*["']([^"']+)["'],?$/gm

const readTheme = async (relativePath) => {
  const source = await readFile(new URL(relativePath, import.meta.url), 'utf8')
  return Object.fromEntries(
    Array.from(source.matchAll(THEME_TOKEN_PATTERN), ([, token, value]) => [token, value]),
  )
}

const availableThemes = {
  light: await readTheme('../src/theming/themes/light.ts'),
  dark: await readTheme('../src/theming/themes/dark.ts'),
}

const contrastPairs = [
  ['textPrimary', 'surfaceBase'],
  ['textSecondary', 'surfaceBase'],
  ['textMuted', 'surfaceBase'],
  ['actionPrimaryText', 'actionPrimary'],
  ['actionPrimaryText', 'actionPrimaryHover'],
  ['actionPrimaryText', 'actionPrimaryActive'],
  ['actionSecondaryText', 'actionSecondary'],
  ['actionSecondaryText', 'actionSecondaryHover'],
  ['actionSecondaryText', 'actionSecondaryActive'],
  ['actionDangerText', 'actionDanger'],
  ['actionDangerText', 'actionDangerHover'],
  ['actionDangerText', 'actionDangerActive'],
]

const linearizeChannel = (channel) => {
  const normalized = channel / 255
  return normalized <= 0.04045
    ? normalized / 12.92
    : ((normalized + 0.055) / 1.055) ** 2.4
}

const relativeLuminance = (hexColor) => {
  const channels = hexColor
    .slice(1)
    .match(/.{2}/g)
    .map((channel) => linearizeChannel(Number.parseInt(channel, 16)))

  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

const contrastRatio = (foreground, background) => {
  const foregroundLuminance = relativeLuminance(foreground)
  const backgroundLuminance = relativeLuminance(background)
  const lighter = Math.max(foregroundLuminance, backgroundLuminance)
  const darker = Math.min(foregroundLuminance, backgroundLuminance)
  return (lighter + 0.05) / (darker + 0.05)
}

let hasFailures = false

for (const [themeName, theme] of Object.entries(availableThemes)) {
  process.stdout.write(`\n${themeName}\n`)

  for (const [foregroundToken, backgroundToken] of contrastPairs) {
    const ratio = contrastRatio(theme[foregroundToken], theme[backgroundToken])
    const passes = ratio >= MINIMUM_TEXT_CONTRAST
    if (!passes) hasFailures = true

    process.stdout.write(
      `${passes ? 'PASS' : 'FAIL'} ${ratio.toFixed(2)}:1  ` +
      `${foregroundToken} / ${backgroundToken}\n`,
    )
  }
}

if (hasFailures) {
  process.stderr.write(`\nMinimum required contrast is ${MINIMUM_TEXT_CONTRAST}:1\n`)
  process.exitCode = 1
}

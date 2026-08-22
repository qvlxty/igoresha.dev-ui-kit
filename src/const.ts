export const MOBILE_WIDTH = 600;
export const TABLET_WIDTH = 900;
export const LARGE_WIDTH_PX = 1024;

export const CONTROL_HEIGHT_PX = {
  small: 32,
  medium: 40,
  large: 48,
} as const;

export const SPACING_PX = {
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export const BORDER_RADIUS_PX = {
  small: 4,
  medium: 6,
  large: 8,
  xlarge: 12,
  pill: 999,
} as const;

export const FONT_SIZE_PX = {
  small: 14,
  medium: 16,
} as const;

export const MOTION_DURATION_MS = {
  press: 80,
  standard: 160,
} as const;

export const FOCUS_RING = {
  widthPx: 3,
  opacityPercent: 34,
  offsetPx: 2,
} as const;

export const onSmWidth = `@media only screen and (max-width: ${MOBILE_WIDTH}px)`;
export const onMdWidth = `@media only screen and (max-width: ${TABLET_WIDTH}px)`;
export const onLgWidth = `@media only screen and (max-width: ${LARGE_WIDTH_PX}px)`;

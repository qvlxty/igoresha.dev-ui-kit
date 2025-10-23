import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    '../src/**/*.mdx',
    '../docs/**/*.mdx',
  ],
  "addons": [
    '@storybook/addon-themes',
    '@storybook/addon-docs',
  ],
  "staticDirs": ['../assets'],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {
    }
  },
};
export default config;
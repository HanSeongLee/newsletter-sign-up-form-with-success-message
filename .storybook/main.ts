import type { StorybookConfig } from "@storybook/nextjs";
const config: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/commons/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/commons/**/*.stories.@(js|jsx|ts|tsx)',
    '../pages/**/*.mdx',
    '../pages/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    const imageRule = config.module?.rules?.find(rule => {
      const test = (rule as { test: RegExp }).test

      if (!test) {
        return false
      }

      return test.test('.svg')
    }) as { [key: string]: any }

    imageRule.exclude = /\.svg$/

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },
};
export default config;

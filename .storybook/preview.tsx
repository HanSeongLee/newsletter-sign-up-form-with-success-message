import type { Preview } from "@storybook/react";
import 'styles/globals.scss';
import * as NextImage from 'next/image';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: any) => (
      <OriginalNextImage {...props}
                         unoptimized
      />
  ),
});

export default preview;

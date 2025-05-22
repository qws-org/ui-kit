import type { Preview } from "@storybook/react";
import "../src/index.css";
import "../dist/styles.css";
import { UiKitDecorator } from "./decorators/RootDecorator";
import { themes } from "@storybook/theming";

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;

export const decorators = [UiKitDecorator];

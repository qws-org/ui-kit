import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI-Kit components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    weight: {
      control: "radio",
      options: ["superbold", "bold", "semibold", "normal", "light"],
    },
    fontWeight: {
      control: "radio",
      options: [
        "desktop.superbold",
        "desktop.bold",
        "desktop.semibold",
        "desktop.normal",
        "desktop.light",
        "mobile.superbold",
        "mobile.bold",
        "mobile.semibold",
        "mobile.normal",
        "mobile.light",
      ],
    },
    lineHeight: {
      control: "text",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onPress: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Link: Story = {
  args: {
    children: "Link",
    href: "/asd",
    elementType: "a",
  },
};

export const Default: Story = {
  args: {
    variant: "default",
    children: "Default Button",
    p: { px: 40 },
    md: { p: { px: 96 } },
  },
};

export const Transparent: Story = {
  args: {
    variant: "transparent",
    children: "Transparent Button",
  },
};

export const Accent: Story = {
  args: {
    variant: "accent",
    children: "White Button",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};
export const SecondaryActive: Story = {
  args: {
    variant: "secondary",
    isActive: true,
    children: "Secondary Button Active",
  },
};
export const Tertiary: Story = {
  args: {
    variant: "tertiary",
    children: "Tertiary Button",
  },
};

export const SizeLarge: Story = {
  args: {
    size: "large",
    variant: "default",
    children: "Default Button",
  },
};

export const SizeMedium: Story = {
  args: {
    size: "medium",
    variant: "default",
    children: "Default Button",
  },
};

export const SizeSmall: Story = {
  args: {
    size: "small",
    variant: "default",
    children: "Default Button",
  },
};

export const SizeXsmall: Story = {
  args: {
    size: "xsmall",
    variant: "default",
    children: "Default Button",
  },
};
export const Border: Story = {
  args: {
    size: "large",
    variant: "default",
    children: "Default Button",

    border: {
      width: "12px",
      color: "border-primary",

      radius: {
        topLeft: "0",
        topRight: "11rem",
        bottomLeft: "10px",
        bottomRight: "0",
      },
      style: "dashed",
    },
    md: {
      border: {
        style: "none",
        radius: {
          topLeft: "12px",

          bottomLeft: "12rem",
          bottomRight: "1rem",
        },

        color: "border-accent",
        width: "22px",
      },
    },
    d: {
      border: {
        style: "dashed",
        radius: {
          topLeft: "122px",

          bottomLeft: "12rem",
          bottomRight: "1rem",
        },
        color: "border-accent",
        width: "34px",
      },
    },
  },
};

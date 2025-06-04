import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta = {
  title: "UI-Kit typography components/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["large", "medium", "small"],
      description: "Size of the Title",
    },
    weight: {
      control: "radio",
      options: ["superbold", "bold", "semibold", "normal", "light"],
    },
    as: {
      control: "radio",
      options: ["p", "span", "article", "li"],
    },
    className: {
      control: "text",
    },
    md: {
      control: "object",
      description: "Responsive settings for md screens",
    },
    d: {
      control: "object",
      description: "Responsive settings for d screens",
    },
    lineHeight: {
      control: "radio",
      description:
        "Overrides default line-height from size. Accepts one of the design tokens (e.g., body.desktop.large).",
    },
    fontSize: {
      control: "radio",
      description:
        "Overrides default font-size from size. Accepts one of the design tokens (e.g., body.desktop.large).",
    },
    italic: {
      control: "boolean",
    },
  },
  args: {
    as: "p",
    size: "small",
    fontSize: "button.desktop.xsmall",
    lineHeight: "body.desktop.small",
    md: {
      p: { py: 64 },
      fontSize: "body.mobile.small",
      lineHeight: "body.desktop.large",
    },
    d: {
      lineHeight: "title.mobile.xsmall",
      fontSize: "headline.desktop.large",
    },
    hover: {
      fontSize: 48,
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return <Typography {...args}>This is a default description.</Typography>;
  },
};

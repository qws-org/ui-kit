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
    cursor: {
      control: "radio",
      options: [
        "default",
        "pointer",
        "wait",
        "text",
        "move",
        "help",
        "none",
        "all-scroll",
        "grabbing",
        "grab",
        "col-resize",
        "row-resize",
        "n-resize",
        "e-resize",
        "s-resize",
        "w-resize",
        "ne-resize",
        "zoom-out",
        "zoom-in",
        "nwse-resize",
        "nesw-resize",
        "ns-resize",
        "ew-resize",
        "sw-resize",
        "se-resize",
        "nw-resize",
        "no-drop",
        "copy",
        "alias",
        "vertical-text",
        "crosshair",
        "cell",
        "progress",
        "context-menu",
        "not-allowed",
      ],
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
    display: {
      control: "radio",
      options: [
        "block",
        "hidden",
        "inline",
        "inline-block",
        "flex",
        "inline-flex",
        "table",
        "table-cell",
        "grid",
        "table-row",
      ],
      description: "Display of the Title",
    },
  },
  args: {
    as: "p",
    size: "small",
    fontSize: "button.desktop.xsmall",
    lineHeight: "body.desktop.small",
    textDecoration: "underline",
    cursor: "cell",

    md: {
      p: { py: 64 },
      fontSize: "body.mobile.small",
      lineHeight: "body.desktop.large",
      cursor: "pointer",
    },
    d: {
      lineHeight: "title.mobile.xsmall",
      fontSize: "headline.desktop.large",
      cursor: "default",
    },
    hover: {
      fontSize: 48,
      textDecoration: "no-underline",
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

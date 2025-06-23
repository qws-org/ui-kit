import type { Meta, StoryObj } from "@storybook/react";

import { Title } from "./Title";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI-Kit typography components/Title",
  component: Title,

  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["large", "medium", "small", "xsmall"],
      description: "Size of the Title",
    },
    as: {
      control: "radio",
      options: ["h1", "h2", "h3", "h4"],
    },
    weight: {
      control: "radio",
      options: ["superbold", "bold", "semibold", "normal", "light"],
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
    as: "h1",
    p: 32,
    italic: true,
    horizontalAlign: "center",
    size: "small",
    fontSize: "button.desktop.xsmall",
    md: {
      p: { py: 64 },
      fontSize: "body.mobile.small",
    },
    d: { lineHeight: "body.desktop.large", fontSize: "headline.desktop.large" },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h4",
  },

  render(args) {
    return <Title {...args}>This is a default title.</Title>;
  },
};

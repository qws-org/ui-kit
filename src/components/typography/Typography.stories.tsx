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
  },
  args: {
    size: "large",
    as: "p",
    md: { size: "medium", weight: "normal" },
    d: { size: "large", weight: "light" },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render(args) {
    return <Typography {...args}>This is a default description.</Typography>;
  },
};

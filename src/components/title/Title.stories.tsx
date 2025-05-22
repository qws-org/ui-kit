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
    weight: {
      control: "radio",
      options: ["superbold", "bold", "semibold", "normal", "light"],
    },
    as: {
      control: "radio",
      options: ["h1", "h2", "h3", "h4"],
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
    alignment: {
      control: "radio",
      options: ["center", "left", "right", "justify"],
    },
  },
  args: {
    size: "large",
    as: "h1",
    p: 32,
    md: { size: "medium", weight: "normal", p: { py: 64 } },
    d: { size: "large", weight: "light" },
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "h4",
    size: "xsmall",
  },

  render(args) {
    return <Title {...args}>This is a default title.</Title>;
  },
};

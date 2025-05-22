import type { Meta, StoryObj } from "@storybook/react";

import { HeadingBlock } from "./HeadingBlock";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI-Kit typography components/HeadingBlock",
  component: HeadingBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "radio",
      options: ["large", "medium", "small", "xsmall"],
      description: "Size of the Title",
    },
    textSize: {
      control: "radio",
      options: ["large", "medium", "small"],
      description: "Size of the description",
    },
    alignment: {
      control: "radio",
      options: ["left", "center"],
      description: "Alignment of the heading block",
    },
  },
  args: {
    size: "large",
    alignment: "left",
    title: "Default Title",
    description: "This is a **default description** with markdown support.",
  },
} satisfies Meta<typeof HeadingBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CenterAligned: Story = {
  args: {
    alignment: "center",
    title: "Centered Title",
    p: 40,
    m: 96,
    description: "This description is aligned to the **center**.",
  },
};

export const MediumSize: Story = {
  args: {
    size: "medium",
    title: "Medium Title",
    description: "This is a smaller-sized heading block.",
  },
};

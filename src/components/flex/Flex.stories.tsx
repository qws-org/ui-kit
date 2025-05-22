import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "./Flex";

const meta: Meta<typeof Flex> = {
  title: "UI-Kit layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Компонент `Flex` — это универсальный контейнер для построения макетов с использованием возможностей CSS Flexbox. Он позволяет выравнивать, распределять и управлять дочерними элементами гибко и удобно.",
      },
    },
  },
  argTypes: {
    justify: {
      control: "select",
      options: [
        "center",
        "end",
        "flex-end",
        "flex-start",
        "start",
        "space-around",
        "space-between",
        "space-evenly",
        "stretch",
      ],
    },
    align: {
      control: "select",
      options: [
        "center",
        "end",
        "flex-end",
        "flex-start",
        "self-end",
        "self-start",
        "start",
      ],
    },
    gap: {
      control: "text",
    },
    flexDirection: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    justify: "center",
    align: "center",
    gap: 4,
    flexDirection: "row",
    width: 400,
    children: <div className="bg-gray-200 p-4">Content</div>,
  },
};

export const ColumnLayout: Story = {
  args: {
    justify: "space-between",
    align: "flex-start",
    gap: "8px",
    flexDirection: "column",
    children: (
      <>
        <div className="bg-blue-200 p-4">Item 1</div>
        <div className="bg-blue-200 p-4">Item 2</div>
        <div className="bg-blue-200 p-4">Item 3</div>
      </>
    ),
  },
};

export const ResponsiveLayout: Story = {
  args: {
    justify: "center",
    align: "center",
    gap: 4,
    flexDirection: "row",

    md: {
      justify: "space-between",
      align: "flex-start",
      gap: "8",
      flexDirection: "column",
    },
    d: {
      justify: "flex-end",
      align: "flex-start",
      gap: 16,
      flexDirection: "row-reverse",
    },
    children: (
      <>
        <div className="bg-red-200 p-4">Item 1</div>
        <div className="bg-red-200 p-4">Item 2</div>
        <div className="bg-red-200 p-4">Item 3</div>
      </>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    justify: "space-evenly",
    align: "flex-start",
    gap: 2,
    flexDirection: "row",
    p: 12,
    md: { p: { py: 64, px: 96 } },
    d: { p: { pl: 64, pt: 96 }, m: 64 },
    children: (
      <>
        <div className="bg-green-300 p-4">Custom Item 1</div>
        <div className="bg-green-300 p-4">Custom Item 2</div>
      </>
    ),
  },
};

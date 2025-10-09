import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "~/components";

import { Spinner } from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "UI-Kit components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
      description: "Ширина спиннера (px)",
    },
    height: {
      control: { type: "number" },
      description: "Высота спиннера (px)",
    },
    className: {
      control: "text",
      description: "CSS класс для дополнительного стилизования",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = { args: {} };

export const Custom: Story = {
  args: {
    width: 320,
    height: 320,
    border: { color: { top: "yellow" }, radius: "50%" },
    md: { border: { width: "44px", color: "red" } },
    d: {
      border: {
        width: "8px",
        color: {
          top: "green",
          right: "blue",
          left: "white",
          bottom: "orange",
        },
        radius: "10%",
      },
    },
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Spinner width={60} height={60} />
      <Spinner width={160} height={160} />
      <Spinner width={260} height={260} />
      <Spinner width={440} height={440} />
    </div>
  ),
};
export const WithChildren: Story = {
  render: () => (
    <Spinner
      width={400}
      height={400}
      flexDirection={"column"}
      align={"center"}
      justify={"center"}
    >
      <Box width={300} height={300} bg={"red"} border={{ radius: "50%" }}></Box>
    </Spinner>
  ),
};

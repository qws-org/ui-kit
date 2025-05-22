import type { Meta, StoryObj } from "@storybook/react";

import { BreadcrumbItem } from "./BreadcrumbItem";
import { Breadcrumbs } from "./Breadcrumbs";

const meta = {
  title: "UI-Kit components/Breadcrumbs",
  component: Breadcrumbs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof BreadcrumbItem>;

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;
export const Default: Story = {
  render: () => {
    return (
      <Breadcrumbs aria-label="Navigation">
        <BreadcrumbItem variant="active" href="/">
          Home
        </BreadcrumbItem>
        <BreadcrumbItem variant="disabled" href="">
          Promotions
        </BreadcrumbItem>
      </Breadcrumbs>
    );
  },
};

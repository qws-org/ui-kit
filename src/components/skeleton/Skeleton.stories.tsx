import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "~/components/card/Card";

import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "UI-Kit components/Skeleton",
  component: Skeleton,
  argTypes: {
    width: {
      control: "text",
      description:
        "Ширина скелетона (можно задать число в пикселях или строку со значением, например '100%')",
    },
    height: {
      control: "text",
      description:
        "Высота скелетона (можно задать число в пикселях или строку со значением)",
    },
    radius: {
      control: "number",
      description: "Радиус скругления углов (по умолчанию 0, без скругления)",
    },
    className: {
      control: "text",
      description: "Можно задать собственные стили",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: "100px",
    height: "20px",
    md: { height: 400, width: 400 },
    d: { height: 800, width: 700 },
    radius: 4,
  },
};

export const Circle: Story = {
  args: {
    width: "40px",
    height: "40px",
    radius: 20,
  },
};

export const CardSkeleton = {
  render: () => (
    <Card className="p-4 space-y-4 max-w-sm">
      <Skeleton width="100%" height="180px" radius={8} />

      <Skeleton width="60%" height="20px" radius={4} />

      <Skeleton width="80%" height="16px" radius={4} />

      <Skeleton width="70%" height="16px" radius={4} />

      <Skeleton width="50%" height="36px" radius={4} />
    </Card>
  ),
};

export const CustomBg = {
  render: () => (
    <Card className="p-4 space-y-4 max-w-sm">
      <Skeleton
        width="100%"
        height="180px"
        radius={8}
        bg="rgba(241, 8, 8, 0.4)"
      />

      <Skeleton
        width="60%"
        height="20px"
        radius={4}
        bg="rgba(27, 241, 8, 0.4)"
      />

      <Skeleton
        width="80%"
        height="16px"
        radius={4}
        bg="rgba(136, 64, 64, 0.4)"
      />

      <Skeleton
        width="70%"
        height="16px"
        radius={4}
        bg="surface-primary-subtle"
      />

      <Skeleton
        width="50%"
        height="36px"
        radius={4}
        bg="rgba(156, 143, 143, 0.4)"
      />
    </Card>
  ),
};

import type { Meta } from "@storybook/react";

import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "UI-Kit Layout/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Компонент Container — это гибкий контейнер, основанный на компоненте Flex. Он поддерживает все свойства Flex и обеспечивает удобный способ управления макетами.",
      },
    },
  },
  args: {
    children: "Какой то контент",
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

export const Base = {};

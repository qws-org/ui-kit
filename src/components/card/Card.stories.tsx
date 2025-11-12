import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "UI-Kit components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: { type: "text" },
      description: "Дополнительные CSS-классы для карточки",
    },
    children: {
      control: { type: "text" },
      description: "Содержимое карточки",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Это карточка по умолчанию",
  },
};

export const WithCustomClass: Story = {
  args: {
    className: "bg-blue-500 text-white",
    children: "Карточка с пользовательскими классами",
    p: 40,
    m: 32,
  },
};

export const WithNestedContent: Story = {
  args: {
    children: (
      <div className="p-4">
        <h3 className="text-lg font-bold">Заголовок</h3>
        <p className="text-sm">Это пример вложенного содержимого в карточке.</p>
      </div>
    ),
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: "secondary",
    children: "Это карточка с вариантом secondary,",
  },
};

export const TertiaryVariant: Story = {
  args: {
    variant: "tertiary",
    children: "Это карточка с вариантом tertiary,",
  },
};
export const CustomVariantWithCustomBg: Story = {
  args: {
    variant: "default",
    bg: "background-accent2",
    md: { bg: "background-tetriary" },
    d: { bg: "background-accent1-vertical" },
    border: { radius: "40px" },
    className: "rounded md:rounded-[33px] h-[300px]",
    children:
      "Это карточка с вариантом default, и добавлен bg для кастомизации цвета подложки и border-radius," +
      " в приоритете пропсы, те параметры что необходимо дописать можно дополнить через className ",
  },
};

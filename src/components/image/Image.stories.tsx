import type { Meta, StoryObj } from "@storybook/react";

import { Image } from ".";

const meta: Meta<typeof Image> = {
  title: "UI-Kit components/Image",
  component: Image,
  tags: ["autodocs"],
  args: {
    value: "/main-page-bg-mobile.jpg",
    mdValue: "/main-page-bg-desktop.jpg",
    dValue: "/main-page-bg-desktop.jpg",
    className: "",
    children: "Контент размещён на фоне",
  },
  argTypes: {
    value: {
      description: "URL фонового изображения для мобильных устройств",
      control: { type: "text" },
    },
    mdValue: {
      description: "URL фонового изображения для планшетов и десктопов",
      control: { type: "text" },
    },
    dValue: {
      description: "URL фонового изображения для планшетов и десктопов",
      control: { type: "text" },
    },
    className: {
      description: "Дополнительные классы для стилизации",
      control: { type: "text" },
    },
    children: {
      description: "Контент, который будет размещён внутри контейнера",
      control: { type: "text" },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Компонент `Background` позволяет задавать фоновое изображение с адаптивной поддержкой через Tailwind CSS классы.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    value: "/main-page-bg-mobile.jpg",
    mdValue: "/main-page-bg-desktop.jpg",
    dValue: "/main-page-bg-desktop.jpg",
    imageClassName: "object-cover object-center h-[320px]",
    className: "overflow-hidden",
    width: "100%",
    maxWidth: 1920,
    height: 320,
    m: { mx: "auto" },
  },
};

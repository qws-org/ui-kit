import type { Meta, StoryObj } from "@storybook/react";

import { Markdown } from "./Markdown";

const meta: Meta<typeof Markdown> = {
  title: "UI-Kit typography components/Markdown",
  component: Markdown,
  args: {
    children: "# Заголовок 1\n\nТекст **жирный**, *курсив*, ~~зачеркнутый~~.",
    className: "",
    alignment: "left",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Markdown-контент для рендеринга",
      table: { category: "Контент" },
    },
    className: {
      control: "text",
      description: "Дополнительный CSS-класс",
      table: { category: "Стилизация" },
    },
    alignment: {
      control: {
        type: "select",
        options: ["left", "center", "right", "justify"],
      },
      description: "Выравнивание текста внутри Markdown-блока.",
      table: { category: "Стилизация" },
    },
    display: {
      control: "radio",
      options: [
        "block",
        "hidden",
        "inline",
        "inline-block",
        "flex",
        "inline-flex",
        "table",
        "table-cell",
        "grid",
        "table-row",
      ],
      description: "Display of the Title",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Markdown>;

export const Default: Story = {};

export const WithHTML: Story = {
  args: {
    children:
      "<h1 style='font-size: 40px'>Заголовок H1</h1><p style='color: red'>Красный текст внутри HTML</p>",
  },
};

export const CustomStyled: Story = {
  args: {
    p: 32,
    m: 32,
    md: { display: "hidden" },
    d: { p: { px: 40, pb: 16 }, m: { my: 96 }, display: "block" },
    children: `
### 🌟 Кастомные стили  
- Это список  
- Стили применяются через className  
- Можно настроить разную типографику  
    `,
    className: "text-purple-400",
    alignment: "center",
  },
};

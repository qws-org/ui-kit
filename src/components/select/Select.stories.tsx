import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "UI-Kit components/Select",
  component: Select,
  argTypes: {
    emptyText: {
      control: "text",
      description:
        "Текст, который отобразится в случае если не выбран ни 1 элемент",
    },
    getOptionLabel: {
      control: "object",
      description:
        "Функция которая позволяет выводить кастомные поля для описания опции, либо же кастомизировать реализацию самой опции",
    },
    items: {
      description: "Список элементов которые отображаются в выпадающем списке",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

type Option = { id: number; name: string };

export const Default: Story = {
  render: () => {
    const options: Array<Option> = [
      { id: 1, name: "Aerospace" },
      { id: 2, name: "Mechanical" },
      { id: 3, name: "Civil" },
      { id: 4, name: "Biomedical" },
      { id: 5, name: "Nuclear" },
      { id: 6, name: "Industrial" },
      { id: 7, name: "Chemical" },
      { id: 8, name: "Agricultural" },
      { id: 9, name: "Electrical" },
    ];

    const [state, setState] = useState<Option>();

    return (
      <Select
        value={state}
        onChange={setState}
        items={options}
        aria-label={"select"}
      />
    );
  },
};

type Option2 = { id: number; label: string };

export const WithCustomStructure: Story = {
  render: () => {
    const options: Array<Option2> = [
      { id: 1, label: "Aerospace" },
      { id: 2, label: "Mechanical" },
      { id: 3, label: "Civil" },
      { id: 4, label: "Biomedical" },
    ];

    const [state, setState] = useState<Option2>(options[0]);

    return (
      <Select
        value={state}
        onChange={setState}
        items={options}
        aria-label={"select"}
        getOptionLabel={(v) => v.label}
      />
    );
  },
};

export const WithElementaryList: Story = {
  render: () => {
    const options: Array<string> = ["1", "2", "3"];

    const [state, setState] = useState<string>(options[0]);

    return (
      <Select
        value={state}
        onChange={setState}
        items={options}
        aria-label={"select"}
        getOptionLabel={(v) => v}
      />
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Dialog } from "./dialog/Dialog";
import { PopoverTrigger } from "./PopoverTrigger";

const meta: Meta<typeof PopoverTrigger> = {
  title: "UI-Kit components/Popover",
  component: PopoverTrigger,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description:
        "Текст, который будет отображаться на кнопке, открывающей поповер.",
      control: { type: "text" },
    },
    placement: {
      description:
        "Позиция поповера относительно триггера. Возможные значения: 'top', 'bottom', 'left', 'right', а также 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'.",
      control: { type: "select" },
      options: [
        "top",
        "bottom",
        "left",
        "right",
        "top-start",
        "top-end",
        "bottom-start",
        "bottom-end",
        "left-start",
        "left-end",
        "right-start",
        "right-end",
      ],
      defaultValue: "bottom",
    },
    offset: {
      description:
        "Смещение поповера относительно его якорного элемента вдоль основной оси. Этот проп определяет расстояние между поповером и элементом-триггером.",
      control: { type: "number" },
    },
    crossOffset: {
      description:
        "Смещение поповера относительно его якорного элемента вдоль крестовой оси. Этот проп определяет дополнительное расстояние между поповером и триггером по перпендикулярной оси.",
      control: { type: "number" },
    },
    children: {
      description:
        "Дочерний элемент, который будет отображаться внутри поповера.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof PopoverTrigger>;

export const Default: Story = {
  render: () => (
    <PopoverTrigger label="Open Popover">
      <Dialog title="Popover title">This is the content of the popover.</Dialog>
    </PopoverTrigger>
  ),
};

export const CustomPlacement: Story = {
  render: () => (
    <PopoverTrigger label="Open Popover (Custom)" placement="top end">
      <Dialog title="Popover title">
        This is the content of the popover with custom placement.
      </Dialog>
    </PopoverTrigger>
  ),
};

export const OffsetPlacement: Story = {
  render: () => (
    <PopoverTrigger
      label="Open Popover (Offset)"
      placement="bottom end"
      offset={50}
    >
      <Dialog title="Popover title">
        This is the content of the popover with offset placement.
      </Dialog>
    </PopoverTrigger>
  ),
};

export const CrossOffsetPlacement: Story = {
  render: () => (
    <PopoverTrigger
      label="Open Popover (Cross Offset)"
      placement="bottom"
      crossOffset={20}
    >
      <Dialog title="Popover title">
        This is the content of the popover with cross offset placement.
      </Dialog>
    </PopoverTrigger>
  ),
};

export const OffsetAndCrossOffset: Story = {
  render: () => (
    <PopoverTrigger
      label="Open Popover (Offset + Cross Offset)"
      placement="top end"
      offset={40}
      crossOffset={30}
    >
      <Dialog title="Popover title">
        This is the content of the popover with combined offsets.
      </Dialog>
    </PopoverTrigger>
  ),
};

export const CustomTrigger: Story = {
  render: () => (
    <PopoverTrigger
      placement="top end"
      label="asd"
      customTrigger={<button>Custom trigger</button>}
      popoverProps={{
        bg: "red",
      }}
    >
      <Dialog dialogStyle={{ padding: "8px 12px" }}>
        Custom trigger content
      </Dialog>
    </PopoverTrigger>
  ),
};

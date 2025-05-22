import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../button/Button";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI-Kit components/Checkbox",
  component: Checkbox,
  argTypes: {
    value: {
      control: "boolean",
      description: "Определяет, выбран ли чекбокс",
      defaultValue: false,
    },
    onChange: { action: "clicked", description: "Вызывается при изменении" },

    className: { control: "text", description: "Дополнительные классы стилей" },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    const onSubmit = (): void => {
      //
    };

    return (
      <form onSubmit={onSubmit}>
        <Checkbox aria-label="label">Remember me</Checkbox>

        <Button type="submit" className="mt-4 p-2">
          Submit form
        </Button>
      </form>
    );
  },
};
export const WithErrorMessage: Story = {
  render: () => {
    const onSubmit = (): void => {
      //
    };

    return (
      <form onSubmit={onSubmit}>
        <Checkbox aria-label="label" errorMessage={"some error"}>
          Remember me
        </Checkbox>

        <Button type="submit" className="mt-4 p-2">
          Submit form
        </Button>
      </form>
    );
  },
};

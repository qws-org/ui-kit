import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Button } from "~/components";
import { Eye } from "~/icons";

import { TextField } from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "UI-Kit components/TextField",
  component: TextField,
  argTypes: {
    label: { control: "text", description: "Label for the input field" },
    errorMessage: {
      control: "text",
      description: "Error message if validation fails",
    },
    icon: { description: "Optional icon element" },
    type: {
      control: "radio",
      options: ["text", "password", "email", "number"],
      description: "Type of input field",
    },
    isDisabled: { control: "boolean", description: "Disables the input field" },
    isRequired: {
      control: "boolean",
      description: "Marks the field as required",
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Username",
  },
  render: (args) => <TextField {...args} />,
};

export const WithValidation: Story = {
  render: () => {
    const onSubmit = (): void => {
      //
    };

    return (
      <form onSubmit={onSubmit}>
        <TextField name="email" label="Email" />
        <Button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </Button>
      </form>
    );
  },
};

export const WithToggleIcon: Story = {
  args: {
    label: "Password",
  },
  render: (args) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <TextField
        {...args}
        type={isVisible ? "text" : "password"}
        icon={
          <Eye
            onClick={() => setIsVisible(!isVisible)}
            className="cursor-pointer"
            viewBox="0 0 24 24"
          />
        }
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    value: "Some text",
    isDisabled: true,
  },
  render: (args) => {
    return <TextField {...args} />;
  },
};

export const Mask: Story = {
  args: {
    label: "Test mask",
    mask: "+\\91 9999999999",
    maskChar: "_",
  },
  render: (args) => {
    return <TextField {...args} />;
  },
};

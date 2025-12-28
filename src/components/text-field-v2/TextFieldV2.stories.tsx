import type { Meta, StoryObj } from "@storybook/react";
import type { FormEvent } from "react";
import { useState } from "react";
import InputMask from "react-input-mask";

import { Box, Button, Flex, Typography } from "~/components";
import { Eye } from "~/icons";

import { TextFieldV2 } from "./TextFieldV2";

const meta: Meta<typeof TextFieldV2> = {
  title: "UI-Kit components/TextFieldV2",
  component: TextFieldV2,
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

type Story = StoryObj<typeof TextFieldV2>;

export const Primary: Story = {
  args: {
    label: "Default Input",
  },
  render: (args) => (
    <>
      <Box bg="#401A75" height={130} p={32}>
        <TextFieldV2 {...args} />
      </Box>
      <Box bg="white" height={130} p={32}>
        <TextFieldV2 {...args} />
      </Box>
      <Box bg="#19171F" height={130} p={32}>
        <TextFieldV2 {...args} />
      </Box>
    </>
  ),
};

export const Secondary: Story = {
  args: { label: "Label for Value Chain" },
  render: (args) => (
    <>
      <Box bg="#19171F" height={130} p={32}>
        <TextFieldV2 {...args} variant="secondary" />
      </Box>
      <Box bg="white" height={130} p={32}>
        <TextFieldV2 {...args} variant="secondary" />
      </Box>
      <Box bg="#401A75" height={130} p={32}>
        <TextFieldV2 {...args} variant="secondary" />
      </Box>
    </>
  ),
};
export const WithBgColor: Story = {
  args: {
    label: "Username",
  },
  render: (args) => (
    <Box p={32}>
      <TextFieldV2 {...args} bg={"surface-accent2-hovered"} m={{ mb: 32 }} />
      <TextFieldV2
        {...args}
        bg={"background-accent1-vertical"}
        m={{ mb: 32 }}
      />
      <TextFieldV2
        {...args}
        bg={"surface-primary-grad-subtle"}
        m={{ mb: 32 }}
      />
      <TextFieldV2
        {...args}
        variant="secondary"
        bg={"surface-accent2-hovered"}
        m={{ mb: 32 }}
      />
      <TextFieldV2
        {...args}
        variant="secondary"
        bg={"background-accent1-vertical"}
        m={{ mb: 32 }}
      />
      <TextFieldV2
        {...args}
        variant="secondary"
        bg={"surface-primary-grad-subtle"}
        m={{ mb: 32 }}
      />
    </Box>
  ),
};
export const WithCustomization: Story = {
  args: { errorMessage: "error" },
  render: (args) => (
    <Box bg="#401A75" height={500} p={32}>
      <TextFieldV2
        {...args}
        label={({ isFocused, value }) => (
          <Typography
            as="label"
            position={{
              type: "absolute",
              top: isFocused || value ? "1px" : "10px",
              left: "14px",
            }}
            color={"text-primary-hovered"}
          >
            Customed label
          </Typography>
        )}
        p={{ px: 14 }}
        m={{ mb: 111 }}
        color="text-selection"
        customInput={<InputMask mask={"+\\91 9999999999"} maskChar={"_"} />}
        errorMessage={
          <Typography
            position={{ type: "absolute", right: "20px", top: "50px" }}
            color="text-selection"
          >
            Custom error message
          </Typography>
        }
      />
      <TextFieldV2
        {...args}
        label={({ isFocused, value }) => (
          <Typography
            as="label"
            position={{
              type: "absolute",
              top: isFocused || value ? "1px" : "10px",
              left: "14px",
            }}
            color={"text-primary-hovered"}
          >
            Customed label
          </Typography>
        )}
        p={{ px: 14 }}
        m={{ mb: 12 }}
        color="text-selection"
        outlineColor={args.errorMessage ? "orange" : "text-selection"}
        errorMessage={
          <Typography
            position={{ type: "absolute", right: "20px", top: "50px" }}
            color="text-selection"
          >
            Custom error message
          </Typography>
        }
      />
    </Box>
  ),
};

export const WithValidation: Story = {
  render: () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);

    const onSubmit = (e: FormEvent): void => {
      e.preventDefault();

      if (!email.trim()) {
        setError("Email is required");
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        setError("Invalid email format");
        return;
      }

      setError(null);
      alert("Form submitted!");
    };

    return (
      <form onSubmit={onSubmit}>
        <TextFieldV2
          name="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e)}
          errorMessage={error ?? undefined}
        />

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
      <Flex gap={8} bg={"grey"} flexDirection={"column"} p={22}>
        <TextFieldV2
          {...args}
          type={isVisible ? "text" : "password"}
          icon={({ isDisabled }) => {
            return (
              <Box
                onClick={() => setIsVisible(!isVisible)}
                position={{ type: "absolute", top: "15px", right: "32px" }}
                cursor={isDisabled ? "auto" : "pointer"}
              >
                <Eye />
              </Box>
            );
          }}
        />
        <TextFieldV2
          {...args}
          variant="secondary"
          type={isVisible ? "text" : "password"}
          icon={({ isDisabled }) => {
            return (
              <Box
                onClick={() => setIsVisible(!isVisible)}
                position={{ type: "absolute", top: "10px", right: "12px" }}
                cursor={isDisabled ? "auto" : "pointer"}
              >
                <Eye />
              </Box>
            );
          }}
        />
      </Flex>
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
    return <TextFieldV2 {...args} />;
  },
};
export const Error: Story = {
  args: {
    label: "Error",
    value: "Some text",
  },
  render: (args) => {
    return (
      <>
        <Flex
          flexDirection={"column"}
          gap={16}
          bg="#401A75"
          height={230}
          p={32}
        >
          <TextFieldV2 {...args} errorMessage={"error message"} />
          <TextFieldV2
            {...args}
            variant="secondary"
            errorMessage={"error message"}
          />
        </Flex>
        <Flex
          flexDirection={"column"}
          gap={16}
          bg="#19171F"
          height={230}
          p={32}
        >
          <TextFieldV2 {...args} errorMessage={"error message"} />
          <TextFieldV2
            {...args}
            variant="secondary"
            errorMessage={"error message"}
          />
        </Flex>
      </>
    );
  },
};

export const Mask: Story = {
  args: {
    m: { mb: 10 },
  },
  render: (args) => {
    return (
      <Box bg="#401A75" height={500} p={32}>
        <TextFieldV2
          {...args}
          label={"Phone India"}
          customInput={<InputMask mask={"+\\91 9999999999"} maskChar={"_"} />}
        />

        <TextFieldV2
          {...args}
          label={"Phone Russia"}
          customInput={<InputMask mask="+7 (999) 999-99-99" maskChar="_" />}
        />

        <TextFieldV2
          {...args}
          label={"Card"}
          customInput={<InputMask mask="9999 9999 9999 9999" maskChar="•" />}
        />

        <TextFieldV2
          {...args}
          label={"Date"}
          customInput={<InputMask mask="99.99.9999" maskChar="_" />}
        />
      </Box>
    );
  },
};

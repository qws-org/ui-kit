import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button, Flex, Typography } from "~/components";
import { CheckboxIcon, Eye } from "~/icons";

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
export const WithErrorMessageAndCustomText: Story = {
  render: () => {
    const onSubmit = (): void => {
      //
    };

    return (
      <form onSubmit={onSubmit}>
        <Flex m={{ mb: 16 }} md={{ m: { mb: 24 } }}>
          <Checkbox
            errorMessage={"error message"}
            data-testid="registration-form-remember-password-checkbox"
          >
            <Flex flexWrap="wrap" whiteSpace="nowrap" gap={2} align="center">
              <Typography
                color="text-primary-muted"
                fontSize="body.mobile.xsmall"
                lineHeight="body.mobile.xsmall"
              >
                I am 18 years old and I accept the
              </Typography>
              <Button
                href={"/link"}
                p={{ px: 0, py: 0 }}
                size="small"
                variant="tertiary"
                color="text-selection"
                fontSize="body.mobile.xsmall"
                lineHeight="body.mobile.xsmall"
              >
                Terms and Conditions
              </Button>
              <Typography
                color="text-primary-muted"
                fontSize="body.mobile.xsmall"
                lineHeight="body.mobile.xsmall"
              >
                and
              </Typography>
              <Button
                href={"/link"}
                p={{ px: 0, py: 0 }}
                color="text-selection"
                size="small"
                variant="tertiary"
                fontSize="body.mobile.xsmall"
                lineHeight="body.mobile.xsmall"
              >
                Privacy Policy
              </Button>
            </Flex>
          </Checkbox>
        </Flex>
      </form>
    );
  },
};
export const ValueChainCheckBox: Story = {
  render: () => {
    const onSubmit = (): void => {
      //
    };

    return (
      <form onSubmit={onSubmit}>
        <Flex m={{ mb: 16 }} md={{ m: { mb: 24 } }}>
          <Checkbox
            data-testid="registration-form-remember-password-checkbox"
            customCheckbox={({ isSelected }) => (
              <Flex
                justify={"center"}
                align={"center"}
                bg={isSelected ? "surface-primary-default" : undefined}
                minWidth={22}
                minHeight={22}
                border={{
                  color: isSelected
                    ? "surface-primary-default"
                    : "border-button",
                  width: "2px",
                  radius: "checkbox",
                }}
              >
                {isSelected && <CheckboxIcon />}
              </Flex>
            )}
            errorMessage={
              <Typography
                m={{ mt: 8 }}
                color="text-destructive"
                fontSize="body.mobile.small"
                lineHeight="body.mobile.small"
              >
                Please confirm that you have read the Terms and Conditions and
                Privacy Policy
              </Typography>
            }
          >
            <Flex flexWrap="wrap" whiteSpace="nowrap" gap={2} align="center">
              <Typography
                color="text-primary-muted"
                fontSize="body.mobile.small"
                lineHeight="body.mobile.small"
              >
                I am 18 years old and I accept the
              </Typography>
              <Button
                href={"/link"}
                p={{ px: 0, py: 0 }}
                size="small"
                variant="tertiary"
                color="text-selection"
                fontSize="body.mobile.small"
                lineHeight="body.mobile.small"
              >
                Terms and Conditions
              </Button>
              <Typography
                color="text-primary-muted"
                fontSize="body.mobile.small"
                lineHeight="body.mobile.small"
              >
                and
              </Typography>
              <Button
                href={"/link"}
                p={{ px: 0, py: 0 }}
                color="text-selection"
                size="small"
                variant="tertiary"
                fontSize="body.mobile.small"
                lineHeight="body.mobile.small"
              >
                Privacy Policy
              </Button>
            </Flex>
          </Checkbox>
        </Flex>
      </form>
    );
  },
};
export const CustomIconAndCheckbox: Story = {
  render: () => {
    const onSubmit = (): void => {
      //
    };

    return (
      <form onSubmit={onSubmit}>
        <Flex m={{ mb: 16 }} md={{ m: { mb: 24 } }}>
          <Checkbox
            data-testid="registration-form-remember-password-checkbox"
            customCheckbox={({ isSelected }) => (
              <Flex
                justify={"center"}
                align={"center"}
                bg={isSelected ? "orange" : "green"}
                minWidth={28}
                minHeight={28}
                border={{
                  color: isSelected ? "yellow" : "border-button",
                  width: "2px",
                  radius: "checkbox",
                }}
              >
                {isSelected && <Eye />}
              </Flex>
            )}
            errorMessage={
              <Typography
                m={{ mt: 8 }}
                color="text-destructive"
                fontSize="body.mobile.small"
                lineHeight="body.mobile.small"
              >
                Please confirm that you have read the Terms and Conditions and
                Privacy Policy
              </Typography>
            }
          >
            <Flex flexWrap="wrap" whiteSpace="nowrap" gap={2} align="center">
              <Typography
                color="text-primary-muted"
                fontSize="body.mobile.small"
                lineHeight="body.mobile.small"
              >
                I am 18 years old and I accept the
              </Typography>
            </Flex>
          </Checkbox>
        </Flex>
      </form>
    );
  },
};

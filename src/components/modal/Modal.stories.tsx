import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Modal,
  TextField,
  Typography,
} from "~/components";
import { Close } from "~/icons";

import ModalTrigger from "./ModalTrigger";

const meta: Meta<typeof ModalTrigger> = {
  title: "UI-Kit components/Modal",
  component: ModalTrigger,
  parameters: {
    docs: {
      description: {
        component: `Компонент ModalTrigger является кнопкой, которая открывает модалку при клике. 
Внешний вид и поведение модалки настраиваются через пропсы, такие как isDismissable (для закрытия модалки по клику вне ее) и другие. 
Этот компонент реализует доступный способ отображения модальных окон с использованием библиотеки @react-aria.`,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Текст, отображаемый на кнопке, которая открывает модалку.",
    },
    isDismissable: {
      control: "boolean",
      description:
        "Позволяет ли модалке быть закрытой по клику вне ее или по нажатию на клавишу Escape.",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof ModalTrigger> = {
  render: () => (
    <ModalTrigger label="Open default Modal" isDismissable>
      {(close) => (
        <div className="p-4">
          <h2>Default Modal</h2>
          <p>This is a basic modal with simple text content.</p>
          <button
            onClick={close}
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Close Modal
          </button>
        </div>
      )}
    </ModalTrigger>
  ),
};

export const FormModal: StoryObj<typeof ModalTrigger> = {
  render: () => (
    <ModalTrigger
      label="Open Form Modal"
      isDismissable
      closeButtonSlot={(close) => (
        <Button
          onPress={close}
          autoFocus
          variant="default"
          bg={"background-accent1"}
          border={{ width: "2" }}
          position={{
            type: "absolute",
            top: 20,
            right: 20,
          }}
          md={{ position: { top: 36, right: 40 } }}
        >
          <Close viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8" />
        </Button>
      )}
    >
      {(close) => (
        <form className="flex flex-col">
          <label htmlFor="first-name" className="mb-2">
            First Name:
          </label>
          <input
            id="first-name"
            placeholder="John"
            className="p-2 border border-gray-300 rounded-md"
          />
          <label htmlFor="last-name" className="mt-4 mb-2">
            Last Name:
          </label>
          <input
            id="last-name"
            placeholder="Doe"
            className="p-2 border border-gray-300 rounded-md"
          />
          <Button className="mt-4" onPress={close}>
            Submit
          </Button>
        </form>
      )}
    </ModalTrigger>
  ),
};

export const NonDismissibleModal: StoryObj<typeof ModalTrigger> = {
  render: () => (
    <ModalTrigger label="Non-Dismissable Modal">
      {(close) => (
        <div className="p-4">
          <h2>Non-Dismissible Modal</h2>
          <p>
            This modal cannot be closed by clicking outside or pressing the
            Escape key.
          </p>
          <button
            onClick={close}
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Close Modal
          </button>
        </div>
      )}
    </ModalTrigger>
  ),
};
export const ValueChain: StoryObj<typeof ModalTrigger> = {
  render: () => (
    <Modal
      state={{
        isOpen: true,
        open() {},
        close() {},
        setOpen() {},
        toggle() {},
      }}
      p={{ pt: 12, pb: 16, pr: 16, pl: 16 }}
      md={{ p: { pt: 36 } }}
    >
      <Flex align="center" flexDirection="column" p={{ px: 8 }}>
        <Card
          border={{ radius: "0px" }}
          p={{ px: 16 }}
          variant="default"
          bg={"orange"}
          minWidth={312}
          maxWidth={768}
          width="100vw"
          height="100vh"
          md={{ maxHeight: 644, maxWidth: 360 }}
          data-testid="registration-form"
          display={"block"}
        >
          <form onSubmit={() => {}} autoComplete="off">
            <Flex
              justify="space-between"
              align="center"
              p={{ py: 12 }}
              maxHeight={56}
            >
              <Box as="p"></Box>
              <Typography
                as="p"
                m={{ mb: 0 }}
                fontSize="title.mobile.xsmall"
                lineHeight="title.mobile.xsmall"
                fontWeight="mobile.bold"
                horizontalAlign="center"
                data-testid="registration-form-title"
              >
                {"Sign Up"}
              </Typography>

              <Flex
                justify="center"
                align="center"
                height={32}
                width={32}
                cursor={"pointer"}
                p={8}
                border={{
                  radius: "8px",
                  width: "1px",
                  color: "border-subtle",
                }}
              >
                X
              </Flex>
            </Flex>

            <TextField
              bg={"surface-neutral-dark-default"}
              label={"Email"}
              data-testid="registration-form-email-input"
              m={{ mb: 8 }}
            />

            <TextField
              bg={"surface-neutral-dark-default"}
              label={"Email"}
              data-testid="registration-form-email-input"
              m={{ mb: 8 }}
            />
            <TextField
              bg={"surface-neutral-dark-default"}
              label={"Email"}
              data-testid="registration-form-email-input"
              m={{ mb: 8 }}
            />

            <Flex m={{ mb: 16 }} md={{ m: { mb: 24 } }}>
              <Checkbox
                aria-label="label"
                data-testid="registration-form-remember-password-checkbox"
              >
                <Flex
                  flexWrap="wrap"
                  whiteSpace="nowrap"
                  gap={2}
                  align="center"
                >
                  <Typography
                    color="text-primary-muted"
                    fontSize="body.mobile.xsmall"
                    lineHeight="body.mobile.xsmall"
                  >
                    "I am 18 years old and I accept the"
                  </Typography>

                  <Button
                    href={""}
                    p={{ px: 0, py: 0 }}
                    color="text-selection"
                    size="small"
                    variant="tertiary"
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
                    href={""}
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

            <Button
              type="submit"
              size="small"
              weight="bold"
              md={{
                fontSize: "button.desktop.medium",
              }}
              p={{ py: 12 }}
              width="100%"
              maxHeight="none"
              minHeight="none"
              height="fit-content"
              data-testid="registration-form-submit-button"
            >
              SIGN UP
            </Button>
          </form>
          <Flex gap={8} m={{ mt: 16 }} justify={"center"}>
            <Typography
              fontSize="body.mobile.xsmall"
              lineHeight="body.mobile.xsmall"
            >
              {"Have an account?"}
            </Typography>

            <Typography
              fontSize="body.mobile.xsmall"
              lineHeight="body.mobile.xsmall"
              color={"text-selection"}
              className="cursor-pointer"
            >
              {"Log In"}
            </Typography>
          </Flex>
        </Card>
      </Flex>
    </Modal>
  ),
};

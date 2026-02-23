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

export const CustomTrigger: StoryObj = {
  render: () => (
    <ModalTrigger
      label=""
      customTrigger={<Button variant="primary">Custom trigger</Button>}
    >
      {(close) => (
        <Flex bg="white" width={200} flexDirection="column" p={10} gap={20}>
          Custom trigger modal
          <Button variant="accent" bg="yellow" onPress={close}>
            Close
          </Button>
        </Flex>
      )}
    </ModalTrigger>
  ),
};

export const ModalContentWrapperProps: StoryObj = {
  render: () => (
    <ModalTrigger
      label=""
      customTrigger={<Button variant="primary">Open modal</Button>}
      modalContentWrapperProps={{
        bg: "red",
        minHeight: "max-content",
      }}
    >
      {(close) => (
        <Flex bg="white" width={200} flexDirection="column" p={10} gap={20}>
          Modal content
          <Button variant="accent" bg="yellow" onPress={close}>
            Close
          </Button>
        </Flex>
      )}
    </ModalTrigger>
  ),
};

export const ModalWithCustomRoot: StoryObj = {
  render: () => (
    <ModalTrigger
      label=""
      customTrigger={
        <Button variant="primary">
          Should open modal inside "storybook-root"
        </Button>
      }
      modalContentWrapperProps={{
        bg: "red",
        minHeight: "max-content",
      }}
      portalContainer={document.getElementById("storybook-root") ?? undefined}
    >
      {(close) => (
        <Flex bg="white" width={200} flexDirection="column" p={10} gap={20}>
          Modal content
          <Button variant="accent" bg="yellow" onPress={close}>
            Close
          </Button>
        </Flex>
      )}
    </ModalTrigger>
  ),
};

export const ModalFix: StoryObj = {
  render: () => (
    <ModalTrigger
      label="Click"
      portalContainer={document.getElementById("storybook-root") ?? undefined}
      height="100%"
    >
      {(close) => (
        <Flex
          height="var(--app-height)"
          flexDirection="column"
          border={{ radius: "0" }}
          width="100%"
          md={{
            width: "660px",
            height: "760px",
            maxHeight: "96vh",
            border: { radius: "16px" },
          }}
          data-testid="promo-modal"
        >
          <Flex
            align="center"
            position={{ type: "relative" }}
            gap={15}
            p={{ pl: 16 }}
            md={{ p: { pl: 32 }, border: { radius: "16px" } }}
            border={{ radius: "0 0 16px 16px" }}
            style={{ flexShrink: 0 }}
            overflow="hidden"
          >
            <Flex flexDirection="column" gap={8} width="100%">
              <Typography
                fontWeight="mobile.bold"
                fontFamily="accent"
                data-testid="modal-title"
              >
                Title
              </Typography>
              <Flex flexDirection="column">Subtitle</Flex>
            </Flex>
            <Flex
              style={{ flexShrink: 0 }}
              m={{ ml: "auto" }}
              md={{ width: 238, height: 210 }}
              width={161}
              height={142}
            >
              <img
                src="https://placehold.co/600x400"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Flex>
            <Flex
              backdropBlur={12}
              position={{ type: "absolute", top: 6, right: 6 }}
              md={{ position: { top: 16, right: 16 } }}
              border={{ radius: "8px" }}
            >
              <Button
                p={10}
                variant="secondary"
                md={{ p: 14 }}
                onPress={close}
                data-testid="modal-close-button"
              >
                <Close width={20} height={20} />
              </Button>
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            gap={16}
            p={16}
            md={{
              gap: 24,
              p: 32,
            }}
            position={{ type: "relative" }}
            overflow="auto"
            style={{
              WebkitOverflowScrolling: "touch",
              flex: "1 1 auto",
            }}
          >
            <Flex flexDirection="column" gap={16}>
              <Typography
                fontWeight="mobile.bold"
                fontFamily="accent"
                data-testid="modal-description-title"
                style={{ wordBreak: "break-word" }}
                whiteSpace="pre-wrap"
              >
                Description Title lorem Description Title lorem Description
                Title lorem Description Title loremDescription Title lorem
                Description Title lorem Description Title lorem Description
                Title lorem Description Title lorem Description Title lorem
                Description Title lorem Description Title lorem Description
                Title lorem
              </Typography>
              <Typography
                fontFamily="accent"
                fontSize="body.mobile.xsmall"
                lineHeight="body.mobile.xsmall"
                md={{
                  fontSize: "body.desktop.medium",
                  lineHeight: "body.desktop.medium",
                }}
                data-testid="modal-description"
                style={{ wordBreak: "break-word" }}
                whiteSpace="pre-wrap"
              >
                Title lorem Description Title lorem Description Title lorem
                Description Title lorem Description Title lorem Description
                Title lorem
              </Typography>
            </Flex>
            <Flex flexDirection="column" gap={16}>
              <Typography
                fontWeight="mobile.bold"
                fontFamily="accent"
                fontSize="title.mobile.xsmall"
                lineHeight="title.mobile.xsmall"
                data-testid="modal-terms-title"
              >
                Terms
              </Typography>
              {[
                "Term 1",
                "Term 2",
                "Term 3",
                "Term 4",
                "Term 5",
                "Term 6",
                "Term 7",
                "Term 8",
                "Term 9",
                "Term 10",
              ].map((el, i) => (
                <Flex key={i} align="start" gap={12}>
                  <Flex
                    align="center"
                    justify="center"
                    bg="surface-neutral-default"
                    border={{ radius: "50%" }}
                    width={24}
                    height={24}
                    style={{ flexShrink: 0 }}
                    data-testid={`modal-term-${i}`}
                  >
                    <Typography
                      color="text-primary-default"
                      fontWeight="mobile.bold"
                      fontFamily="accent"
                      fontSize="body.mobile.xsmall"
                      lineHeight="body.mobile.xsmall"
                    >
                      {i + 1}
                    </Typography>
                  </Flex>
                  <Typography
                    color="text-primary-muted"
                    fontFamily="accent"
                    md={{
                      fontSize: "body.desktop.medium",
                      lineHeight: "body.desktop.medium",
                    }}
                    fontSize="body.mobile.xsmall"
                    lineHeight="body.mobile.xsmall"
                    data-testid={`modal-term-${i}`}
                    style={{ wordBreak: "break-word" }}
                    whiteSpace="pre-wrap"
                  >
                    {el}
                  </Typography>
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex
            p={16}
            bg="background-popups2"
            width="100%"
            border={{ radius: "16px 16px 0 0" }}
            md={{ border: { radius: "16px" } }}
            style={{ flexShrink: 0 }}
          >
            <Button
              bg="surface-accent-button-default"
              border={{ radius: "8px" }}
              width="100%"
              p={{ px: 20, py: 14 }}
              onPress={close}
              data-testid="modal-action-button"
            >
              <Typography
                color="text-primary-inverted"
                fontWeight="mobile.bold"
                fontFamily="accent"
                fontSize="body.mobile.xsmall"
                lineHeight="body.mobile.xsmall"
                md={{
                  fontSize: "body.desktop.medium",
                  lineHeight: "body.desktop.medium",
                }}
              >
                Register
              </Typography>
            </Button>
          </Flex>
        </Flex>
      )}
    </ModalTrigger>
  ),
};
